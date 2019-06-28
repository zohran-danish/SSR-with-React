import 'babel-polyfill';
import express from 'express';
import renderer from './helpers/renderer';
import createStore from './helpers/createStore';
import Routes from './client/Routes';
import { matchRoutes } from 'react-router-config';

const app = express();

app.use(express.static('public'));

app.get('*', (req, res) => {
	const store = createStore();
	matchRoutes(Routes, req.path).map(({route}) => {
		return route.loadData ? route.loadData() : null;
	});
	res.send(renderer(req, store));
});

app.listen(3000, () => {
	console.log('listening on port 3000');
});
