# Custom Chatbot UI 

[![Contributors][contributors-shield]][contributors-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]

## Introduction

This is a custom Chatbot UI that has been modified from [TurboGPT](https://github.com/mikebpech/turbogpt.ai) in order to accomodate RAG applications. 

[![Product Name Screen Shot][product-screenshot]](https://convo-ui.vercel.app)

## Table of Contents

1. [Purpose](#purpose)
2. [More resources](#more-resources-on-building-chatbots)
3. [Built With](#built-with)
4. [Installation](#installation)
5. [Usage](#usage)
6. [Docker](#docker)
7. [API Calls](#api-calls)
8. [Textboxes](#displaying-conversation)


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

### New features I added:

4. **Markdown Table Parsing and Display:**  
   Many existing chatbot UI templates struggle with cleanly rendering markdown tables, including TurboGPT. My version resolves this, ensuring tables display as neatly as they do in OpenAI's UI.

5. **Custom Backend Model Integration:**  
   Most chatbot UIs lack the ability to interact with custom backend models, as these typically require different object classes for communication compared to standard API calls. My template includes examples for calling backend models using Flask and Langserve. You can test this by selecting a backend model. Click to visit the [Backend Repo](https://github.com/RaghaRao314159/Convo-UI_backend). 

6. **Streaming Chatbot Outputs:**  
   While streaming outputs is straightforward with foundation models, it becomes complex when dealing with backend servers. After extensive testing, I successfully implemented streaming capabilities for backend models in this template. Unfortunately, pythonanywhere voids this and my backend is currently on pythonanywhere. I will move it to another server in due time.

I hope this template helps you accelerate the development of your full-stack applications.

## More resources on building chatbots
I have thoroughly explored various approaches to building a fully custom Retrieval-Augmented Generation (RAG) LLM chatbot, and the results of my work can be found in my [RAG repository](https://github.com/RaghaRao314159/AuditBot_backend). Unlike many other online resources, this repository offers a complete full-stack solution for developing a RAG chatbot.

### For Frontend Developers:
I have included multiple UI options, from simple mockups to production-grade interfaces, along with the necessary code to integrate the frontend with the backend. The chat interface is a React application, similar to this one, utilizing LangServe. You can find the frontend code in the [AuditBot repository](https://github.com/RaghaRao314159/AuditBot_frontend).

### For Machine Learning Engineers:
I have conducted extensive experiments to improve the RAG framework, covering techniques such as HyDE, recursive retrieval, and others. Additionally, the repository provides implementations of frameworks like Langchain and LlamaIndex. It also includes setups for data stores, examples of prompt engineering with GuardRails, and much more.

## Built With

* [![React][React]][React-url]
* [![OpenAi][OpenAi]][OpenAi-url]
* [![LangChain][LangChain]][LangChain-url]

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

This will start the project in your terminal. Simply enter your API key on the frontend where prompted and then use it as normal.

## Docker

This chatbot's server can be instantiated in Docker. The server will automatically restart with Docker. 

```bash
docker-compose up -d --build
```

## API Calls

API calls are done in ["src/app/api/openai.ts"](src/app/api/openai.ts)

## Displaying Conversation

Text boxes are created and updated in ["src/app/pages/Chat/Textbox.tsx"](src/app/pages/Chat/Textbox.tsx)


[contributors-shield]: https://img.shields.io/github/contributors/RaghaRao314159/Convo-UI.svg?style=for-the-badge
[contributors-url]: https://github.com/RaghaRao314159/Convo-UI/graphs/contributors
[stars-shield]: https://img.shields.io/github/stars/RaghaRao314159/Convo-UI.svg?style=for-the-badge
[stars-url]: https://github.com/RaghaRao314159/Convo-UI/stargazers
[issues-shield]: https://img.shields.io/github/issues/RaghaRao314159/Convo-UI.svg?style=for-the-badge
[issues-url]: https://github.com/RaghaRao314159/Convo-UI/issues

[LangChain]: https://img.shields.io/badge/LangChain-1C3C3C?style=for-the-badge&logo=langchain&logoColor=ffffff
[LangChain-url]: https://www.langchain.com
[OpenAi]: https://img.shields.io/badge/OpenAi-412991?style=for-the-badge&logo=openai&logoColor=ffffff
[OpenAi-url]: https://openai.com
[React]: https://img.shields.io/badge/react_native-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB
[React-url]: https://react.dev

[product-screenshot]: public/screenshot_dark.png