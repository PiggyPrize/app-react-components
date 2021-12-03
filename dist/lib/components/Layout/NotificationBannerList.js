'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var jotai = require('jotai');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var notificationBannerVisibleAtom = jotai.atom(false);
/**
 * A list of potential notification banners to display at the very top of the page.
 * NOTE: The layout component is currently hardcoded to support the height of
 * the checkly banner on desktop, mobile is dynamic.
 * @param {*} props
 * @returns
 */

var NotificationBannerList = function NotificationBannerList(props) {
  return /*#__PURE__*/React__default['default'].createElement("div", {
    className: "flex flex-col w-full t-0 z-50"
  }, props.children);
};

exports.NotificationBannerList = NotificationBannerList;
exports.notificationBannerVisibleAtom = notificationBannerVisibleAtom;
//# sourceMappingURL=NotificationBannerList.js.map
