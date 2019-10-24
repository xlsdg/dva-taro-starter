import _ from 'lodash';
import Taro from '@tarojs/taro';
// import { createLogger } from 'redux-logger';
import { create } from 'dva-core';
import DvaLoading from 'dva-loading';
import DvaImmer from 'dva-immer';

import getModels from '@/redux/models/index';

export default function createApp(hooksAndOpts = {}, createOpts = {}) {
  // redux日志
  // hooksAndOpts.onAction = [createLogger()];

  const app = create(hooksAndOpts, createOpts);

  app.use(DvaLoading());
  app.use(DvaImmer());

  // 适配支付宝小程序
  if (Taro.getEnv() === Taro.ENV_TYPE.ALIPAY) {
    // eslint-disable-next-line no-global-assign
    global = {};
  }

  // HMR workaround
  if (!global.registered) {
    _.forEach(getModels(), m => app.model(m));
    global.registered = true;
  }

  app.start();

  app.getStore = () => app._store;
  app.getDispatch = () => app._store.dispatch;

  return app;
}
