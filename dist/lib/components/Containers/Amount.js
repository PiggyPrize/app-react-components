'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _rollupPluginBabelHelpers = require('../../../_virtual/_rollupPluginBabelHelpers.js');
var React = require('react');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var SPLIT_LENGTH = 2;
function Amount(props) {
  var _useState = React.useState(null),
      _useState2 = _rollupPluginBabelHelpers.slicedToArray(_useState, 2),
      firstPart = _useState2[0],
      setFirstPart = _useState2[1];

  var _useState3 = React.useState(null),
      _useState4 = _rollupPluginBabelHelpers.slicedToArray(_useState3, 2),
      secondPart = _useState4[0],
      setSecondPart = _useState4[1];

  var _useState5 = React.useState(null),
      _useState6 = _rollupPluginBabelHelpers.slicedToArray(_useState5, 2),
      thirdPart = _useState6[0],
      setThirdPart = _useState6[1];

  var _useState7 = React.useState(null),
      _useState8 = _rollupPluginBabelHelpers.slicedToArray(_useState7, 2),
      fourthPart = _useState8[0],
      setFourthPart = _useState8[1];

  React.useEffect(function () {
    var _props$children;

    var str = _rollupPluginBabelHelpers['typeof'](props.children) === 'object' ? props.children[0] : (_props$children = props.children) === null || _props$children === void 0 ? void 0 : _props$children.toString();

    if ((str === null || str === void 0 ? void 0 : str.length) > 0) {
      var parts = str.split('.');

      if (parts[0]) {
        setFirstPart(parts[0]);
      }

      if (parts[1] && parts[1].length >= SPLIT_LENGTH) {
        setSecondPart(parts[1].substring(0, 2 + (SPLIT_LENGTH - 2)));
        var firstSpaceIndex = parts[1].indexOf(' ');
        var indexOrLength = firstSpaceIndex > 0 ? firstSpaceIndex : parts[1].length;
        setThirdPart(parts[1].substring(SPLIT_LENGTH, indexOrLength));

        if (firstSpaceIndex > 0) {
          setFourthPart(parts[1].substring(firstSpaceIndex, parts[1].length));
        }
      }
    }
  }, [props.children]);
  return /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null, /*#__PURE__*/React__default['default'].createElement("span", null, firstPart, secondPart && /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null, /*#__PURE__*/React__default['default'].createElement("span", {
    className: "opacity-40 font-light"
  }, ".", secondPart), /*#__PURE__*/React__default['default'].createElement("span", {
    className: "opacity-40 font-light"
  }, thirdPart)), ' ', fourthPart));
}

exports.Amount = Amount;
//# sourceMappingURL=Amount.js.map
