'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var index = require('../../../node_modules/classnames/index.js');
var DropdownList = require('../Input/DropdownList.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

function LanguagePickerDropdown(props) {
  var langs = {
    en: {
      name: 'English',
      nativeName: 'English'
    },
    es: {
      name: 'Spanish',
      nativeName: 'Español'
    },
    de: {
      name: 'German',
      nativeName: 'Deutsch'
    },
    fr: {
      name: 'French',
      nativeName: 'Français'
    },
    it: {
      name: 'Italian',
      nativeName: 'Italiana'
    },
    ko: {
      name: 'Korean',
      nativeName: '한국어 (韓國語)'
    },
    pt: {
      name: 'Portuguese',
      nativeName: 'Português'
    },
    tr: {
      name: 'Turkish',
      nativeName: 'Türkçe'
    },
    zh: {
      name: 'Zhōngwén',
      nativeName: '中文'
    }
  };
  var currentLang = props.currentLang,
      changeLang = props.changeLang,
      className = props.className;

  var formatValue = function formatValue(key) {
    var lang = langs[key];
    return /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null, key.toUpperCase(), " - ", /*#__PURE__*/React__default['default'].createElement("span", {
      className: "capitalize"
    }, lang.nativeName.split(',')[0]), " (", lang.name.split(';')[0], ")");
  };

  return /*#__PURE__*/React__default['default'].createElement(DropdownList.DropdownList, {
    id: "language-picker-dropdown",
    className: index('text-xxs sm:text-sm', className),
    label: currentLang === null || currentLang === void 0 ? void 0 : currentLang.toUpperCase(),
    formatValue: formatValue,
    onValueSet: changeLang,
    current: currentLang,
    values: langs
  });
}

exports.LanguagePickerDropdown = LanguagePickerDropdown;
//# sourceMappingURL=LanguagePickerDropdown.js.map
