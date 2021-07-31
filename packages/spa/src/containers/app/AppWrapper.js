import React from 'react';
import PropTypes from 'prop-types';

import { renderAppLoader } from '@src/helpers/components';
import {
    defaultEmptyfunction,
} from '@src/helpers/utils';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.hasContainerChanged = false;
    }

    renderErrorApp() {
        const errorType = this.props.hasInternalServerError ? '500' : this.props.errorType;

        return (
            <React.Fragment>
                <h1>Error {errorType}</h1>
            </React.Fragment>
        );
    }

    renderApp() {
        return (
            <React.Fragment>
                {renderAppLoader()}
                {this.props.children}
            </React.Fragment>
        );
    }

    render() {
        return (this.props.hasInternalServerError || this.props.hasAppError) ? this.renderErrorApp() : this.renderApp();
    }
}

export default App;

App.propTypes = {
    redirectToUrl: PropTypes.func,
};

App.defaultProps = {
    redirectToUrl: defaultEmptyfunction,
};
