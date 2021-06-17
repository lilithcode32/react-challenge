(function() {
var exports = {};
exports.id = 405;
exports.ids = [405];
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

/***/ 8515:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ Home; },
  "getServerSideProps": function() { return /* binding */ getServerSideProps; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
;// CONCATENATED MODULE: external "next/head"
var head_namespaceObject = require("next/head");;
var head_default = /*#__PURE__*/__webpack_require__.n(head_namespaceObject);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: ./models/meal.ts
var meal = __webpack_require__(3258);
// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(2376);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);
// EXTERNAL MODULE: external "moment"
var external_moment_ = __webpack_require__(2470);
var external_moment_default = /*#__PURE__*/__webpack_require__.n(external_moment_);
;// CONCATENATED MODULE: external "shards-react"
var external_shards_react_namespaceObject = require("shards-react");;
;// CONCATENATED MODULE: ./pages/index.tsx







let dayRetrieved = "";
let meals;


function Home({
  data
}) {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_shards_react_namespaceObject.Container, {
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)((head_default()), {
      children: [/*#__PURE__*/jsx_runtime_.jsx("title", {
        children: "Recipe Finder"
      }), /*#__PURE__*/jsx_runtime_.jsx("link", {
        rel: "icon",
        href: "/favicon.ico"
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx(external_shards_react_namespaceObject.Row, {
      children: /*#__PURE__*/jsx_runtime_.jsx(external_shards_react_namespaceObject.Col, {
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "home-hero",
          children: [/*#__PURE__*/jsx_runtime_.jsx("img", {
            src: "logo.png",
            alt: "Recipe Finder Logo"
          }), /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
            href: "/",
            children: /*#__PURE__*/jsx_runtime_.jsx("a", {
              className: "floating-button",
              children: /*#__PURE__*/jsx_runtime_.jsx("i", {
                className: "fas fa-search"
              })
            })
          })]
        })
      })
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_shards_react_namespaceObject.Row, {
      children: [/*#__PURE__*/jsx_runtime_.jsx(external_shards_react_namespaceObject.Col, {
        sm: 12,
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "page-title",
          children: ["Recipes of the Day ", /*#__PURE__*/jsx_runtime_.jsx("i", {
            className: "fas fa-search"
          })]
        })
      }), data.map(meal => /*#__PURE__*/jsx_runtime_.jsx(external_shards_react_namespaceObject.Col, {
        sm: 12,
        lg: 4,
        className: "meal",
        children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
          href: "/detail/" + meal.id,
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_shards_react_namespaceObject.Card, {
            children: [/*#__PURE__*/jsx_runtime_.jsx(external_shards_react_namespaceObject.CardHeader, {
              children: meal.title
            }), /*#__PURE__*/jsx_runtime_.jsx(external_shards_react_namespaceObject.CardImg, {
              src: meal.thumb,
              alt: "Image of " + meal.title
            })]
          })
        })
      }, meal.id))]
    })]
  });
} // This gets called on every request

async function getServerSideProps() {
  let today = external_moment_default()().format('DDD');

  if (dayRetrieved !== today) {
    meals = await getRandomFromRemote(5);
    dayRetrieved = today;
  }

  return {
    props: {
      data: meals
    }
  };
}

//If we had a paid API key this would be as simple as calling a different endpoint
async function getRandomFromRemote(count) {
  let reqs = [];

  const getRand = async () => external_axios_default().request({
    url: 'https://www.themealdb.com/api/json/v1/1/random.php'
  });

  for (let i = 0; i < count; i++) {
    reqs.push(getRand());
  }

  const responses = await Promise.all(reqs);
  const mealQueue = responses.map(res => res.data.meals[0]);
  const meals = [mealQueue.pop()];

  while (meals.length < count) {
    let meal = mealQueue.pop();

    if (meals.find(m => m.idMeal === meal.idMeal)) {
      let nMeal = await getRand();
      mealQueue.push(nMeal.data.meals[0]);
    } else {
      meals.push(meal);
    }
  }

  return responses.map(res => (0,meal/* convertMeal */.I)(res.data.meals[0]));
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

/***/ }),

/***/ 8417:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router-context.js");;

/***/ }),

/***/ 2238:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");;

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

/***/ }),

/***/ 4453:
/***/ (function() {

/* (ignored) */

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, [664], function() { return __webpack_exec__(8515); });
module.exports = __webpack_exports__;

})();