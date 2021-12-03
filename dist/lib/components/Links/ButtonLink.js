'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _rollupPluginBabelHelpers = require('../../../_virtual/_rollupPluginBabelHelpers.js');
var React = require('react');
var index = require('../../../node_modules/classnames/index.js');
var lodash = require('lodash');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

function getButtonClasses(props) {
  var border = props.border,
      bg = props.bg,
      bold = props.bold,
      text = props.text,
      hoverBg = props.hoverBg,
      hoverBorder = props.hoverBorder,
      hoverText = props.hoverText,
      noAnim = props.noAnim,
      padding = props.padding,
      rounded = props.rounded,
      inverse = props.inverse,
      basic = props.basic,
      secondary = props.secondary,
      tertiary = props.tertiary,
      selected = props.selected,
      transition = props.transition,
      className = props.className,
      textSize = props.textSize,
      width = props.width,
      disabled = props.disabled;
  var defaultClasses = 'border-2 inline-block text-center leading-snug cursor-pointer outline-none focus:outline-none active:outline-none no-underline';
  var animClass = noAnim ? '' : 'button-scale';

  if (selected) {
    defaultClasses += " opacity-50";
    animClass = "";
  } // eg. textSize='sm', textSize='xl'


  textSize = getTextSize(textSize);
  var defaultPadding = 'px-4 xs:px-6 sm:px-10 lg:px-12 py-2 sm:py-2';
  var defaultRounded = 'rounded-full';
  var defaultTrans = 'trans trans-fast';
  var defaultBorder = 'border-highlight-2';
  var defaultBg = 'bg-transparent';
  var defaultText = 'text-highlight-2';
  var defaultHoverBorder = 'hover:border-highlight-4';
  var defaultHoverBg = 'hover:bg-highlight-4';
  var defaultHoverText = 'hover:text-secondary';

  if (secondary) {
    defaultBorder = 'border-highlight-2 border-2';
    defaultBg = 'bg-primary';
    defaultText = 'text-highlight-2';
    defaultHoverBorder = 'hover:border-highlight-1';
    defaultHoverBg = 'hover:bg-body';
    defaultHoverText = 'hover:text-highlight-1';
  }

  if (tertiary) {
    defaultBorder = 'border-transparent border-2';
    defaultBg = 'bg-highlight-3';
    defaultText = 'text-highlight-9';
    defaultHoverBorder = 'hover:border-transparent';
    defaultHoverBg = 'hover:bg-purple';
    defaultHoverText = 'hover:text-white';
  }

  if (basic) {
    defaultBorder = 'border-transparent border-2';
    defaultBg = 'bg-transparent';
    defaultText = 'text-highlight-2';
    defaultHoverBorder = 'hover:border-transparent';
    defaultHoverBg = 'hover:bg-transparent';
    defaultHoverText = 'hover:text-highlight-1';
  }

  if (inverse) {
    defaultBorder = 'border-inverse';
    defaultBg = 'bg-transparent';
    defaultText = 'text-inverse';
    defaultHoverBorder = 'hover:border-highlight-4';
    defaultHoverBg = 'hover:bg-highlight-4';
    defaultHoverText = 'hover:text-secondary';
  }

  var opacity = '';

  if (disabled) {
    opacity = 'opacity-40 cursor-not-allowed pointer-events-none';
  }

  bold = lodash.isUndefined(bold) ? 'font-bold' : '';
  padding = padding ? "".concat(padding) : defaultPadding;
  rounded = rounded ? "rounded-".concat(rounded) : defaultRounded;
  transition = transition ? "".concat(transition) : defaultTrans;
  width = width ? "".concat(width) : '';
  border = border ? "border-".concat(border) : defaultBorder;
  bg = bg ? "bg-".concat(bg) : defaultBg;
  text = text ? "text-".concat(text) : defaultText;
  hoverBorder = hoverBorder ? "hover:border-".concat(hoverBorder) : defaultHoverBorder;
  hoverBg = hoverBg ? "hover:bg-".concat(hoverBg) : defaultHoverBg;
  hoverText = hoverText ? "hover:text-".concat(hoverText) : defaultHoverText;
  return index(className, defaultClasses, animClass, bold, bg, border, padding, rounded, text, hoverBg, hoverBorder, hoverText, textSize, transition, width, opacity);
}

var getTextSize = function getTextSize(size) {
  switch (size) {
    case 'xxxs':
      return "text-xxxxs xs:text-xxxs sm:text-xxs lg:text-xs";

    case 'xxs':
      return "text-xxxs xs:text-xxs sm:text-xs lg:text-sm";

    case 'xs':
      return "text-xxs xs:text-xs sm:text-sm lg:text-base";

    case 'sm':
      return "text-xs xs:text-sm sm:text-base lg:text-lg";

    case 'lg':
      return "text-sm xs:text-lg sm:text-xl lg:text-2xl";

    case 'xl':
      return "text-lg xs:text-xl sm:text-2xl lg:text-3xl";

    case '2xl':
      return "text-xl xs:text-2xl sm:text-3xl lg:text-4xl";

    default:
      return "text-xxs xs:text-xs sm:text-sm lg:text-base";
  }
};

function ButtonLink(props) {
  var children = props.children,
      as = props.as,
      href = props.href,
      Link = props.Link;
  var classes = getButtonClasses(props);
  var linkProps = lodash.pick(props, ['target', 'rel']);
  return /*#__PURE__*/React__default['default'].createElement(Link, _rollupPluginBabelHelpers['extends']({}, linkProps, {
    href: href,
    as: as,
    scroll: false
  }), /*#__PURE__*/React__default['default'].createElement("a", _rollupPluginBabelHelpers['extends']({}, linkProps, {
    className: classes,
    onClick: function onClick(e) {
      return e.stopPropagation();
    }
  }), children));
}

exports.ButtonLink = ButtonLink;
exports.getButtonClasses = getButtonClasses;
//# sourceMappingURL=ButtonLink.js.map
