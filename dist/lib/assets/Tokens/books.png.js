'use strict';

var BOOKS = "data:image/png;base64,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";

module.exports = BOOKS;
//# sourceMappingURL=books.png.js.map
