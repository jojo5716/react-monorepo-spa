import React from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';

import history from '@core/history';
import configureStore from '@core/store/configureStore';

import Routes from '@core/routes';
import rootSaga from '@core/sagas';

class AppProvider extends React.Component {
    constructor(props) {
        super(props);

        this.store = configureStore();
        this.store.runSaga(rootSaga);
        this.history = history.generateHistory();
        this.state = {
            hasInternalServerError: false,
        };
    }

    static getDerivedStateFromError() {
        // Update state so the next render will show the fallback UI.
        return { hasInternalServerError: true };
    }

    componentDidCatch(error, info) {
        // You can also log the error to an error reporting service
        console.log(error);
        console.log(info);
    }

    render() {
        const initialProps = {
            ...this.props,
            hasInternalServerError: this.state.hasInternalServerError,
        };

        return (
            <Provider store={this.store}>
                <Router history={this.history}>
                    <Routes
                        {...initialProps}
                        history={this.history}
                    />
                </Router>
            </Provider>
        );
    }
}

export default AppProvider;
