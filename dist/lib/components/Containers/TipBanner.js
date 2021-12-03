'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var index = require('../../../node_modules/classnames/index.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var TipBanner = function TipBanner(props) {
  var _props$t;

  return /*#__PURE__*/React__default['default'].createElement("div", {
    className: index('rounded-xl', props.paddingClassName, props.className, props.sizeClassName, props.backgroundClassName, props.borderClassName)
  }, /*#__PURE__*/React__default['default'].createElement("div", {
    className: "flex flex-col sm:flex-row justify-between"
  }, /*#__PURE__*/React__default['default'].createElement("div", {
    className: "flex mb-4 sm:mb-0"
  }, /*#__PURE__*/React__default['default'].createElement("span", {
    className: "pool-gradient-1 rounded-full h-fit-content px-4 font-bold mr-4 my-auto text-white"
  }, ((_props$t = props.t) === null || _props$t === void 0 ? void 0 : _props$t.call(props, 'tip')) || 'Tip'), /*#__PURE__*/React__default['default'].createElement("h5", null, props.title)), /*#__PURE__*/React__default['default'].createElement("div", {
    className: "flex mb-4 sm:mb-0"
  }, props.links)), /*#__PURE__*/React__default['default'].createElement("div", {
    className: "text-accent-1"
  }, props.children));
};
TipBanner.defaultProps = {
  paddingClassName: 'p-4 xs:py-6 xs:px-8 sm:py-6 sm:px-12',
  sizeClassName: 'w-full',
  backgroundClassName: 'bg-default',
  borderClassName: 'border border-default'
};

exports.TipBanner = TipBanner;
//# sourceMappingURL=TipBanner.js.map
