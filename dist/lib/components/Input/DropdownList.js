'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _rollupPluginBabelHelpers = require('../../../_virtual/_rollupPluginBabelHelpers.js');
var React = require('react');
var index = require('../../../node_modules/classnames/index.js');
var FeatherIcon = require('feather-icons-react');
var reachMenuButton_esm = require('../../../node_modules/@reach/menu-button/dist/reach-menu-button.esm.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var FeatherIcon__default = /*#__PURE__*/_interopDefaultLegacy(FeatherIcon);

function DropdownList(props) {
  var id = props.id,
      className = props.className,
      current = props.current,
      formatValue = props.formatValue,
      hoverTextColor = props.hoverTextColor,
      label = props.label,
      textColor = props.textColor,
      values = props.values,
      onValueSet = props.onValueSet,
      placeholder = props.placeholder;

  var handleChangeValueClick = function handleChangeValueClick(newValue) {
    onValueSet(newValue);
  };

  var valuesArray = [];

  if (Array.isArray(values)) {
    valuesArray = values;
  } else if (_rollupPluginBabelHelpers['typeof'](values) === 'object') {
    valuesArray = Object.keys(values).map(function (v) {
      return v;
    });
  }

  var menuItems = valuesArray.map(function (value) {
    var selected = value === current;

    if (value.groupHeader) {
      return /*#__PURE__*/React__default['default'].createElement("div", {
        key: "".concat(id, "-value-picker-group-header-").concat(value.groupHeader),
        className: "opacity-50 text-accent-1 text-xs px-3 sm:px-5 pt-10"
      }, value.groupHeader);
    }

    return /*#__PURE__*/React__default['default'].createElement(reachMenuButton_esm.MenuItem, {
      key: "".concat(id, "-value-picker-item-").concat(JSON.stringify(value)),
      onSelect: function onSelect() {
        handleChangeValueClick(value);
      },
      className: index({
        selected: selected
      }),
      disabled: value.disabled
    }, formatValue ? formatValue(value) : value);
  });
  var inactiveTextColorClasses = "".concat(textColor, " hover:").concat(hoverTextColor);
  var activeTextColorClasses = "".concat(hoverTextColor, " hover:").concat(hoverTextColor);
  var buttonText = '';

  if (label) {
    buttonText = label;
  } else if (current) {
    buttonText = formatValue(current);
  } else if (placeholder) {
    buttonText = placeholder;
  }

  return /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null, /*#__PURE__*/React__default['default'].createElement(reachMenuButton_esm.Menu, null, function (_ref) {
    var _classnames;

    var isExpanded = _ref.isExpanded;
    return /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null, /*#__PURE__*/React__default['default'].createElement(reachMenuButton_esm.MenuButton, {
      className: index(className, 'inline-flex items-center justify-center trans font-bold', (_classnames = {}, _rollupPluginBabelHelpers.defineProperty(_classnames, inactiveTextColorClasses, !isExpanded), _rollupPluginBabelHelpers.defineProperty(_classnames, activeTextColorClasses, isExpanded), _classnames))
    }, buttonText, /*#__PURE__*/React__default['default'].createElement(FeatherIcon__default['default'], {
      icon: isExpanded ? 'chevron-up' : 'chevron-down',
      className: "relative w-4 h-4 inline-block ml-2",
      strokeWidth: "0.15rem"
    })), /*#__PURE__*/React__default['default'].createElement(reachMenuButton_esm.MenuList, {
      className: "slide-down overflow-y-auto max-h-1/2"
    }, menuItems));
  }));
}

exports.DropdownList = DropdownList;
//# sourceMappingURL=DropdownList.js.map
