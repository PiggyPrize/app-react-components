'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _rollupPluginBabelHelpers = require('../../../_virtual/_rollupPluginBabelHelpers.js');
var React = require('react');
var index = require('../../../node_modules/classnames/index.js');
var rainbowGradient = require('../../assets/Gradients/rainbow-gradient.svg.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var BannerTheme = {
  purplePink: 'purplePink',
  rainbow: 'rainbow',
  rainbowBorder: 'rainbowBorder',
  purplePinkBorder: 'purplePinkBorder'
};

var BannerUnmemoized = function BannerUnmemoized(props) {
  var theme = props.theme,
      className = props.className,
      children = props.children,
      style = props.style,
      outerClassName = props.outerClassName,
      innerClassName = props.innerClassName;
  var defaultBorderRadius = props.defaultBorderRadius,
      defaultPadding = props.defaultPadding;
  var bannerClasses = {
    'p-6 sm:p-8': defaultPadding,
    'rounded-lg': defaultBorderRadius
  };

  if (theme === BannerTheme.rainbow) {
    return /*#__PURE__*/React__default['default'].createElement("div", {
      className: index(bannerClasses, 'text-purple', className),
      style: _rollupPluginBabelHelpers.objectSpread2(_rollupPluginBabelHelpers.objectSpread2({}, style), {}, {
        backgroundImage: rainbowGradient,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
      })
    }, children);
  } else if (theme === BannerTheme.rainbowBorder) {
    return /*#__PURE__*/React__default['default'].createElement("div", {
      className: index('text-inverse p-1 rounded-lg', outerClassName),
      style: {
        backgroundImage: rainbowGradient,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
      }
    }, /*#__PURE__*/React__default['default'].createElement("div", {
      className: index(bannerClasses, 'bg-body', innerClassName),
      style: style
    }, children));
  } else if (theme === BannerTheme.purplePinkBorder) {
    return /*#__PURE__*/React__default['default'].createElement("div", {
      className: index('text-inverse p-1 rounded-lg pool-gradient-1', outerClassName)
    }, /*#__PURE__*/React__default['default'].createElement("div", {
      className: index(bannerClasses, 'bg-body', innerClassName),
      style: style
    }, children));
  }

  return /*#__PURE__*/React__default['default'].createElement("div", {
    className: index(bannerClasses, 'pool-gradient-1', className),
    style: style
  }, children);
};

BannerUnmemoized.defaultProps = {
  theme: BannerTheme.purplePink,
  defaultBorderRadius: true,
  defaultPadding: true
};
var Banner = /*#__PURE__*/React__default['default'].memo(BannerUnmemoized);

exports.Banner = Banner;
exports.BannerTheme = BannerTheme;
//# sourceMappingURL=Banner.js.map
