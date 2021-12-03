'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _rollupPluginBabelHelpers = require('../../../_virtual/_rollupPluginBabelHelpers.js');
var React = require('react');
var FeatherIcon = require('feather-icons-react');
var index = require('../../../node_modules/classnames/index.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var FeatherIcon__default = /*#__PURE__*/_interopDefaultLegacy(FeatherIcon);

var Collapse = function Collapse(props) {
  var title = props.title,
      children = props.children,
      className = props.className;

  var _useState = React.useState(false),
      _useState2 = _rollupPluginBabelHelpers.slicedToArray(_useState, 2),
      showContent = _useState2[0],
      setShowContent = _useState2[1];

  return /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null, /*#__PURE__*/React__default['default'].createElement("div", {
    className: index('flex cursor-pointer', className, {
      'mb-4 sm:mb-8': showContent
    }),
    onClick: function onClick() {
      return setShowContent(!showContent);
    }
  }, title && /*#__PURE__*/React__default['default'].createElement("div", {
    className: "font-bold text-base sm:text-2xl text-accent-1"
  }, title), /*#__PURE__*/React__default['default'].createElement(FeatherIcon__default['default'], {
    icon: "chevron-down",
    strokeWidth: "0.25rem",
    className: index('ml-3 sm:ml-4 my-auto w-3 h-3 sm:w-4 sm:h-4 my-auto stroke-current text-accent-1', {
      'rotate-180': showContent
    })
  })), showContent && children);
};

exports.Collapse = Collapse;
//# sourceMappingURL=Collapse.js.map
