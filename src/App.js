import React, { Component, useEffect, useState } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import AdminLayout from 'layouts/Admin.jsx';
import Login from 'views/Login';

const App = () => {
	return (
		<Switch>
			<Route path="/admin" render={(props) => <AdminLayout {...props} />} />
			<Route path="/login" component={Login} />
			<Redirect from="/" to="/login" />
		</Switch>
	);
};

export default App;
