'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var hooks = require('@pooltogether/hooks');
var utilities = require('@pooltogether/utilities');
var React = require('react');
var index = require('../../../../node_modules/classnames/index.js');
var networkColorClassnames = require('../../../utils/networkColorClassnames.js');
var NetworkIcon = require('../../Icons/NetworkIcon.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var NetworkTrigger = function NetworkTrigger(props) {
  var openModal = props.openModal,
      className = props.className;

  var _useOnboard = hooks.useOnboard(),
      walletChainId = _useOnboard.network;

  var screenSize = hooks.useScreenSize();
  var networkName = utilities.getNetworkNiceNameByChainId(walletChainId);

  if (screenSize <= hooks.ScreenSize.sm) {
    return /*#__PURE__*/React__default['default'].createElement(NetworkIcon.NetworkIcon, {
      onClick: openModal,
      className: className,
      sizeClassName: "h-6 w-6",
      chainId: walletChainId
    });
  }

  return /*#__PURE__*/React__default['default'].createElement("button", {
    onClick: openModal,
    className: index('tracking-wide flex items-center capitalize trans trans-fast font-bold', 'bg-default hover:bg-body hover:text-inverse border border-accent-4 hover:border-primary', 'text-xxs sm:text-xs xs:px-4 py-1 rounded-full', "text-".concat(networkColorClassnames.networkTextColorClassname(walletChainId)), className)
  }, /*#__PURE__*/React__default['default'].createElement(NetworkIcon.NetworkIcon, {
    className: "",
    sizeClassName: "h-6 w-6 mr-2",
    chainId: walletChainId
  }), /*#__PURE__*/React__default['default'].createElement("span", {
    className: "capitalize hidden xs:block"
  }, networkName));
};

exports.NetworkTrigger = NetworkTrigger;
//# sourceMappingURL=NetworkTrigger.js.map
