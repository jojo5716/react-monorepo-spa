# SPA Component#

[![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg)](https://lerna.js.org/)

* This componet will manage all store.


## Requirements ##

* Node version >= 6.2
* __Access to private npm repo__ (http://35.205.171.33/). **NOTE**: the .npmrc file contains the access token for the private repo. If this ever changes, you will need to use ```npm login``` in your dev machine to use the private repo.


## Install ##


* Be sure you have a user to access http://35.205.171.33/
* Install the dependency


```
npm @i2tic-spa/app --save
```

## Usage ##
```javascript
import React from 'react';
import ReactDOM from 'react-dom';

import SPA from '@i2tic-spa/app';


ReactDOM.render(
    <SPA/>,
    document.getElementById('content'),
);
```