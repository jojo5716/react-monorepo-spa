import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import * as appReducers from '@src/core/app/reducer';

export default combineReducers({
    appReducer: appReducers.reducer,
    routerReducer,
});
