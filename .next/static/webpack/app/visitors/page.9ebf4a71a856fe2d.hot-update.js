"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/visitors/page",{

/***/ "(app-pages-browser)/./src/components/Table/index.js":
/*!***************************************!*\
  !*** ./src/components/Table/index.js ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Table; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_data_table_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-data-table-component */ \"(app-pages-browser)/./node_modules/react-data-table-component/dist/index.cjs.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nconst columns = [\n    {\n        name: \"Title\",\n        selector: (row)=>row.title\n    },\n    {\n        name: \"Year\",\n        selector: (row)=>row.year\n    }\n];\nconst data = [\n    {\n        id: 1,\n        title: \"Beetlejuice\",\n        year: \"1988\"\n    },\n    {\n        id: 2,\n        title: \"Ghostbusters\",\n        year: \"1984\"\n    }\n];\nfunction Table(param) {\n    let { dat = [], tableHeaderText, colums = [] } = param;\n    _s();\n    const [pending, setPending] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(true);\n    const [rows, setRows] = react__WEBPACK_IMPORTED_MODULE_1___default().useState([]);\n    react__WEBPACK_IMPORTED_MODULE_1___default().useEffect(()=>{\n        const timeout = setTimeout(()=>{\n            setRows(data);\n            setPending(false);\n        }, 2000);\n        return ()=>clearTimeout(timeout);\n    }, []);\n    console.log(data);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"rounded-sm border mt-5 border-stroke bg-white px-5 pt-6 pb-2.5 shadow sm:px-7.5 xl:pb-1\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                className: \"mb-6 text-xl font-semibold text-black\",\n                children: tableHeaderText\n            }, void 0, false, {\n                fileName: \"/Users/malticard/projects/next-admin/src/components/Table/index.js\",\n                lineNumber: 46,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_data_table_component__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                columns: columns,\n                data: rows,\n                progressPending: pending,\n                pagination: true\n            }, void 0, false, {\n                fileName: \"/Users/malticard/projects/next-admin/src/components/Table/index.js\",\n                lineNumber: 77,\n                columnNumber: 17\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/malticard/projects/next-admin/src/components/Table/index.js\",\n        lineNumber: 45,\n        columnNumber: 5\n    }, this);\n}\n_s(Table, \"nIz8DM5JcxU6njxLyVK6Yjdv8B8=\");\n_c = Table;\nvar _c;\n$RefreshReg$(_c, \"Table\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL1RhYmxlL2luZGV4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFDMEI7QUFDeUI7QUFFbkQsTUFBTUUsVUFBVTtJQUNmO1FBQ0NDLE1BQU07UUFDTkMsVUFBVUMsQ0FBQUEsTUFBT0EsSUFBSUMsS0FBSztJQUMzQjtJQUNBO1FBQ0NILE1BQU07UUFDTkMsVUFBVUMsQ0FBQUEsTUFBT0EsSUFBSUUsSUFBSTtJQUMxQjtDQUNBO0FBRUQsTUFBTUMsT0FBTztJQUNWO1FBQ0RDLElBQUk7UUFDSkgsT0FBTztRQUNQQyxNQUFNO0lBQ1A7SUFDQTtRQUNDRSxJQUFJO1FBQ0pILE9BQU87UUFDUEMsTUFBTTtJQUNQO0NBQ0E7QUFDYyxTQUFTRyxNQUFNLEtBSTdCO1FBSjZCLEVBQzVCQyxNQUFNLEVBQUUsRUFDUkMsZUFBZSxFQUNmQyxTQUFTLEVBQUUsRUFDWixHQUo2Qjs7SUFLNUIsTUFBTSxDQUFDQyxTQUFTQyxXQUFXLEdBQUdmLHFEQUFjLENBQUM7SUFDN0MsTUFBTSxDQUFDaUIsTUFBTUMsUUFBUSxHQUFHbEIscURBQWMsQ0FBQyxFQUFFO0lBQ3pDQSxzREFBZSxDQUFDO1FBQ2QsTUFBTW9CLFVBQVVDLFdBQVc7WUFDekJILFFBQVFWO1lBQ1JPLFdBQVc7UUFDYixHQUFHO1FBQ0gsT0FBTyxJQUFNTyxhQUFhRjtJQUM1QixHQUFHLEVBQUU7SUFDTEcsUUFBUUMsR0FBRyxDQUFDaEI7SUFFWixxQkFDRSw4REFBQ2lCO1FBQUlDLFdBQVU7OzBCQUNiLDhEQUFDQztnQkFBR0QsV0FBVTswQkFDWGQ7Ozs7OzswQkE4Qk8sOERBQUNYLGtFQUFTQTtnQkFDdkJDLFNBQVNBO2dCQUNUTSxNQUFNUztnQkFDSFcsaUJBQWlCZDtnQkFDakJlLFVBQVU7Ozs7Ozs7Ozs7OztBQUloQjtHQXpEd0JuQjtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9UYWJsZS9pbmRleC5qcz9lNWJjIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IERhdGFUYWJsZSBmcm9tICdyZWFjdC1kYXRhLXRhYmxlLWNvbXBvbmVudCc7XG5cbmNvbnN0IGNvbHVtbnMgPSBbXG5cdHtcblx0XHRuYW1lOiAnVGl0bGUnLFxuXHRcdHNlbGVjdG9yOiByb3cgPT4gcm93LnRpdGxlLFxuXHR9LFxuXHR7XG5cdFx0bmFtZTogJ1llYXInLFxuXHRcdHNlbGVjdG9yOiByb3cgPT4gcm93LnllYXIsXG5cdH0sXG5dO1xuXG5jb25zdCBkYXRhID0gW1xuICBcdHtcblx0XHRpZDogMSxcblx0XHR0aXRsZTogJ0JlZXRsZWp1aWNlJyxcblx0XHR5ZWFyOiAnMTk4OCcsXG5cdH0sXG5cdHtcblx0XHRpZDogMixcblx0XHR0aXRsZTogJ0dob3N0YnVzdGVycycsXG5cdFx0eWVhcjogJzE5ODQnLFxuXHR9LFxuXVxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVGFibGUoe1xuICBkYXQgPSBbXSxcbiAgdGFibGVIZWFkZXJUZXh0LFxuICBjb2x1bXMgPSBbXSxcbn0pIHtcbiAgY29uc3QgW3BlbmRpbmcsIHNldFBlbmRpbmddID0gUmVhY3QudXNlU3RhdGUodHJ1ZSk7XG4gIGNvbnN0IFtyb3dzLCBzZXRSb3dzXSA9IFJlYWN0LnVzZVN0YXRlKFtdKTtcbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCB0aW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBzZXRSb3dzKGRhdGEpO1xuICAgICAgc2V0UGVuZGluZyhmYWxzZSk7XG4gICAgfSwgMjAwMCk7XG4gICAgcmV0dXJuICgpID0+IGNsZWFyVGltZW91dCh0aW1lb3V0KTtcbiAgfSwgW10pO1xuICBjb25zb2xlLmxvZyhkYXRhKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwicm91bmRlZC1zbSBib3JkZXIgbXQtNSBib3JkZXItc3Ryb2tlIGJnLXdoaXRlIHB4LTUgcHQtNiBwYi0yLjUgc2hhZG93IHNtOnB4LTcuNSB4bDpwYi0xXCI+XG4gICAgICA8aDQgY2xhc3NOYW1lPVwibWItNiB0ZXh0LXhsIGZvbnQtc2VtaWJvbGQgdGV4dC1ibGFja1wiPlxuICAgICAgICB7dGFibGVIZWFkZXJUZXh0fVxuICAgICAgPC9oND5cbnsvKiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTMgcm91bmRlZC1zbSBiZy1ncmF5LTIgc206Z3JpZC1jb2xzLTVcIj5cbiAgICAgICAgICB7dGFibGVIZWFkZXJDZWxscyAmJiB0YWJsZUhlYWRlckNlbGxzLmxlbmd0aFxuICAgICAgICAgICAgPyB0YWJsZUhlYWRlckNlbGxzLm1hcCgoaXRlbSkgPT4gKFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC0yLjUgdGV4dC1jZW50ZXIgeGw6cC01XCIga2V5PXtpdGVtLmlkfT5cbiAgICAgICAgICAgICAgICAgIHtpdGVtLmxhYmVsfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICApKVxuICAgICAgICAgICAgOiBudWxsfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAge2RhdGEgJiYgZGF0YS5sZW5ndGhcbiAgICAgICAgICA/IGRhdGEubWFwKChpdGVtLGkpID0+IChcbiAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTMgYm9yZGVyLWIgYm9yZGVyLXN0cm9rZSBzbTpncmlkLWNvbHMtNVwiXG4gICAgICAgICAgICAgICAga2V5PXtpbmRleH1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHt0YWJsZUhlYWRlckNlbGxzLm1hcCgodGFibGVDZWxsLGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgIGtleT17YCR7aW5kZXh9JHt0YWJsZUNlbGwuaWR9YH1cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgcC0yLjUgeGw6cC01XCJcbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPHA+e2l0ZW1bdGFibGVDZWxsLmlkXX08L3A+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApKVxuICAgICAgICAgIDogbnVsbH1cbiAgICAgICAgICAgICAgICA8L2Rpdj4qL31cbiAgICAgICAgICAgICAgICA8RGF0YVRhYmxlXG5cdFx0XHRjb2x1bW5zPXtjb2x1bW5zfVxuXHRcdFx0ZGF0YT17cm93c31cbiAgICAgIHByb2dyZXNzUGVuZGluZz17cGVuZGluZ31cbiAgICAgIHBhZ2luYXRpb25cblx0XHQvPlxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiRGF0YVRhYmxlIiwiY29sdW1ucyIsIm5hbWUiLCJzZWxlY3RvciIsInJvdyIsInRpdGxlIiwieWVhciIsImRhdGEiLCJpZCIsIlRhYmxlIiwiZGF0IiwidGFibGVIZWFkZXJUZXh0IiwiY29sdW1zIiwicGVuZGluZyIsInNldFBlbmRpbmciLCJ1c2VTdGF0ZSIsInJvd3MiLCJzZXRSb3dzIiwidXNlRWZmZWN0IiwidGltZW91dCIsInNldFRpbWVvdXQiLCJjbGVhclRpbWVvdXQiLCJjb25zb2xlIiwibG9nIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDQiLCJwcm9ncmVzc1BlbmRpbmciLCJwYWdpbmF0aW9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/Table/index.js\n"));

/***/ })

});