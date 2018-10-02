import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
//render(描繪,執行) <App> 在(root位置))
//方法render (component)