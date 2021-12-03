'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

function ErrorsBox(props) {
  var errors = props.errors;
  var errorMessages = Object.values(errors).map(function (error) {
    return error.message;
  });
  return /*#__PURE__*/React__default['default'].createElement("div", {
    className: "font-semibold font-inter text-red text-center mb-2",
    style: {
      minHeight: 24
    }
  }, errorMessages.map(function (errorMsg) {
    return errorMsg;
  }));
}

exports.ErrorsBox = ErrorsBox;
//# sourceMappingURL=ErrorsBox.js.map
