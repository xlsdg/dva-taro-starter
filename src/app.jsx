import '@tarojs/async-await';
import Taro from '@tarojs/taro';
import { Provider } from '@tarojs/redux';

import Layout from '@/pages/layout/index';

import dva from '@/utils/dva';

import './global.less';

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }

const dvaApp = dva({
  initialState: {},
});

const store = dvaApp.getStore();

class App extends Taro.PureComponent {
  // static propTypes = {};

  // static defaultProps = {};

  constructor() {
    super(...arguments);
    console.log('constructor', arguments);
    // const that = this;
    // const {  } = that.props;
    // that.state = {};
  }

  // componentWillMount() {}

  // componentDidMount() {}

  // componentDidShow() {}

  // componentDidHide() {}

  // componentDidCatchError(error) {}

  // componentDidNotFound(event) {}

  config = {
    pages: ['pages/layout/index'],
    // window: {
    //   navigationBarBackgroundColor: '#ffffff',
    //   navigationBarTextStyle: 'black',
    //   navigationBarTitleText: '',
    //   navigationStyle: 'default',
    //   backgroundColor: '#ffffff',
    //   backgroundTextStyle: 'light',
    //   backgroundColorTop: '#ffffff',
    //   backgroundColorBottom: '#ffffff',
    //   enablePullDownRefresh: false,
    //   onReachBottomDistance: 50,
    //   pageOrientation: 'portrait',
    // },
    // tabBar: {
    //   color: '',
    //   selectedColor: '',
    //   backgroundColor: '',
    //   borderStyle: '',
    //   list: [
    //     {
    //       pagePath: '',
    //       text: '',
    //       iconPath: '',
    //       selectedIconPath: '',
    //     },
    //   ],
    //   position: 'bottom',
    //   custom: false,
    // },
    // networkTimeout: {
    //   request: 60000,
    //   connectSocket: 60000,
    //   uploadFile: 60000,
    //   downloadFile: 60000,
    // },
    // debug: false,
    // functionalPages: false,
    // subPackages: [{}],
    // workers: '',
    // requiredBackgroundModes: ['audio'],
    // plugins: {},
    // preloadRule: {},
    // resizable: false,
    // navigateToMiniProgramAppIdList: [''],
    // usingComponents: {},
    // permission: {
    //   'scope.userLocation': {
    //     desc: '你的位置信息将用于小程序位置接口的效果展示',
    //   },
    // },
  };

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render() {
    const that = this;
    console.log('render', that.props, that.state);
    // const {  } = that.props;
    // const {  } = that.state;

    return (
      <Provider store={store}>
        <Layout />
      </Provider>
    );
  }
}

// eslint-disable-next-line react/no-deprecated
Taro.render(<App />, document.getElementById('app'));
