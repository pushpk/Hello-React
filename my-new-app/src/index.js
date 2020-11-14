import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import * as serviceWorker from './serviceWorker';

const App = () => {
    return (
      <div>
       <label class="label" for="firstname">First name: </label>
         <input type="text" id="firstname" />
         <button type="button" style={{backgroundColor : 'blue', color : 'white'}} > Click me</button>
      </div>
      );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
