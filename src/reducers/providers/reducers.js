import { RECEIVE_PROVIDERS } from '../../api';

const initialState = {
	listProviders: []
};

export const providerreducer = (state = initialState, action) => {
	switch (action.type) {
		case RECEIVE_PROVIDERS:
			return { ...state, listProviders: action.payload };
		default:
			return state;
	}
};
