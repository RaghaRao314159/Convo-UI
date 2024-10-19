# Custom Chatbot UI 

This is a custom Chatbot UI that has been modified from [TurboGPT](https://github.com/mikebpech/turbogpt.ai) in order to accomodate RAG applications. 

## Purpose
Dear Developers,

I have created this repository to support your projects. Here's the background:

While working on a Retrieval-Augmented Generation (RAG) project, I found that no existing chat UI template offered all the features I needed. In response, I decided to build my own, incorporating those missing functionalities.

### Key features included in both ConvoUI and TurboGPT:

1. **Multiple Chats/Conversations Support:**  
   While Gradio is great, it only supports a single active conversation at a time. My template addresses this by storing multiple chats locally (via localStorage) and linking them to authentication keys.

2. **Authentication:**  
   The template integrates authentication using OpenAI API keys for security and access control.

3. **Dark and Light Mode:**  
   This feature can adapt to system settings or be manually toggled in the UI, providing flexibility in appearance.

## New features I added:

4. **Markdown Table Parsing and Display:**  
   Many existing chatbot UI templates struggle with cleanly rendering markdown tables, including TurboGPT. My version resolves this, ensuring tables display as neatly as they do in OpenAI's UI.

5. **Custom Backend Model Integration:**  
   Most chatbot UIs lack the ability to interact with custom backend models, as these typically require different object classes for communication compared to standard API calls. My template includes examples for calling backend models using Flask and Langserve. You can test this by selecting a backend model.

6. **Streaming Chatbot Outputs:**  
   While streaming outputs is straightforward with foundation models, it becomes complex when dealing with backend servers. After extensive testing, I successfully implemented streaming capabilities for backend models in this template. Unfortunately, pythonanywhere voids this and my backend is currently on pythonanywhere. I will move it to another server in due time.

I hope this template helps you accelerate the development of your full-stack applications.


## Installation

To install and run this chatbot, you need to use Yarn or Node package manager. Clone this repository and install the necessary packages by running the following command:

```bash
yarn install
```

or 

```bash
npm install
```

## Usage

To use the UI, simply run the following command:

```bash
yarn start
```

or 

```bash
npm start
```

This will start the project in your terminal. Simply enter your API key and then use it as normal.

## Docker

This chatbot's server can be instantiated in Docker. The server will automatically restart with Docker. 

```bash
docker-compose up -d --build
```

## API Calls

API calls are done in ["src/app/api/openai.ts"](src/app/api/openai.ts)
