import React from 'react';
import Home from './components/Home';
import UsersLists, { loadData } from './components/UserLists';

export default [
	{
		path: '/',
		component: Home,
		exact: true
	},
	{
		loadData,
		path: '/users',
		component: UsersLists
	}
];
