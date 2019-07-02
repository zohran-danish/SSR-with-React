import React from 'react';
import HomePage from './pages/HomePage';
import UsersListsPage from './pages/UserListsPage';
import App from './App';

export default [
	{
		...App,
		routes: [
			{
				...HomePage,
				path: '/',
				exact: true
			},
			{
				...UsersListsPage,
				path: '/users',
			}
		]
	}
];


