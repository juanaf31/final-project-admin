import { RECEIVE_ASSETS, DELETE_ASSET, RECEIVE_NOT_APPROVED, APPROVE } from '../../api';

const initialState = {
	listAssets: [],
	notApproved: [],
	isDeleted: [],
	isApproved: []
};

export const assetreducer = (state = initialState, action) => {
	switch (action.type) {
		case RECEIVE_ASSETS:
			return { ...state, listAssets: action.payload };
		case DELETE_ASSET:
			return { ...state, isDeleted: action.payload };
		case RECEIVE_NOT_APPROVED:
			return { ...state, notApproved: action.payload };
		case APPROVE:
			return { ...state, isApproved: action.payload };
		default:
			return state;
	}
};
