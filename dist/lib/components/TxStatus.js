'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _rollupPluginBabelHelpers = require('../../_virtual/_rollupPluginBabelHelpers.js');
var React = require('react');
var FeatherIcon = require('feather-icons-react');
var index = require('../../node_modules/react-loader-spinner/dist/index.js');
var Banner = require('./Containers/Banner.js');
var BlockExplorerLink = require('./Links/BlockExplorerLink.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var FeatherIcon__default = /*#__PURE__*/_interopDefaultLegacy(FeatherIcon);

var TxStatus = function TxStatus(props) {
  var chainId = props.chainId,
      t = props.t,
      tx = props.tx,
      title = props.title,
      subtitle = props.subtitle;
  var hideOnInWallet = props.hideOnInWallet,
      hideOnSent = props.hideOnSent,
      hideOnSuccess = props.hideOnSuccess,
      hideOnError = props.hideOnError;
  var inWalletMessage = props.inWalletMessage,
      sentMessage = props.sentMessage,
      successMessage = props.successMessage,
      errorMessage = props.errorMessage;

  var _useState = React.useState(false),
      _useState2 = _rollupPluginBabelHelpers.slicedToArray(_useState, 2),
      showExtraMessage = _useState2[0],
      setShowExtraMessage = _useState2[1];

  var txCancelled = tx === null || tx === void 0 ? void 0 : tx.cancelled;
  var txInWallet = (tx === null || tx === void 0 ? void 0 : tx.inWallet) && !(tx !== null && tx !== void 0 && tx.sent);
  var txSent = (tx === null || tx === void 0 ? void 0 : tx.sent) && !(tx !== null && tx !== void 0 && tx.completed);
  var txCompleted = tx === null || tx === void 0 ? void 0 : tx.completed;
  var txError = Boolean(tx === null || tx === void 0 ? void 0 : tx.error);
  var transactionStatusText = t ? t('transactionStatus') : 'Transaction status';
  var pleaseConfirmInWalletText = t ? t('pleaseConfirmInYourWallet') : 'Please confirm in your wallet';
  var transactionSentConfirmingText = t ? t('transactionSentConfirming') : 'Transaction confirming ...';
  var transactionSuccessfulText = t ? t('transactionSuccessful') : 'Transaction successful!';
  var transactionFailedText = t ? t('transactionFailed') : 'Transaction failed';
  var transactionHashText = t ? t('transactionHash') : 'Transaction hash:';
  var transactionsMayTakeAFewMinutesText = t ? t('transactionsMayTakeAFewMinutes') : 'Transactions may take a few minutes.';
  React.useEffect(function () {
    var key;

    if (txSent) {
      key = setTimeout(function () {
        return setShowExtraMessage(true);
      }, 15000);
    }

    return function () {
      key && clearTimeout(key);
    };
  }, [txSent]);
  if (!tx) return null;
  if (txCancelled) return null;
  if (hideOnInWallet && txInWallet) return null;
  if (hideOnSent && txSent) return null;
  if (hideOnSuccess && txCompleted) return null;
  if (hideOnError && txError) return null;
  return /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null, title && /*#__PURE__*/React__default['default'].createElement("h3", {
    className: "text-inverse mb-4"
  }, title), subtitle && /*#__PURE__*/React__default['default'].createElement("h6", {
    className: "text-accent-1 mb-4"
  }, subtitle), /*#__PURE__*/React__default['default'].createElement(Banner.Banner, {
    className: "flex flex-col"
  }, txSent && !txCompleted && !txError && /*#__PURE__*/React__default['default'].createElement(index, {
    type: "Oval",
    height: 50,
    width: 50,
    color: "#bbb2ce",
    className: "mx-auto mb-4"
  }), txCompleted && !txError && /*#__PURE__*/React__default['default'].createElement(FeatherIcon__default['default'], {
    icon: "check-circle",
    className: 'mx-auto stroke-1 w-16 h-16 stroke-current text-green mb-4'
  }), txCompleted && txError && /*#__PURE__*/React__default['default'].createElement(FeatherIcon__default['default'], {
    icon: "x-circle",
    className: 'mx-auto stroke-1 w-16 h-16 stroke-current text-red mb-4'
  }), /*#__PURE__*/React__default['default'].createElement("div", {
    className: "text-accent-1 opacity-80 text-sm sm:text-base"
  }, transactionStatusText), txInWallet && !txError && /*#__PURE__*/React__default['default'].createElement("div", {
    className: "text-sm sm:text-base text-inverse"
  }, inWalletMessage ? inWalletMessage : pleaseConfirmInWalletText), txSent && /*#__PURE__*/React__default['default'].createElement("div", {
    className: "text-sm sm:text-base text-inverse"
  }, sentMessage ? sentMessage : transactionSentConfirmingText), txCompleted && !txError && /*#__PURE__*/React__default['default'].createElement("div", {
    className: "text-green text-sm sm:text-base"
  }, successMessage ? successMessage : transactionSuccessfulText), txError && /*#__PURE__*/React__default['default'].createElement("div", {
    className: "text-red text-sm sm:text-base"
  }, errorMessage ? errorMessage : transactionFailedText), tx.hash && /*#__PURE__*/React__default['default'].createElement("div", {
    className: "text-xxs sm:text-sm text-accent-1 opacity-80 mt-2"
  }, transactionHashText, /*#__PURE__*/React__default['default'].createElement(BlockExplorerLink.BlockExplorerLink, {
    chainId: chainId,
    hash: tx.hash,
    className: "underline text-accent-1 opacity-80",
    shorten: true
  })), showExtraMessage && /*#__PURE__*/React__default['default'].createElement("div", {
    className: "text-xxs sm:text-sm text-accent-4 mt-2"
  }, transactionsMayTakeAFewMinutesText)));
};
TxStatus.defaultProps = {
  hideOnError: false,
  hideOnSuccess: false,
  hideOnInWallet: false,
  hideOnSent: false,
  hideExtraMessage: false
};

exports.TxStatus = TxStatus;
//# sourceMappingURL=TxStatus.js.map
