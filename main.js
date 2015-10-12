import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import App from './containers/App';
import combinedReducers from './reducers';

let store = createStore(combinedReducers);

const contentEl = document.getElementById('content');
ReactDOM.render(<Provider store={store}><App /></Provider>, contentEl);

