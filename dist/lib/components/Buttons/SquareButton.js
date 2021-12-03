'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib_es6 = require('../../../node_modules/tslib/tslib.es6.js');
var index = require('../../../node_modules/classnames/index.js');
var React = require('react');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

exports.SquareButtonTheme = void 0;
(function (SquareButtonTheme) {
    SquareButtonTheme["primary"] = "primary";
    SquareButtonTheme["secondary"] = "secondary";
})(exports.SquareButtonTheme || (exports.SquareButtonTheme = {}));
exports.SquareButtonSize = void 0;
(function (SquareButtonSize) {
    SquareButtonSize["sm"] = "sm";
    SquareButtonSize["md"] = "md";
    SquareButtonSize["lg"] = "lg";
})(exports.SquareButtonSize || (exports.SquareButtonSize = {}));
const SquareButton = (props) => {
    const { theme, size, className } = props, buttonProps = tslib_es6.__rest(props, ["theme", "size", "className"]);
    return (React__default['default'].createElement("button", Object.assign({ className: index(undefined, className, getThemeClassName(theme), getSizeClassName(size)) }, buttonProps)));
};
SquareButton.defaultProps = {
    theme: exports.SquareButtonTheme.primary,
    size: exports.SquareButtonSize.md
};
const getThemeClassName = (theme) => {
    switch (theme) {
        default:
        case exports.SquareButtonTheme.primary: {
            return undefined;
        }
        case exports.SquareButtonTheme.secondary: {
            return '';
        }
    }
};
const getSizeClassName = (size) => {
    switch (size) {
        default:
        case exports.SquareButtonSize.sm: {
            return '';
        }
        case exports.SquareButtonSize.md: {
            return '';
        }
        case exports.SquareButtonSize.lg: {
            return '';
        }
    }
};

exports.SquareButton = SquareButton;
//# sourceMappingURL=SquareButton.js.map
