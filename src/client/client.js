// start up point for client side application
import 'babel-polyfill';
import React from 'react';
import ReactDom from 'react-dom';
import Routes from './Routes';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import reducers from './reducers';
import { renderRoutes } from 'react-router-config';

const store = createStore(reducers, {}, applyMiddleware(thunk));

ReactDom.hydrate(
	<Provider store={store}>
		<BrowserRouter>
			<div>{renderRoutes(Routes)}</div>
		</BrowserRouter>
	</Provider>,
	document.querySelector('#root')
);
