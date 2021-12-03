'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _rollupPluginBabelHelpers = require('../../../../_virtual/_rollupPluginBabelHelpers.js');
var React = require('react');
var hooks = require('@pooltogether/hooks');
var NetworkModal = require('./NetworkModal.js');
var NetworkTrigger = require('./NetworkTrigger.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var NetworkSelector = function NetworkSelector(props) {
  var t = props.t,
      supportedNetworks = props.supportedNetworks,
      className = props.className;

  var _useState = React.useState(false),
      _useState2 = _rollupPluginBabelHelpers.slicedToArray(_useState, 2),
      isOpen = _useState2[0],
      setIsOpen = _useState2[1];

  var _useOnboard = hooks.useOnboard(),
      isWalletConnected = _useOnboard.isWalletConnected;

  return /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null, isWalletConnected && /*#__PURE__*/React__default['default'].createElement(NetworkTrigger.NetworkTrigger, {
    t: t,
    openModal: function openModal() {
      return setIsOpen(true);
    },
    className: className
  }), /*#__PURE__*/React__default['default'].createElement(NetworkModal.NetworkModal, {
    t: t,
    isOpen: isOpen,
    closeModal: function closeModal() {
      return setIsOpen(false);
    },
    supportedNetworks: supportedNetworks
  }));
};

exports.NetworkSelector = NetworkSelector;
//# sourceMappingURL=index.js.map
