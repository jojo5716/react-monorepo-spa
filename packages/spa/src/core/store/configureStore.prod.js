import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware, { END } from 'redux-saga';

import rootReducer from '../reducers';
import crashReporter from '../middlewares/logger';

const initialState = {};

const configureStore = () => {
    const sagaMiddleware = createSagaMiddleware({});
    const store = createStore(
        rootReducer,
        initialState,
        applyMiddleware(sagaMiddleware, crashReporter),
    );

    store.runSaga = sagaMiddleware.run;
    store.close = () => store.dispatch(END);

    return store;
};

export default configureStore;
