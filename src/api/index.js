import axios from 'axios';

export const RECEIVE_USERS = 'GET_USERS';
export const RECEIVE_PROVIDERS = 'GET_PROVIDERS';
export const RECEIVE_ASSETS = 'GET_ASSETS';
export const RECEIVE_REVIEWS = 'GET_REVIEWS';
export const RECEIVE_NOT_APPROVED = 'GET_NOT_APPROVED';
export const LOGIN = 'LOGIN';

export const getUsers = () => {
	return (dispatch) => {
		return axios
			.get('/accountmanagement/allusers')
			.then((response) => {
				// console.log('actions', response.data.response);
				dispatch({ type: RECEIVE_USERS, payload: response.data.response });
			})
			.catch((error) => {
				throw error;
			});
	};
};

export const getProviders = () => {
	return (dispatch) => {
		return axios
			.get('/accountmanagement/allproviders')
			.then((response) => {
				// console.log('actions', response.data.response);
				dispatch({ type: RECEIVE_PROVIDERS, payload: response.data.response });
			})
			.catch((error) => {
				throw error;
			});
	};
};

export const getAssets = () => {
	return (dispatch) => {
		return axios
			.get('/accountmanagement/allassets')
			.then((response) => {
				// console.log('actions', response.data.response);
				dispatch({ type: RECEIVE_ASSETS, payload: response.data.response });
			})
			.catch((error) => {
				throw error;
			});
	};
};

export const getAssetsNotApproved = () => {
	return (dispatch) => {
		return axios
			.get('/accountmanagement/allassetsnotapproved')
			.then((response) => {
				// console.log('actions', response.data.response);
				dispatch({ type: RECEIVE_ASSETS, payload: response.data.response });
			})
			.catch((error) => {
				throw error;
			});
	};
};

export const getReviews = () => {
	return (dispatch) => {
		return axios
			.get('/accountmanagement/allreviews')
			.then((response) => {
				// console.log('actions', response.data.response);
				dispatch({ type: RECEIVE_REVIEWS, payload: response.data.response });
			})
			.catch((error) => {
				throw error;
			});
	};
};

// export const login = (data) => {
// 	return (dispatch) => {
// 		return axios
// 			.get('/auth/login', data)
// 			.then((response) => {
// 				if (response.status == 200) {
// 					console.log(response.status);
// 					dispatch({ type: LOGIN, payload: response.data });
// 				}
// 			})
// 			.catch((error) => {
// 				throw error;
// 			});
// 	};
// };

export const login = async function(user) {
	const response = await axios.post('/auth/login', user);
	return response;
};
