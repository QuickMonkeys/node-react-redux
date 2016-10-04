import React from 'react';
import { createStore } from 'redux'
import { Provider } from 'react-redux';

import languageReducer from '../reducers/reducer.js';

import PieChartContainer from './pie.js'
import BarChartContainer from './bar.js'

import SearchContainer from './search.js'

import ListContainer from './list.js';

const store = createStore(languageReducer);

window.store = store;

const Dash = () =>  <div className="card card-container">
                        <SearchContainer />
                        <ListContainer />
                        <div className="row">
                            <PieChartContainer />
                            <BarChartContainer />
                        </div>
                    </div>

const App = () => <Provider store={store}>
                    <Dash />
                  </Provider>;

export default App;