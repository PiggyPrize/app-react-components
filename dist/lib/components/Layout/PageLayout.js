'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _rollupPluginBabelHelpers = require('../../../_virtual/_rollupPluginBabelHelpers.js');
var React = require('react');
var jotai = require('jotai');
var hooks = require('@pooltogether/hooks');
var NotificationBannerList = require('./NotificationBannerList.js');
var index = require('../../../node_modules/framer-motion/dist/es/components/AnimatePresence/index.js');
var motion = require('../../../node_modules/framer-motion/dist/es/render/dom/motion.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

/**
 * Default layout includes a page header, side nav for desktop screens and bottom nav for mobile
 * @param {*} props
 * @returns
 */

var DefaultLayout = function DefaultLayout(props) {
  var content = props.content,
      header = props.header,
      sideNav = props.sideNav,
      bottomNav = props.bottomNav,
      footer = props.footer,
      banner = props.banner,
      router = props.router;
  return /*#__PURE__*/React__default['default'].createElement(AnimatedPageGrid, {
    router: router,
    banner: /*#__PURE__*/React__default['default'].createElement(NotificationBannerList.NotificationBannerList, null, banner),
    header: header,
    content: content,
    sideNavigation: sideNav,
    bottomNavigation: bottomNav,
    footer: footer
  });
};
/**
 * Simple layout does not include a sidebar or mobile navigation
 * Any navigation is expected to be floating or in the header
 * @param {*} props
 * @returns
 */

var SimpleLayout = function SimpleLayout(props) {
  var content = props.content,
      header = props.header,
      footer = props.footer,
      banner = props.banner;
  return /*#__PURE__*/React__default['default'].createElement(SimplePageGrid, {
    banner: /*#__PURE__*/React__default['default'].createElement(NotificationBannerList.NotificationBannerList, null, banner),
    header: header,
    content: content,
    footer: footer
  });
}; //

/**
 * Generic page layout component
 * Small screens displays navigation at the bottom of the page
 * Anything larger than sm has a sidebar
 */

var DefaultPageGrid = function DefaultPageGrid(_ref) {
  var banner = _ref.banner,
      header = _ref.header,
      sideNavigation = _ref.sideNavigation,
      bottomNavigation = _ref.bottomNavigation,
      content = _ref.content,
      footer = _ref.footer;
  var screenSize = hooks.useScreenSize();

  if (screenSize <= hooks.ScreenSize.sm) {
    return /*#__PURE__*/React__default['default'].createElement("div", {
      className: "grid-page-wrapper"
    }, /*#__PURE__*/React__default['default'].createElement("div", {
      className: "grid-header-wrapper bg-body z-10"
    }, /*#__PURE__*/React__default['default'].createElement("div", {
      className: "grid-banner"
    }, banner), /*#__PURE__*/React__default['default'].createElement("div", {
      className: "grid-header w-full bg-body z-10 mx-auto l-0 r-0"
    }, header)), /*#__PURE__*/React__default['default'].createElement(ContentWithFooter, {
      content: content,
      footer: footer
    }), /*#__PURE__*/React__default['default'].createElement("div", {
      className: "bottom-navigation fixed b-0"
    }, bottomNavigation));
  }

  return /*#__PURE__*/React__default['default'].createElement("div", {
    className: "grid-page-wrapper"
  }, /*#__PURE__*/React__default['default'].createElement("div", {
    className: "grid-header-wrapper bg-body z-10 w-full"
  }, /*#__PURE__*/React__default['default'].createElement("div", {
    className: "grid-banner"
  }, banner), /*#__PURE__*/React__default['default'].createElement("div", {
    className: "grid-header w-full bg-body z-10 mx-auto l-0 r-0"
  }, header)), /*#__PURE__*/React__default['default'].createElement(ContentWithSideNavigation, {
    content: content,
    footer: footer,
    sideNavigation: sideNavigation
  }));
};
/**
 * Generic page layout component
 * Small screens displays navigation at the bottom of the page
 * Anything larger than sm has a sidebar
 */


var SimplePageGrid = function SimplePageGrid(_ref2) {
  var banner = _ref2.banner,
      header = _ref2.header,
      content = _ref2.content,
      footer = _ref2.footer;
  return /*#__PURE__*/React__default['default'].createElement("div", {
    className: "grid-page-wrapper"
  }, /*#__PURE__*/React__default['default'].createElement("div", {
    className: "grid-header-wrapper bg-body z-10"
  }, /*#__PURE__*/React__default['default'].createElement("div", {
    className: "grid-banner"
  }, banner), /*#__PURE__*/React__default['default'].createElement("div", {
    className: "grid-header w-full bg-body z-10 mx-auto l-0 r-0"
  }, header)), /*#__PURE__*/React__default['default'].createElement(ContentWithFooter, {
    content: content,
    footer: footer
  }));
}; //

/**
 * Simple wrapper for PageGrid with animations on the page content
 * // TODO: Add back the router funnelling for the key!
 */


var AnimatedPageGrid = function AnimatedPageGrid(_ref3) {
  var banner = _ref3.banner,
      header = _ref3.header,
      sideNavigation = _ref3.sideNavigation,
      bottomNavigation = _ref3.bottomNavigation,
      content = _ref3.content,
      footer = _ref3.footer,
      router = _ref3.router;
  return /*#__PURE__*/React__default['default'].createElement(DefaultPageGrid, {
    banner: banner,
    header: header,
    content: /*#__PURE__*/React__default['default'].createElement(AnimateContent, {
      router: router
    }, content),
    footer: footer,
    sideNavigation: sideNavigation,
    bottomNavigation: bottomNavigation
  });
};
/**
 * Page content with a footer pushed to the bottom of the screen
 */


var ContentWithFooter = function ContentWithFooter(_ref4) {
  var content = _ref4.content,
      footer = _ref4.footer;
  return /*#__PURE__*/React__default['default'].createElement("div", {
    className: "grid-content-with-footer sticky pb-24 sm:pb-0"
  }, /*#__PURE__*/React__default['default'].createElement(Content, null, content), /*#__PURE__*/React__default['default'].createElement("div", {
    className: "grid-footer"
  }, footer));
};
/**
 * Page content with a footer pushed to the bottom of the screen
 * and a navigation bar to the left side
 */


var ContentWithSideNavigation = function ContentWithSideNavigation(_ref5) {
  var content = _ref5.content,
      footer = _ref5.footer,
      sideNavigation = _ref5.sideNavigation;

  var _useAtom = jotai.useAtom(NotificationBannerList.notificationBannerVisibleAtom),
      _useAtom2 = _rollupPluginBabelHelpers.slicedToArray(_useAtom, 1),
      notificationBannerVisible = _useAtom2[0];

  var top = notificationBannerVisible ? 184 : 138;
  return /*#__PURE__*/React__default['default'].createElement("div", {
    className: "desktop-content-wrapper flex justify-between w-full mx-auto pt-8"
  }, /*#__PURE__*/React__default['default'].createElement("div", {
    className: "fixed",
    style: {
      top: top,
      height: "calc(100% - ".concat(top, "px)")
    }
  }, sideNavigation), /*#__PURE__*/React__default['default'].createElement("div", {
    className: "push-sidebar-padding flex flex-col flex-1"
  }, /*#__PURE__*/React__default['default'].createElement(Content, null, content), footer));
};
/**
 * Lowest level wrapper of page content
 * Base padding so content isn't touching the edge of the screen
 */


var Content = function Content(_ref6) {
  var children = _ref6.children;
  return /*#__PURE__*/React__default['default'].createElement("div", {
    className: "grid-content p-4 sm:pt-0 sm:px-8 lg:pt-0 lg:px-10 text-inverse max-w-5xl lg:max-w-6xl w-full mx-auto lg:ml-auto"
  }, children);
};
/**
 * Simple wrapper for Content with animation
 */


var AnimateContent = function AnimateContent(props) {
  var shouldReduceMotion = hooks.useReducedMotion();
  var router = props.router;
  return /*#__PURE__*/React__default['default'].createElement(index.AnimatePresence, {
    exitBeforeEnter: true
  }, /*#__PURE__*/React__default['default'].createElement(motion.motion.div, {
    id: "content-animation-wrapper",
    key: router === null || router === void 0 ? void 0 : router.route,
    transition: {
      duration: shouldReduceMotion ? 0 : 0.3,
      ease: 'easeIn'
    },
    initial: {
      opacity: 0
    },
    exit: {
      opacity: 0
    },
    animate: {
      opacity: 1
    },
    className: "mx-auto w-full"
  }, props.children));
};

exports.DefaultLayout = DefaultLayout;
exports.SimpleLayout = SimpleLayout;
//# sourceMappingURL=PageLayout.js.map
