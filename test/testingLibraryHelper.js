/* eslint-disable import/no-extraneous-dependencies */
/* eslint-env node, jest */
import { waitFor } from '@testing-library/react';

/**
 * waitForGetBy is a waitFor wrapper helper function for getBy methods.
 * Timeout is setted with Jest default timeout, which is 5000ms 8React Testing Library default timeout is 1000ms).
 * Note 1: This helper function won't apply defined timeout if getByMethod param is a findBy method.
 * Note 2: findBy* methods don't need to use waitFor because they are async
 *         findBy* method usage example: await findBy*(text)
 * @param {function} getByMethod
 * @param {string} text
 */
const waitForGetBy = (getByMethod, text, precisionOptions = {}) => (
    waitFor(() => getByMethod(text, precisionOptions), {
        timeout: 5000,
    })
);

module.exports = {
    waitForGetBy,
};
