const presets = [
    '@babel/preset-react',
    [
        '@babel/env', {
            targets: ['last 2 versions'],
        },
    ],
];

const plugins = [
    'add-module-exports',
    [
        '@babel/plugin-transform-runtime',
        {
            absoluteRuntime: false,
            corejs: false,
            helpers: true,
            regenerator: true,
            useESModules: true,
        },
    ],
    '@babel/plugin-syntax-object-rest-spread',
    '@babel/plugin-transform-object-assign',
    '@babel/plugin-transform-async-to-generator',
    '@babel/plugin-syntax-dynamic-import',
    '@babel/plugin-transform-react-jsx',
    '@babel/plugin-syntax-jsx',
];

module.exports = (api) => {
    api.cache(true);

    return {
        presets,
        plugins,
        env: {
            test: {
                presets: [
                    [
                        '@babel/preset-env',
                        {
                            targets: {
                                node: 'current',
                            },
                        },
                    ],
                ],
                plugins: [
                    'add-module-exports',
                    '@babel/plugin-transform-runtime',
                    '@babel/plugin-syntax-object-rest-spread',
                    '@babel/plugin-transform-object-assign',
                    '@babel/plugin-transform-async-to-generator',
                    '@babel/plugin-syntax-dynamic-import',
                    'styled-components',
                    '@babel/plugin-transform-react-jsx',
                    '@babel/plugin-syntax-jsx',
                ],
            },
        },
    };
};
