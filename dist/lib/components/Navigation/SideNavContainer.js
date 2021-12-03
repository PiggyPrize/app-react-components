'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var index = require('../../../node_modules/classnames/index.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

/**
 * TODO: Add the proposal count
 * @param {*} props
 * @returns
 */

var SideNavContainer = function SideNavContainer(props) {
  var className = props.className,
      style = props.style;
  return /*#__PURE__*/React__default['default'].createElement("nav", {
    className: index(className, 'flex-col items-start hidden sm:block pt-8 sm:pt-0 pl-2 sm:pr-12 lg:pr-16 text-center'),
    style: style
  }, props.children);
};

exports.SideNavContainer = SideNavContainer;
//# sourceMappingURL=SideNavContainer.js.map
