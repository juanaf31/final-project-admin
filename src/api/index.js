import axios from 'axios';

export const RECEIVE_USERS = 'GET_USERS';
export const RECEIVE_PROVIDERS = 'GET_PROVIDERS';
export const RECEIVE_ASSETS = 'GET_ASSETS';
export const RECEIVE_REVIEWS = 'GET_REVIEWS';
export const RECEIVE_NOT_APPROVED = 'GET_NOT_APPROVED';
export const DELETE_USER = 'DELETE_USER';
export const DELETE_PROVIDER = 'DELETE_PROVIDER';
export const DELETE_ASSET = 'DELETE_ASSET';
export const DELETE_REVIEW = 'DELETE_REVIEW';
export const APPROVE = 'APPROVE';
export const LOGIN = 'LOGIN';
export const GET_REPORT = 'GET_REPORT';

export const getUsers = () => {
	let token = sessionStorage.getItem('token');
	return (dispatch) => {
		return axios
			.get('/accountmanagement/allusers', { headers: { Authorization: `Bearer ${token}` } })
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
	let token = sessionStorage.getItem('token');
	return (dispatch) => {
		return axios
			.get('/accountmanagement/allproviders', { headers: { Authorization: `Bearer ${token}` } })
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
	let token = sessionStorage.getItem('token');
	return (dispatch) => {
		return axios
			.get('/accountmanagement/allassets', { headers: { Authorization: `Bearer ${token}` } })
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
	let token = sessionStorage.getItem('token');
	return (dispatch) => {
		return axios
			.get('/accountmanagement/allreviews', { headers: { Authorization: `Bearer ${token}` } })
			.then((response) => {
				// console.log('actions', response.data.response);
				dispatch({ type: RECEIVE_REVIEWS, payload: response.data.response });
			})
			.catch((error) => {
				throw error;
			});
	};
};

export const getAssetsNotApproved = () => {
	let token = sessionStorage.getItem('token');
	return (dispatch) => {
		return axios
			.get('/accountmanagement/allassetsnotapproved', { headers: { Authorization: `Bearer ${token}` } })
			.then((response) => {
				// console.log('actions', response.data.response);
				dispatch({ type: RECEIVE_NOT_APPROVED, payload: response.data.response });
			})
			.catch((error) => {
				throw error;
			});
	};
};

export const approve = (id) => {
	let token = sessionStorage.getItem('token');
	console.log('masuk approve');
	return (dispatch) => {
		return axios
			.put(`/accountmanagement/approveasset/${id}`, { headers: { Authorization: `Bearer ${token}` } })
			.then((response) => {
				console.log(response);
				dispatch({ type: APPROVE, payload: response.data.response });
			})
			.catch((error) => {
				throw error;
			});
	};
};

export const deleteUser = (id) => {
	let token = sessionStorage.getItem('token');
	console.log('masuk');
	return (dispatch) => {
		return axios
			.put(`/accountmanagement/deleteuser/${id}`, { headers: { Authorization: `Bearer ${token}` } })
			.then((response) => {
				// console.log(response.data.response);
				dispatch({ type: DELETE_USER, payload: response.data.response });
			})
			.catch((error) => {
				throw error;
			});
	};
};

export const deleteProvider = (id) => {
	let token = sessionStorage.getItem('token');
	console.log('masuk');
	return (dispatch) => {
		return axios
			.put(`/accountmanagement/deleteprovider/${id}`, { headers: { Authorization: `Bearer ${token}` } })
			.then((response) => {
				// console.log(response.data.response);
				dispatch({ type: DELETE_PROVIDER, payload: response.data.response });
			})
			.catch((error) => {
				throw error;
			});
	};
};

export const deleteAsset = (id) => {
	let token = sessionStorage.getItem('token');
	console.log('masuk');
	return (dispatch) => {
		return axios
			.put(`/accountmanagement/deleteasset/${id}`, { headers: { Authorization: `Bearer ${token}` } })
			.then((response) => {
				// console.log(response.data.response);
				dispatch({ type: DELETE_ASSET, payload: response.data.response });
			})
			.catch((error) => {
				throw error;
			});
	};
};

export const deleteReview = (id) => {
	let token = sessionStorage.getItem('token');
	console.log('masuk');
	return (dispatch) => {
		return axios
			.put(`/accountmanagement/deletecomment/${id}`, { headers: { Authorization: `Bearer ${token}` } })
			.then((response) => {
				// console.log(response.data.response);
				dispatch({ type: DELETE_REVIEW, payload: response.data.response });
			})
			.catch((error) => {
				throw error;
			});
	};
};

export const getReport = (start, end, id) => {
	console.log('masuk');
	return (dispatch) => {
		return axios
			.get(`/adminreports/daily?start=${start}&end=${end}&id=${id}`)
			.then((response) => {
				console.log(response.data);
				dispatch({ type: GET_REPORT, payload: response.data.response });
			})
			.catch((error) => {
				throw error;
			});
	};
};

export const login = async function(user) {
	const response = await axios.post('/auth/login', user);
	return response;
};
