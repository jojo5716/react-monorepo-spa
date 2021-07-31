import React from 'react';
import ReactDOM from 'react-dom';
import ContentPage from '../src/index-with-styles';


// Example of use of the component in an application
const data = {};

ReactDOM.render(
    <ContentPage { ...data }>
        <h3>Child specific content</h3>
        <ul>
            <li>Uno</li>
            <li>Dos</li>
            <li>Tres...</li>
        </ul>
    </ContentPage>,
    document.getElementById('content'),
);
