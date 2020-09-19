import { RECEIVE_USERS, DELETE_USER } from '../../api';

const initialState = {
	listUsers: [],
	isDeleted: []
};

export const userreducer = (state = initialState, action) => {
	switch (action.type) {
		case RECEIVE_USERS:
			return { ...state, listUsers: action.payload };
		case DELETE_USER:
			return { ...state, isDeleted: action.payload };
		default:
			return state;
	}
};
