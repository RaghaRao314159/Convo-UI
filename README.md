# Custom Chatbot UI 

This is a custom Chatbot UI that has been modified from [TurboGPT](https://github.com/mikebpech/turbogpt.ai) in order to accomodate RAG applications. 

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
