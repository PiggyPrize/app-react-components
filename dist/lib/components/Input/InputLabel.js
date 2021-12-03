'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var InputLabel = function InputLabel(props) {
  var primary = props.primary,
      secondary = props.secondary,
      description = props.description,
      children = props.children,
      className = props.className;
  return /*#__PURE__*/React__default['default'].createElement("div", {
    className: className
  }, primary && /*#__PURE__*/React__default['default'].createElement("div", {
    className: "font-bold mb-2 sm:mb-6 text-lg sm:text-3xl text-accent-1"
  }, primary), secondary && /*#__PURE__*/React__default['default'].createElement("div", {
    className: "font-bold mb-2 sm:mb-4 text-base sm:text-xl text-accent-1"
  }, secondary), description && /*#__PURE__*/React__default['default'].createElement("div", {
    className: "mb-4 sm:mb-4 text-sm sm:text-base text-accent-1"
  }, description), children);
};

exports.InputLabel = InputLabel;
//# sourceMappingURL=InputLabel.js.map
