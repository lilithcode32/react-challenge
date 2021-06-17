(function() {
var exports = {};
exports.id = 337;
exports.ids = [337];
exports.modules = {

/***/ 3258:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "I": function() { return /* binding */ convertMeal; }
/* harmony export */ });
function convertMeal(meal) {
  let ingredients = new Array(20);

  for (let i = 1; i < 21; i++) {
    ingredients[i] = {
      ingredient: meal["strIngredient" + i],
      measure: meal["strMeasure" + i]
    };
  }

  ingredients = ingredients.filter(x => x && x.ingredient && x.measure);
  return {
    id: meal.idMeal,
    title: meal.strMeal,
    instructions: meal.strInstructions,
    ingredients,
    thumb: meal.strMealThumb
  };
}

/***/ }),

/***/ 6291:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getServerSideProps": function() { return /* binding */ getServerSideProps; }
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2376);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _models_meal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3258);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);






function Page({
  data
}) {
  const {
    ingredients,
    thumb,
    title,
    instructions
  } = data;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("nav", {
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        children: "back"
      })
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
      src: thumb,
      alt: "Image of" + title
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
      children: title
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
      children: ingredients.map(({
        ingredient,
        measure
      }, idx) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
          children: measure
        }), "\xA0", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
          children: ingredient
        })]
      }, idx))
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("pre", {
      children: instructions
    })]
  });
} // This gets called on every request


async function getServerSideProps({
  params
}) {
  params.recipe_id = params.recipe_id || '52892';
  const res = await axios__WEBPACK_IMPORTED_MODULE_1___default().request({
    url: `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.recipe_id}`
  });
  return {
    props: {
      data: (0,_models_meal__WEBPACK_IMPORTED_MODULE_3__/* .convertMeal */ .I)(res.data.meals[0])
    }
  };
}
/* harmony default export */ __webpack_exports__["default"] = (Page);

/***/ }),

/***/ 2376:
/***/ (function(module) {

"use strict";
module.exports = require("axios");;

/***/ }),

/***/ 9297:
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ 5282:
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-runtime");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__(6291));
module.exports = __webpack_exports__;

})();