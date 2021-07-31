module.exports = {
    setupFilesAfterEnv: ['<rootDir>/test/setupTest.js'],
    collectCoverage: process.env.REPORT ? JSON.parse(process.env.REPORT) : true,
    coverageDirectory: 'coverage/',
    coverageReporters: ['lcov', 'text'],
    coveragePathIgnorePatterns: [
        'node_modules',
        '<rootDir>/packages/spa/src/polyfill/*',
    ],
    collectCoverageFrom: [
        '!**/node_modules/**',
        `packages/${process.env.PACKAGE || '**'}/src/**/${process.env.FILE || '**'}.(js|jsx)`,
        '!packages/**/src/index*.(js|jsx)',
        '!packages/spa/doc/**',
        `pages/${process.env.PACKAGE || '**'}/src/**/${process.env.FILE || '**'}.(js|jsx)`,
        '!pages/**/src/index*.(js|jsx)',
    ],
    coverageThreshold: {
        global: {
            statements: 75,
            branches: 75,
            lines: 75,
            functions: 75,
        },
    },
    testMatch: [
        `<rootDir>/packages/${process.env.PACKAGE || '**'}/test/**/${process.env.FILE || '**'}.test.js`,
        `<rootDir>/pages/${process.env.PACKAGE || '**'}/test/**/${process.env.FILE || '**'}.test.js`,
    ],
    transform: {
        '^.+\\.(js|jsx)$': 'babel-jest',
    },
    verbose: true,
    transformIgnorePatterns: ['/node_modules/(?!(@i2tic.*))'],
    moduleNameMapper: {
        // eslint-disable-next-line max-len
        '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/test/__mocks__/fileMock.js',
        '\\.(css|less)$': '<rootDir>/test/__mocks__/styleMock.js',
        '^redux-saga/effects(.*)$': '<rootDir>/packages/spa/node_modules/redux-saga/effects$1',
        '^redux-saga$': '<rootDir>/packages/spa/node_modules/redux-saga',
        '^@redux-saga/(.*)$': '<rootDir>/packages/spa/node_modules/@redux-saga/$1',
        '^@constants(.*)': '<rootDir>/packages/spa/src/constants/$1',
        '^@core(.*)': '<rootDir>/packages/spa/src/core/$1',
        '^@mocks(.*)': '<rootDir>/packages/spa/mocks/$1',
        '^@src(.*)': '<rootDir>/packages/spa/src/$1',
    },
    modulePathIgnorePatterns: [
        '<rootDir>/packages/spa/src/core/store/configureStore*',
    ],
    roots: [
        'packages/',
        'pages/',
    ],
    testURL: 'http://localhost/',
    testEnvironment: 'jest-environment-jsdom',
};
