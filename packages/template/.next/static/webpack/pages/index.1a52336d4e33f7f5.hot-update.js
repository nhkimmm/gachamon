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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_nahyun_gachamon_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"../../node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_nahyun_gachamon_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_nahyun_gachamon_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"../../node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/shared/lib/styled-jsx */ \"../../node_modules/next/dist/shared/lib/styled-jsx.js\");\n/* harmony import */ var next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"../../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _gachamon_controller_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @gachamon/controller/api */ \"../controller/api.js\");\n/* harmony import */ var _components_Profile__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Profile */ \"./components/Profile.tsx\");\n/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Button */ \"./components/Button.tsx\");\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _i = arr == null ? null : (typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"]);\n    if (_i == null) return;\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _s1, _e;\n    try {\n        for(_i = _i.call(arr); !(_n = (_s1 = _i.next()).done); _n = true){\n            _arr.push(_s1.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\n\nvar _this = undefined;\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar POKEMON = [\n    [\n        25,\n        \"yellow\"\n    ],\n    [\n        4,\n        \"red\"\n    ],\n    [\n        1,\n        \"green\"\n    ],\n    [\n        7,\n        \"blue\"\n    ], \n];\nvar Home = function() {\n    var _this1 = _this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null), /*#__PURE__*/ pokemon = ref[0], setPokemon = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null), pokeData = ref1[0], setPokeData = ref1[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function() {\n        if (!pokemon) return;\n        var check = function() {\n            var _ref = _asyncToGenerator(_Users_nahyun_gachamon_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n                var pokemonData;\n                return _Users_nahyun_gachamon_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                    while(1)switch(_ctx.prev = _ctx.next){\n                        case 0:\n                            _ctx.next = 2;\n                            return (0,_gachamon_controller_api__WEBPACK_IMPORTED_MODULE_4__.getPokemon)(pokemon);\n                        case 2:\n                            pokemonData = _ctx.sent;\n                            setPokeData(pokemonData);\n                        case 4:\n                        case \"end\":\n                            return _ctx.stop();\n                    }\n                }, _callee);\n            }));\n            return function check() {\n                return _ref.apply(this, arguments);\n            };\n        }();\n        check();\n    }, [\n        pokemon\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_Profile__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                pokeData: pokeData\n            }, void 0, false, {\n                fileName: \"/Users/nahyun/gachamon/packages/template/pages/index.tsx\",\n                lineNumber: 28,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: \"jsx-2a135465915f4969\" + \" \" + \"button-box\",\n                children: [\n                    POKEMON.map(function(param) {\n                        var _param = _slicedToArray(param, 2), mon = _param[0], color = _param[1];\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_Button__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                            onClick: function() {\n                                return setPokemon(mon);\n                            },\n                            color: color\n                        }, \"\".concat(mon, \"-button\"), false, {\n                            fileName: \"/Users/nahyun/gachamon/packages/template/pages/index.tsx\",\n                            lineNumber: 31,\n                            columnNumber: 11\n                        }, _this1);\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_Button__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                        onClick: function() {\n                            return setPokemon((0,_gachamon_controller_api__WEBPACK_IMPORTED_MODULE_4__.getRandomPokemonId)());\n                        },\n                        color: \"white\"\n                    }, \"random-button\", false, {\n                        fileName: \"/Users/nahyun/gachamon/packages/template/pages/index.tsx\",\n                        lineNumber: 37,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/nahyun/gachamon/packages/template/pages/index.tsx\",\n                lineNumber: 29,\n                columnNumber: 7\n            }, _this),\n            (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_2___default()), {\n                id: \"2a135465915f4969\",\n                children: \".button-box.jsx-2a135465915f4969{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-column-gap:16px;-moz-column-gap:16px;column-gap:16px;margin:48px 0}\"\n            }, void 0, false, void 0, _this)\n        ]\n    }, void 0, true);\n};\n_s(Home, \"TzMbx2bAjDhvCkrav3tHkEymkoI=\");\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDNEM7QUFDOEI7QUFDOUI7QUFDRjs7QUFFMUMsSUFBTU0sT0FBTyxHQUF1QjtJQUNsQztBQUFDLFVBQUU7UUFBRSxRQUFRO0tBQUM7SUFDZDtBQUFDLFNBQUM7UUFBRSxLQUFLO0tBQUM7SUFDVjtBQUFDLFNBQUM7UUFBRSxPQUFPO0tBQUM7SUFDWjtBQUFDLFNBQUM7UUFBRSxNQUFNO0tBQUM7Q0FDWjtBQUVELElBQU1DLElBQUksR0FBYSxXQUFNOzs7SUFDM0IsSUFBOEJOLEdBQTZCLEdBQTdCQSwrQ0FBUSxDQUFnQixJQUFJLENBQUMsZ0JBZDdELE9BY2dCLEdBQWdCQSxHQUE2QixHQUE3QyxFQWRoQixVQWM0QixHQUFJQSxHQUE2QixHQUFqQztJQUMxQixJQUFnQ0EsSUFBYyxHQUFkQSwrQ0FBUSxDQUFDLElBQUksQ0FBQyxFQWZoRCxRQWVpQixHQUFpQkEsSUFBYyxHQUEvQixFQWZqQixXQWU4QixHQUFJQSxJQUFjLEdBQWxCO0lBQzVCRCxnREFBUyxDQUFDLFdBQU07UUFDZCxJQUFJLENBQUNRLE9BQU8sRUFBRSxPQUFPO1FBQ3JCLElBQU1JLEtBQUs7dUJBQUcsdUtBQVk7b0JBQ2xCQyxXQUFXOzs7OzttQ0FBU1Ysb0VBQVUsQ0FBQ0ssT0FBTyxDQUFDOzs0QkFBdkNLLFdBQVcsWUFBNEI7NEJBQzdDRixXQUFXLENBQUNFLFdBQVcsQ0FBQyxDQUFDOzs7Ozs7YUFDMUI7NEJBSEtELEtBQUs7OztXQUdWO1FBQ0RBLEtBQUssRUFBRSxDQUFDO0tBQ1QsRUFBRTtRQUFDSixPQUFPO0tBQUMsQ0FBQyxDQUFDO0lBRWQscUJBQ0U7OzBCQUNFLDhEQUFDSiwyREFBTztnQkFBQ00sUUFBUSxFQUFFQSxRQUFROzs7OztxQkFBSTswQkFDL0IsOERBQUNJLEtBQUc7MERBQVcsWUFBWTs7b0JBQ3hCUixPQUFPLENBQUNTLEdBQUcsQ0FBQzsrREFBRUMsR0FBRyxjQUFFQyxLQUFLOzZDQUN2Qiw4REFBQ1osMERBQU07NEJBRUxhLE9BQU8sRUFBRTt1Q0FBTVQsVUFBVSxDQUFDTyxHQUFHLENBQUM7NkJBQUE7NEJBQzlCQyxLQUFLLEVBQUVBLEtBQUs7MkJBRlAsRUFBQyxDQUFNLE1BQU8sQ0FBWEQsR0FBRyxFQUFDLFNBQU8sQ0FBQzs7OztrQ0FHWjtxQkFDWCxDQUFDO2tDQUNGLDhEQUFDWCwwREFBTTt3QkFFTGEsT0FBTyxFQUFFO21DQUFNVCxVQUFVLENBQUNQLDRFQUFrQixFQUFFLENBQUM7eUJBQUE7d0JBQy9DZSxLQUFLLEVBQUUsT0FBTzt1QkFGUixlQUFhOzs7OzZCQUdYOzs7Ozs7cUJBQ047Ozs7OztvQkFRTCxDQUNIO0NBQ0g7R0F0Q0tWLElBQUk7QUFBSkEsS0FBQUEsSUFBSTtBQXdDViwrREFBZUEsSUFBSSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LnRzeD8wN2ZmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgTmV4dFBhZ2UgfSBmcm9tIFwibmV4dFwiO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgZ2V0UmFuZG9tUG9rZW1vbklkLCBnZXRQb2tlbW9uIH0gZnJvbSBcIkBnYWNoYW1vbi9jb250cm9sbGVyL2FwaVwiO1xuaW1wb3J0IFByb2ZpbGUgZnJvbSBcIi4uL2NvbXBvbmVudHMvUHJvZmlsZVwiO1xuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiLi4vY29tcG9uZW50cy9CdXR0b25cIjtcblxuY29uc3QgUE9LRU1PTjogW251bWJlciwgc3RyaW5nXVtdID0gW1xuICBbMjUsIFwieWVsbG93XCJdLFxuICBbNCwgXCJyZWRcIl0sXG4gIFsxLCBcImdyZWVuXCJdLFxuICBbNywgXCJibHVlXCJdLFxuXTtcblxuY29uc3QgSG9tZTogTmV4dFBhZ2UgPSAoKSA9PiB7XG4gIGNvbnN0IFtwb2tlbW9uLCBzZXRQb2tlbW9uXSA9IHVzZVN0YXRlPG51bGwgfCBudW1iZXI+KG51bGwpO1xuICBjb25zdCBbcG9rZURhdGEsIHNldFBva2VEYXRhXSA9IHVzZVN0YXRlKG51bGwpO1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICghcG9rZW1vbikgcmV0dXJuO1xuICAgIGNvbnN0IGNoZWNrID0gYXN5bmMgKCkgPT4ge1xuICAgICAgY29uc3QgcG9rZW1vbkRhdGEgPSBhd2FpdCBnZXRQb2tlbW9uKHBva2Vtb24pO1xuICAgICAgc2V0UG9rZURhdGEocG9rZW1vbkRhdGEpO1xuICAgIH07XG4gICAgY2hlY2soKTtcbiAgfSwgW3Bva2Vtb25dKTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8UHJvZmlsZSBwb2tlRGF0YT17cG9rZURhdGF9IC8+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ1dHRvbi1ib3hcIj5cbiAgICAgICAge1BPS0VNT04ubWFwKChbbW9uLCBjb2xvcl0pID0+IChcbiAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICBrZXk9e2Ake21vbn0tYnV0dG9uYH1cbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFBva2Vtb24obW9uKX1cbiAgICAgICAgICAgIGNvbG9yPXtjb2xvcn1cbiAgICAgICAgICA+PC9CdXR0b24+XG4gICAgICAgICkpfVxuICAgICAgICA8QnV0dG9uXG4gICAgICAgICAga2V5PXtgcmFuZG9tLWJ1dHRvbmB9XG4gICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0UG9rZW1vbihnZXRSYW5kb21Qb2tlbW9uSWQoKSl9XG4gICAgICAgICAgY29sb3I9e1wid2hpdGVcIn1cbiAgICAgICAgPjwvQnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC5idXR0b24tYm94IHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGNvbHVtbi1nYXA6IDE2cHg7XG4gICAgICAgICAgbWFyZ2luOiA0OHB4IDA7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWU7XG4iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJnZXRSYW5kb21Qb2tlbW9uSWQiLCJnZXRQb2tlbW9uIiwiUHJvZmlsZSIsIkJ1dHRvbiIsIlBPS0VNT04iLCJIb21lIiwicG9rZW1vbiIsInNldFBva2Vtb24iLCJwb2tlRGF0YSIsInNldFBva2VEYXRhIiwiY2hlY2siLCJwb2tlbW9uRGF0YSIsImRpdiIsIm1hcCIsIm1vbiIsImNvbG9yIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ })

});