"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/products/page",{

/***/ "(app-pages-browser)/./src/components/Table/index.js":
/*!***************************************!*\
  !*** ./src/components/Table/index.js ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Table; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_data_table_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-data-table-component */ \"(app-pages-browser)/./node_modules/react-data-table-component/dist/index.cjs.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nconst columns = [\n    {\n        name: \"Title\",\n        selector: (row)=>row.title\n    },\n    {\n        name: \"Year\",\n        selector: (row)=>row.year\n    }\n];\nconst data = [\n    {\n        id: 1,\n        title: \"Beetlejuice\",\n        year: \"1988\"\n    },\n    {\n        id: 2,\n        title: \"Ghostbusters\",\n        year: \"1984\"\n    }\n];\nfunction Table(param) {\n    let { dat = [], tableHeaderText, colums = [] } = param;\n    _s();\n    const [pending, setPending] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(true);\n    const [rows, setRows] = react__WEBPACK_IMPORTED_MODULE_1___default().useState([]);\n    react__WEBPACK_IMPORTED_MODULE_1___default().useEffect(()=>{\n        const timeout = setTimeout(()=>{\n            setRows(data);\n            setPending(false);\n        }, 2000);\n        return ()=>clearTimeout(timeout);\n    }, []);\n    console.log(data);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"rounded-sm border mt-5 border-stroke bg-white px-5 pt-6 pb-2.5 shadow sm:px-7.5 xl:pb-1\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                className: \"mb-6 text-xl font-semibold text-black\",\n                children: tableHeaderText\n            }, void 0, false, {\n                fileName: \"/Users/malticard/projects/next-admin/src/components/Table/index.js\",\n                lineNumber: 46,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_data_table_component__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                columns: columns,\n                data: rows,\n                progressPending: pending,\n                pagination: true\n            }, void 0, false, {\n                fileName: \"/Users/malticard/projects/next-admin/src/components/Table/index.js\",\n                lineNumber: 49,\n                columnNumber: 3\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/malticard/projects/next-admin/src/components/Table/index.js\",\n        lineNumber: 45,\n        columnNumber: 5\n    }, this);\n}\n_s(Table, \"nIz8DM5JcxU6njxLyVK6Yjdv8B8=\");\n_c = Table;\nvar _c;\n$RefreshReg$(_c, \"Table\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL1RhYmxlL2luZGV4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFDMEI7QUFDeUI7QUFFbkQsTUFBTUUsVUFBVTtJQUNmO1FBQ0NDLE1BQU07UUFDTkMsVUFBVUMsQ0FBQUEsTUFBT0EsSUFBSUMsS0FBSztJQUMzQjtJQUNBO1FBQ0NILE1BQU07UUFDTkMsVUFBVUMsQ0FBQUEsTUFBT0EsSUFBSUUsSUFBSTtJQUMxQjtDQUNBO0FBRUQsTUFBTUMsT0FBTztJQUNWO1FBQ0RDLElBQUk7UUFDSkgsT0FBTztRQUNQQyxNQUFNO0lBQ1A7SUFDQTtRQUNDRSxJQUFJO1FBQ0pILE9BQU87UUFDUEMsTUFBTTtJQUNQO0NBQ0E7QUFDYyxTQUFTRyxNQUFNLEtBSTdCO1FBSjZCLEVBQzVCQyxNQUFNLEVBQUUsRUFDUkMsZUFBZSxFQUNmQyxTQUFTLEVBQUUsRUFDWixHQUo2Qjs7SUFLNUIsTUFBTSxDQUFDQyxTQUFTQyxXQUFXLEdBQUdmLHFEQUFjLENBQUM7SUFDN0MsTUFBTSxDQUFDaUIsTUFBTUMsUUFBUSxHQUFHbEIscURBQWMsQ0FBQyxFQUFFO0lBQ3pDQSxzREFBZSxDQUFDO1FBQ2QsTUFBTW9CLFVBQVVDLFdBQVc7WUFDekJILFFBQVFWO1lBQ1JPLFdBQVc7UUFDYixHQUFHO1FBQ0gsT0FBTyxJQUFNTyxhQUFhRjtJQUM1QixHQUFHLEVBQUU7SUFDTEcsUUFBUUMsR0FBRyxDQUFDaEI7SUFFWixxQkFDRSw4REFBQ2lCO1FBQUlDLFdBQVU7OzBCQUNiLDhEQUFDQztnQkFBR0QsV0FBVTswQkFDWGQ7Ozs7OzswQkFFUCw4REFBQ1gsa0VBQVNBO2dCQUNUQyxTQUFTQTtnQkFDVE0sTUFBTVM7Z0JBQ0hXLGlCQUFpQmQ7Z0JBQ2pCZSxVQUFVOzs7Ozs7Ozs7Ozs7QUFJaEI7R0E3QndCbkI7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvVGFibGUvaW5kZXguanM/ZTViYyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBEYXRhVGFibGUgZnJvbSAncmVhY3QtZGF0YS10YWJsZS1jb21wb25lbnQnO1xuXG5jb25zdCBjb2x1bW5zID0gW1xuXHR7XG5cdFx0bmFtZTogJ1RpdGxlJyxcblx0XHRzZWxlY3Rvcjogcm93ID0+IHJvdy50aXRsZSxcblx0fSxcblx0e1xuXHRcdG5hbWU6ICdZZWFyJyxcblx0XHRzZWxlY3Rvcjogcm93ID0+IHJvdy55ZWFyLFxuXHR9LFxuXTtcblxuY29uc3QgZGF0YSA9IFtcbiAgXHR7XG5cdFx0aWQ6IDEsXG5cdFx0dGl0bGU6ICdCZWV0bGVqdWljZScsXG5cdFx0eWVhcjogJzE5ODgnLFxuXHR9LFxuXHR7XG5cdFx0aWQ6IDIsXG5cdFx0dGl0bGU6ICdHaG9zdGJ1c3RlcnMnLFxuXHRcdHllYXI6ICcxOTg0Jyxcblx0fSxcbl1cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFRhYmxlKHtcbiAgZGF0ID0gW10sXG4gIHRhYmxlSGVhZGVyVGV4dCxcbiAgY29sdW1zID0gW10sXG59KSB7XG4gIGNvbnN0IFtwZW5kaW5nLCBzZXRQZW5kaW5nXSA9IFJlYWN0LnVzZVN0YXRlKHRydWUpO1xuICBjb25zdCBbcm93cywgc2V0Um93c10gPSBSZWFjdC51c2VTdGF0ZShbXSk7XG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgdGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgc2V0Um93cyhkYXRhKTtcbiAgICAgIHNldFBlbmRpbmcoZmFsc2UpO1xuICAgIH0sIDIwMDApO1xuICAgIHJldHVybiAoKSA9PiBjbGVhclRpbWVvdXQodGltZW91dCk7XG4gIH0sIFtdKTtcbiAgY29uc29sZS5sb2coZGF0YSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdW5kZWQtc20gYm9yZGVyIG10LTUgYm9yZGVyLXN0cm9rZSBiZy13aGl0ZSBweC01IHB0LTYgcGItMi41IHNoYWRvdyBzbTpweC03LjUgeGw6cGItMVwiPlxuICAgICAgPGg0IGNsYXNzTmFtZT1cIm1iLTYgdGV4dC14bCBmb250LXNlbWlib2xkIHRleHQtYmxhY2tcIj5cbiAgICAgICAge3RhYmxlSGVhZGVyVGV4dH1cbiAgICAgIDwvaDQ+XG4gIDxEYXRhVGFibGVcblx0XHRcdGNvbHVtbnM9e2NvbHVtbnN9XG5cdFx0XHRkYXRhPXtyb3dzfVxuICAgICAgcHJvZ3Jlc3NQZW5kaW5nPXtwZW5kaW5nfVxuICAgICAgcGFnaW5hdGlvblxuXHRcdC8+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJEYXRhVGFibGUiLCJjb2x1bW5zIiwibmFtZSIsInNlbGVjdG9yIiwicm93IiwidGl0bGUiLCJ5ZWFyIiwiZGF0YSIsImlkIiwiVGFibGUiLCJkYXQiLCJ0YWJsZUhlYWRlclRleHQiLCJjb2x1bXMiLCJwZW5kaW5nIiwic2V0UGVuZGluZyIsInVzZVN0YXRlIiwicm93cyIsInNldFJvd3MiLCJ1c2VFZmZlY3QiLCJ0aW1lb3V0Iiwic2V0VGltZW91dCIsImNsZWFyVGltZW91dCIsImNvbnNvbGUiLCJsb2ciLCJkaXYiLCJjbGFzc05hbWUiLCJoNCIsInByb2dyZXNzUGVuZGluZyIsInBhZ2luYXRpb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/Table/index.js\n"));

/***/ })

});