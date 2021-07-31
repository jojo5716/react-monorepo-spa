import {
    all,
    fork,
    put,
    take,
    takeEvery,
} from 'redux-saga/effects';

import { pushToHistory } from '@core/history';
import {
    CLEAN_APP_ERROR,
    REDIRECT_TO_URL,
} from '@src/constants/actions';

export default function* root() {
    yield all([
        fork(watchAppActions),
        fork(redirectToUrl),
    ]);
}

export function* watchAppActions() {
    yield takeEvery(REDIRECT_TO_URL, redirectToUrl);
}

export function* redirectToUrl() {
    const { payload } = yield take(REDIRECT_TO_URL);

    pushToHistory(payload.url);

    yield put({
        type: CLEAN_APP_ERROR,
        payload: {
            hasAppError: false,
        },
    });
}
