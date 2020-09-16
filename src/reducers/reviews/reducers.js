import { RECEIVE_REVIEWS, DELETE_REVIEW } from '../../api';

const initialState = {
	listReviews: [],
	isDeleted: []
};

export const reviewreducer = (state = initialState, action) => {
	switch (action.type) {
		case RECEIVE_REVIEWS:
			return { ...state, listReviews: action.payload };
		case DELETE_REVIEW:
			console.log(action.payload);
			return { ...state, isDeleted: action.payload };
		default:
			return state;
	}
};
