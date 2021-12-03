'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var LoadingLogo = require('./LoadingLogo.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var LoadingScreen = function LoadingScreen(props) {
  var isInitialized = props.isInitialized;

  if (!isInitialized) {
    return /*#__PURE__*/React__default['default'].createElement("div", {
      className: "w-screen h-screen flex flex-col justify-center"
    }, /*#__PURE__*/React__default['default'].createElement(LoadingLogo.LoadingLogo, {
      className: "mx-auto"
    }));
  }

  return props.children;
};

exports.LoadingScreen = LoadingScreen;
//# sourceMappingURL=LoadingScreen.js.map
