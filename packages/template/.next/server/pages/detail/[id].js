"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/detail/[id]";
exports.ids = ["pages/detail/[id]"];
exports.modules = {

/***/ "./components/Profile.tsx":
/*!********************************!*\
  !*** ./components/Profile.tsx ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/shared/lib/styled-jsx */ \"next/dist/shared/lib/styled-jsx\");\n/* harmony import */ var next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst Profile = ({ pokeData: originPokeData , id , type =\"default\" , onClick  })=>{\n    const pokeData = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(()=>originPokeData?.[type]\n    , [\n        originPokeData,\n        type\n    ]);\n    console.log(pokeData);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            pokeData ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1___default().dynamic([\n                    [\n                        \"b8e4f866809772ef\",\n                        [\n                            type === \"default\" ? \"pointer\" : \"default\"\n                        ]\n                    ]\n                ]) + \" \" + \"box\",\n                children: [\n                    \"HELLO,\",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {\n                        className: next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1___default().dynamic([\n                            [\n                                \"b8e4f866809772ef\",\n                                [\n                                    type === \"default\" ? \"pointer\" : \"default\"\n                                ]\n                            ]\n                        ])\n                    }, void 0, false, {\n                        fileName: \"/Users/nahyun/gachamon/packages/template/components/Profile.tsx\",\n                        lineNumber: 27,\n                        columnNumber: 11\n                    }, undefined),\n                    \" I'M \",\n                    pokeData.name.toLocaleUpperCase(),\n                    \"!\",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: pokeData.sprites.front_default,\n                        onClick: ()=>onClick(id, pokeData)\n                        ,\n                        className: next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1___default().dynamic([\n                            [\n                                \"b8e4f866809772ef\",\n                                [\n                                    type === \"default\" ? \"pointer\" : \"default\"\n                                ]\n                            ]\n                        ]) + \" \" + \"poke_img\"\n                    }, void 0, false, {\n                        fileName: \"/Users/nahyun/gachamon/packages/template/components/Profile.tsx\",\n                        lineNumber: 28,\n                        columnNumber: 11\n                    }, undefined),\n                    type === \"detail\" && [\n                        \"name\",\n                        \"weight\",\n                        \"height\"\n                    ].map((propKey)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1___default().dynamic([\n                                [\n                                    \"b8e4f866809772ef\",\n                                    [\n                                        type === \"default\" ? \"pointer\" : \"default\"\n                                    ]\n                                ]\n                            ]),\n                            children: [\n                                propKey,\n                                \":\",\n                                pokeData[propKey]\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/nahyun/gachamon/packages/template/components/Profile.tsx\",\n                            lineNumber: 35,\n                            columnNumber: 15\n                        }, undefined)\n                    ),\n                    type === \"detail\" && pokeData.stats.map(([stat, gage])=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1___default().dynamic([\n                                [\n                                    \"b8e4f866809772ef\",\n                                    [\n                                        type === \"default\" ? \"pointer\" : \"default\"\n                                    ]\n                                ]\n                            ]),\n                            children: [\n                                stat,\n                                \":\",\n                                gage\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/nahyun/gachamon/packages/template/components/Profile.tsx\",\n                            lineNumber: 41,\n                            columnNumber: 15\n                        }, undefined)\n                    )\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/nahyun/gachamon/packages/template/components/Profile.tsx\",\n                lineNumber: 25,\n                columnNumber: 9\n            }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1___default().dynamic([\n                    [\n                        \"b8e4f866809772ef\",\n                        [\n                            type === \"default\" ? \"pointer\" : \"default\"\n                        ]\n                    ]\n                ]) + \" \" + \"box\",\n                children: [\n                    \"CHOOSE\",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {\n                        className: next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1___default().dynamic([\n                            [\n                                \"b8e4f866809772ef\",\n                                [\n                                    type === \"default\" ? \"pointer\" : \"default\"\n                                ]\n                            ]\n                        ])\n                    }, void 0, false, {\n                        fileName: \"/Users/nahyun/gachamon/packages/template/components/Profile.tsx\",\n                        lineNumber: 49,\n                        columnNumber: 11\n                    }, undefined),\n                    \"YOUR\",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {\n                        className: next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1___default().dynamic([\n                            [\n                                \"b8e4f866809772ef\",\n                                [\n                                    type === \"default\" ? \"pointer\" : \"default\"\n                                ]\n                            ]\n                        ])\n                    }, void 0, false, {\n                        fileName: \"/Users/nahyun/gachamon/packages/template/components/Profile.tsx\",\n                        lineNumber: 51,\n                        columnNumber: 11\n                    }, undefined),\n                    \"POKEMON!\"\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/nahyun/gachamon/packages/template/components/Profile.tsx\",\n                lineNumber: 47,\n                columnNumber: 9\n            }, undefined),\n            (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1___default()), {\n                id: \"b8e4f866809772ef\",\n                dynamic: [\n                    type === \"default\" ? \"pointer\" : \"default\"\n                ],\n                children: `.poke_img.__jsx-style-dynamic-selector{width:200px;cursor:${type === \"default\" ? \"pointer\" : \"default\"}}.box.__jsx-style-dynamic-selector{min-height:300px;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;text-align:center;font-size:18px;line-height:1.4}`\n            }, void 0, false, void 0, undefined)\n        ]\n    }, void 0, true);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Profile);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1Byb2ZpbGUudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTs7QUFBZ0M7QUFHaEMsTUFBTUMsT0FBTyxHQUFHLENBQUMsRUFDZkMsUUFBUSxFQUFFQyxjQUFjLEdBQ3hCQyxFQUFFLEdBQ0ZDLElBQUksRUFBRyxTQUFTLEdBQ2hCQyxPQUFPLEdBTVIsR0FBSztJQUNKLE1BQU1KLFFBQVEsR0FBR0YsOENBQU8sQ0FDdEIsSUFBTUcsY0FBYyxFQUFFLENBQUNFLElBQUksQ0FBQztJQUFBLEVBQzVCO1FBQUNGLGNBQWM7UUFBRUUsSUFBSTtLQUFDLENBQ3ZCO0lBRURFLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDTixRQUFRLENBQUMsQ0FBQztJQUV0QixxQkFDRTs7WUFDR0EsUUFBUSxpQkFDUCw4REFBQ08sS0FBRzs7Ozs7NEJBaUNRSixJQUFJLEtBQUssU0FBUyxHQUFHLFNBQVMsR0FBRyxTQUFTOzs7MkJBakN2QyxLQUFLOztvQkFBQyxRQUVuQjtrQ0FBQSw4REFBQ0ssSUFBRTs7Ozs7b0NBK0JPTCxJQUFJLEtBQUssU0FBUyxHQUFHLFNBQVMsR0FBRyxTQUFTOzs7Ozs7OztpQ0EvQjlDO29CQUFBLE9BQUs7b0JBQUNILFFBQVEsQ0FBQ1MsSUFBSSxDQUFDQyxpQkFBaUIsRUFBRTtvQkFBQyxHQUM5QztrQ0FBQSw4REFBQ0MsS0FBRzt3QkFFRkMsR0FBRyxFQUFFWixRQUFRLENBQUNhLE9BQU8sQ0FBQ0MsYUFBYTt3QkFDbkNWLE9BQU8sRUFBRSxJQUFNQSxPQUFPLENBQUNGLEVBQUUsRUFBR0YsUUFBUSxDQUFDO3dCQUFBOzs7OztvQ0EyQjdCRyxJQUFJLEtBQUssU0FBUyxHQUFHLFNBQVMsR0FBRyxTQUFTOzs7bUNBN0J4QyxVQUFVOzs7OztpQ0FHcEI7b0JBQ0RBLElBQUksS0FBSyxRQUFRLElBQ2hCO3dCQUFDLE1BQU07d0JBQUUsUUFBUTt3QkFBRSxRQUFRO3FCQUFDLENBQUNZLEdBQUcsQ0FBQyxDQUFDQyxPQUFPLGlCQUN2Qyw4REFBQ1QsS0FBRzs7Ozs7d0NBdUJFSixJQUFJLEtBQUssU0FBUyxHQUFHLFNBQVMsR0FBRyxTQUFTOzs7OztnQ0F0QjdDYSxPQUFPO2dDQUFDLEdBQUM7Z0NBQUNoQixRQUFRLENBQUNnQixPQUFPLENBQUM7Ozs7OztxQ0FDeEI7b0JBQ1AsQ0FBQztvQkFDSGIsSUFBSSxLQUFLLFFBQVEsSUFDaEJILFFBQVEsQ0FBQ2lCLEtBQUssQ0FBQ0YsR0FBRyxDQUFDLENBQUMsQ0FBQ0csSUFBSSxFQUFFQyxJQUFJLENBQUMsaUJBQzlCLDhEQUFDWixLQUFHOzs7Ozt3Q0FpQkVKLElBQUksS0FBSyxTQUFTLEdBQUcsU0FBUyxHQUFHLFNBQVM7Ozs7O2dDQWhCN0NlLElBQUk7Z0NBQUMsR0FBQztnQ0FBQ0MsSUFBSTs7Ozs7O3FDQUNSO29CQUNQLENBQUM7Ozs7Ozt5QkFDQSxpQkFFTiw4REFBQ1osS0FBRzs7Ozs7NEJBV1FKLElBQUksS0FBSyxTQUFTLEdBQUcsU0FBUyxHQUFHLFNBQVM7OzsyQkFYdkMsS0FBSzs7b0JBQUMsUUFFbkI7a0NBQUEsOERBQUNLLElBQUU7Ozs7O29DQVNPTCxJQUFJLEtBQUssU0FBUyxHQUFHLFNBQVMsR0FBRyxTQUFTOzs7Ozs7OztpQ0FUOUM7b0JBQUEsTUFFTjtrQ0FBQSw4REFBQ0ssSUFBRTs7Ozs7b0NBT09MLElBQUksS0FBSyxTQUFTLEdBQUcsU0FBUyxHQUFHLFNBQVM7Ozs7Ozs7O2lDQVA5QztvQkFBQSxVQUVSOzs7Ozs7eUJBQU07Ozs7b0JBS01BLElBQUksS0FBSyxTQUFTLEdBQUcsU0FBUyxHQUFHLFNBQVM7O3VGQUExQ0EsSUFBSSxLQUFLLFNBQVMsR0FBRyxTQUFTLEdBQUcsU0FBUzs7O29CQWF2RCxDQUNIO0NBQ0g7QUFFRCxpRUFBZUosT0FBTyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vQGdhY2hhbW9uL3RlbXBsYXRlLy4vY29tcG9uZW50cy9Qcm9maWxlLnRzeD84MzRmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZU1lbW8gfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IFBva2VEYXRhVHlwZSB9IGZyb20gXCIuLi9wYWdlc1wiO1xuXG5jb25zdCBQcm9maWxlID0gKHtcbiAgcG9rZURhdGE6IG9yaWdpblBva2VEYXRhLFxuICBpZCxcbiAgdHlwZSA9IFwiZGVmYXVsdFwiLFxuICBvbkNsaWNrLFxufToge1xuICBwb2tlRGF0YTogeyBkZWZhdWx0OiBQb2tlRGF0YVR5cGU7IGRldGFpbDogUG9rZURhdGFUeXBlIH0gfCBudWxsO1xuICBpZDogbnVtYmVyIHwgbnVsbDtcbiAgdHlwZT86IFwiZGVmYXVsdFwiIHwgXCJkZXRhaWxcIjtcbiAgb25DbGljazogKGlkOiBudW1iZXIsIHBva2VEYXRhOiBQb2tlRGF0YVR5cGUpID0+IHZvaWQ7XG59KSA9PiB7XG4gIGNvbnN0IHBva2VEYXRhID0gdXNlTWVtbyhcbiAgICAoKSA9PiBvcmlnaW5Qb2tlRGF0YT8uW3R5cGVdLFxuICAgIFtvcmlnaW5Qb2tlRGF0YSwgdHlwZV1cbiAgKTtcblxuICBjb25zb2xlLmxvZyhwb2tlRGF0YSk7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAge3Bva2VEYXRhID8gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJveFwiPlxuICAgICAgICAgIEhFTExPLFxuICAgICAgICAgIDxiciAvPiBJJ00ge3Bva2VEYXRhLm5hbWUudG9Mb2NhbGVVcHBlckNhc2UoKX0hXG4gICAgICAgICAgPGltZ1xuICAgICAgICAgICAgY2xhc3NOYW1lPVwicG9rZV9pbWdcIlxuICAgICAgICAgICAgc3JjPXtwb2tlRGF0YS5zcHJpdGVzLmZyb250X2RlZmF1bHR9XG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBvbkNsaWNrKGlkISwgcG9rZURhdGEpfVxuICAgICAgICAgIC8+XG4gICAgICAgICAge3R5cGUgPT09IFwiZGV0YWlsXCIgJiZcbiAgICAgICAgICAgIFtcIm5hbWVcIiwgXCJ3ZWlnaHRcIiwgXCJoZWlnaHRcIl0ubWFwKChwcm9wS2V5KSA9PiAoXG4gICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAge3Byb3BLZXl9Ontwb2tlRGF0YVtwcm9wS2V5XX1cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICB7dHlwZSA9PT0gXCJkZXRhaWxcIiAmJlxuICAgICAgICAgICAgcG9rZURhdGEuc3RhdHMubWFwKChbc3RhdCwgZ2FnZV0pID0+IChcbiAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICB7c3RhdH06e2dhZ2V9XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKSl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgKSA6IChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3hcIj5cbiAgICAgICAgICBDSE9PU0VcbiAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICBZT1VSXG4gICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgUE9LRU1PTiFcbiAgICAgICAgPC9kaXY+XG4gICAgICApfVxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAucG9rZV9pbWcge1xuICAgICAgICAgIHdpZHRoOiAyMDBweDtcbiAgICAgICAgICBjdXJzb3I6ICR7dHlwZSA9PT0gXCJkZWZhdWx0XCIgPyBcInBvaW50ZXJcIiA6IFwiZGVmYXVsdFwifTtcbiAgICAgICAgfVxuICAgICAgICAuYm94IHtcbiAgICAgICAgICBtaW4taGVpZ2h0OiAzMDBweDtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjQ7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFByb2ZpbGU7XG4iXSwibmFtZXMiOlsidXNlTWVtbyIsIlByb2ZpbGUiLCJwb2tlRGF0YSIsIm9yaWdpblBva2VEYXRhIiwiaWQiLCJ0eXBlIiwib25DbGljayIsImNvbnNvbGUiLCJsb2ciLCJkaXYiLCJiciIsIm5hbWUiLCJ0b0xvY2FsZVVwcGVyQ2FzZSIsImltZyIsInNyYyIsInNwcml0ZXMiLCJmcm9udF9kZWZhdWx0IiwibWFwIiwicHJvcEtleSIsInN0YXRzIiwic3RhdCIsImdhZ2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Profile.tsx\n");

