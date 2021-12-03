'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var index = require('../../../node_modules/classnames/index.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var Chip = function Chip(props) {
  var className = props.className,
      text = props.text;
  var bgClasses = props.bgClasses,
      textClasses = props.textClasses;
  bgClasses = bgClasses || 'bg-accent-grey-5';
  textClasses = textClasses || 'text-accent-1';
  var sizeClasses = props.size || 'text-xxxxs xs:text-xxxs sm:text-xxxs lg:text-xxxs';
  var classes = index('font-inter rounded-full text-center py-2 px-2', className, textClasses, bgClasses, sizeClasses);
  return /*#__PURE__*/React__default['default'].createElement("div", {
    className: classes,
    style: {
      lineHeight: '0.35rem'
    }
  }, text);
};

exports.Chip = Chip;
//# sourceMappingURL=Chip.js.map
