'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var index = require('../../../node_modules/classnames/index.js');
var index$1 = require('../../../node_modules/@pooltogether/evm-chains-extended/dist/cjs/index.js');
var utilities = require('@pooltogether/utilities');
var CopyIcon = require('../Icons/CopyIcon.js');
require('feather-icons-react');
var ExternalLink = require('./ExternalLink.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var BlockExplorerLink = function BlockExplorerLink(props) {
  var address = props.address,
      txHash = props.txHash,
      children = props.children,
      className = props.className,
      shorten = props.shorten,
      noIcon = props.noIcon,
      noText = props.noText,
      underline = props.underline,
      iconClassName = props.iconClassName,
      copyable = props.copyable,
      chainId = props.chainId,
      theme = props.theme;
  var url;

  if (txHash) {
    url = formatBlockExplorerTxUrl(txHash, chainId);
  } else if (address) {
    url = formatBlockExplorerAddressUrl(address, chainId);
  }

  var display = txHash || address;
  return /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null, /*#__PURE__*/React__default['default'].createElement(ExternalLink.ExternalLink, {
    underline: underline,
    theme: theme,
    className: index("inline-flex", className),
    href: url,
    noIcon: noIcon,
    iconClassName: iconClassName,
    title: "View on Block Explorer"
  }, children || /*#__PURE__*/React__default['default'].createElement("div", {
    className: "flex"
  }, /*#__PURE__*/React__default['default'].createElement("span", {
    className: index('inline-block', {
      'sm:hidden': !shorten
    })
  }, utilities.shorten(display)), /*#__PURE__*/React__default['default'].createElement("span", {
    className: index('hidden', {
      'sm:inline-block': !shorten
    })
  }, !noText && display))), copyable && /*#__PURE__*/React__default['default'].createElement(CopyIcon.CopyIcon, {
    className: "ml-2 my-auto",
    text: display
  }));
};
BlockExplorerLink.defaultProps = {
  noIcon: false,
  noText: false,
  noUnderline: false,
  theme: ExternalLink.LinkTheme["default"],
  iconClassName: 'h-4 w-4 ml-1 my-auto'
};

var formatBlockExplorerTxUrl = function formatBlockExplorerTxUrl(tx, networkId) {
  try {
    var blockExplorerUrl = index$1.cjs.getChain(Number(networkId)).blockExplorerUrls[0];
    return "".concat(blockExplorerUrl, "/tx/").concat(tx);
  } catch (e) {
    throw new Error('Chain ID not supported');
  }
};

var formatBlockExplorerAddressUrl = function formatBlockExplorerAddressUrl(address, networkId) {
  try {
    var blockExplorerUrl = index$1.cjs.getChain(Number(networkId)).blockExplorerUrls[0];
    return "".concat(blockExplorerUrl, "/address/").concat(address);
  } catch (e) {
    throw new Error('Chain ID not supported');
  }
};

exports.BlockExplorerLink = BlockExplorerLink;
//# sourceMappingURL=BlockExplorerLink.js.map
