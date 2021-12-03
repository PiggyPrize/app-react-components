'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _rollupPluginBabelHelpers = require('../../../_virtual/_rollupPluginBabelHelpers.js');
var React = require('react');
var index = require('../../../node_modules/classnames/index.js');
var FeatherIcon = require('feather-icons-react');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var FeatherIcon__default = /*#__PURE__*/_interopDefaultLegacy(FeatherIcon);

var NotificationBannerContainer = function NotificationBannerContainer(props) {
  var canClose = props.canClose;

  var _useState = React.useState(false),
      _useState2 = _rollupPluginBabelHelpers.slicedToArray(_useState, 2),
      userHasClosedBanner = _useState2[0],
      setUserHasClosedBanner = _useState2[1];

  if (userHasClosedBanner) return null;
  return /*#__PURE__*/React__default['default'].createElement("div", {
    className: index("z-50 flex relative", props.className, {
      "text-center": !props.noCenter
    })
  }, /*#__PURE__*/React__default['default'].createElement("div", {
    className: "max-w-screen-lg sm:px-6 py-2 sm:py-3 mx-auto flex-grow px-8"
  }, props.children), canClose && /*#__PURE__*/React__default['default'].createElement(CloseBannerButton, {
    closeBanner: function closeBanner() {
      return setUserHasClosedBanner(true);
    }
  }));
};

var CloseBannerButton = function CloseBannerButton(props) {
  return /*#__PURE__*/React__default['default'].createElement("button", {
    className: "absolute r-1 t-1 opacity-70 hover:opacity-100 cursor-pointer trans",
    onClick: function onClick() {
      return props.closeBanner();
    }
  }, /*#__PURE__*/React__default['default'].createElement(FeatherIcon__default['default'], {
    icon: "x",
    className: "h-4 w-4 sm:h-6 sm:w-6"
  }));
};

exports.NotificationBannerContainer = NotificationBannerContainer;
//# sourceMappingURL=NotificationBannerContainer.js.map
