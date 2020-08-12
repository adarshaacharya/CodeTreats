# Javascript Runner

Browser based VSCODE like code editor.

⚡ Run Code :

```sh
    npm run dev
```

Format code before commit : (it will format both client and server code)

```sh
    npm run format
```

Sample Input :

```json
{
    "language": "javascript",
    "sourceCode": "console.log('hellow wolrd')"
}
```

Sample Output :

```json
{
    "stdout": "hellow wolrd\n",
    "stderr": "",
    "error": ""
}
```





### Usage

  

```bash

# Run the client & server with concurrently
$ npm run dev

# Run the Express server only
$ npm run server

# Run the React client only
$ npm run client

# Server runs on http://localhost:5000 and client on http://localhost:3000

```

  

## Production Deployment

There is a Heroku post build script so that you do not have to compile your React frontend manually, it is done on the server. Simply push to Heroku and it will build and load the client index.html page