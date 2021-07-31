import React from 'react';

class Error extends React.Component {
    componentDidMount() {
        this.props.dispatchErrorType('404');
    }

    render() {
        return null;
    }
}

export default Error;
