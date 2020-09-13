import { login } from '../api';
import React, { Component, useEffect, useState } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
const Login = () => {
	const [ selected, setSelected ] = useState({
		username: '',
		password: ''
	});

	const handleChange = (key, val) => {
		setSelected({ ...selected, [key]: val });
	};

	const handleLogin = () => {
		console.log(selected);
		login(selected)
			.then((res) => {
				sessionStorage.setItem('token', res.data.token);
				// showLoading();
				console.log(res.data);
			})
			.catch((err) => {
				throw err;
			});
	};

	useEffect(() => {}, [ handleLogin ]);

	return (
		<div>
			{/* <div class="bg-img" /> */}
			<div class="login-wrap">
				<div class="login-html">
					<input id="tab-1" type="radio" name="tab" class="sign-in" checked />
					<label for="tab-1" class="tab">
						Sign In
					</label>
					<input id="tab-2" type="radio" name="tab" class="sign-up" />
					<label for="tab-2" class="tab">
						{/* Sign Up */}
					</label>
					<div class="login-form">
						<div class="sign-in-htm">
							<div class="group">
								<label for="user" class="label">
									Username
								</label>
								<input
									id="user"
									type="text"
									class="input"
									onChange={(e) => handleChange('username', e.target.value)}
								/>
							</div>
							<div class="group">
								<label for="pass" class="label">
									Password
								</label>
								<input
									id="pass"
									type="password"
									class="input"
									data-type="password"
									onChange={(e) => handleChange('password', e.target.value)}
								/>
							</div>
							<div class="group">
								<input id="check" type="checkbox" class="check" checked />
								<label for="check">
									<span class="icon" /> Keep me Signed in
								</label>
							</div>
							<div class="group">
								<input type="submit" class="button" value="Sign In" onClick={handleLogin} />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
// const mapDispatchToProps = { login };
// const mapDispatchToProps = (dispatch) => {
// 	return {
// 		login: () => dispatch(login())
// 	};
// };
export default Login;
