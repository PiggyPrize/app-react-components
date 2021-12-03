'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _rollupPluginBabelHelpers = require('../../../_virtual/_rollupPluginBabelHelpers.js');
var React = require('react');
var lodash = require('lodash');
var ButtonLink = require('../Links/ButtonLink.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

function Button(props) {
  var classes = ButtonLink.getButtonClasses(props);
  var newProps = lodash.omit(props, ['border', 'bold', 'text', 'bg', 'hoverBorder', 'hoverText', 'hoverBg', 'noAnim', 'outline', 'inverse', 'basic', 'secondary', 'tertiary', 'textSize']);
  return /*#__PURE__*/React__default['default'].createElement("button", _rollupPluginBabelHelpers['extends']({}, newProps, {
    className: classes
  }));
}

exports.Button = Button;
//# sourceMappingURL=Button.js.map
