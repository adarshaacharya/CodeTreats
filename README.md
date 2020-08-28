# Code Treats

One platform for running, saving and sharing code snippets.

## ⭐ Features

-   Code Editor with VS Code like interactive environment with features like auto-completion
-   Supports three languages
-   15+ Themes Support
-   Save snippets pubicilty with shareable link
-   Search snippets with title

## 📺 Prerequisites

Before running app locally make sure that you install following things:

-   Nodejs with npm or yarn installed

-   [Mongodb](https://www.mongodb.com/) as database.

-   Strongly recommended to use [Robot 3T](https://robomongo.org/) as MongoDB GUI for local database setup or simply use use [MongoDB Atlas](https://docs.atlas.mongodb.com/getting-started/) as paste token in `DATABASE_URI`

## 🚀 Local Development

#### Step 1: Clone the repo:

```bash
http://github.com/
```

#### Step 2: Install dependencies

Install both client and server dependencies

```bash

# Install dependencies for server
$ npm install

# Install dependencies for client
$ npm run client:install

```

#### Step 3: Configuration

1. Create `.env` file in project root dir

    ```bash
    $ touch .env
    ```

2. Copy everything from `.env.example` as paste it in `.env`

3. Go to [Glot signup page](https://glot.io/auth/page/simple/register) and create new account.

4. Then [go to this page](https://glot.io/account/token) and copy & paste token in `GLOT_TOKEN = <YOUR_TOKEN_HERE>` in `.env` file.

#### Step 4: Usage

Now you can run the application by :

```bash

# Run the client & server with concurrently (for running full application)
$ npm run dev

# Run the Express server only
$ npm run server

# Run the React client only
$ npm run client

# Server runs on http://localhost:5000 and client on http://localhost:3000

```

## ⛵ Production Deployment

There is a Heroku post build script so that you do not have to compile your React frontend manually, it is done on the server. Simply push to Heroku and it will build and load the client index.html page

## 🤝 Contributing

Contributions, issues and feature requests are welcome. After cloning & setting up project locally, you can just submit a PR to this repo and it will be deployed once it's accepted.

**⚠️ Note - Commit & PR Title :**

It’s good to have descriptive commit messages so that other folks can make sense of what your commit is doing.
This project uses [Husky](https://github.com/typicode/husky/blob/master/README.md) prevent bad `git commit`, `git push` and more 🐶 \_woof!

Read [conventional commits](https://www.conventionalcommits.org/en/v1.0.0-beta.3/) before making the commit message.

## 👏🏻 Show your support

Give a ⭐️ if you like the project!

## 👤 Author

-   Website: https://adarshaacharya.com.np/
-   Twitter: [@adarshatweets](https://twitter.com/adarshatweets)
-   Github: [@adarshaacharya](https://github.com/adarshaacharya)
-   LinkedIn: [@adarshaacharya](https://linkedin.com/in/adarshaacharya)

## 📝 License

Copyright © 2020 [Aadarsha Acharya](https://github.com/adarshaacharya).<br />
This project is [MIT](https://github.com/adarshaacharya/adarshaacharya.com.np/blob/master/LICENSE) licensed.
