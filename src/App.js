import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import AdminLayout from 'layouts/Admin.jsx';
import Login from 'views/Login';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isLoggedIn: false
		};
	}

	componentWillMount() {
		const token = sessionStorage.getItem('token');
		if (token != null) {
			this.setState({ isLoggedIn: true });
		} else {
			this.setState({ isLoggedIn: false });
		}
	}

	render() {
		return (
			<Switch>
				<Route path="/admin" render={(props) => <AdminLayout {...props} />} />
				<Route path="/login" component={Login} />
				{/* <Route path="/login" component={Login} /> */}

				{this.state.isLoggedIn ? <Redirect to="/admin/dashboard" /> : <Redirect to="/login" />}
			</Switch>
		);
	}
}

export default App;
