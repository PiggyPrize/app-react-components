'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var FeatherIcon = require('feather-icons-react');
var ThemedClipSpinner = require('../../Loading/ThemedClipSpinner.js');
var Tooltip = require('../../Containers/Tooltip.js');
var BlockExplorerLink = require('../../Links/BlockExplorerLink.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var FeatherIcon__default = /*#__PURE__*/_interopDefaultLegacy(FeatherIcon);

function TransactionsListItem(props) {
  var tx = props.tx,
      t = props.t;
  var errorIcon = /*#__PURE__*/React__default['default'].createElement(FeatherIcon__default['default'], {
    icon: "help-circle",
    className: "list-item--icon relative w-5 h-5 text-red"
  });
  return /*#__PURE__*/React__default['default'].createElement("li", {
    key: tx.hash || Date.now(),
    className: "list-item rounded-lg relative p-2 -mx-2"
  }, /*#__PURE__*/React__default['default'].createElement("div", {
    className: "flex justify-between w-full"
  }, /*#__PURE__*/React__default['default'].createElement("div", {
    className: "pr-2"
  }, tx.hash ? /*#__PURE__*/React__default['default'].createElement(BlockExplorerLink.BlockExplorerLink, {
    chainId: tx.ethersTx.chainId,
    hash: tx.hash
  }, tx.name) : tx.name), /*#__PURE__*/React__default['default'].createElement("div", {
    className: "w-5"
  }, !tx.completed && /*#__PURE__*/React__default['default'].createElement("div", {
    className: "-l-1 -t-2",
    style: {
      transform: 'scale(0.9)'
    }
  }, /*#__PURE__*/React__default['default'].createElement(ThemedClipSpinner.ThemedClipSpinner, null)), tx.completed && !tx.error && /*#__PURE__*/React__default['default'].createElement(BlockExplorerLink.BlockExplorerLink, {
    noIcon: true,
    chainId: tx.ethersTx.chainId,
    hash: tx.hash
  }, /*#__PURE__*/React__default['default'].createElement(FeatherIcon__default['default'], {
    icon: "check-circle",
    className: "list-item--icon relative w-5 h-5 text-green"
  })), tx.reason && /*#__PURE__*/React__default['default'].createElement(Tooltip.Tooltip, {
    id: "tx-error",
    tip: tx.reason
  }, errorIcon), tx.error && !tx.reason && /*#__PURE__*/React__default['default'].createElement(BlockExplorerLink.BlockExplorerLink, {
    noIcon: true,
    chainId: tx.ethersTx.chainId,
    hash: tx.hash
  }, errorIcon))), tx.inWallet && /*#__PURE__*/React__default['default'].createElement("span", {
    className: "text-orange"
  }, tx.inWallet && /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null, (t === null || t === void 0 ? void 0 : t('pleaseConfirmInYourWallet')) || 'Please confirm in your wallet')));
}

exports.TransactionsListItem = TransactionsListItem;
//# sourceMappingURL=TransactionsListItem.js.map
