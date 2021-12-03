'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var index = require('../../../node_modules/classnames/index.js');
var ExternalLink = require('./ExternalLink.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var InternalLink = function InternalLink(props) {
  return /*#__PURE__*/React__default['default'].createElement(props.Link, {
    href: props.href,
    as: props.as,
    shallow: props.shallow
  }, /*#__PURE__*/React__default['default'].createElement("a", {
    className: index('trans', props.className, props.displayClassName, props.colorClassName || props.theme, {
      'underline': props.underline,
      'no-underline': !props.underline
    }),
    title: props.title
  }, props.children));
};
InternalLink.defaultProps = {
  underline: false,
  noIcon: false,
  iconClassName: 'w-4 h-4 ml-1',
  openInSameTab: false,
  theme: ExternalLink.LinkTheme["default"],
  displayClassName: 'inline-block h-fit-content'
};

exports.InternalLink = InternalLink;
//# sourceMappingURL=InternalLink.js.map
