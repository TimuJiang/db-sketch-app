'use strict';
/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1566887365290_3511';

  // add your middleware config here
  config.middleware = [ 'auth' ];
  config.security = {
    csrf: {
      enable: false,
    },
  };
  config.session = {
    key: 'dbs_sId',
    maxAge: 3600 * 1000, // 1 h
    httpOnly: true,
    encrypt: false,
    renew: true,
  };
  config.sessionMongoose = {
    name: 'Session',
  };
  config.mongoose = {
    client: {
      url: 'mongodb://127.0.0.1/db-sketch',
      options: {},
    },
  };
  // add your user config here
  const userConfig = {
    myAppName: 'db-sketch-app',
  };

  return {
    ...config,
    ...userConfig,
  };
};
