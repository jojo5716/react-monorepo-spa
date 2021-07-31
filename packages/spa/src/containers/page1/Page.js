import React from 'react';

class Page extends React.PureComponent {
    onClickButton() {
        this.props.redirectToUrl('/page2');
    }

    render() {
        console.log(this.props);
        return (
            <React.Fragment>
                <h1>Page 1</h1>
                <button onClick={this.onClickButton.bind(this)}>
                    Go to page 2
                </button>
            </React.Fragment>
        );
    }
}

export default Page;
