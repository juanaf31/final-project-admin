import { combineReducers } from 'redux';
import { userreducer } from './users/reducers';
import { providerreducer } from './providers/reducers';
import { assetreducer } from './assets/reducers';
import { reviewreducer } from './reviews/reducers';
import { admin } from './account/reducers';
import { reportreducer } from './report/reducers';

export default combineReducers({
	// listUsers,
	// listProviders,
	// listAssets,
	// listReviews
	userreducer,
	providerreducer,
	assetreducer,
	reviewreducer,
	admin,
	reportreducer
});
