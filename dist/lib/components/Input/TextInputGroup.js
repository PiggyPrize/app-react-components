'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _rollupPluginBabelHelpers = require('../../../_virtual/_rollupPluginBabelHelpers.js');
var React = require('react');
var index = require('../../../node_modules/classnames/index.js');
var FeatherIcon = require('feather-icons-react');
var TextInputs = require('./TextInputs.js');
var constants = require('../../constants.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var FeatherIcon__default = /*#__PURE__*/_interopDefaultLegacy(FeatherIcon);

var _excluded = ["Input", "id", "label", "rightLabel", "disabled", "readOnly", "isError", "isSuccess", "large", "unit"],
    _excluded2 = ["containerTextClassName", "containerRoundedClassName", "containerMarginClassName", "containerBorderClassName", "containerBgClassName", "containerClassName", "labelClassName", "rightLabelClassName", "unitsClassName"];
var TextInputGroupType = Object.freeze({
  text: 'text',
  number: 'number'
});
var TextInputGroup = function TextInputGroup(props) {
  var Input = props.Input,
      id = props.id,
      label = props.label,
      rightLabel = props.rightLabel,
      disabled = props.disabled,
      readOnly = props.readOnly,
      isError = props.isError,
      isSuccess = props.isSuccess,
      large = props.large,
      unit = props.unit,
      classAndInputProps = _rollupPluginBabelHelpers.objectWithoutProperties(props, _excluded);

  var containerTextClassName = classAndInputProps.containerTextClassName,
      containerRoundedClassName = classAndInputProps.containerRoundedClassName,
      containerMarginClassName = classAndInputProps.containerMarginClassName,
      containerBorderClassName = classAndInputProps.containerBorderClassName,
      containerBgClassName = classAndInputProps.containerBgClassName,
      containerClassName = classAndInputProps.containerClassName,
      labelClassName = classAndInputProps.labelClassName,
      rightLabelClassName = classAndInputProps.rightLabelClassName,
      unitsClassName = classAndInputProps.unitsClassName,
      inputProps = _rollupPluginBabelHelpers.objectWithoutProperties(classAndInputProps, _excluded2);

  containerTextClassName = containerTextClassName ? containerTextClassName : index({
    'font-bold text-3xl': large,
    'text-xs': !large,
    'text-red-500': isError,
    'text-whitesmoke': disabled
  });
  containerRoundedClassName = containerRoundedClassName ? containerRoundedClassName : 'rounded-full';
  containerMarginClassName = containerMarginClassName ? containerMarginClassName : 'mb-2 lg:mb-2';
  containerBorderClassName = containerBorderClassName ? containerBorderClassName : index('border', {
    'border-red': isError,
    'border-green-2': isSuccess,
    'border-transparent': !isError && !isSuccess,
    'hover:border-accent-3 focus-within:border-accent-3 focus-within:shadow-green': !disabled
  });
  containerBgClassName = containerBgClassName ? containerBgClassName : index(containerBgClassName, {
    'bg-grey': disabled,
    'bg-card': readOnly
  });
  labelClassName = labelClassName ? labelClassName : index(constants.DEFAULT_INPUT_LABEL_CLASS_NAME, {
    'cursor-not-allowed font-whitesmoke': disabled,
    'text-accent-1': !disabled
  });
  rightLabelClassName = rightLabelClassName ? rightLabelClassName : index(constants.DEFAULT_INPUT_LABEL_CLASS_NAME, 'text-right', {
    'cursor-not-allowed font-whitesmoke': disabled,
    'text-accent-1': !disabled
  });
  unitsClassName = unitsClassName ? unitsClassName : index('font-bold text-xs sm:text-sm whitespace-no-wrap', {
    'cursor-not-allowed font-whitesmoke': disabled,
    'font-white': !disabled
  });
  containerClassName = index(constants.DEFAULT_INPUT_GROUP_CLASS_NAME, containerClassName, containerTextClassName, containerRoundedClassName, containerMarginClassName, containerBgClassName);
  var icon, iconColor;

  if (isSuccess) {
    icon = 'check-circle';
    iconColor = 'stroke-current text-green-2';
  } else if (isError) {
    icon = 'slash';
    iconColor = 'stroke-current text-red';
  }

  return /*#__PURE__*/React__default['default'].createElement("div", {
    className: containerClassName
  }, /*#__PURE__*/React__default['default'].createElement("div", {
    className: index('flex flex-row', {
      'justify-between': rightLabel && label,
      'justify-end': rightLabel && !label
    })
  }, label && /*#__PURE__*/React__default['default'].createElement("label", {
    htmlFor: id,
    className: labelClassName
  }, label), rightLabel && /*#__PURE__*/React__default['default'].createElement("span", {
    className: rightLabelClassName
  }, rightLabel)), /*#__PURE__*/React__default['default'].createElement("div", {
    className: "flex justify-between"
  }, /*#__PURE__*/React__default['default'].createElement(Input, _rollupPluginBabelHelpers['extends']({}, inputProps, {
    id: id,
    disabled: disabled,
    readOnly: readOnly
  })), (unit || icon) && /*#__PURE__*/React__default['default'].createElement("div", {
    className: "pl-1 sm:pl-2"
  }, unit && /*#__PURE__*/React__default['default'].createElement("span", {
    className: unitsClassName
  }, unit), icon && /*#__PURE__*/React__default['default'].createElement(FeatherIcon__default['default'], {
    icon: icon,
    className: index('w-4 sm:w-8', iconColor)
  }))));
};
TextInputGroup.defaultProps = {
  Input: TextInputs.RoundInput,
  type: TextInputGroupType.text
};
var RightLabelButton = function RightLabelButton(props) {
  var onClick = props.onClick,
      children = props.children;
  return /*#__PURE__*/React__default['default'].createElement("button", {
    type: "button",
    onClick: onClick,
    className: "hover:text-accent-3 trans"
  }, children);
};

exports.RightLabelButton = RightLabelButton;
exports.TextInputGroup = TextInputGroup;
exports.TextInputGroupType = TextInputGroupType;
//# sourceMappingURL=TextInputGroup.js.map
