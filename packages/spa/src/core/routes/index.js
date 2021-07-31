import React from 'react';
import { Route, Switch } from 'react-router-dom';

import AppWrapper from '@src/containers/app/AppWrapperConnector';
import Error from '@src/containers/error/ErrorConnector';
import Page1 from '@src/containers/page1/PageConnector';
import Page2 from '@src/containers/page2/PageConnector';

import {
    HOME_URL,
    PAGE_2_URL,
} from '@src/constants/urls';

const renderComponent = ({
    Component,
    props,
    appProps,
    selectedContainer,
}) => (
    <AppWrapper {...appProps} selectedContainer={selectedContainer}>
        <Component {...props} />
    </AppWrapper>
);

const Routes = ({ history }) => {
    const appProps = {
        history,
    };

    return (
        <Switch>
            <Route
                path={PAGE_2_URL}
                exact
                render={(props) => renderComponent({
                    Component: Page2,
                    selectedContainer: 'Page2',
                    appProps,
                    props,
                })}
            />

            <Route
                path={HOME_URL}
                exact
                render={(props) => renderComponent({
                    Component: Page1,
                    selectedContainer: 'Page1',
                    appProps,
                    props,
                })}
            />

            <Route
                render={(props) => renderComponent({
                    Component: Error,
                    selectedContainer: 'error',
                    appProps,
                    props,
                })}
            />
        </Switch>
    );
};

export default Routes;
