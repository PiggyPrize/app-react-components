'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
require('feather-icons-react');
var Modal = require('../../Modal/Modal.js');
var WalletInfo = require('./WalletInfo.js');
var TransactionsList = require('./TransactionsList.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var TransactionsModal = function TransactionsModal(props) {
  var isOpen = props.isOpen,
      closeModal = props.closeModal,
      t = props.t;
  return /*#__PURE__*/React__default['default'].createElement(Modal.Modal, {
    isOpen: isOpen,
    closeModal: closeModal,
    className: "h-full sm:h-auto sm:max-w-4xl",
    label: "transactions modal",
    noPad: true,
    noSize: true
  }, /*#__PURE__*/React__default['default'].createElement("div", {
    className: "p-8"
  }, /*#__PURE__*/React__default['default'].createElement(WalletInfo.WalletInfo, {
    closeModal: closeModal
  })), /*#__PURE__*/React__default['default'].createElement("div", {
    className: "p-8 bg-primary rounded-none sm:rounded-b-xl"
  }, /*#__PURE__*/React__default['default'].createElement(TransactionsList.TransactionsList, {
    closeTransactions: closeModal,
    t: t
  })));
};

exports.TransactionsModal = TransactionsModal;
//# sourceMappingURL=TransactionsModal.js.map
