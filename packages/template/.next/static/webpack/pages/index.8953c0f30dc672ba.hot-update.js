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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"../../node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/shared/lib/styled-jsx */ \"../../node_modules/next/dist/shared/lib/styled-jsx.js\");\n/* harmony import */ var next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1__);\nvar _this = undefined;\n\n\nvar Profile = function(props) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"jsx-4e7b226805fbac64\" + \" \" + \"box\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: props.picURL,\n                        className: \"jsx-4e7b226805fbac64\"\n                    }, void 0, false, {\n                        fileName: \"/Users/nahyun/gachamon/packages/template/components/Profile.tsx\",\n                        lineNumber: 5,\n                        columnNumber: 9\n                    }, _this),\n                    \"I'M \",\n                    props.name.toLocaleUpperCase(),\n                    \"!\"\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/nahyun/gachamon/packages/template/components/Profile.tsx\",\n                lineNumber: 4,\n                columnNumber: 7\n            }, _this),\n            (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1___default()), {\n                id: \"4e7b226805fbac64\",\n                children: \"img.jsx-4e7b226805fbac64{width:200px}.box.jsx-4e7b226805fbac64{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center}\"\n            }, void 0, false, void 0, _this)\n        ]\n    }, void 0, true);\n};\n_c = Profile;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Profile);\nvar _c;\n$RefreshReg$(_c, \"Profile\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1Byb2ZpbGUudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7OztBQUFBLElBQU1BLE9BQU8sR0FBRyxTQUFDQyxLQUFrQyxFQUFLO0lBQ3RELHFCQUNFOzswQkFDRSw4REFBQ0MsS0FBRzswREFBVyxLQUFLOztrQ0FDbEIsOERBQUNDLEtBQUc7d0JBQUNDLEdBQUcsRUFBRUgsS0FBSyxDQUFDSSxNQUFNOzs7Ozs7NkJBQUk7b0JBS25CLE1BQ0g7b0JBQUNKLEtBQUssQ0FBQ0ssSUFBSSxDQUFDQyxpQkFBaUIsRUFBRTtvQkFBQyxHQUN0Qzs7Ozs7O3FCQUFNOzs7Ozs7b0JBV0wsQ0FDSDtDQUNIO0FBeEJLUCxLQUFBQSxPQUFPO0FBMEJiLCtEQUFlQSxPQUFPLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qcm9maWxlLnRzeD84MzRmIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IFByb2ZpbGUgPSAocHJvcHM6IHsgW2luZGV4OiBzdHJpbmddOiBzdHJpbmcgfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImJveFwiPlxuICAgICAgICA8aW1nIHNyYz17cHJvcHMucGljVVJMfSAvPlxuICAgICAgICB7Lyoge1tcIm5hbWVcIiwgXCJ3ZWlnaHRcIiwgXCJoZWlnaHRcIl0ubWFwKChwcm9wS2V5KSA9PiAoXG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIHtwcm9wS2V5fSA6IHtwcm9wc1twcm9wS2V5XX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKSl9ICovfVxuICAgICAgICBJJ00ge3Byb3BzLm5hbWUudG9Mb2NhbGVVcHBlckNhc2UoKX0hXG4gICAgICA8L2Rpdj5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgaW1nIHtcbiAgICAgICAgICB3aWR0aDogMjAwcHg7XG4gICAgICAgIH1cbiAgICAgICAgLmJveCB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFByb2ZpbGU7XG4iXSwibmFtZXMiOlsiUHJvZmlsZSIsInByb3BzIiwiZGl2IiwiaW1nIiwic3JjIiwicGljVVJMIiwibmFtZSIsInRvTG9jYWxlVXBwZXJDYXNlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Profile.tsx\n");

/***/ })

});