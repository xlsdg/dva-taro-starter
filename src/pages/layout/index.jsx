import Taro from '@tarojs/taro';
import { View, Text } from '@tarojs/components';

import styles from './index.module.less';

class Page extends Taro.PureComponent {
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

  // shouldComponentUpdate(nextProps, nextState) {}

  // componentWillUpdate(nextProps, nextState) {}

  // componentDidUpdate(prevProps, prevState) {}

  // componentWillUnmount() {}

  // componentDidShow() {}

  // componentDidHide() {}

  // onPullDownRefresh() {}

  // onReachBottom() {}

  // onPageScroll(event) {}

  // onShareAppMessage(event) {}

  // onResize(event) {}

  // onTabItemTap(event) {}

  // componentWillPreload() {}

  // onTitleClick() {}

  // onOptionMenuClick() {}

  // onPopMenuClick() {}

  // onPullIntercept() {}

  config = {
    navigationBarBackgroundColor: '#000000',
    navigationBarTextStyle: 'white',
    navigationBarTitleText: '首页',
    navigationStyle: 'default',
    backgroundColor: '#ffffff',
    backgroundTextStyle: 'dark',
    backgroundColorTop: '#ffffff',
    backgroundColorBottom: '#ffffff',
    enablePullDownRefresh: false,
    onReachBottomDistance: 50,
    pageOrientation: 'portrait',
    disableScroll: false,
    disableSwipeBack: false,
    // usingComponents: {},
  };

  render() {
    const that = this;
    console.log('render', that.props, that.state);
    // const {  } = that.props;
    // const {  } = that.state;

    return (
      <View className={styles.container}>
        <Text>1</Text>
      </View>
    );
  }
}

export default Page;
