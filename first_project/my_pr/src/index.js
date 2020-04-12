import React from "react";
import ReactDOM from 'react-dom';
import './index.css';
import store from './redux/redux-store'
import App from './App';

let rerendeEntireTree = (state) => {
    ReactDOM.render(<App
            appState={store.getState()}
            dispatch={store.dispatch.bind(store)}
        store={store}/>,
        document.getElementById('root'));
}

rerendeEntireTree(store.getState());

store.subscribe(rerendeEntireTree);