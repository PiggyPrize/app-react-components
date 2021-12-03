'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _rollupPluginBabelHelpers = require('../../../_virtual/_rollupPluginBabelHelpers.js');
var React = require('react');
var index = require('../../../node_modules/classnames/index.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var Tabs = function Tabs(_ref) {
  var children = _ref.children,
      className = _ref.className;
  return /*#__PURE__*/React__default['default'].createElement("nav", {
    className: index('flex', className)
  }, children);
};
var Tab = function Tab(props) {
  var _classnames;

  var isSelected = props.isSelected,
      onClick = props.onClick,
      children = props.children,
      className = props.className,
      textClassName = props.textClassName,
      tabDeselectedClassName = props.tabDeselectedClassName,
      tabSelectedClassName = props.tabSelectedClassName;
  return /*#__PURE__*/React__default['default'].createElement("a", {
    onClick: onClick,
    className: index(className, textClassName, 'cursor-pointer capitalize leading-none trans tracking-wider outline-none focus:outline-none active:outline-none font-bold', (_classnames = {}, _rollupPluginBabelHelpers.defineProperty(_classnames, tabDeselectedClassName, !isSelected), _rollupPluginBabelHelpers.defineProperty(_classnames, tabSelectedClassName, isSelected), _classnames))
  }, children);
};
Tab.defaultProps = {
  className: '',
  textClassName: 'text-sm xs:text-lg lg:text-xl',
  tabDeselectedClassName: 'text-accent-1 hover:text-inverse border-transparent hover:border-highlight-2 hover:bg-card-selected',
  tabSelectedClassName: 'text-accent-3 border-default bg-card-selected'
};
var Content = function Content(_ref2) {
  var children = _ref2.children,
      className = _ref2.className;
  return /*#__PURE__*/React__default['default'].createElement("div", {
    className: className
  }, children);
};
var ContentPane = function ContentPane(_ref3) {
  var _classnames2;

  var children = _ref3.children,
      className = _ref3.className,
      isSelected = _ref3.isSelected,
      alwaysPresent = _ref3.alwaysPresent;
  var hiddenClassName = 'hidden';

  if (alwaysPresent) {
    hiddenClassName = 'pointer-events-none opacity-0 w-0 flex-shrink';
  }

  return /*#__PURE__*/React__default['default'].createElement("div", {
    className: index((_classnames2 = {}, _rollupPluginBabelHelpers.defineProperty(_classnames2, hiddenClassName, !isSelected), _rollupPluginBabelHelpers.defineProperty(_classnames2, className, isSelected), _classnames2))
  }, children);
};

exports.Content = Content;
exports.ContentPane = ContentPane;
exports.Tab = Tab;
exports.Tabs = Tabs;
//# sourceMappingURL=Tabs.js.map
