import {
    CLEAN_APP_ERROR,
    DISPATCH_ERROR_TYPE,
} from '@src/constants/actions';

import { reducer as helperReducer } from '@src/helpers/reducer';

const initialState = {
    errorType: null,
    hasAppError: false,
};

const reducerMap = [
    CLEAN_APP_ERROR,
    DISPATCH_ERROR_TYPE,
];

function reducer(state = initialState, action) {
    return helperReducer(state, action, reducerMap);
}

export default {
    reducer,
};
