'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var hooks = require('@pooltogether/hooks');
var React = require('react');
var ThemeContextProvider = require('../ThemeContextProvider.js');
var pooltogetherPPurple = require('../../assets/PoolTogetherLogos/pooltogether-p-purple.svg.js');
var pooltogetherP = require('../../assets/PoolTogetherLogos/pooltogether-p.svg.js');
var pooltogetherFullLogoPurple = require('../../assets/PoolTogetherLogos/pooltogether-full-logo-purple.svg.js');
var pooltogetherFullLogo = require('../../assets/PoolTogetherLogos/pooltogether-full-logo.svg.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var HeaderLogo = function HeaderLogo(props) {
  var screenSize = hooks.useScreenSize();

  var _useContext = React.useContext(ThemeContextProvider.ThemeContext),
      theme = _useContext.theme;

  if (screenSize <= hooks.ScreenSize.sm) {
    return /*#__PURE__*/React__default['default'].createElement("img", {
      src: theme === 'dark' ? pooltogetherP : pooltogetherPPurple,
      style: {
        height: '50px',
        width: '29px'
      }
    });
  }

  return /*#__PURE__*/React__default['default'].createElement("img", {
    src: theme === 'dark' ? pooltogetherFullLogo : pooltogetherFullLogoPurple,
    style: {
      height: '60px',
      width: '151px'
    }
  });
};

exports.HeaderLogo = HeaderLogo;
//# sourceMappingURL=HeaderLogo.js.map
