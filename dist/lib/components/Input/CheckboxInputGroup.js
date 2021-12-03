'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var index = require('../../../node_modules/classnames/index.js');
var Tooltip = require('../Containers/Tooltip.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var CheckboxInputGroup = function CheckboxInputGroup(props) {
  var _marginClasses;

  var id = props.id;
      props.disabled;
      var hint = props.hint;
      props.title;
      var label = props.label,
      handleClick = props.handleClick,
      checked = props.checked;
  var marginClasses = props.marginClasses;
  var defaultClasses = 'font-bold flex justify-start items-start xs:items-center trans trans-faster cursor-pointer font-bold outline-none focus:outline-none hover:outline-none active:outline-none leading-none px-0 py-1';
  var roundedClasses = 'rounded-sm';
  marginClasses = (_marginClasses = marginClasses) !== null && _marginClasses !== void 0 ? _marginClasses : 'mt-1 mb-1 sm:mb-3 lg:mb-4';
  var textClasses = 'text-xxs';
  return /*#__PURE__*/React__default['default'].createElement("div", {
    className: index(defaultClasses, textClasses, marginClasses, roundedClasses, {
      'text-white inner-lg': checked,
      'text-white': !checked
    }),
    onClick: handleClick
  }, /*#__PURE__*/React__default['default'].createElement("div", {
    id: id,
    onClick: handleClick,
    className: index('flex items-center justify-center my-auto mr-3 leading-none')
  }, /*#__PURE__*/React__default['default'].createElement("div", {
    className: index('flex items-center rounded-sm w-4 h-4 border-2 trans', {
      'text-white border-white hover:border-white': checked,
      'text-darkened border-white hover:border-green': !checked
    })
  }, /*#__PURE__*/React__default['default'].createElement("svg", {
    className: index('relative check', {
      checked: checked
    }),
    width: "135",
    height: "110",
    viewBox: "0 0 135 110"
  }, /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M96.8002 0L30.7002 66.1L0.200195 37.4"
  })))), /*#__PURE__*/React__default['default'].createElement("div", {
    className: "text-left flex flex-col items-start justify-start leading-snug"
  }, label), hint && /*#__PURE__*/React__default['default'].createElement(Tooltip.Tooltip, {
    tip: hint,
    id: id
  }));
};

exports.CheckboxInputGroup = CheckboxInputGroup;
//# sourceMappingURL=CheckboxInputGroup.js.map
