import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';

import reducers from './reducers/songs-reducer'; //this is reducers
import App from './app';


ReactDOM.render(
	<Provider store={createStore(reducers)}><App /></Provider>, 
	document.getElementById('root')
);