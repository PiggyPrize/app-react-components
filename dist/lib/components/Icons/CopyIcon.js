'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var index$1 = require('../../../node_modules/classnames/index.js');
var FeatherIcon = require('feather-icons-react');
var index = require('../../../node_modules/react-copy-to-clipboard/lib/index.js');
var poolToast = require('../../services/poolToast.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var FeatherIcon__default = /*#__PURE__*/_interopDefaultLegacy(FeatherIcon);

var CopyIcon = function CopyIcon(props) {
  var t = props.t,
      text = props.text,
      className = props.className;

  var handleCopy = function handleCopy() {
    poolToast.poolToast.success((t === null || t === void 0 ? void 0 : t('copiedToClipboard')) || 'Copied to clipboard');
  };

  return /*#__PURE__*/React__default['default'].createElement(index, {
    text: text,
    onCopy: handleCopy
  }, /*#__PURE__*/React__default['default'].createElement(FeatherIcon__default['default'], {
    icon: "copy",
    className: index$1('em-1 my-auto inline-block trans cursor-pointer hover:opacity-70', className)
  }));
};

exports.CopyIcon = CopyIcon;
//# sourceMappingURL=CopyIcon.js.map
