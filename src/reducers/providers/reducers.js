import { RECEIVE_PROVIDERS, DELETE_PROVIDER } from '../../api';

const initialState = {
	listProviders: [],
	isDeleted: []
};

export const providerreducer = (state = initialState, action) => {
	switch (action.type) {
		case RECEIVE_PROVIDERS:
			return { ...state, listProviders: action.payload };
		case DELETE_PROVIDER:
			return { ...state, isDeleted: action.payload };
		default:
			return state;
	}
};
