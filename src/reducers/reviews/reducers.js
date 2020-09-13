import { RECEIVE_REVIEWS } from '../../api';

const initialState = {
	listReviews: []
};

export const reviewreducer = (state = initialState, action) => {
	switch (action.type) {
		case RECEIVE_REVIEWS:
			return { ...state, listReviews: action.payload };
		default:
			return state;
	}
};
