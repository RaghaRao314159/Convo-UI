import { ApiModel, CustomPrompt } from 'app/pages/Chat/slice/types';
import { Message } from 'utils/types/injector-typings';
import { characterPrompts } from './characters';
import { RemoteRunnable } from "@langchain/core/runnables/remote";


const chat_chain = new RemoteRunnable({
  url: `http://localhost:8000/chat`,
});

const rag_chain = new RemoteRunnable({
  url: `http://localhost:8000/rag`,
});

const all_agent_chain = new RemoteRunnable({
  url: `http://localhost:8000/all_agent`,
});

const guardrail_inappropriate_chain = new RemoteRunnable({
  url: `http://localhost:8000/inappropriate`,
});

const guardrail_irrelevant_chain = new RemoteRunnable({
  url: `http://localhost:8000/irrelevant`,
});


// Make an API Call to check if the key is valid on OpenAI
export const checkOpenAiKeyValid = (key: string, model: string) =>
  fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${key}`,
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      model: model || 'gpt-3.5-turbo',
      messages: [{ role: 'user', content: 'hello' }],
    }),
  });

const fetchMessage = (key: string, messages: Message[], model: ApiModel, api_endpoint: string) => {
  return fetch(api_endpoint, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${key}`,
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      stream: true,
      model: model || 'gpt-3.5-turbo',
      messages: messages,
    }),
  });
};

export const sendMessage = async function* (
  key: string,
  messages: Message[],
  mood: number,
  characterSelected: string,
  model: ApiModel,
  customPrompt: CustomPrompt,
) {
  let copy = [...messages];

  // Add assistant support
  copy = [
    {
      role: 'system',
      content: "You are a helpful assistant.",
    },
    ...copy,
  ];

  //Langserve
  // guardrails
  /*
  let response;
  if (characterSelected === "Default AI") {
    response = await chat_chain.stream(copy);
  }
  else {
    const inappropriate = await guardrail_inappropriate_chain.invoke(copy);

    if (inappropriate) {
      console.log("I'm sorry, I can't respond to that.");
      yield {"answer": "I'm sorry, I can't respond to that."};
      yield {"answer": "DONE"};
      return;
    }

    const irrelevant = await guardrail_irrelevant_chain.invoke(copy);
    if (irrelevant) {
      console.log("This question is irrelevant. Please ask something related to the audit reports.");
      yield {"answer": "This question is irrelevant. Please ask something related to the audit reports."};
      yield {"answer": "DONE"};
      return;
    }
    // agency
    const decisions = await all_agent_chain.invoke(copy);
    console.log("all_agent:", decisions );

    // use agent to check if RAG is needed
    // const check = await agent_chain.invoke(copy);
    // @ts-ignore
    const check = (decisions["Is information retrieval from corpus needed?"] === "YES");
    console.log("need rag:", check);

    // Call different langchains for nirmal convos or RAGs
    if (!check) {
      response = await chat_chain.stream(copy);
    } 
    else {
      // @ts-ignore
      // let question = copy.at(-1)["content"];
      const question = decisions["question"];
      // response = await rag_chain.stream(copy);
      console.log(question);
      response = await rag_chain.stream(question);
    }
  }
  // loop until the streaming stops
  while (true) {

    // return a JSON object to frontend  
    let parsedData = {"answer": ""};

    // idx keeps track of streaming index. 
    let idx = 0;

    // async for loop as response is a generator
    for await (const line of response) {
      // try get a streamed response or throw error
      try {
        // This is to prevent the streaming from stopping when the first message 
        // is empty.
        // @ts-ignore
        if (line.length === 0 && idx > 0) {

          // stream has ended
          parsedData.answer = "DONE";
          yield parsedData;
          break;
        }
        else {

          // capture the stream text and send it over to textbox for UI display
          parsedData.answer = String(line);
          yield parsedData;
        }
        idx += 1;
      } 
      catch (e) {
        console.error("Failed to obtain stream:", e);
      }
    }
  }
  */
  

  // Using Flask Server
  /*
  const flask_endpoint = 'http://127.0.0.1:5000';
  const response = await fetchMessage(key, copy, model, flask_endpoint);

  const reader = response.body!.getReader();
  const decoder = new TextDecoder();

  while (true) {
    const { value, done } = await reader.read();
    if (done) break;

    // Decode the chunk of data received
    const chunk = decoder.decode(value, { stream: true });
  
    // Parse the SSE format data

    let parsedData = {"answer": ""};
    const lines = chunk.split('\n');
    for (const line of lines) {
        if (line.startsWith('data: ')) {
            const jsonString = line.substring(6);
            try {

                parsedData = JSON.parse(jsonString);
                if (parsedData.answer === 'DONE') {
                  yield parsedData;
                  break;
                }
                yield parsedData;
            } catch (e) {
                console.error("Failed to parse JSON:", e);
            }
        }
    }
  }
  */

  // direct API Call
  const openai_endpoint = 'https://api.openai.com/v1/chat/completions';
  const response = await fetchMessage(key, copy, model, openai_endpoint);

  const reader = response.body!.getReader();
  const decoder = new TextDecoder();

  let parsedData = {"answer": ""};

  while (true) {
    const { done, value } = await reader.read();
    if (done) {
      break;
    }
    const dataLines = decoder
      .decode(value, { stream: true })
      .split('\n')
      .filter(line => line.length > 0)
      .map(line => line.slice(6));

    for (const dataLine of dataLines) {
      if (dataLine === '[DONE]') {
        parsedData.answer = 'DONE';
        yield parsedData;
        break;
      }
      
      parsedData.answer = JSON.parse(dataLine).choices[0].delta.content ?? '';
      yield parsedData;
    }
  }
};



export const generateImage = (
  key: string,
  prompt: string,
  n: number = 1,
  size: string = '1024x1024',
  response_format: string = 'url',
) => {
  return fetch('https://api.openai.com/v1/images/generations', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${key}`,
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
      referrer: 'https://turbogpt.ai/',
    },
    body: JSON.stringify({
      prompt: prompt,
      n: n,
      size: size,
      response_format: response_format,
    }),
  });
};
