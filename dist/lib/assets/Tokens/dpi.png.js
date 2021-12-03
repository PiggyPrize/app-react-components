'use strict';

var DPI = "data:image/png;base64,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";

module.exports = DPI;
//# sourceMappingURL=dpi.png.js.map
