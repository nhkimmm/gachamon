"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_nahyun_gachamon_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"../../node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_nahyun_gachamon_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_nahyun_gachamon_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"../../node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"../../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _gachamon_controller_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @gachamon/controller/api */ \"../controller/api.js\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\n\nvar _this = undefined;\n\n\n\nvar _s = $RefreshSig$();\nvar POKEMON = [\n    25,\n    4,\n    1,\n    7\n];\nvar Home = function() {\n    var _this1 = _this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null), pokemon = ref[0], setPokemon = ref[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        if (!pokemon) return;\n        var check = function() {\n            var _ref = _asyncToGenerator(_Users_nahyun_gachamon_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n                var pokemonData;\n                return _Users_nahyun_gachamon_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                    while(1)switch(_ctx.prev = _ctx.next){\n                        case 0:\n                            _ctx.next = 2;\n                            return (0,_gachamon_controller_api__WEBPACK_IMPORTED_MODULE_3__.getPokemon)(pokemon);\n                        case 2:\n                            pokemonData = _ctx.sent;\n                            console.log(pokemonData);\n                        case 4:\n                        case \"end\":\n                            return _ctx.stop();\n                    }\n                }, _callee);\n            }));\n            return function check() {\n                return _ref.apply(this, arguments);\n            };\n        }();\n        check();\n    }, [\n        pokemon\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h2\", {\n                children: pokemon || \"GET YOUR POKEMON\"\n            }, void 0, false, {\n                fileName: \"/Users/nahyun/gachamon/packages/template/pages/index.tsx\",\n                lineNumber: 20,\n                columnNumber: 7\n            }, _this),\n            POKEMON.map(function(mon) {\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                    onClick: function() {\n                        return setPokemon(mon);\n                    }\n                }, \"\".concat(mon, \"-button\"), false, {\n                    fileName: \"/Users/nahyun/gachamon/packages/template/pages/index.tsx\",\n                    lineNumber: 22,\n                    columnNumber: 9\n                }, _this1);\n            }),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                onClick: function() {\n                    return setPokemon((0,_gachamon_controller_api__WEBPACK_IMPORTED_MODULE_3__.getRandomPokemonId)());\n                }\n            }, \"random-button\", false, {\n                fileName: \"/Users/nahyun/gachamon/packages/template/pages/index.tsx\",\n                lineNumber: 24,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true);\n};\n_s(Home, \"guVkFVVSew6hH2g/XBdZM40Ur3I=\");\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDNEM7QUFDOEI7O0FBRTFFLElBQU1JLE9BQU8sR0FBRztBQUFDLE1BQUU7QUFBRSxLQUFDO0FBQUUsS0FBQztBQUFFLEtBQUM7Q0FBQztBQUU3QixJQUFNQyxJQUFJLEdBQWEsV0FBTTs7O0lBQzNCLElBQThCSixHQUE2QixHQUE3QkEsK0NBQVEsQ0FBZ0IsSUFBSSxDQUFDLEVBUDdELE9BT2dCLEdBQWdCQSxHQUE2QixHQUE3QyxFQVBoQixVQU80QixHQUFJQSxHQUE2QixHQUFqQztJQUMxQkQsZ0RBQVMsQ0FBQyxXQUFNO1FBQ2QsSUFBSSxDQUFDTSxPQUFPLEVBQUUsT0FBTztRQUNyQixJQUFNRSxLQUFLO3VCQUFHLHVLQUFZO29CQUNsQkMsV0FBVzs7Ozs7bUNBQVNOLG9FQUFVLENBQUNHLE9BQU8sQ0FBQzs7NEJBQXZDRyxXQUFXLFlBQTRCOzRCQUM3Q0MsT0FBTyxDQUFDQyxHQUFHLENBQUNGLFdBQVcsQ0FBQyxDQUFDOzs7Ozs7YUFDMUI7NEJBSEtELEtBQUs7OztXQUdWO1FBQ0RBLEtBQUssRUFBRSxDQUFDO0tBQ1QsRUFBRTtRQUFDRixPQUFPO0tBQUMsQ0FBQyxDQUFDO0lBRWQscUJBQ0U7OzBCQUNFLDhEQUFDTSxJQUFFOzBCQUFFTixPQUFPLElBQUksa0JBQWtCOzs7OztxQkFBTTtZQUN2Q0YsT0FBTyxDQUFDUyxHQUFHLENBQUMsU0FBQ0MsR0FBRztxQ0FDZiw4REFBQ0MsUUFBTTtvQkFBdUJDLE9BQU8sRUFBRTsrQkFBTVQsVUFBVSxDQUFDTyxHQUFHLENBQUM7cUJBQUE7bUJBQS9DLEVBQUMsQ0FBTSxNQUFPLENBQVhBLEdBQUcsRUFBQyxTQUFPLENBQUM7Ozs7MEJBQTJDO2FBQ3hFLENBQUM7MEJBQ0YsOERBQUNDLFFBQU07Z0JBRUxDLE9BQU8sRUFBRTsyQkFBTVQsVUFBVSxDQUFDTCw0RUFBa0IsRUFBRSxDQUFDO2lCQUFBO2VBRHpDLGVBQWE7Ozs7cUJBRVg7O29CQUNULENBQ0g7Q0FDSDtHQXZCS0csSUFBSTtBQUFKQSxLQUFBQSxJQUFJO0FBeUJWLCtEQUFlQSxJQUFJLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4PzA3ZmYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUgeyBOZXh0UGFnZSB9IGZyb20gXCJuZXh0XCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBnZXRSYW5kb21Qb2tlbW9uSWQsIGdldFBva2Vtb24gfSBmcm9tIFwiQGdhY2hhbW9uL2NvbnRyb2xsZXIvYXBpXCI7XG5cbmNvbnN0IFBPS0VNT04gPSBbMjUsIDQsIDEsIDddO1xuXG5jb25zdCBIb21lOiBOZXh0UGFnZSA9ICgpID0+IHtcbiAgY29uc3QgW3Bva2Vtb24sIHNldFBva2Vtb25dID0gdXNlU3RhdGU8bnVsbCB8IG51bWJlcj4obnVsbCk7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKCFwb2tlbW9uKSByZXR1cm47XG4gICAgY29uc3QgY2hlY2sgPSBhc3luYyAoKSA9PiB7XG4gICAgICBjb25zdCBwb2tlbW9uRGF0YSA9IGF3YWl0IGdldFBva2Vtb24ocG9rZW1vbik7XG4gICAgICBjb25zb2xlLmxvZyhwb2tlbW9uRGF0YSk7XG4gICAgfTtcbiAgICBjaGVjaygpO1xuICB9LCBbcG9rZW1vbl0pO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxoMj57cG9rZW1vbiB8fCBcIkdFVCBZT1VSIFBPS0VNT05cIn08L2gyPlxuICAgICAge1BPS0VNT04ubWFwKChtb24pID0+IChcbiAgICAgICAgPGJ1dHRvbiBrZXk9e2Ake21vbn0tYnV0dG9uYH0gb25DbGljaz17KCkgPT4gc2V0UG9rZW1vbihtb24pfT48L2J1dHRvbj5cbiAgICAgICkpfVxuICAgICAgPGJ1dHRvblxuICAgICAgICBrZXk9e2ByYW5kb20tYnV0dG9uYH1cbiAgICAgICAgb25DbGljaz17KCkgPT4gc2V0UG9rZW1vbihnZXRSYW5kb21Qb2tlbW9uSWQoKSl9XG4gICAgICA+PC9idXR0b24+XG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBIb21lO1xuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiZ2V0UmFuZG9tUG9rZW1vbklkIiwiZ2V0UG9rZW1vbiIsIlBPS0VNT04iLCJIb21lIiwicG9rZW1vbiIsInNldFBva2Vtb24iLCJjaGVjayIsInBva2Vtb25EYXRhIiwiY29uc29sZSIsImxvZyIsImgyIiwibWFwIiwibW9uIiwiYnV0dG9uIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ })

});