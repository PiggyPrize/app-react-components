'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _rollupPluginBabelHelpers = require('../../../_virtual/_rollupPluginBabelHelpers.js');
var React = require('react');
var utilities = require('@pooltogether/utilities');
var constants = require('../../constants.js');
var TokenIcon = require('./TokenIcon.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var PoolIcon = function PoolIcon(props) {
  return /*#__PURE__*/React__default['default'].createElement(TokenIcon.TokenIcon, _rollupPluginBabelHelpers['extends']({}, props, {
    chainId: utilities.NETWORK.mainnet,
    address: constants.POOL_ADDRESS
  }));
};

exports.PoolIcon = PoolIcon;
//# sourceMappingURL=PoolIcon.js.map
