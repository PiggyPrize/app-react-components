'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var index$1 = require('../../node_modules/classnames/index.js');
var index = require('../../node_modules/@pooltogether/current-pool-data/index.js');
require('feather-icons-react');
require('../../node_modules/react-copy-to-clipboard/lib/index.js');
require('../services/poolToast.js');
var TokenIcon = require('./Icons/TokenIcon.js');
require('@pooltogether/utilities');
require('../constants.js');
require('./Icons/NetworkIcon.js');
var PrizeFrequencyChip = require('./PrizeFrequencyChip.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var PageTitleAndBreadcrumbs = function PageTitleAndBreadcrumbs(props) {
  var _pool$prize, _pool$prize2;

  var Link = props.Link,
      t = props.t,
      breadcrumbs = props.breadcrumbs,
      title = props.title,
      pool = props.pool,
      className = props.className,
      sizeClassName = props.sizeClassName,
      description = props.description,
      showPrizeFrequencyChip = props.showPrizeFrequencyChip;
  (pool === null || pool === void 0 ? void 0 : (_pool$prize = pool.prize) === null || _pool$prize === void 0 ? void 0 : _pool$prize.prizePeriodSeconds) == index.SECONDS_PER_DAY.toString();
  var crumbJsx = /*#__PURE__*/React__default['default'].createElement("div", {
    className: index$1('flex flex-col items-start justify-between leading-none', sizeClassName, className)
  }, /*#__PURE__*/React__default['default'].createElement("div", {
    className: "inline-flex items-center text-left text-xl sm:text-3xl font-bold text-accent-2 relative"
  }, title, showPrizeFrequencyChip && /*#__PURE__*/React__default['default'].createElement(PrizeFrequencyChip.PrizeFrequencyChip, {
    prizePeriodSeconds: pool === null || pool === void 0 ? void 0 : (_pool$prize2 = pool.prize) === null || _pool$prize2 === void 0 ? void 0 : _pool$prize2.prizePeriodSeconds,
    t: t,
    className: "ml-4"
  })), /*#__PURE__*/React__default['default'].createElement("div", {
    className: "inline-block text-left text-accent-2 font-inter relative uppercase mt-3 font-normal opacity-80 hover:opacity-100 trans"
  }, breadcrumbs === null || breadcrumbs === void 0 ? void 0 : breadcrumbs.map(function (crumb, index) {
    return /*#__PURE__*/React__default['default'].createElement("span", {
      className: "text-xxxs sm:text-xxs",
      key: "crumb-".concat(index)
    }, crumb.href && crumb.as ? /*#__PURE__*/React__default['default'].createElement(Link, {
      href: crumb.href,
      as: crumb.as,
      shallow: true
    }, /*#__PURE__*/React__default['default'].createElement("a", {
      className: "text-xxxs sm:text-xxs border-b border-secondary hover:text-accent-3"
    }, crumb.name)) : crumb.name, index + 1 !== breadcrumbs.length && /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null, ' ', /*#__PURE__*/React__default['default'].createElement("span", {
      className: "text-accent-4 opacity-70 mx-1 font-bold"
    }, ">"), ' '));
  })), description && /*#__PURE__*/React__default['default'].createElement("p", {
    className: "text-accent-1 text-sm"
  }, description));
  return /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null, pool ? /*#__PURE__*/React__default['default'].createElement("div", {
    className: "flex justify-start items-center"
  }, /*#__PURE__*/React__default['default'].createElement(TokenIcon.TokenIcon, {
    sizeClassName: "w-12 h-12 sm:w-16 sm:h-16 lg:w-18 lg:h-18 mr-2",
    address: pool.tokens.underlyingToken.address,
    chainId: pool.chainId
  }), /*#__PURE__*/React__default['default'].createElement("div", {
    className: "ml-1 sm:ml-6"
  }, crumbJsx)) : crumbJsx);
};
PageTitleAndBreadcrumbs.defaultProps = {
  sizeClassName: 'w-full'
};

exports.PageTitleAndBreadcrumbs = PageTitleAndBreadcrumbs;
//# sourceMappingURL=PageTitleAndBreadcrumbs.js.map
