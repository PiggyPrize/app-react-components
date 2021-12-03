'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
require('@pooltogether/hooks');
var HeaderLogo = require('./HeaderLogo.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

// import { NavPoolBalance } from "lib/components/NavPoolBalance";
// import { PendingTxButton } from "lib/components/PendingTxButton";
// import { NavAccount } from "lib/components/NavAccount";
// import { LanguagePicker } from "lib/components/LanguagePicker";
// import { Settings } from "lib/components/Settings";

/**
 * TODO: Migrate remaining components
 * @returns
 */

var PageHeaderContainer = function PageHeaderContainer(props) {
  var Link = props.Link,
      as = props.as,
      href = props.href;
  return /*#__PURE__*/React__default['default'].createElement("div", {
    className: "flex justify-between items-center mx-auto max-w-screen-lg px-4 sm:px-8 py-4 sm:pb-6 sm:pt-5"
  }, /*#__PURE__*/React__default['default'].createElement(Link, {
    as: as,
    href: href
  }, /*#__PURE__*/React__default['default'].createElement("a", null, /*#__PURE__*/React__default['default'].createElement(HeaderLogo.HeaderLogo, null))), /*#__PURE__*/React__default['default'].createElement("div", {
    className: "flex flex-row justify-end my-auto"
  }, props.children));
};

exports.PageHeaderContainer = PageHeaderContainer;
//# sourceMappingURL=PageHeaderContainer.js.map
