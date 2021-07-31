const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const DuplicatePackageCheckerPlugin = require('duplicate-package-checker-webpack-plugin');


const JS_RULES = {
    test: /\.(js|jsx)$/,
    exclude: /node_modules\/(?!(@i2tic.*))/,
    use: {
        loader: 'babel-loader',

        options: {
            presets: [
                "@babel/env",
                '@babel/react',
            ],
            plugins: [
                "add-module-exports",
                [
                    '@babel/plugin-transform-runtime',
                    {
                        absoluteRuntime: false,
                        corejs: false,
                        helpers: true,
                        regenerator: true,
                        useESModules: true
                    }
                ],
                "@babel/plugin-syntax-object-rest-spread",
                "@babel/plugin-transform-object-assign",
                "@babel/plugin-transform-async-to-generator",
                "@babel/plugin-syntax-dynamic-import",
                "@babel/plugin-transform-react-jsx",
                "@babel/plugin-syntax-jsx",
                "styled-components",
                "@babel/plugin-transform-modules-commonjs",
            ]
        }
    },
};

const CSS_RULES = {
    test: /\.css$/,
    use: [
        MiniCssExtractPlugin.loader,
        { loader: 'css-loader', options: { sourceMap: true } },
        { loader: 'postcss-loader', options: { sourceMap: true } }
    ]
};

const LESS_RULES = {
    test: /\.less$/,
    use: [
        MiniCssExtractPlugin.loader,
        { loader: 'css-loader', options: { sourceMap: true } },
        { loader: 'postcss-loader', options: { sourceMap: true } },
        {
            loader: 'less-loader',
            options: {
                strictMath: true,
                noIeCompat: true,
                sourceMap: true
            }
        }
    ]
};

const IMAGES_RULES = {
	test: /\.(png|gif|jpg)/,
	use: {
		loader: 'url-loader',
		options: {
			limit: 10000,
			name: '[name].[ext]'
		}
	}
};

const SVG_RULES = {
	test: /\.(svg)/,
	use: [
        {
            loader: "babel-loader"
        },
        {
			loader: '@svgr/webpack',
        }
    ]
};

const pathToRedux = path.resolve(path.join(__dirname, 'packages/spa/node_modules', 'redux'));

module.exports = () => (
    {
        module: {
            rules: [
                JS_RULES,
                CSS_RULES,
                LESS_RULES,
                IMAGES_RULES,
                SVG_RULES
            ]
        },
        resolve: {
            alias: {
                'redux': pathToRedux,
            },
        },
        plugins: [
            new MiniCssExtractPlugin({
                filename: '[name].css'
            }),
            new DuplicatePackageCheckerPlugin()
        ],
        devtool: 'source-map'
    }
);
