'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var index = require('../../../node_modules/classnames/index.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

function CountBadge(props) {
  var title = props.title,
      textClassName = props.textClassName,
      bgClassName = props.bgClassName,
      count = props.count,
      sizeClassName = props.sizeClassName,
      className = props.className;
  return /*#__PURE__*/React__default['default'].createElement("span", {
    title: title,
    className: index('trans rounded-full flex flex-col items-center justify-center font-bold tracking-tight leading-none', sizeClassName, bgClassName, textClassName, className)
  }, /*#__PURE__*/React__default['default'].createElement("span", {
    className: "relative"
  }, count));
}
CountBadge.defaultProps = {
  bgClassName: 'bg-blue',
  sizeClassName: 'w-5 h-5 text-xxxs',
  textClassName: 'text-white'
};

exports.CountBadge = CountBadge;
//# sourceMappingURL=CountBadge.js.map
