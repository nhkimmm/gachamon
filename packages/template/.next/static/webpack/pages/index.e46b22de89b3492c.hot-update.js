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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"../../node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/shared/lib/styled-jsx */ \"../../node_modules/next/dist/shared/lib/styled-jsx.js\");\n/* harmony import */ var next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1__);\nvar _this = undefined;\n\n\nvar Profile = function(props) {\n    var _this1 = _this;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"jsx-4e7b226805fbac64\" + \" \" + \"box\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: props.picURL,\n                        className: \"jsx-4e7b226805fbac64\"\n                    }, void 0, false, {\n                        fileName: \"/Users/nahyun/gachamon/packages/template/components/Profile.tsx\",\n                        lineNumber: 5,\n                        columnNumber: 9\n                    }, _this),\n                    [\n                        \"name\",\n                        \"weight\",\n                        \"height\"\n                    ].map(function(propKey) {\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"jsx-4e7b226805fbac64\",\n                            children: [\n                                propKey,\n                                \" : \",\n                                props[propKey]\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/nahyun/gachamon/packages/template/components/Profile.tsx\",\n                            lineNumber: 7,\n                            columnNumber: 11\n                        }, _this1);\n                    })\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/nahyun/gachamon/packages/template/components/Profile.tsx\",\n                lineNumber: 4,\n                columnNumber: 7\n            }, _this),\n            (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1___default()), {\n                id: \"4e7b226805fbac64\",\n                children: \"img.jsx-4e7b226805fbac64{width:200px}.box.jsx-4e7b226805fbac64{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center}\"\n            }, void 0, false, void 0, _this)\n        ]\n    }, void 0, true);\n};\n_c = Profile;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Profile);\nvar _c;\n$RefreshReg$(_c, \"Profile\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1Byb2ZpbGUudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7OztBQUFBLElBQU1BLE9BQU8sR0FBRyxTQUFDQyxLQUFrQyxFQUFLOztJQUN0RCxxQkFDRTs7MEJBQ0UsOERBQUNDLEtBQUc7MERBQVcsS0FBSzs7a0NBQ2xCLDhEQUFDQyxLQUFHO3dCQUFDQyxHQUFHLEVBQUVILEtBQUssQ0FBQ0ksTUFBTTs7Ozs7OzZCQUFJO29CQUN6Qjt3QkFBQyxNQUFNO3dCQUFFLFFBQVE7d0JBQUUsUUFBUTtxQkFBQyxDQUFDQyxHQUFHLENBQUMsU0FBQ0MsT0FBTzs2Q0FDeEMsOERBQUNMLEtBQUc7OztnQ0FDREssT0FBTztnQ0FBQyxLQUFHO2dDQUFDTixLQUFLLENBQUNNLE9BQU8sQ0FBQzs7Ozs7O2tDQUN2QjtxQkFDUCxDQUFDOzs7Ozs7cUJBQ0U7Ozs7OztvQkFXTCxDQUNIO0NBQ0g7QUF2QktQLEtBQUFBLE9BQU87QUF5QmIsK0RBQWVBLE9BQU8sRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1Byb2ZpbGUudHN4PzgzNGYiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgUHJvZmlsZSA9IChwcm9wczogeyBbaW5kZXg6IHN0cmluZ106IHN0cmluZyB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm94XCI+XG4gICAgICAgIDxpbWcgc3JjPXtwcm9wcy5waWNVUkx9IC8+XG4gICAgICAgIHtbXCJuYW1lXCIsIFwid2VpZ2h0XCIsIFwiaGVpZ2h0XCJdLm1hcCgocHJvcEtleSkgPT4gKFxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICB7cHJvcEtleX0gOiB7cHJvcHNbcHJvcEtleV19XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICkpfVxuICAgICAgPC9kaXY+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIGltZyB7XG4gICAgICAgICAgd2lkdGg6IDIwMHB4O1xuICAgICAgICB9XG4gICAgICAgIC5ib3gge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQcm9maWxlO1xuIl0sIm5hbWVzIjpbIlByb2ZpbGUiLCJwcm9wcyIsImRpdiIsImltZyIsInNyYyIsInBpY1VSTCIsIm1hcCIsInByb3BLZXkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Profile.tsx\n");

/***/ })

});