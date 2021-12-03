'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _rollupPluginBabelHelpers = require('../../_virtual/_rollupPluginBabelHelpers.js');
var React = require('react');
var js_cookie = require('../../node_modules/js-cookie/src/js.cookie.js');
var index_es = require('../../node_modules/react-hotkeys/index.es.js');
var hooks = require('@pooltogether/hooks');
var constants = require('../constants.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var COOKIE_OPTIONS = hooks.PT_HOOKS_CONSTANTS.COOKIE_OPTIONS;
var THEME = 'theme';
var ThemeContext = /*#__PURE__*/React__default['default'].createContext(null);
function ThemeContextProvider(props) {
  var _useState = React.useState('dark'),
      _useState2 = _rollupPluginBabelHelpers.slicedToArray(_useState, 2),
      theme = _useState2[0],
      setTheme = _useState2[1];

  React.useEffect(function () {
    var stored = js_cookie.get(THEME);
    var body = document.body;
    body.classList.add('theme-dark');

    if (typeof window !== 'undefined' && window.matchMedia) {
      var setThemeAutomatically = function setThemeAutomatically(newValue) {
        if (newValue === 'dark') {
          body.classList.add('theme-dark');
          body.classList.remove('theme-light');
          setTheme('dark');
        } else if (newValue === 'light') {
          body.classList.add('theme-light');
          body.classList.remove('theme-dark');
          setTheme('light');
        }
      }; // onLoad


      setThemeAutomatically(stored);
    }
  }, []);

  var toggleTheme = function toggleTheme(e) {
    e.preventDefault();
    var body = document.body;

    if (body.classList.contains('theme-dark')) {
      body.classList.remove('theme-dark');
      body.classList.add('theme-light');
      js_cookie.set(THEME, 'light', COOKIE_OPTIONS);
      setTheme('light');
    } else {
      body.classList.remove('theme-light');
      body.classList.add('theme-dark');
      js_cookie.set(THEME, 'dark', COOKIE_OPTIONS);
      setTheme('dark');
    }
  };

  var handlers = {
    TOGGLE_THEME: toggleTheme
  };
  return /*#__PURE__*/React__default['default'].createElement(ThemeContext.Provider, {
    value: {
      theme: theme,
      toggleTheme: toggleTheme
    }
  }, /*#__PURE__*/React__default['default'].createElement(index_es.GlobalHotKeys, {
    keyMap: constants.HOTKEYS_KEY_MAP,
    handlers: handlers
  }), props.children);
}

exports.ThemeContext = ThemeContext;
exports.ThemeContextProvider = ThemeContextProvider;
//# sourceMappingURL=ThemeContextProvider.js.map
