'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _rollupPluginBabelHelpers = require('../../_virtual/_rollupPluginBabelHelpers.js');
var React = require('react');
var index = require('../../node_modules/classnames/index.js');
var lodash = require('lodash');
var ThemedClipSpinner = require('./Loading/ThemedClipSpinner.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

// import DaiSvg from 'assets/images/dai-new-transparent.png'
// // import WbtcSvg from 'assets/images/wbtc-new-transparent.png'
// import UsdcSvg from 'assets/images/usdc-new-transparent.png'
// // import UsdtSvg from 'assets/images/usdt-new-transparent.png'
// // import ZrxSvg from 'assets/images/zrx-new-transparent.png'
// import BatSvg from 'assets/images/bat-new-transparent.png'
// import UniSvg from 'assets/images/token-uni.png'
// // import UniThemeLightSvg from 'assets/images/uniwap-theme-light-logo.svg'

var PoolCurrencyIcon = function PoolCurrencyIcon(props) {
  var _pool$underlyingColla, _classnames;

  var className = props.className,
      noMediaQueries = props.noMediaQueries,
      sm = props.sm,
      lg = props.lg,
      xl = props.xl,
      xs = props.xs,
      pool = props.pool; // const { theme } = useContext(ThemeContext)

  var noMargin = props.noMargin || false;
  pool === null || pool === void 0 ? void 0 : (_pool$underlyingColla = pool.underlyingCollateralSymbol) === null || _pool$underlyingColla === void 0 ? void 0 : _pool$underlyingColla.toLowerCase();
  //   currencyIcon = DaiSvg
  // } else if (symbol === 'usdc') {
  //   currencyIcon = UsdcSvg
  //   // } else if (symbol === 'usdt') {
  //   //   currencyIcon = UsdtSvg
  //   // } else if (symbol === 'wbtc') {
  //   //   currencyIcon = WbtcSvg
  //   // } else if (symbol === 'zrx') {
  //   //   currencyIcon = ZrxSvg
  // } else if (symbol === 'bat') {
  //   currencyIcon = BatSvg
  // } else if (symbol === 'uni') {
  //   currencyIcon = UniSvg
  //   // currencyIcon = theme === 'light' ? UniThemeLightSvg : UniSvg
  // }

  var sizeClasses = 'w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10';

  if (lodash.isUndefined(noMediaQueries)) {
    if (xs) {
      sizeClasses = 'w-3 h-3 sm:w-5 sm:h-5 lg:w-6 lg:h-6';
    } else if (sm) {
      sizeClasses = 'w-4 h-4 sm:w-6 sm:h-6 lg:w-8 lg:h-8';
    } else if (lg) {
      sizeClasses = 'w-8 h-8 sm:w-14 sm:h-14';
    } else if (xl) {
      sizeClasses = 'w-12 h-12 sm:w-16 sm:h-16 lg:w-18 lg:h-18';
    }
  } else {
    sizeClasses = 'w-8 h-8';
  }

  var classes = index(sizeClasses, (_classnames = {}, _rollupPluginBabelHelpers.defineProperty(_classnames, className, className), _rollupPluginBabelHelpers.defineProperty(_classnames, 'inline-block', !className), _rollupPluginBabelHelpers.defineProperty(_classnames, 'mr-1', !noMargin), _classnames));
  return /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null, /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null, /*#__PURE__*/React__default['default'].createElement("div", {
    className: "".concat(classes, " scale-80 text-center")
  }, /*#__PURE__*/React__default['default'].createElement(ThemedClipSpinner.ThemedClipSpinner, {
    size: "16px"
  }))) );
};

exports.PoolCurrencyIcon = PoolCurrencyIcon;
//# sourceMappingURL=PoolCurrencyIcon.js.map
