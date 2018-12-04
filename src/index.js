import React from 'react';
import ReactDOM from 'react-dom';
import './style/index.css';
import './style/style.css'
import App from './components/App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.unregister();