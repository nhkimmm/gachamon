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

/***/ "./components/Profile.tsx":
/*!********************************!*\
  !*** ./components/Profile.tsx ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"../../node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/shared/lib/styled-jsx */ \"../../node_modules/next/dist/shared/lib/styled-jsx.js\");\n/* harmony import */ var next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"../../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _i = arr == null ? null : (typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"]);\n    if (_i == null) return;\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _s1, _e;\n    try {\n        for(_i = _i.call(arr); !(_n = (_s1 = _i.next()).done); _n = true){\n            _arr.push(_s1.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\nvar _this = undefined;\n\n\n\nvar _s = $RefreshSig$();\nvar Profile = function(param1) {\n    var originPokeData = param1.pokeData, id = param1.id, _type = param1.type, type = _type === void 0 ? \"default\" : _type, onClick = param1.onClick;\n    var _this1 = _this;\n    _s();\n    var pokeData = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(function() {\n        return originPokeData === null || originPokeData === void 0 ? void 0 : originPokeData[type];\n    }, [\n        originPokeData,\n        type\n    ]);\n    console.log(pokeData);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            pokeData ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1___default().dynamic([\n                    [\n                        \"b8e4f866809772ef\",\n                        [\n                            type === \"default\" ? \"pointer\" : \"default\"\n                        ]\n                    ]\n                ]) + \" \" + \"box\",\n                children: [\n                    \"HELLO,\",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {\n                        className: next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1___default().dynamic([\n                            [\n                                \"b8e4f866809772ef\",\n                                [\n                                    type === \"default\" ? \"pointer\" : \"default\"\n                                ]\n                            ]\n                        ])\n                    }, void 0, false, {\n                        fileName: \"/Users/nahyun/gachamon/packages/template/components/Profile.tsx\",\n                        lineNumber: 27,\n                        columnNumber: 11\n                    }, _this),\n                    \" I'M \",\n                    pokeData.name.toLocaleUpperCase(),\n                    \"!\",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: pokeData.sprites.front_default,\n                        onClick: onClick,\n                        className: next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1___default().dynamic([\n                            [\n                                \"b8e4f866809772ef\",\n                                [\n                                    type === \"default\" ? \"pointer\" : \"default\"\n                                ]\n                            ]\n                        ]) + \" \" + \"poke_img\"\n                    }, void 0, false, {\n                        fileName: \"/Users/nahyun/gachamon/packages/template/components/Profile.tsx\",\n                        lineNumber: 28,\n                        columnNumber: 11\n                    }, _this),\n                    type === \"detail\" && [\n                        \"name\",\n                        \"weight\",\n                        \"height\"\n                    ].map(function(propKey) {\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1___default().dynamic([\n                                [\n                                    \"b8e4f866809772ef\",\n                                    [\n                                        type === \"default\" ? \"pointer\" : \"default\"\n                                    ]\n                                ]\n                            ]),\n                            children: [\n                                propKey,\n                                \":\",\n                                pokeData[propKey]\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/nahyun/gachamon/packages/template/components/Profile.tsx\",\n                            lineNumber: 35,\n                            columnNumber: 15\n                        }, _this1);\n                    }),\n                    type === \"detail\" && pokeData.stats.map(function(param) {\n                        var _param = _slicedToArray(param, 2), stat = _param[0], gage = _param[1];\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1___default().dynamic([\n                                [\n                                    \"b8e4f866809772ef\",\n                                    [\n                                        type === \"default\" ? \"pointer\" : \"default\"\n                                    ]\n                                ]\n                            ]),\n                            children: [\n                                stat,\n                                \":\",\n                                gage\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/nahyun/gachamon/packages/template/components/Profile.tsx\",\n                            lineNumber: 41,\n                            columnNumber: 15\n                        }, _this1);\n                    })\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/nahyun/gachamon/packages/template/components/Profile.tsx\",\n                lineNumber: 25,\n                columnNumber: 9\n            }, _this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1___default().dynamic([\n                    [\n                        \"b8e4f866809772ef\",\n                        [\n                            type === \"default\" ? \"pointer\" : \"default\"\n                        ]\n                    ]\n                ]) + \" \" + \"box\",\n                children: [\n                    \"CHOOSE\",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {\n                        className: next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1___default().dynamic([\n                            [\n                                \"b8e4f866809772ef\",\n                                [\n                                    type === \"default\" ? \"pointer\" : \"default\"\n                                ]\n                            ]\n                        ])\n                    }, void 0, false, {\n                        fileName: \"/Users/nahyun/gachamon/packages/template/components/Profile.tsx\",\n                        lineNumber: 49,\n                        columnNumber: 11\n                    }, _this),\n                    \"YOUR\",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {\n                        className: next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1___default().dynamic([\n                            [\n                                \"b8e4f866809772ef\",\n                                [\n                                    type === \"default\" ? \"pointer\" : \"default\"\n                                ]\n                            ]\n                        ])\n                    }, void 0, false, {\n                        fileName: \"/Users/nahyun/gachamon/packages/template/components/Profile.tsx\",\n                        lineNumber: 51,\n                        columnNumber: 11\n                    }, _this),\n                    \"POKEMON!\"\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/nahyun/gachamon/packages/template/components/Profile.tsx\",\n                lineNumber: 47,\n                columnNumber: 9\n            }, _this),\n            (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1___default()), {\n                id: \"b8e4f866809772ef\",\n                dynamic: [\n                    type === \"default\" ? \"pointer\" : \"default\"\n                ],\n                /*#__PURE__*/ children: \".poke_img.__jsx-style-dynamic-selector{width:200px;cursor:\".concat(type === \"default\" ? \"pointer\" : \"default\", \"}.box.__jsx-style-dynamic-selector{min-height:300px;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;text-align:center;font-size:18px;line-height:1.4}\")\n            }, void 0, false, void 0, _this)\n        ]\n    }, void 0, true);\n};\n_s(Profile, \"T1ndnaloXC2EvAJ2gMJnMRvlLuQ=\");\n_c = Profile;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Profile);\nvar _c;\n$RefreshReg$(_c, \"Profile\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFPLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qcm9maWxlLnRzeD84MzRmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZU1lbW8gfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IFBva2VEYXRhVHlwZSB9IGZyb20gXCIuLi9wYWdlc1wiO1xuXG5jb25zdCBQcm9maWxlID0gKHtcbiAgcG9rZURhdGE6IG9yaWdpblBva2VEYXRhLFxuICBpZCxcbiAgdHlwZSA9IFwiZGVmYXVsdFwiLFxuICBvbkNsaWNrLFxufToge1xuICBwb2tlRGF0YTogeyBkZWZhdWx0OiBQb2tlRGF0YVR5cGU7IGRldGFpbDogUG9rZURhdGFUeXBlIH0gfCBudWxsO1xuICBpZDogbnVtYmVyIHwgbnVsbDtcbiAgdHlwZT86IFwiZGVmYXVsdFwiIHwgXCJkZXRhaWxcIjtcbiAgb25DbGljazogKCkgPT4gdm9pZDtcbn0pID0+IHtcbiAgY29uc3QgcG9rZURhdGEgPSB1c2VNZW1vKFxuICAgICgpID0+IG9yaWdpblBva2VEYXRhPy5bdHlwZV0sXG4gICAgW29yaWdpblBva2VEYXRhLCB0eXBlXVxuICApO1xuXG4gIGNvbnNvbGUubG9nKHBva2VEYXRhKTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICB7cG9rZURhdGEgPyAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm94XCI+XG4gICAgICAgICAgSEVMTE8sXG4gICAgICAgICAgPGJyIC8+IEknTSB7cG9rZURhdGEubmFtZS50b0xvY2FsZVVwcGVyQ2FzZSgpfSFcbiAgICAgICAgICA8aW1nXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJwb2tlX2ltZ1wiXG4gICAgICAgICAgICBzcmM9e3Bva2VEYXRhLnNwcml0ZXMuZnJvbnRfZGVmYXVsdH1cbiAgICAgICAgICAgIG9uQ2xpY2s9e29uQ2xpY2t9XG4gICAgICAgICAgLz5cbiAgICAgICAgICB7dHlwZSA9PT0gXCJkZXRhaWxcIiAmJlxuICAgICAgICAgICAgW1wibmFtZVwiLCBcIndlaWdodFwiLCBcImhlaWdodFwiXS5tYXAoKHByb3BLZXkpID0+IChcbiAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICB7cHJvcEtleX06e3Bva2VEYXRhW3Byb3BLZXldfVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIHt0eXBlID09PSBcImRldGFpbFwiICYmXG4gICAgICAgICAgICBwb2tlRGF0YS5zdGF0cy5tYXAoKFtzdGF0LCBnYWdlXSkgPT4gKFxuICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIHtzdGF0fTp7Z2FnZX1cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICApIDogKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJveFwiPlxuICAgICAgICAgIENIT09TRVxuICAgICAgICAgIDxiciAvPlxuICAgICAgICAgIFlPVVJcbiAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICBQT0tFTU9OIVxuICAgICAgICA8L2Rpdj5cbiAgICAgICl9XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC5wb2tlX2ltZyB7XG4gICAgICAgICAgd2lkdGg6IDIwMHB4O1xuICAgICAgICAgIGN1cnNvcjogJHt0eXBlID09PSBcImRlZmF1bHRcIiA/IFwicG9pbnRlclwiIDogXCJkZWZhdWx0XCJ9O1xuICAgICAgICB9XG4gICAgICAgIC5ib3gge1xuICAgICAgICAgIG1pbi1oZWlnaHQ6IDMwMHB4O1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDEuNDtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUHJvZmlsZTtcbiJdLCJuYW1lcyI6WyJ1c2VNZW1vIiwiUHJvZmlsZSIsInBva2VEYXRhIiwib3JpZ2luUG9rZURhdGEiLCJpZCIsInR5cGUiLCJvbkNsaWNrIiwiY29uc29sZSIsImxvZyIsImRpdiIsImJyIiwibmFtZSIsInRvTG9jYWxlVXBwZXJDYXNlIiwiaW1nIiwic3JjIiwic3ByaXRlcyIsImZyb250X2RlZmF1bHQiLCJtYXAiLCJwcm9wS2V5Iiwic3RhdHMiLCJzdGF0IiwiZ2FnZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Profile.tsx\n");

/***/ })

});