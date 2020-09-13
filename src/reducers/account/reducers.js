import { LOGIN } from '../../api';

const initialState = {
	admin: []
};

export const admin = (state = initialState, action) => {
	switch (action.type) {
		case LOGIN:
			return { ...state, admin: action.payload };
		default:
			return state;
	}
};
