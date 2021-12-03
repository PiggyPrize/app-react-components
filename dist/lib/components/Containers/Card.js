'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var index = require('../../../node_modules/classnames/index.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var CardTheme = Object.freeze({
  "default": 'bg-card',
  purple: 'bg-card-purple'
});
var Card = function Card(props) {
  var children = props.children,
      className = props.className,
      paddingClassName = props.paddingClassName,
      sizeClassName = props.sizeClassName,
      backgroundClassName = props.backgroundClassName,
      theme = props.theme;
  return /*#__PURE__*/React__default['default'].createElement("div", {
    className: index('rounded-xl fadeIn animated', sizeClassName, paddingClassName, backgroundClassName || theme, className)
  }, children);
};
Card.defaultProps = {
  paddingClassName: 'p-4 xs:py-6 xs:px-8 sm:py-6 sm:px-12',
  sizeClassName: 'w-full',
  theme: CardTheme["default"]
};

exports.Card = Card;
exports.CardTheme = CardTheme;
//# sourceMappingURL=Card.js.map
