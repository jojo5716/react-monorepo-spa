import {
    DISPATCH_ERROR_TYPE,
    REDIRECT_TO_URL,
} from '@src/constants/actions';

export const redirectToUrl = (url) => ({
    type: REDIRECT_TO_URL,
    payload: {
        url,
    },
});

export const dispatchErrorType = (errorType) => ({
    type: DISPATCH_ERROR_TYPE,
    payload: {
        errorType,
        hasAppError: true,
    },
});
