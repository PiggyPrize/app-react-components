'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var index = require('../../../node_modules/classnames/index.js');
require('feather-icons-react');
require('../../../node_modules/react-copy-to-clipboard/lib/index.js');
require('../../services/poolToast.js');
var LinkIcon = require('../Icons/LinkIcon.js');
require('../Icons/TokenIcon.js');
require('@pooltogether/utilities');
require('../../constants.js');
require('../Icons/NetworkIcon.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var LinkTheme = Object.freeze({
  "default": 'text-inverse hover:text-highlight-1',
  accent: 'text-highlight-1 hover:text-inverse',
  light: 'text-accent-1 hover:text-highlight-1'
});
var ExternalLink = function ExternalLink(props) {
  return /*#__PURE__*/React__default['default'].createElement("a", {
    className: index('trans', props.className, props.displayClassName, props.colorClassName || props.theme, {
      'underline': props.underline,
      'no-underline': !props.underline
    }),
    rel: "noopener noreferrer",
    target: props.openInSameTab ? undefined : '_blank',
    href: props.href,
    title: props.title
  }, props.children, !props.openInSameTab && !props.noIcon && /*#__PURE__*/React__default['default'].createElement(LinkIcon.LinkIcon, {
    className: props.iconClassName
  }));
};
ExternalLink.defaultProps = {
  underline: false,
  noIcon: false,
  iconClassName: 'w-4 h-4 ml-1 mb-1',
  openInSameTab: false,
  theme: LinkTheme["default"],
  displayClassName: 'inline-block h-fit-content'
};

exports.ExternalLink = ExternalLink;
exports.LinkTheme = LinkTheme;
//# sourceMappingURL=ExternalLink.js.map
