'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var index = require('../../node_modules/classnames/index.js');
var Chip = require('./Containers/Chip.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var SECONDS_PER_DAY = 86400;
var SECONDS_PER_WEEK = 604800;
var PrizeFrequencyChip = function PrizeFrequencyChip(props) {
  var prizePeriodSeconds = props.prizePeriodSeconds,
      t = props.t,
      className = props.className;
  var isDaily = prizePeriodSeconds.toNumber() === SECONDS_PER_DAY;
  var isWeekly = prizePeriodSeconds.toNumber() === SECONDS_PER_WEEK;

  if (!isDaily && !isWeekly) {
    return null;
  }

  return /*#__PURE__*/React__default['default'].createElement(Chip.Chip, {
    bgClasses: index({
      'bg-accent-grey-2': isDaily,
      'bg-accent-grey-1': isWeekly
    }),
    textClasses: index({
      'text-highlight-6': isDaily,
      'text-green': isWeekly
    }),
    text: getPrizeFrequencyText(t, prizePeriodSeconds),
    className: className
  });
};

var getPrizeFrequencyText = function getPrizeFrequencyText(t, prizePeriodSeconds) {
  var isDaily = prizePeriodSeconds.toNumber() === SECONDS_PER_DAY;
  var isWeekly = prizePeriodSeconds.toNumber() === SECONDS_PER_WEEK;

  if (isDaily) {
    return (t === null || t === void 0 ? void 0 : t('dailyPrize')) || 'Daily Prize';
  } else if (isWeekly) {
    return (t === null || t === void 0 ? void 0 : t('prizeValue')) || 'Weekly Prize';
  }
};

exports.PrizeFrequencyChip = PrizeFrequencyChip;
//# sourceMappingURL=PrizeFrequencyChip.js.map
