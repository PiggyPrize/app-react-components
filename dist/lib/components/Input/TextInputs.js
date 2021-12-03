'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _rollupPluginBabelHelpers = require('../../../_virtual/_rollupPluginBabelHelpers.js');
var React = require('react');
var index = require('../../../node_modules/classnames/index.js');
var lodash = require('lodash');
var main = require('../../../node_modules/react-device-detect/main.js');
var constants = require('../../constants.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var _excluded = ["autoFocus", "value"];

var sanitizeProps = function sanitizeProps(props) {
  return lodash.omit(props, ['alignLeft', 'label', 'small', 'large', 'marginClassName', 'paddingClassName', 'borderClassName', 'bgClassName', 'inlineButton', 'roundedClassName', 'textClassName', 'isError', 'isLight', 'register', 'required', // required is consumed by the register func but we don't want it on the <input />
  'pattern', 'validate', 'unsignedNumber', 'unsignedWholeNumber', 'rightLabel', 'bottomRightLabel']);
};

var collectClassNames = function collectClassNames(props) {
  return index(constants.DEFAULT_INPUT_CLASS_NAME, props.marginClassName, props.paddingClassName, props.borderClassName, props.bgClassName, props.textClassName, props.roundedClassName, props.className, {
    'text-red': props.isError
  });
};

var SimpleInput = function SimpleInput(props) {
  var autoFocus = props.autoFocus,
      value = props.value,
      inputProps = _rollupPluginBabelHelpers.objectWithoutProperties(props, _excluded);

  return /*#__PURE__*/React__default['default'].createElement("input", _rollupPluginBabelHelpers['extends']({}, inputProps, {
    autoFocus: autoFocus && main.isBrowser,
    value: value,
    className: constants.DEFAULT_INPUT_CLASS_NAME
  }));
};
var RoundInput = function RoundInput(props) {
  var autoFocus = props.autoFocus,
      pattern = props.pattern,
      required = props.required,
      register = props.register,
      validate = props.validate;
  var className = collectClassNames(props);
  return /*#__PURE__*/React__default['default'].createElement("input", _rollupPluginBabelHelpers['extends']({}, sanitizeProps(props), {
    autoFocus: autoFocus && main.isBrowser,
    ref: register({
      required: required,
      pattern: pattern,
      validate: validate
    }),
    className: index(className, 'focus:outline-none')
  }));
};
RoundInput.defaultProps = {
  marginClassName: '',
  paddingClassName: 'px-8 py-3',
  borderClassName: 'border border-accent-3',
  bgClassName: 'bg-input',
  textClassName: 'text-xs',
  roundedClassName: 'rounded-full'
};
var RectangularInput = function RectangularInput(props) {
  var autoFocus = props.autoFocus,
      pattern = props.pattern,
      required = props.required,
      register = props.register,
      validate = props.validate;
  var className = collectClassNames(props);
  return /*#__PURE__*/React__default['default'].createElement("div", {
    className: "relative"
  }, /*#__PURE__*/React__default['default'].createElement("div", {
    className: "absolute",
    style: {
      top: 10,
      bottom: 10,
      left: 10
    }
  }, "PRZUSDC"), /*#__PURE__*/React__default['default'].createElement("input", _rollupPluginBabelHelpers['extends']({}, sanitizeProps(props), {
    autoFocus: autoFocus && main.isBrowser,
    ref: register({
      required: required,
      pattern: pattern,
      validate: validate
    }),
    className: index(className, 'focus:outline-none')
  })));
};
RectangularInput.defaultProps = {
  marginClassName: '',
  paddingClassName: 'px-8 py-3',
  borderClassName: 'border-2 border-accent-3',
  bgClassName: 'bg-transparent',
  textClassName: 'text-xs text-right',
  roundedClassName: 'rounded-lg'
};

exports.RectangularInput = RectangularInput;
exports.RoundInput = RoundInput;
exports.SimpleInput = SimpleInput;
//# sourceMappingURL=TextInputs.js.map
