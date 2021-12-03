'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var index = require('../../../node_modules/classnames/index.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var TicketRow = function TicketRow(props) {
  var left = props.left,
      right = props.right,
      cornerBgClassName = props.cornerBgClassName,
      className = props.className;
  return /*#__PURE__*/React__default['default'].createElement("div", {
    className: index('flex w-full', className)
  }, /*#__PURE__*/React__default['default'].createElement("div", {
    className: index('p-3 w-40 lg:w-48 rounded-l-lg bg-accent-grey-4 notched-box')
  }, /*#__PURE__*/React__default['default'].createElement("div", {
    className: index("notched-corner notched-top-right", cornerBgClassName)
  }), /*#__PURE__*/React__default['default'].createElement("div", {
    className: index("notched-corner notched-bottom-right", cornerBgClassName)
  }), left), /*#__PURE__*/React__default['default'].createElement("div", {
    className: index('my-3 bg-accent-grey-4 border-body border-dotted border-r-4'),
    style: {
      width: 1
    }
  }), /*#__PURE__*/React__default['default'].createElement("div", {
    className: index('rounded-r-lg bg-accent-grey-4 notched-box w-full')
  }, /*#__PURE__*/React__default['default'].createElement("div", {
    className: index("notched-corner notched-top-left", cornerBgClassName)
  }), /*#__PURE__*/React__default['default'].createElement("div", {
    className: index("notched-corner notched-bottom-left", cornerBgClassName)
  }), /*#__PURE__*/React__default['default'].createElement("div", {
    className: "px-4 xs:px-8 py-3"
  }, right)));
};
TicketRow.defaultProps = {
  cornerBgClassName: 'bg-body'
};

exports.TicketRow = TicketRow;
//# sourceMappingURL=TicketRow.js.map
