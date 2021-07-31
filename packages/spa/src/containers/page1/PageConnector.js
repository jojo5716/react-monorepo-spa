import { connect } from 'react-redux';

import {
    redirectToUrl,
} from '@src/core/app/actions';
import Page from './Page';

const mapStateToProps = () => ({});
const mapActionsToProps = {
    redirectToUrl,
};

export default connect(mapStateToProps, mapActionsToProps)(Page);
