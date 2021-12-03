'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var reactToastify_esm = require('../../node_modules/react-toastify/dist/react-toastify.esm.js');

var Blur = reactToastify_esm.cssTransition({
  enter: "blur-enter",
  exit: "blur-exit",
  duration: [450, 400],
  appendPosition: true
});
var DEFAULT_OPTIONS = {
  transition: Blur
};
var poolToast = {
  dismiss: function dismiss() {
    reactToastify_esm.toast.dismiss();
  },
  rainbow: function rainbow(message) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : DEFAULT_OPTIONS;
    reactToastify_esm.toast.dismiss();
    reactToastify_esm.toast(message, options);

    if (window) {
      setTimeout(reactToastify_esm.toast.dismiss, 7000);
    }
  },
  success: function success(message) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : DEFAULT_OPTIONS;
    reactToastify_esm.toast.dismiss();
    reactToastify_esm.toast.success(message, options);
  },
  error: function error(message) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : DEFAULT_OPTIONS;
    reactToastify_esm.toast.dismiss();
    reactToastify_esm.toast.error(message, options);
  },
  info: function info(message) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : DEFAULT_OPTIONS;
    reactToastify_esm.toast.dismiss();
    reactToastify_esm.toast.info(message, options);
  },
  warn: function warn(message) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : DEFAULT_OPTIONS;
    reactToastify_esm.toast.dismiss();
    reactToastify_esm.toast.warn(message, options);
  }
};

exports.poolToast = poolToast;
//# sourceMappingURL=poolToast.js.map