/***/ }),

/***/ "./pages/detail/[id].tsx":
/*!*******************************!*\
  !*** ./pages/detail/[id].tsx ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Profile__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Profile */ \"./components/Profile.tsx\");\n\n\n\nconst DetailProfile = ()=>{\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    const { pokeData , id  } = router.query;\n    const parsedPokeData = pokeData ? JSON.parse(pokeData) : {};\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: pokeData && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Profile__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n            type: \"detail\",\n            id: Number(id),\n            pokeData: parsedPokeData,\n            onClick: ()=>{}\n        }, void 0, false, {\n            fileName: \"/Users/nahyun/gachamon/packages/template/pages/detail/[id].tsx\",\n            lineNumber: 11,\n            columnNumber: 9\n        }, undefined)\n    }, void 0, false);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DetailProfile);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9kZXRhaWwvW2lkXS50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFBd0M7QUFDTztBQUUvQyxNQUFNRSxhQUFhLEdBQUcsSUFBTTtJQUMxQixNQUFNQyxNQUFNLEdBQUdILHNEQUFTLEVBQUU7SUFDMUIsTUFBTSxFQUFFSSxRQUFRLEdBQUVDLEVBQUUsR0FBRSxHQUFHRixNQUFNLENBQUNHLEtBQUs7SUFDckMsTUFBTUMsY0FBYyxHQUFHSCxRQUFRLEdBQUdJLElBQUksQ0FBQ0MsS0FBSyxDQUFDTCxRQUFRLENBQVcsR0FBRyxFQUFFO0lBQ3JFLHFCQUNFO2tCQUNHQSxRQUFRLGtCQUNQLDhEQUFDSCwyREFBTztZQUNOUyxJQUFJLEVBQUMsUUFBUTtZQUNiTCxFQUFFLEVBQUVNLE1BQU0sQ0FBQ04sRUFBRSxDQUFDO1lBQ2RELFFBQVEsRUFBRUcsY0FBYztZQUN4QkssT0FBTyxFQUFFLElBQU0sRUFBRTs7Ozs7cUJBQ2pCO3FCQUVILENBQ0g7Q0FDSDtBQUVELGlFQUFlVixhQUFhLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9AZ2FjaGFtb24vdGVtcGxhdGUvLi9wYWdlcy9kZXRhaWwvW2lkXS50c3g/ZDEzZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCBQcm9maWxlIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL1Byb2ZpbGVcIjtcblxuY29uc3QgRGV0YWlsUHJvZmlsZSA9ICgpID0+IHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIGNvbnN0IHsgcG9rZURhdGEsIGlkIH0gPSByb3V0ZXIucXVlcnk7XG4gIGNvbnN0IHBhcnNlZFBva2VEYXRhID0gcG9rZURhdGEgPyBKU09OLnBhcnNlKHBva2VEYXRhIGFzIHN0cmluZykgOiB7fTtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAge3Bva2VEYXRhICYmIChcbiAgICAgICAgPFByb2ZpbGVcbiAgICAgICAgICB0eXBlPVwiZGV0YWlsXCJcbiAgICAgICAgICBpZD17TnVtYmVyKGlkKX1cbiAgICAgICAgICBwb2tlRGF0YT17cGFyc2VkUG9rZURhdGF9XG4gICAgICAgICAgb25DbGljaz17KCkgPT4ge319XG4gICAgICAgIC8+XG4gICAgICApfVxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRGV0YWlsUHJvZmlsZTtcbiJdLCJuYW1lcyI6WyJ1c2VSb3V0ZXIiLCJQcm9maWxlIiwiRGV0YWlsUHJvZmlsZSIsInJvdXRlciIsInBva2VEYXRhIiwiaWQiLCJxdWVyeSIsInBhcnNlZFBva2VEYXRhIiwiSlNPTiIsInBhcnNlIiwidHlwZSIsIk51bWJlciIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/detail/[id].tsx\n");

/***/ }),

/***/ "next/dist/shared/lib/styled-jsx":
/*!**************************************************!*\
  !*** external "next/dist/shared/lib/styled-jsx" ***!
  \**************************************************/
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/styled-jsx");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/detail/[id].tsx"));
module.exports = __webpack_exports__;

})();