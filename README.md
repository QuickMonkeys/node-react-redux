# node-react

## A simple example to demonstrate the functionality of react.js and redux.

The data is representing by a json file to be used by the components.

The transpiler used to generate javascript is Babel.

Webpack is used to create the javascript bundle of the project (see webpack.config.js and webpack.config.prod.js).

Foreman is used to start two services: 
```
    - Webpack, that's responsible for watch changes and recompile code 
    - Node, that's responsible to run the web server (see config file server.js).
```

To get the code:

`git clone https://github.com/QuickMonkeys/node-react-redux.git`

`cd node-react-redux`

run `npm i` to install node_modules

run `nf start` to start the application using Foreman.

You can see a live [Demo](https://node-react-redux-quick.herokuapp.com/) here.
