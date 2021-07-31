import React, { Component } from 'react';
import PropTypes from 'prop-types';

/**
 * ContentPage container Component
 * This component renders a common structure form content pages.
 * It includes logic for header and a description text
 */
export default class ContentPage extends Component {
    render() {
        return (
            <div className={this.props.className}>
                {this.props.children}
            </div>
        );
    }

}

ContentPage.propTypes = {
    className: PropTypes.string,
};

ContentPage.defaultProps = {
    className: 'content-page',
};
