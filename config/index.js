const Path = require('path');

const config = {
  projectName: 'dva-taro-starter',
  date: '2019-10-22',
  designWidth: 750,
  deviceRatio: {
    '640': 2.34 / 2,
    '750': 1,
    '828': 1.81 / 2,
  },
  sourceRoot: 'src',
  outputRoot: `dist/${process.env.TARO_ENV}`,
  plugins: {
    babel: {
      sourceMap: true,
      presets: [
        [
          'env',
          {
            modules: false,
          },
        ],
      ],
      plugins: ['transform-decorators-legacy', 'transform-class-properties', 'transform-object-rest-spread', 'lodash'],
    },
    // uglify: {
    //   enable: true,
    //   config: {
    //     // 配置项同 https://github.com/mishoo/UglifyJS2#minify-options
    //   },
    // },
    // csso: {
    //   enable: true,
    //   config: {
    //     // 配置项同 https://github.com/css/csso#minifysource-options
    //   },
    // },
  },
  defineConstants: {},
  alias: {
    // '@/': Path.resolve(__dirname, '..', 'src/'),
    '@/assets': Path.resolve(__dirname, '..', 'src/assets'),
    '@/components': Path.resolve(__dirname, '..', 'src/components'),
    '@/layouts': Path.resolve(__dirname, '..', 'src/layouts'),
    '@/locales': Path.resolve(__dirname, '..', 'src/locales'),
    '@/pages': Path.resolve(__dirname, '..', 'src/pages'),
    '@/redux': Path.resolve(__dirname, '..', 'src/redux'),
    '@/services': Path.resolve(__dirname, '..', 'src/services'),
    '@/utils': Path.resolve(__dirname, '..', 'src/utils'),
  },
  copy: {
    patterns: [],
    options: {},
  },
  weapp: {
    // compile: {
    //   compressTemplate: ,
    //   exclude: ['src/components/ec-canvas/echarts.js'],
    // },
    module: {
      postcss: {
        autoprefixer: {
          enable: true,
          config: {
            browsers: ['last 3 versions', 'Android >= 4.1', 'ios >= 8'],
          },
        },
        pxtransform: {
          enable: true,
          config: {
            // onePxTransform: true,
            // unitPrecision: 5,
            // propList: ['*'],
            // selectorBlackList: [],
            // replace: true,
            // mediaQuery: false,
            // minPixelValue: 0,
          },
        },
        url: {
          enable: true,
          config: {
            limit: 10240, // 设定转换尺寸上限
          },
        },
        cssModules: {
          enable: true, // 默认为 false，如需使用 css modules 功能，则设为 true
          config: {
            namingPattern: 'module', // 转换模式，取值为 global/module
            generateScopedName: '[hash:base64:8]',
          },
        },
      },
    },
  },
  h5: {
    publicPath: '/',
    staticDirectory: 'static',
    // chunkDirectory: ,
    // output: {
    //   filename: 'js/[name].[hash:8].js',
    //   chunkFilename: 'js/[name].[chunkhash:8].js',
    // },
    // router: {
    //   mode: 'hash',
    //   basename: '',
    //   customRoutes: {},
    // },
    // entry: {},
    // dllEntry: {},
    // enableSourceMap: ,
    // enableDll: ,
    // enableExtract: ,
    // esnextModules: ,
    // cssLoaderOption: {},
    // styleLoaderOption: {},
    // sassLoaderOption: {},
    // lessLoaderOption: {},
    // stylusLoaderOption: {},
    // mediaUrlLoaderOption: {},
    // fontUrlLoaderOption: {},
    // imageUrlLoaderOption: {},
    // miniCssExtractPluginOption: {},
    module: {
      postcss: {
        autoprefixer: {
          enable: true,
          config: {
            browsers: ['last 3 versions', 'Android >= 4.1', 'ios >= 8'],
          },
        },
        cssModules: {
          enable: true, // 默认为 false，如需使用 css modules 功能，则设为 true
          config: {
            namingPattern: 'module', // 转换模式，取值为 global/module
            generateScopedName: '[hash:base64:8]',
          },
        },
      },
    },
    // webpackChain: (chain, webpack) => {},
    // dllWebpackChain: (chain, webpack) => {},
    devServer: {
      port: 10086,
      https: false,
    },
  },
};

module.exports = function(merge) {
  if (process.env.NODE_ENV === 'development') {
    return merge({}, config, require('./dev'));
  }
  return merge({}, config, require('./prod'));
};
