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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Table; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_data_table_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-data-table-component */ \"(app-pages-browser)/./node_modules/react-data-table-component/dist/index.cjs.js\");\n/* harmony import */ var _loader_loader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../loader/loader */ \"(app-pages-browser)/./src/components/loader/loader.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nconst columns = [\n    {\n        name: \"Title\",\n        selector: (row)=>row.title\n    },\n    {\n        name: \"Year\",\n        selector: (row)=>row.year\n    }\n];\nconst data = [\n    {\n        id: 1,\n        title: \"Beetlejuice\",\n        year: \"1988\"\n    },\n    {\n        id: 2,\n        title: \"Ghostbusters\",\n        year: \"1984\"\n    }\n];\nfunction Table(param) {\n    let { dat = [], tableHeaderText, colums = [] } = param;\n    _s();\n    const [pending, setPending] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(true);\n    const [rows, setRows] = react__WEBPACK_IMPORTED_MODULE_1___default().useState([]);\n    react__WEBPACK_IMPORTED_MODULE_1___default().useEffect(()=>{\n        const timeout = setTimeout(()=>{\n            setRows(data);\n            setPending(false);\n        }, 2000);\n        return ()=>clearTimeout(timeout);\n    }, []);\n    console.log(data);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"rounded-sm border mt-5 border-stroke bg-white px-5 pt-6 pb-2.5 shadow sm:px-7.5 xl:pb-1\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_data_table_component__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n            title: tableHeaderText,\n            columns: columns,\n            data: rows,\n            progressPending: pending,\n            progressComponent: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_loader_loader__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                text: \"Loading inventory hire,please wait...\",\n                height: 20\n            }, void 0, false, void 0, void 0),\n            pagination: true\n        }, void 0, false, {\n            fileName: \"/Users/malticard/projects/next-admin/src/components/Table/index.js\",\n            lineNumber: 48,\n            columnNumber: 5\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/malticard/projects/next-admin/src/components/Table/index.js\",\n        lineNumber: 46,\n        columnNumber: 5\n    }, this);\n}\n_s(Table, \"nIz8DM5JcxU6njxLyVK6Yjdv8B8=\");\n_c = Table;\nvar _c;\n$RefreshReg$(_c, \"Table\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL1RhYmxlL2luZGV4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQzBCO0FBQ3lCO0FBQ2I7QUFFdEMsTUFBTUcsVUFBVTtJQUNmO1FBQ0NDLE1BQU07UUFDTkMsVUFBVUMsQ0FBQUEsTUFBT0EsSUFBSUMsS0FBSztJQUMzQjtJQUNBO1FBQ0NILE1BQU07UUFDTkMsVUFBVUMsQ0FBQUEsTUFBT0EsSUFBSUUsSUFBSTtJQUMxQjtDQUNBO0FBRUQsTUFBTUMsT0FBTztJQUNWO1FBQ0RDLElBQUk7UUFDSkgsT0FBTztRQUNQQyxNQUFNO0lBQ1A7SUFDQTtRQUNDRSxJQUFJO1FBQ0pILE9BQU87UUFDUEMsTUFBTTtJQUNQO0NBQ0E7QUFDYyxTQUFTRyxNQUFNLEtBSTdCO1FBSjZCLEVBQzVCQyxNQUFNLEVBQUUsRUFDUkMsZUFBZSxFQUNmQyxTQUFTLEVBQUUsRUFDWixHQUo2Qjs7SUFLNUIsTUFBTSxDQUFDQyxTQUFTQyxXQUFXLEdBQUdoQixxREFBYyxDQUFDO0lBQzdDLE1BQU0sQ0FBQ2tCLE1BQU1DLFFBQVEsR0FBR25CLHFEQUFjLENBQUMsRUFBRTtJQUN6Q0Esc0RBQWUsQ0FBQztRQUNkLE1BQU1xQixVQUFVQyxXQUFXO1lBQ3pCSCxRQUFRVjtZQUNSTyxXQUFXO1FBQ2IsR0FBRztRQUNILE9BQU8sSUFBTU8sYUFBYUY7SUFDNUIsR0FBRyxFQUFFO0lBQ0xHLFFBQVFDLEdBQUcsQ0FBQ2hCO0lBRVoscUJBQ0UsOERBQUNpQjtRQUFJQyxXQUFVO2tCQUVmLDRFQUFDMUIsa0VBQVNBO1lBQ0hNLE9BQU9NO1lBQ05WLFNBQVNBO1lBQ1RNLE1BQU1TO1lBQ05VLGlCQUFpQmI7WUFDakJjLGlDQUFtQiw4REFBQzNCLHNEQUFNQTtnQkFBQzRCLE1BQUs7Z0JBQXdDQyxRQUFROztZQUNoRkMsVUFBVTs7Ozs7Ozs7Ozs7QUFJdEI7R0E3QndCckI7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvVGFibGUvaW5kZXguanM/ZTViYyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBEYXRhVGFibGUgZnJvbSAncmVhY3QtZGF0YS10YWJsZS1jb21wb25lbnQnO1xuaW1wb3J0IExvYWRlciBmcm9tIFwiLi4vbG9hZGVyL2xvYWRlclwiO1xuXG5jb25zdCBjb2x1bW5zID0gW1xuXHR7XG5cdFx0bmFtZTogJ1RpdGxlJyxcblx0XHRzZWxlY3Rvcjogcm93ID0+IHJvdy50aXRsZSxcblx0fSxcblx0e1xuXHRcdG5hbWU6ICdZZWFyJyxcblx0XHRzZWxlY3Rvcjogcm93ID0+IHJvdy55ZWFyLFxuXHR9LFxuXTtcblxuY29uc3QgZGF0YSA9IFtcbiAgXHR7XG5cdFx0aWQ6IDEsXG5cdFx0dGl0bGU6ICdCZWV0bGVqdWljZScsXG5cdFx0eWVhcjogJzE5ODgnLFxuXHR9LFxuXHR7XG5cdFx0aWQ6IDIsXG5cdFx0dGl0bGU6ICdHaG9zdGJ1c3RlcnMnLFxuXHRcdHllYXI6ICcxOTg0Jyxcblx0fSxcbl1cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFRhYmxlKHtcbiAgZGF0ID0gW10sXG4gIHRhYmxlSGVhZGVyVGV4dCxcbiAgY29sdW1zID0gW10sXG59KSB7XG4gIGNvbnN0IFtwZW5kaW5nLCBzZXRQZW5kaW5nXSA9IFJlYWN0LnVzZVN0YXRlKHRydWUpO1xuICBjb25zdCBbcm93cywgc2V0Um93c10gPSBSZWFjdC51c2VTdGF0ZShbXSk7XG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgdGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgc2V0Um93cyhkYXRhKTtcbiAgICAgIHNldFBlbmRpbmcoZmFsc2UpO1xuICAgIH0sIDIwMDApO1xuICAgIHJldHVybiAoKSA9PiBjbGVhclRpbWVvdXQodGltZW91dCk7XG4gIH0sIFtdKTtcbiAgY29uc29sZS5sb2coZGF0YSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdW5kZWQtc20gYm9yZGVyIG10LTUgYm9yZGVyLXN0cm9rZSBiZy13aGl0ZSBweC01IHB0LTYgcGItMi41IHNoYWRvdyBzbTpweC03LjUgeGw6cGItMVwiPlxuICAgICAgICBcbiAgICA8RGF0YVRhYmxlXG4gICAgICAgICAgIHRpdGxlPXt0YWJsZUhlYWRlclRleHR9XG4gICAgICAgICAgICBjb2x1bW5zPXtjb2x1bW5zfVxuICAgICAgICAgICAgZGF0YT17cm93c31cbiAgICAgICAgICAgIHByb2dyZXNzUGVuZGluZz17cGVuZGluZ31cbiAgICAgICAgICAgIHByb2dyZXNzQ29tcG9uZW50PXs8TG9hZGVyIHRleHQ9XCJMb2FkaW5nIGludmVudG9yeSBoaXJlLHBsZWFzZSB3YWl0Li4uXCIgaGVpZ2h0PXsyMH0vPn1cbiAgICAgICAgICAgIHBhZ2luYXRpb25cbiAgICAgICAgICAvPlxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiRGF0YVRhYmxlIiwiTG9hZGVyIiwiY29sdW1ucyIsIm5hbWUiLCJzZWxlY3RvciIsInJvdyIsInRpdGxlIiwieWVhciIsImRhdGEiLCJpZCIsIlRhYmxlIiwiZGF0IiwidGFibGVIZWFkZXJUZXh0IiwiY29sdW1zIiwicGVuZGluZyIsInNldFBlbmRpbmciLCJ1c2VTdGF0ZSIsInJvd3MiLCJzZXRSb3dzIiwidXNlRWZmZWN0IiwidGltZW91dCIsInNldFRpbWVvdXQiLCJjbGVhclRpbWVvdXQiLCJjb25zb2xlIiwibG9nIiwiZGl2IiwiY2xhc3NOYW1lIiwicHJvZ3Jlc3NQZW5kaW5nIiwicHJvZ3Jlc3NDb21wb25lbnQiLCJ0ZXh0IiwiaGVpZ2h0IiwicGFnaW5hdGlvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/Table/index.js\n"));

/***/ })

});