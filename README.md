# Monorepo component containing all components #


[![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg)](https://lerna.js.org/)

## Requirements ##

* Node version >= 6.2
* __Access to private npm repo__ (http://35.205.171.33/). **NOTE**: the .npmrc file contains the access token for the private repo. If this ever changes, you will need to use ```npm login``` in your dev machine to use the private repo.

## Install ##


* Be sure you have a user to access http://35.205.171.33/
* Install the dependency


## Commands usage ##

If components linking fails an audit fix may be needed. Execute the following command in component patch and then retry linking it:

rm -rf node_modules/ package-lock.json && npm i && npm audit fix

Link local packages together and install remaining package dependencies:
```
$ npm run bootstrap
```
https://github.com/lerna/lerna/tree/master/commands/bootstrap



start component:
```vim
$ NAME=[Component folder name] npm run start
```

Launch tests only in a component and/or file
```
PACKAGE=[Component folder name] FILE=[Filer name] npm run test:only-no-report

Exmaple:

PACKAGE=confirmation-form FILE=Controller npm run test:only-no-report
```

dist component:
```
NAME=[Component folder name] npm run dist
```

install dependencies for all packages:
```
$ lerna add react
```

install dependencies for a specific package:
```
$ lerna add module-1 --scope=module-2
```


https://github.com/lerna/lerna/tree/master/commands/add

Import component repository
```
$ npx lerna import [path to my component repository] --flatten
```

Check outdated packages
```
$ npm run outdated
$ npx lerna exec --no-bail -- npm outdated
```

Exec npm i in all components [DEPRECATED] by npm run clear
```
$ lerna exec -- npm i [DEPRECARTED]
```

Remove the node_modules directory from all packages.
```
$ lerna clean
```

Generate all package-lock files [DEPRECATED]  by npm run clear
```
$ lerna exec -- npm i
```


* Clone this repo.
* Install dependencies

```
npm i
```

* Start the development. This will command will start the development server builds, automatic testing and linting.

```
NAME=[Component folder name] npm start
```

## Unit testing ##

How to execute a single test:

```
TEST_NAME='test description' npm run test:only
```

https://github.com/lerna/lerna/blob/master/doc/guides.md


### Publish the release of changed packages ###

Release a new version of changed packages:

```
npm release:patch
```
or

```
npm release:minor
```
or

```
npm release:major
```
