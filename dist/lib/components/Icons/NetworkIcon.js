'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _rollupPluginBabelHelpers = require('../../../_virtual/_rollupPluginBabelHelpers.js');
var React = require('react');
var index = require('../../../node_modules/classnames/index.js');
var utilities = require('@pooltogether/utilities');
var networkIcon = require('../../assets/Networks/network-icon.png.js');
var ethereumIcon = require('../../assets/Networks/ethereum-icon.png.js');
var bscIcon = require('../../assets/Networks/bsc-icon.png.js');
var poaIcon = require('../../assets/Networks/poa-icon.png.js');
var xdaiIcon = require('../../assets/Networks/xdai-icon.png.js');
var polygonIcon = require('../../assets/Networks/polygon-icon.png.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var _Object$freeze;
var NetworkIcon = function NetworkIcon(props) {
  var sizeClassName = props.sizeClassName,
      className = props.className,
      chainId = props.chainId,
      onClick = props.onClick;
  var src = NETWORK_MAPPING[chainId] || networkIcon;
  return /*#__PURE__*/React__default['default'].createElement("img", {
    src: src,
    className: index('inline-block', className, sizeClassName),
    onClick: onClick
  });
};
NetworkIcon.defaultProps = {
  sizeClassName: 'w-5 h-5'
};
var NETWORK_MAPPING = Object.freeze((_Object$freeze = {}, _rollupPluginBabelHelpers.defineProperty(_Object$freeze, utilities.NETWORK.mainnet, ethereumIcon), _rollupPluginBabelHelpers.defineProperty(_Object$freeze, utilities.NETWORK.rinkeby, ethereumIcon), _rollupPluginBabelHelpers.defineProperty(_Object$freeze, utilities.NETWORK.goerli, ethereumIcon), _rollupPluginBabelHelpers.defineProperty(_Object$freeze, utilities.NETWORK.kovan, ethereumIcon), _rollupPluginBabelHelpers.defineProperty(_Object$freeze, utilities.NETWORK.bsc, bscIcon), _rollupPluginBabelHelpers.defineProperty(_Object$freeze, utilities.NETWORK.poa, poaIcon), _rollupPluginBabelHelpers.defineProperty(_Object$freeze, utilities.NETWORK.xdai, xdaiIcon), _rollupPluginBabelHelpers.defineProperty(_Object$freeze, utilities.NETWORK.polygon, polygonIcon), _Object$freeze));

exports.NETWORK_MAPPING = NETWORK_MAPPING;
exports.NetworkIcon = NetworkIcon;
//# sourceMappingURL=NetworkIcon.js.map
