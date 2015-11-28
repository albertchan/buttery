# Buttery


## Requirements

You need [Node.js](http://nodejs.org/) and [Postgresql](http://http://www.postgresql.org/) installed and running. If
you're running Mac OS X, it is highly recommended you install everything with [Homebrew](http://brew.sh/).


## Technology

On the server-side, Buttery is built with [hapi.js](https://hapijs.com/) framework. 
[Postgresql](http://http://www.postgresql.org/) was chosen as the data store.

The front-end is built with [React](http://facebook.github.io/react/). We're also using a totally vanilla 
[Flux](https://facebook.github.io/flux/) implementation. Client-side routing is done with 
[React Router](https://github.com/rackt/react-router). [Gulp](http://gulpjs.com/) is used for the build pipeline.


## Installation

Rename `.env.example` to `.env`.

Start your local postgresql server if you haven't already. Create a new database and save the database name in the 
`.env` file under the key `DATABASE_NAME`. Also modify the database credential details as needed in `.env`.

Install the `pg` module globally:

```bash
$ npm install pg -g
```
    
Then install the project's dependencies:

```bash
$ git clone git@github.com:jakechan/buttery
```

## Running the app

```bash
npm start
```

This will start the app using [`nodemon`](https://github.com/remy/nodemon). The script will watch for changes and 
will restart the app as needed.

Fire up your browser and point to http://localhost:8000/ and you will see the welcome page.
    
   