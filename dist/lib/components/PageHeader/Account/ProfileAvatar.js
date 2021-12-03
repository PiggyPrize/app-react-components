'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _rollupPluginBabelHelpers = require('../../../../_virtual/_rollupPluginBabelHelpers.js');
var React = require('react');
var index = require('../../../../node_modules/classnames/index.js');
var blockies = require('@download/blockies');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var BLOCKIE_DIAMETER = 24;
function ProfileAvatar(props) {
  var className = props.className,
      usersAddress = props.usersAddress;

  if (!usersAddress) {
    return null;
  }

  var image = /*#__PURE__*/React__default['default'].createElement("div", {
    className: index('profile-img my-auto relative inline-flex justify-center flex-col bg-white rounded-full shadow-sm', className),
    style: {
      padding: 1,
      height: BLOCKIE_DIAMETER,
      width: BLOCKIE_DIAMETER
    }
  }, /*#__PURE__*/React__default['default'].createElement(BlockieIdenticon, {
    address: usersAddress,
    alt: "Ethereum address: ".concat(usersAddress),
    className: "rounded-full shadow-inner"
  }));
  return image;
}

var BlockieIdenticon = function BlockieIdenticon(_ref) {
  var address = _ref.address,
      diameter = _ref.diameter,
      alt = _ref.alt,
      className = _ref.className;

  var _useState = React.useState(null),
      _useState2 = _rollupPluginBabelHelpers.slicedToArray(_useState, 2),
      dataUrl = _useState2[0],
      setDataUrl = _useState2[1];

  var canvasRef = React.useRef(null);
  React.useEffect(function () {
    var canvas = canvasRef.current;
    blockies.renderIcon({
      seed: address.toLowerCase()
    }, canvas);
    var updatedDataUrl = canvas.toDataURL();

    if (updatedDataUrl !== dataUrl) {
      setDataUrl(updatedDataUrl);
    }
  }, [dataUrl, address]);
  return /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null, /*#__PURE__*/React__default['default'].createElement("canvas", {
    ref: canvasRef,
    style: {
      display: 'none'
    }
  }), /*#__PURE__*/React__default['default'].createElement("img", {
    className: className,
    src: dataUrl,
    height: diameter,
    width: diameter,
    alt: alt || ''
  }));
};

BlockieIdenticon.defaultProps = {
  address: undefined,
  diameter: BLOCKIE_DIAMETER,
  alt: '',
  className: ''
};

exports.ProfileAvatar = ProfileAvatar;
//# sourceMappingURL=ProfileAvatar.js.map
