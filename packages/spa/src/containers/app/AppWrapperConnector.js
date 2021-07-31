import { connect } from 'react-redux';

import {
    redirectToUrl,
} from '@src/core/app/actions';
import AppWrapper from './AppWrapper';

const mapStateToProps = (state) => ({
    errorType: state.appReducer.errorType,
    hasAppError: state.appReducer.hasAppError,
});

const mapActionsToProps = {
    redirectToUrl,
};

export default connect(mapStateToProps, mapActionsToProps)(AppWrapper);
