import Taro from '@tarojs/taro';
import { View } from '@tarojs/components';

import styles from './index.module.less';

class Component extends Taro.PureComponent {
  // static propTypes = {};

  // static defaultProps = {};

  // static getDerivedStateFromProps(nextProps, prevState) {}

  constructor() {
    super(...arguments);
    console.log('constructor', arguments);
    // const that = this;
    // const {  } = that.props;
    // that.state = {};
  }

  // componentWillMount() {}

  // componentDidMount() {}

  // componentWillReceiveProps(nextProps) {}

  // shouldComponentUpdate(nextProps, nextState) {}

  // componentWillUpdate(nextProps, nextState) {}

  // getSnapshotBeforeUpdate(prevProps, prevState) {}

  // componentDidUpdate(prevProps, prevState) {}

  // componentWillUnmount() {}

  config = {
    usingComponents: {},
  };

  render() {
    return <View className={styles.container}>Component</View>;
  }
}

export default Component;
