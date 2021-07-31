# React component for pages

[![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg)](https://lerna.js.org/)

This component renders a common structure form content pages.

## Instalation

```
npm install @i2tic/content-page --save
```

## Usage

```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import ContentPage from '@i2tic/content-page';

ReactDOM.render(
    <ContentPage>
        <h3>Child specific content</h3>
        <ul>
            <li>Uno</li>
            <li>Dos</li>
            <li>Tres...</li>
        </ul>
    </ContentPage>,
document.getElementById('content'));
```
