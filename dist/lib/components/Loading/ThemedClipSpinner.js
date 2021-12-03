'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var index = require('../../../node_modules/classnames/index.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

function ThemedClipSpinner(props) {
  var sizeClassName = props.sizeClassName,
      size = props.size,
      className = props.className;
  return /*#__PURE__*/React__default['default'].createElement("div", {
    className: index('lds-dual-ring', className, size ? '' : sizeClassName),
    style: size ? {
      width: size,
      height: size
    } : undefined
  });
}
ThemedClipSpinner.defaultProps = {
  sizeClassName: 'w-5 h-5'
};

exports.ThemedClipSpinner = ThemedClipSpinner;
//# sourceMappingURL=ThemedClipSpinner.js.map
