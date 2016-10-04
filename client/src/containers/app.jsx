import React from 'react';
import { createStore } from 'redux'
import { Provider } from 'react-redux';

import languageReducer from '../reducers/reducer.js';

import PieChartContainer from './pie.js'
import BarChartContainer from './bar.js'
import SearchContainer from './search.js'
import ListContainer from './list.js';

// The store is created to be used by all react components.
const store = createStore(languageReducer);

const Dashboard = () => <div className="card card-container">
                            <SearchContainer />
                            <ListContainer />
                            <div className="row">
                                <PieChartContainer />
                                <BarChartContainer />
                            </div>
                        </div>

export default () => <Provider store={store}><Dashboard /></Provider>;