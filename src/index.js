import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import 'bulma/css/bulma.css';
import './styles.scss';

//Reducers
import {featureReducer} from "./reducers";

import { createStore } from 'redux';
import { Provider } from 'react-redux';

export const store = createStore(featureReducer);

const rootElement = document.getElementById('root');
ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>, rootElement);
