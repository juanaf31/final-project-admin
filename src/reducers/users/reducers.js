import { RECEIVE_USERS } from '../../api';

const initialState = {
	listUsers: []
};

export const userreducer = (state = initialState, action) => {
	switch (action.type) {
		case RECEIVE_USERS:
			return { ...state, listUsers: action.payload };
		default:
			return state;
	}
};
