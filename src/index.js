import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import App from './App';
import reducers from './reducers';
import 'antd/dist/antd.css';

const middleware = applyMiddleware(thunk);
const store = createStore(reducers, middleware);

ReactDOM.render(<Provider store={store}>
    <App />
</Provider>, document.getElementById('root'));