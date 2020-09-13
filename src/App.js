import React, { Component, useState } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import AdminLayout from 'layouts/Admin.jsx';
import Login from 'views/Login';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { connect } from 'react-redux';

class App extends Component {
	// const [ isLoggedIn, setIsLoggedIn ] = useState(false);
	constructor(props) {
		super(props);
		this.state = {
			isLoggedIn: false
		};
	}

	componentWillMount() {
		const token = sessionStorage.getItem('token');
		console.log(token);
		if (token != 'null') {
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
