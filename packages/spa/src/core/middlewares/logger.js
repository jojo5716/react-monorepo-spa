const crashReporter = (store) => (next) => (action) => { // eslint-disable-line no-unused-vars
    try {
        return next(action);
    } catch (error) {
        console.error('Caught an exception!', error); // TODO: Send traceback to Sentry
        throw error;
    }
};

export default crashReporter;
