'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _rollupPluginBabelHelpers = require('../../../_virtual/_rollupPluginBabelHelpers.js');
var React = require('react');
var index = require('../../../node_modules/classnames/index.js');
var FeatherIcon = require('feather-icons-react');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var FeatherIcon__default = /*#__PURE__*/_interopDefaultLegacy(FeatherIcon);

var _excluded = ["className"];
var LinkIcon = function LinkIcon(props) {
  var className = props.className,
      remainingProps = _rollupPluginBabelHelpers.objectWithoutProperties(props, _excluded);

  return /*#__PURE__*/React__default['default'].createElement(FeatherIcon__default['default'], _rollupPluginBabelHelpers['extends']({}, remainingProps, {
    icon: "arrow-up-right",
    className: index('inline-block', className)
  }));
};

exports.LinkIcon = LinkIcon;
//# sourceMappingURL=LinkIcon.js.map
