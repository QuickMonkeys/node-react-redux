import React from 'react';
import {render} from 'react-dom';

import "../css/main.css";
import "bootstrap-webpack";

import App from './containers/app.jsx';

render(<App />, document.querySelector('#content'));