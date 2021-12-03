'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var index = require('../../../node_modules/classnames/index.js');
var FeatherIcon = require('feather-icons-react');
var reachDialog_esm = require('../../../node_modules/@reach/dialog/dist/reach-dialog.esm.js');
var hooks = require('@pooltogether/hooks');
var motion = require('../../../node_modules/framer-motion/dist/es/render/dom/motion.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var FeatherIcon__default = /*#__PURE__*/_interopDefaultLegacy(FeatherIcon);

var Modal = function Modal(props) {
  var isOpen = props.isOpen,
      closeModal = props.closeModal,
      children = props.children,
      label = props.label,
      className = props.className,
      noPad = props.noPad,
      noSize = props.noSize,
      noBgColor = props.noBgColor,
      noTextColor = props.noTextColor,
      noRoundCorners = props.noRoundCorners;
  var shouldReduceMotion = hooks.useReducedMotion();

  if (!label) {
    console.warn('Modal required a label! <Modal /> with children:', children);
  }

  return /*#__PURE__*/React__default['default'].createElement(reachDialog_esm['default'], {
    "aria-label": label,
    isOpen: isOpen,
    onDismiss: closeModal
  }, /*#__PURE__*/React__default['default'].createElement(motion.motion.div, {
    id: "modal-animation-wrapper",
    key: label,
    transition: {
      duration: shouldReduceMotion ? 0 : 0.1,
      ease: 'easeIn'
    },
    initial: {
      opacity: 0
    },
    exit: {
      opacity: 0
    },
    animate: {
      opacity: 1
    },
    className: index('mx-auto relative', {
      'p-4': !noPad,
      'bg-card': !noBgColor,
      'text-inverse': !noTextColor,
      'h-full sm:h-auto sm:max-w-sm': !noSize,
      'rounded-none sm:rounded-xl ': !noRoundCorners
    }, className)
  }, /*#__PURE__*/React__default['default'].createElement(CloseModalButton, {
    closeModal: closeModal
  }), children));
};
Modal.defaultProps = {
  noPad: false,
  noSize: false
};

var CloseModalButton = function CloseModalButton(props) {
  var closeModal = props.closeModal;
  return /*#__PURE__*/React__default['default'].createElement("button", {
    className: "my-auto ml-auto close-button trans text-inverse hover:opacity-30 absolute right-2 top-2",
    onClick: closeModal
  }, /*#__PURE__*/React__default['default'].createElement(FeatherIcon__default['default'], {
    icon: "x",
    className: "w-6 h-6"
  }));
};

exports.Modal = Modal;
//# sourceMappingURL=Modal.js.map
