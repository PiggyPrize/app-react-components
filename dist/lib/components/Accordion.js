'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var motion = require('../../node_modules/framer-motion/dist/es/render/dom/motion.js');
var index = require('../../node_modules/framer-motion/dist/es/components/AnimatePresence/index.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var Accordion = function Accordion(props) {
  var i = props.i,
      expanded = props.expanded,
      setExpanded = props.setExpanded,
      openUpwards = props.openUpwards;
  var isOpen = i === expanded;
  var header = /*#__PURE__*/React__default['default'].createElement(motion.motion.div, {
    initial: false,
    animate: {},
    onClick: function onClick() {
      return setExpanded(isOpen ? false : i);
    },
    className: "accordion-header"
  }, props.header);
  return /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null, !openUpwards && header, /*#__PURE__*/React__default['default'].createElement(index.AnimatePresence, {
    initial: false
  }, isOpen && /*#__PURE__*/React__default['default'].createElement(motion.motion.div, {
    key: "content",
    initial: "collapsed",
    animate: "open",
    exit: "collapsed",
    variants: {
      open: {
        opacity: 1,
        height: 'auto'
      },
      collapsed: {
        opacity: 0,
        height: 0
      }
    },
    transition: {
      duration: 0.8,
      ease: [0.04, 0.62, 0.23, 0.98]
    },
    className: "accordion-motion-content"
  }, /*#__PURE__*/React__default['default'].createElement(ContentWrapper, null, props.content))), openUpwards && header);
};
Accordion.defaultProps = {
  openUpwards: false
};

var Content = function Content(props) {
  return /*#__PURE__*/React__default['default'].createElement("div", {
    className: "accordion-content"
  }, props.children);
};

var ContentWrapper = function ContentWrapper(props) {
  return /*#__PURE__*/React__default['default'].createElement(motion.motion.div, {
    variants: {
      collapsed: {
        scale: 1
      },
      open: {
        scale: 1
      }
    },
    transition: {
      duration: 0.8
    },
    className: "accordion-content-placeholder"
  }, /*#__PURE__*/React__default['default'].createElement(Content, props));
};

exports.Accordion = Accordion;
exports.ContentWrapper = ContentWrapper;
//# sourceMappingURL=Accordion.js.map
