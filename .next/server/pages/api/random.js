(function() {
var exports = {};
exports.id = 863;
exports.ids = [863];
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

/***/ 4025:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ handler; }
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2376);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2470);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _models_meal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3258);



let dayRetrieved = "";
let meals;
async function handler(req, res) {
  let today = moment__WEBPACK_IMPORTED_MODULE_1___default()().format('DDD');

  if (dayRetrieved !== today) {
    meals = await getRandomFromRemote(5);
    dayRetrieved = today;
    res.status(200).json(meals);
  } else {
    res.status(304).json(meals);
  }
}

async function getRandomFromRemote(count) {
  let reqs = [];

  for (let i = 0; i < count; i++) {
    reqs.push(axios__WEBPACK_IMPORTED_MODULE_0___default().request({
      url: 'https://www.themealdb.com/api/json/v1/1/random.php'
    }));
  }

  const responses = await Promise.all(reqs); //error handling goes here

  return responses.map(res => (0,_models_meal__WEBPACK_IMPORTED_MODULE_2__/* .convertMeal */ .I)(res.data.meals[0]));
}

/***/ }),

/***/ 2376:
/***/ (function(module) {

"use strict";
module.exports = require("axios");;

/***/ }),

/***/ 2470:
/***/ (function(module) {

"use strict";
module.exports = require("moment");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__(4025));
module.exports = __webpack_exports__;

})();