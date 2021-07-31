import { all } from 'redux-saga/effects';

import appSagas from '@src/core/app/sagas';

export default function* sagas() {
    yield all([
        appSagas(),
    ]);
}
