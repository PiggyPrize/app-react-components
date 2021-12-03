'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var index_es = require('../../../node_modules/react-tooltip/dist/index.es.js');
var FeatherIcon = require('feather-icons-react');
var index = require('../../../node_modules/classnames/index.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var FeatherIcon__default = /*#__PURE__*/_interopDefaultLegacy(FeatherIcon);

var Tooltip = function Tooltip(props) {
  var children = props.children,
      tip = props.tip,
      className = props.className,
      iconClassName = props.iconClassName,
      iconSizeClassName = props.iconSizeClassName,
      id = props.id,
      effect = props.effect,
      toolTipClassName = props.toolTipClassName,
      isEnabled = props.isEnabled;
  var ref = React.useRef(null);

  if (!isEnabled) {
    return children;
  }

  if (!id) {
    console.warn('Component requires an id! <Tooltip /> with children: ', children);
  }

  return /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null, /*#__PURE__*/React__default['default'].createElement("span", {
    "data-tip": true,
    "data-for": "".concat(id, "-tooltip"),
    className: index('inline cursor-pointer', className)
  }, children || /*#__PURE__*/React__default['default'].createElement(FeatherIcon__default['default'], {
    icon: "info",
    className: index(iconSizeClassName, iconClassName)
  })), /*#__PURE__*/React__default['default'].createElement(index_es, {
    clickable: true,
    ref: ref,
    backgroundColor: "#111",
    id: "".concat(id, "-tooltip"),
    place: "top",
    effect: effect,
    "data-multiline": true,
    className: index('p-1 xs:p-2 max-w-3/4 sm:max-w-sm text-center leading-relaxed font-normal', toolTipClassName),
    overridePosition: function overridePosition(_ref, currentEvent, currentTarget, node) {
      var left = _ref.left,
          top = _ref.top;
      var d = document.documentElement;
      left = Math.min(d.clientWidth - node.clientWidth, left);
      top = Math.min(d.clientHeight - node.clientHeight, top);
      left = Math.max(0, left);
      top = Math.max(0, top);
      return {
        top: top,
        left: left
      };
    }
  }, /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null, /*#__PURE__*/React__default['default'].createElement("button", {
    onClick: function onClick() {
      var current = ref.current;
      current.tooltipRef = null;
      index_es.hide();
    },
    className: "ml-auto mb-2 block xs:hidden"
  }, /*#__PURE__*/React__default['default'].createElement(FeatherIcon__default['default'], {
    icon: "x",
    className: "w-4 h-4 text-inverse"
  })), tip)));
};
Tooltip.defaultProps = {
  effect: 'solid',
  iconSizeClassName: 'w-4 h-4',
  isEnabled: true
};

exports.Tooltip = Tooltip;
//# sourceMappingURL=Tooltip.js.map
