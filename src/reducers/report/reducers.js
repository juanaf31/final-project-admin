import { GET_REPORT } from '../../api';

const initialState = {
	listReports: []
};

export const reportreducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_REPORT:
			return { ...state, listReports: action.payload };
		default:
			return state;
	}
};
