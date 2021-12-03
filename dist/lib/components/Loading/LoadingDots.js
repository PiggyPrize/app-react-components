'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var index = require('../../../node_modules/classnames/index.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var LoadingDots = function LoadingDots(props) {
  return /*#__PURE__*/React__default['default'].createElement("span", {
    className: index('lds-ellipsis', props.className)
  }, /*#__PURE__*/React__default['default'].createElement("span", null), /*#__PURE__*/React__default['default'].createElement("span", null), /*#__PURE__*/React__default['default'].createElement("span", null), /*#__PURE__*/React__default['default'].createElement("span", null));
};

exports.LoadingDots = LoadingDots;
//# sourceMappingURL=LoadingDots.js.map
