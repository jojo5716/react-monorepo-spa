const createHistory = require('history').createBrowserHistory;

let history;

function getHistory() {
    return history;
}

function historyListener(_, action) {
    // Use setTimeout to make sure this runs after React Router's own listener
    setTimeout(() => {
        // Keep default behavior of restoring scroll position when user:
        // - clicked back button
        // - clicked on a link that programmatically calls `history.goBack()`
        // - manually changed the URL in the address bar (here we might want
        //   to scroll to top, but we can't differentiate it from the others)
        if (action !== 'POP') {
            // In all other cases, scroll to top
            window.scrollTo(0, 0);
        }
    });
}

function generateHistory() {
    history = createHistory();

    history.listen(historyListener);

    return history;
}

function pushToHistory(url, historyInstance = null) {
    const historyObj = historyInstance || getHistory();

    historyObj.push(url);
}

export default {
    getHistory,
    generateHistory,
    pushToHistory,
    historyListener,
};
