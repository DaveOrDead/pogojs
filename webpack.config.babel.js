import {join} from 'path';

const include = join(__dirname, 'src');

export default {
    devtool: 'source-map',
    entry: './src/index',
    module: {
        loaders: [
            {
                include,
                loader: 'babel-loader',
                test: /\.js$/
            }
        ]
    },
    output: {
        library: 'pogojs',
        libraryTarget: 'umd',
        path: join(__dirname, 'dist')
    }
};
