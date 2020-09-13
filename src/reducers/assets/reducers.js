import { RECEIVE_ASSETS } from '../../api';

const initialState = {
	listAssets: []
};

export const assetreducer = (state = initialState, action) => {
	switch (action.type) {
		case RECEIVE_ASSETS:
			return { ...state, listAssets: action.payload };
		default:
			return state;
	}
};
