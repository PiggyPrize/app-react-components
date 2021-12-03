'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var index = require('../node_modules/@pooltogether/current-pool-data/index.js');

({
  chainId: 1,
  prize: {
    prizePeriodSeconds: Math.random(1) > 0.5 ? index.SECONDS_PER_DAY.toString() : false
  },
  tokens: {
    underlyingToken: {
      address: '0x6b175474e89094c44da98b954eedeac495271d0f'
    }
  }
});
var DEFAULT_INPUT_CLASS_NAME = 'w-full py-2 px-5 text-inverse trans outline-none focus:outline-none active:outline-none leading-none';
var DEFAULT_INPUT_LABEL_CLASS_NAME = 'mt-0 mb-1 text-xs';
var DEFAULT_INPUT_GROUP_CLASS_NAME = 'trans';
var HOTKEYS_KEY_MAP = {
  TOGGLE_THEME: 'ctrl+shift+t'
};
var POOL_ADDRESS = '0x0cec1a9154ff802e7934fc916ed7ca50bde6844e';

exports.DEFAULT_INPUT_CLASS_NAME = DEFAULT_INPUT_CLASS_NAME;
exports.DEFAULT_INPUT_GROUP_CLASS_NAME = DEFAULT_INPUT_GROUP_CLASS_NAME;
exports.DEFAULT_INPUT_LABEL_CLASS_NAME = DEFAULT_INPUT_LABEL_CLASS_NAME;
exports.HOTKEYS_KEY_MAP = HOTKEYS_KEY_MAP;
exports.POOL_ADDRESS = POOL_ADDRESS;
//# sourceMappingURL=constants.js.map
