'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var index = require('../../../node_modules/classnames/index.js');
var LoadingDots = require('./LoadingDots.js');
var pooltogetherP = require('../../assets/PoolTogetherLogos/pooltogether-p.svg.js');
var pooltogetherPPurple = require('../../assets/PoolTogetherLogos/pooltogether-p-purple.svg.js');
var ThemeContextProvider = require('../ThemeContextProvider.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

function LoadingLogo(props) {
  // TODO: Add back motion
  var _useContext = React.useContext(ThemeContextProvider.ThemeContext),
      theme = _useContext.theme;

  return /*#__PURE__*/React__default['default'].createElement("div", {
    className: index('flex flex-col', props.className),
    style: {
      width: 'min-content'
    }
  }, /*#__PURE__*/React__default['default'].createElement("img", {
    src: theme === 'dark' ? pooltogetherP : pooltogetherPPurple,
    className: "w-8 mx-auto",
    style: {
      borderWidth: 0
    }
  }), /*#__PURE__*/React__default['default'].createElement(LoadingDots.LoadingDots, null)); // return (
  //   <motion.div
  //     animate={!initialized ? 'enter' : 'exit'}
  //     transition={{ duration: 0.5, ease: 'easeIn' }}
  //     variants={{
  //       initial: {
  //         opacity: 1
  //       },
  //       enter: {
  //         opacity: 1
  //       },
  //       exit: {
  //         opacity: 0,
  //         transitionEnd: {
  //           display: 'none'
  //         }
  //       }
  //     }}
  //     className='h-screen w-screen fixed overflow-hidden t-0 r-0 l-0 b-0 text-white flex flex-col items-center justify-center'
  //     style={{
  //       backgroundColor: '#1E0B43',
  //       color: 'white',
  //       zIndex: 12345678
  //     }}
  //   >
  //     <img src={PoolTogetherMark} className='w-8 outline-none -mt-20' style={{ borderWidth: 0 }} />
  //     <div className='overflow-hidden'>
  //       <V3LoadingDots />
  //     </div>
  //   </motion.div>
  // )
}

exports.LoadingLogo = LoadingLogo;
//# sourceMappingURL=LoadingLogo.js.map
