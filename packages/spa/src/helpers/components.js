import React, { Suspense } from 'react';

function renderLazy(LazyComponent, props, fallback = null) {
    return (
        <Suspense fallback={fallback}>
            <LazyComponent {...props} />
        </Suspense>
    );
}

function renderAppLoader(hasToForceAppLoaderToBeRendered = false) {
    return hasToForceAppLoaderToBeRendered ? <span>Loader...</span> : null;
}

export default {
    renderLazy,
    renderAppLoader,
};
