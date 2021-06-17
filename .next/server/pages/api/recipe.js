(function() {
var exports = {};
exports.id = 285;
exports.ids = [285];
exports.modules = {

/***/ 1518:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ handler; }
/* harmony export */ });
async function handler(req, res) {
  console.log(req.query);
  res.status(200).json({
    "hi": "recipe"
  });
}

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__(1518));
module.exports = __webpack_exports__;

})();