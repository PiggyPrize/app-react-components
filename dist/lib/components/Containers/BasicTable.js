'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _rollupPluginBabelHelpers = require('../../../_virtual/_rollupPluginBabelHelpers.js');
var React = require('react');
var index = require('../../../node_modules/classnames/index.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var BasicTable = function BasicTable(props) {
  var nestedTable = props.nestedTable,
      tableInstance = props.tableInstance,
      rowClassName = props.rowClassName,
      noHeader = props.noHeader,
      headerClassName = props.headerClassName;
  var getTableProps = tableInstance.getTableProps,
      getTableBodyProps = tableInstance.getTableBodyProps,
      headerGroups = tableInstance.headerGroups,
      rows = tableInstance.rows,
      prepareRow = tableInstance.prepareRow;
  var className = 'table table-fixed w-full align-top';
  return /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null, /*#__PURE__*/React__default['default'].createElement("table", _rollupPluginBabelHelpers['extends']({}, getTableProps(), {
    className: className
  }), !noHeader && /*#__PURE__*/React__default['default'].createElement("thead", {
    className: index('w-full', headerClassName)
  }, headerGroups.map(function (headerGroup, index) {
    return /*#__PURE__*/React__default['default'].createElement("tr", _rollupPluginBabelHelpers['extends']({
      key: "header-group-".concat(index)
    }, headerGroup.getHeaderGroupProps(), {
      style: nestedTable ? {
        background: 'none'
      } : {},
      className: "tr"
    }), headerGroup.headers.map(function (column) {
      return /*#__PURE__*/React__default['default'].createElement("th", _rollupPluginBabelHelpers['extends']({
        key: "column-".concat(column.id)
      }, column.getHeaderProps([{
        className: "th ".concat(column.className, " ").concat(column.headerClassName),
        style: column.style
      }])), column.render('Header'));
    }));
  })), /*#__PURE__*/React__default['default'].createElement("tbody", _rollupPluginBabelHelpers['extends']({
    className: "w-full"
  }, getTableBodyProps()), rows.map(function (row) {
    prepareRow(row);
    return /*#__PURE__*/React__default['default'].createElement("tr", _rollupPluginBabelHelpers['extends']({
      key: "row-".concat(row.id)
    }, row.getRowProps(), {
      className: index('tr', rowClassName)
    }), row.cells.map(function (cell, index) {
      return /*#__PURE__*/React__default['default'].createElement("td", _rollupPluginBabelHelpers['extends']({
        key: "row-".concat(row.id, "-cell-").concat(index),
        className: "td"
      }, cell.getCellProps([{
        className: "td ".concat(cell.column.className),
        style: cell.column.style
      }])), cell.render('Cell'));
    }));
  }))));
};
BasicTable.defaultProps = {
  rowClassName: '',
  noHeader: false
};

exports.BasicTable = BasicTable;
//# sourceMappingURL=BasicTable.js.map
