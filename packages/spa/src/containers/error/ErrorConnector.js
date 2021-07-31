import { connect } from 'react-redux';

import Error from '@src/containers/error/Error';
import { dispatchErrorType } from '@src/core/app/actions';

const mapStateToProps = () => ({});
const mapActionsToProps = {
    dispatchErrorType,
};

export default connect(mapStateToProps, mapActionsToProps)(Error);
