import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import './index.css';
import App from './App';
import store from './store';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
, document.getElementById('root'));
registerServiceWorker();

//const fetchDog1 = () => {
//    return fetch('https://dog.ceo/api/breeds/image/random')
//        .then(res => console.log(res.json()))
//        .then(res => conl)
//};

async function fetchAsync() {
    // await response of fetch call
    let response = await fetch('https://dog.ceo/api/breeds/image/random');
    // only proceed once promise is resolved
    let data = await response.json();
    // only proceed once second promise is resolved
    return data;
}
