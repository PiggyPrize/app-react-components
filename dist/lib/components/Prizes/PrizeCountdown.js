'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var index$1 = require('../../../node_modules/classnames/index.js');
var index = require('../../../node_modules/date-fns/esm/addSeconds/index.js');
var index$2 = require('../../../node_modules/@pooltogether/current-pool-data/index.js');
var utilities = require('@pooltogether/utilities');
var hooks = require('@pooltogether/hooks');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var EIGHT_HOURS_IN_SECONDS = 28800;
var PrizeCountdown = function PrizeCountdown(props) {
  var t = props.t;
  var center = props.center,
      textAlign = props.textAlign,
      textSize = props.textSize,
      prizePeriodSeconds = props.prizePeriodSeconds,
      prizePeriodStartedAt = props.prizePeriodStartedAt,
      isRngRequested = props.isRngRequested;
  var flashy = props.flashy === false ? false : true;

  var _usePrizePeriodTimeLe = hooks.usePrizePeriodTimeLeft(prizePeriodSeconds, prizePeriodStartedAt),
      secondsLeft = _usePrizePeriodTimeLe.secondsLeft;

  var currentDate = new Date(Date.now());
  var futureDate = index(currentDate, secondsLeft);

  var _subtractDates = utilities.subtractDates(futureDate, currentDate),
      days = _subtractDates.days,
      hours = _subtractDates.hours,
      minutes = _subtractDates.minutes,
      seconds = _subtractDates.seconds;

  var msg;

  if (isRngRequested) {
    return /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null, /*#__PURE__*/React__default['default'].createElement("p", {
      className: index$1(textSize, 'font-bold', {
        'text-flashy': flashy,
        'text-xs xs:text-sm sm:text-xl': !textSize,
        'text-right': !textAlign
      })
    }, (t === null || t === void 0 ? void 0 : t('prizeIsBeingAwarded')) || 'Prize is being awarded'));
  }

  var daysArray = ('' + days).split('');
  var hoursArray = ('' + hours).split('');
  var minutesArray = ('' + minutes).split('');
  var secondsArray = ('' + seconds).split('');
  var textColor = secondsLeft >= index$2.SECONDS_PER_DAY ? 'green' : secondsLeft >= EIGHT_HOURS_IN_SECONDS ? 'orange' : 'red';

  var LeftSideJsx = function LeftSideJsx(_ref) {
    var digit = _ref.digit;
    return /*#__PURE__*/React__default['default'].createElement("span", {
      className: "bg-tertiary text-".concat(textColor, " font-bold rounded-sm"),
      style: {
        padding: '2px 8px',
        margin: '0 1px'
      }
    }, digit);
  };

  var RightSideJsx = function RightSideJsx(_ref2) {
    var digit = _ref2.digit;
    return /*#__PURE__*/React__default['default'].createElement("span", {
      className: "bg-tertiary text-".concat(textColor, " font-bold rounded-sm"),
      style: {
        padding: '2px 8px',
        margin: '0 1px'
      }
    }, digit);
  };

  var unitClasses = 'opacity-60 text-inverse text-xxxs';
  var unitStyles = {
    paddingTop: 3
  };
  return /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null, /*#__PURE__*/React__default['default'].createElement("div", {
    className: index$1(textSize, 'flex text-center', {
      'justify-center': center,
      'text-sm xs:text-xs sm:text-base': !textSize
    })
  }, /*#__PURE__*/React__default['default'].createElement("div", {
    className: "flex flex-col mr-4",
    style: {
      paddingLeft: 2,
      paddingRight: 2
    }
  }, /*#__PURE__*/React__default['default'].createElement("div", {
    className: "flex"
  }, /*#__PURE__*/React__default['default'].createElement(LeftSideJsx, {
    digit: daysArray.length < 2 ? 0 : daysArray[0]
  }), /*#__PURE__*/React__default['default'].createElement(RightSideJsx, {
    digit: daysArray.length > 1 ? daysArray[1] : daysArray[0]
  })), /*#__PURE__*/React__default['default'].createElement("div", {
    className: unitClasses,
    style: unitStyles
  }, (t === null || t === void 0 ? void 0 : t('countdownDayShort')) || 'DAY')), /*#__PURE__*/React__default['default'].createElement("div", {
    className: "flex flex-col",
    style: {
      paddingLeft: 2,
      paddingRight: 2
    }
  }, /*#__PURE__*/React__default['default'].createElement("div", {
    className: "flex"
  }, /*#__PURE__*/React__default['default'].createElement(LeftSideJsx, {
    digit: hoursArray.length < 2 ? 0 : hoursArray[0]
  }), /*#__PURE__*/React__default['default'].createElement(RightSideJsx, {
    digit: hoursArray.length > 1 ? hoursArray[1] : hoursArray[0]
  })), /*#__PURE__*/React__default['default'].createElement("div", {
    className: unitClasses,
    style: unitStyles
  }, (t === null || t === void 0 ? void 0 : t('countdownHourShort')) || 'HR')), /*#__PURE__*/React__default['default'].createElement("div", {
    className: "px-0 sm:px-1 font-bold text-".concat(textColor)
  }, ":"), /*#__PURE__*/React__default['default'].createElement("div", {
    className: "flex flex-col",
    style: {
      paddingLeft: 1,
      paddingRight: 2
    }
  }, /*#__PURE__*/React__default['default'].createElement("div", {
    className: "flex"
  }, /*#__PURE__*/React__default['default'].createElement(LeftSideJsx, {
    digit: minutesArray.length < 2 ? 0 : minutesArray[0]
  }), /*#__PURE__*/React__default['default'].createElement(RightSideJsx, {
    digit: minutesArray.length > 1 ? minutesArray[1] : minutesArray[0]
  })), /*#__PURE__*/React__default['default'].createElement("div", {
    className: unitClasses,
    style: unitStyles
  }, (t === null || t === void 0 ? void 0 : t('countdownMinuteShort')) || 'MIN')), /*#__PURE__*/React__default['default'].createElement("div", {
    className: "px-0 sm:px-1 font-bold text-".concat(textColor)
  }, ":"), /*#__PURE__*/React__default['default'].createElement("div", {
    className: "flex flex-col",
    style: {
      paddingLeft: 1,
      paddingRight: 2
    }
  }, /*#__PURE__*/React__default['default'].createElement("div", {
    className: "flex"
  }, /*#__PURE__*/React__default['default'].createElement(LeftSideJsx, {
    digit: secondsArray.length < 2 ? 0 : secondsArray[0]
  }), /*#__PURE__*/React__default['default'].createElement(RightSideJsx, {
    digit: secondsArray.length > 1 ? secondsArray[1] : secondsArray[0]
  })), /*#__PURE__*/React__default['default'].createElement("div", {
    className: unitClasses,
    style: unitStyles
  }, (t === null || t === void 0 ? void 0 : t('countdownSecondShort')) || 'SEC')), msg));
};

exports.PrizeCountdown = PrizeCountdown;
//# sourceMappingURL=PrizeCountdown.js.map
