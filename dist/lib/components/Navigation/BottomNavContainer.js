'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

/**
 * TODO: Add proposal count
 * @param {*} props
 * @returns
 */

var BottomNavContainer = function BottomNavContainer(props) {
  return /*#__PURE__*/React__default['default'].createElement("nav", {
    className: "w-screen flex justify-center items-center b-0 l-0 r-0 bg-card-selected sm:hidden z-20 pb-6",
    style: {
      height: 96
    }
  }, props.children);
};

exports.BottomNavContainer = BottomNavContainer;
//# sourceMappingURL=BottomNavContainer.js.map
