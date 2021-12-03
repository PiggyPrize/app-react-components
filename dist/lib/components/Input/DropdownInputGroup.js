'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _rollupPluginBabelHelpers = require('../../../_virtual/_rollupPluginBabelHelpers.js');
var React = require('react');
var reachMenuButton_esm = require('../../../node_modules/@reach/menu-button/dist/reach-menu-button.esm.js');
var reachPopover_esm = require('../../../node_modules/@reach/popover/dist/reach-popover.esm.js');
var index = require('../../../node_modules/classnames/index.js');
var FeatherIcon = require('feather-icons-react');
var constants = require('../../constants.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var FeatherIcon__default = /*#__PURE__*/_interopDefaultLegacy(FeatherIcon);

var DropdownInputGroup = function DropdownInputGroup(props) {
  // Dropdown Logic
  var id = props.id,
      formatValue = props.formatValue,
      label = props.label,
      placeHolder = props.placeHolder,
      values = props.values,
      current = props.current,
      onValueSet = props.onValueSet,
      disabled = props.disabled;

  var _useState = React.useState(current ? current : ''),
      _useState2 = _rollupPluginBabelHelpers.slicedToArray(_useState, 2),
      currentValue = _useState2[0],
      setCurrentValue = _useState2[1];

  var handleChangeValueClick = function handleChangeValueClick(newValue) {
    setCurrentValue(newValue);
    onValueSet(newValue);
  };

  var valuesArray = [];

  if (_rollupPluginBabelHelpers['typeof'](values) === 'object') {
    valuesArray = Object.keys(values).map(function (v) {
      return v;
    });
  }

  var menuItems = valuesArray.map(function (valueItem) {
    var value = valueItem;
    var selected = value === currentValue;
    return /*#__PURE__*/React__default['default'].createElement(reachMenuButton_esm.MenuItem, {
      key: "".concat(id, "-value-picker-item-").concat(value),
      onSelect: function onSelect() {
        handleChangeValueClick(value);
      },
      className: index({
        selected: selected
      })
    }, formatValue ? formatValue(value) : value);
  }); // Styling

  var textClassName = props.textClassName,
      roundedClassName = props.roundedClassName,
      marginClassName = props.marginClassName,
      borderClassName = props.borderClassName,
      backgroundClassName = props.backgroundClassName,
      labelClassName = props.labelClassName,
      unitsClassName = props.unitsClassName,
      containerClassName = props.containerClassName,
      isError = props.isError,
      isSuccess = props.isSuccess;
  textClassName = textClassName ? textClassName : index('text-xs trans', {
    'text-whitesmoke': disabled || !currentValue
  });
  containerClassName = containerClassName ? containerClassName : 'w-full';
  roundedClassName = roundedClassName ? roundedClassName : 'rounded-full';
  marginClassName = marginClassName ? marginClassName : 'mb-2 lg:mb-2';
  borderClassName = borderClassName ? borderClassName : index('border', {
    'border-red': isError,
    'border-green-2': isSuccess,
    'border-transparent': !isError && !isSuccess,
    'hover:border-accent-3 focus-within:border-accent-3 focus-within:shadow-green': !disabled
  });
  backgroundClassName = backgroundClassName ? backgroundClassName : index(backgroundClassName, {
    'bg-grey': disabled
  });
  labelClassName = labelClassName ? labelClassName : index(constants.DEFAULT_INPUT_LABEL_CLASS_NAME, {
    'cursor-not-allowed font-whitesmoke': disabled,
    'text-accent-1': !disabled
  });
  unitsClassName = unitsClassName ? unitsClassName : index('font-bold text-xs sm:text-sm whitespace-no-wrap', {
    'cursor-not-allowed font-whitesmoke': disabled,
    'font-white': !disabled
  });
  var className = index(constants.DEFAULT_INPUT_GROUP_CLASS_NAME, containerClassName, textClassName, roundedClassName, marginClassName, borderClassName, backgroundClassName);
  var selectedItem = placeHolder ? placeHolder : null;

  if (currentValue) {
    selectedItem = formatValue ? formatValue(currentValue) : currentValue;
  }

  return /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null, /*#__PURE__*/React__default['default'].createElement(reachMenuButton_esm.Menu, {
    id: id
  }, function (_ref) {
    var isExpanded = _ref.isExpanded;
    return /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null, /*#__PURE__*/React__default['default'].createElement(reachMenuButton_esm.MenuButton, {
      className: index(className, 'focus:outline-none')
    }, /*#__PURE__*/React__default['default'].createElement("div", {
      className: "flex flex-col text-left"
    }, /*#__PURE__*/React__default['default'].createElement("label", {
      htmlFor: id,
      className: labelClassName
    }, label), /*#__PURE__*/React__default['default'].createElement("div", {
      className: "w-full flex justify-between"
    }, /*#__PURE__*/React__default['default'].createElement("div", {
      className: "flex"
    }, selectedItem), /*#__PURE__*/React__default['default'].createElement(FeatherIcon__default['default'], {
      icon: isExpanded ? 'chevron-up' : 'chevron-down',
      className: "relative w-4 h-4 sm:w-8 sm:h-8 inline-block my-auto",
      strokeWidth: "0.15rem"
    })))), /*#__PURE__*/React__default['default'].createElement(reachMenuButton_esm.MenuPopover, {
      position: reachPopover_esm.positionMatchWidth
    }, /*#__PURE__*/React__default['default'].createElement(reachMenuButton_esm.MenuItems, null, menuItems)));
  }));
};

exports.DropdownInputGroup = DropdownInputGroup;
//# sourceMappingURL=DropdownInputGroup.js.map
