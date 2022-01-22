webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: __N_SSP, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSP\", function() { return __N_SSP; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Home; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/dist/next-server/lib/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2__);\nvar _jsxFileName = \"/Users/anthonypafundi/Desktop/cmc-clone/pages/index.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\nvar __N_SSP = true;\nfunction Home(props) {\n  var _this = this;\n\n  var data = props.result.data;\n\n  var formatPercent = function formatPercent(number) {\n    return \"\".concat(new Number(number).toFixed(2), \"%\");\n  };\n\n  var formatDollar = function formatDollar(number, maximumSignificantDigits) {\n    return new Intl.NumberFormat('en-US', {\n      style: 'currency',\n      currency: 'USD',\n      maximumSignificantDigits: maximumSignificantDigits\n    }).format(number);\n  };\n\n  return __jsx(\"div\", {\n    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.container,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 5\n    }\n  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 7\n    }\n  }, __jsx(\"title\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 9\n    }\n  }, \"Coinmarketcap clone\"), __jsx(\"link\", {\n    rel: \"icon\",\n    href: \"/favicon.ico\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 9\n    }\n  })), __jsx(\"h1\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 7\n    }\n  }, \"Coinmarketcap clone\"), __jsx(\"table\", {\n    className: \"h7vnx2-2 czTsgW cmc-table table\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 7\n    }\n  }, __jsx(\"thead\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 9\n    }\n  }, __jsx(\"tr\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 11\n    }\n  }, __jsx(\"th\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 13\n    }\n  }, \"#\"), __jsx(\"th\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 13\n    }\n  }, \"Symbol\"), __jsx(\"th\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 13\n    }\n  }, \"24H Change\"), __jsx(\"th\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 13\n    }\n  }, \"Price\"), __jsx(\"th\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 13\n    }\n  }, \"Market cap\"))), __jsx(\"tbody\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 9\n    }\n  }, data.map(function (coin) {\n    return __jsx(\"tr\", {\n      key: coin.id,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 43,\n        columnNumber: 13\n      }\n    }, __jsx(\"td\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 44,\n        columnNumber: 15\n      }\n    }), __jsx(\"td\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 47,\n        columnNumber: 15\n      }\n    }, __jsx(\"img\", {\n      src: coin.image,\n      style: {\n        width: 25,\n        height: 25,\n        marginRight: 10\n      },\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 48,\n        columnNumber: 17\n      }\n    }), coin.symbol.toUpperCase()), __jsx(\"td\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 54,\n        columnNumber: 15\n      }\n    }, __jsx(\"span\", {\n      className: coin.price_change_percentage_24h > 0 ? 'text-success' : 'text-danger',\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 55,\n        columnNumber: 17\n      }\n    }, formatPercent(coin.price_change_percentage_24h))), __jsx(\"td\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 63,\n        columnNumber: 15\n      }\n    }, formatDollar(coin.current_price, 20)), __jsx(\"td\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 64,\n        columnNumber: 15\n      }\n    }, formatDollar(coin.market_cap, 12)));\n  }))));\n}\n_c = Home;\n\nvar _c;\n\n$RefreshReg$(_c, \"Home\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/NDRkOCJdLCJuYW1lcyI6WyJIb21lIiwicHJvcHMiLCJkYXRhIiwicmVzdWx0IiwiZm9ybWF0UGVyY2VudCIsIm51bWJlciIsIk51bWJlciIsInRvRml4ZWQiLCJmb3JtYXREb2xsYXIiLCJtYXhpbXVtU2lnbmlmaWNhbnREaWdpdHMiLCJJbnRsIiwiTnVtYmVyRm9ybWF0Iiwic3R5bGUiLCJjdXJyZW5jeSIsImZvcm1hdCIsInN0eWxlcyIsImNvbnRhaW5lciIsIm1hcCIsImNvaW4iLCJpZCIsImltYWdlIiwid2lkdGgiLCJoZWlnaHQiLCJtYXJnaW5SaWdodCIsInN5bWJvbCIsInRvVXBwZXJDYXNlIiwicHJpY2VfY2hhbmdlX3BlcmNlbnRhZ2VfMjRoIiwiY3VycmVudF9wcmljZSIsIm1hcmtldF9jYXAiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBSWUsU0FBU0EsSUFBVCxDQUFjQyxLQUFkLEVBQXFCO0FBQUE7O0FBQUEsTUFDMUJDLElBRDBCLEdBQ2pCRCxLQUFLLENBQUNFLE1BRFcsQ0FDMUJELElBRDBCOztBQUdsQyxNQUFNRSxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLENBQUFDLE1BQU07QUFBQSxxQkFDdkIsSUFBSUMsTUFBSixDQUFXRCxNQUFYLEVBQW1CRSxPQUFuQixDQUEyQixDQUEzQixDQUR1QjtBQUFBLEdBQTVCOztBQUdBLE1BQU1DLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUNILE1BQUQsRUFBU0ksd0JBQVQ7QUFBQSxXQUNuQixJQUFJQyxJQUFJLENBQUNDLFlBQVQsQ0FDRSxPQURGLEVBRUU7QUFDRUMsV0FBSyxFQUFFLFVBRFQ7QUFFRUMsY0FBUSxFQUFFLEtBRlo7QUFHRUosOEJBQXdCLEVBQXhCQTtBQUhGLEtBRkYsRUFPR0ssTUFQSCxDQU9VVCxNQVBWLENBRG1CO0FBQUEsR0FBckI7O0FBVUEsU0FDRTtBQUFLLGFBQVMsRUFBRVUsOERBQU0sQ0FBQ0MsU0FBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsZ0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBREYsRUFFRTtBQUFNLE9BQUcsRUFBQyxNQUFWO0FBQWlCLFFBQUksRUFBQyxjQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkYsQ0FERixFQU1FO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBTkYsRUFRRTtBQUFPLGFBQVMsRUFBQyxpQ0FBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQURGLEVBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZGLEVBR0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFIRixFQUlFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFKRixFQUtFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBTEYsQ0FERixDQURGLEVBVUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHZCxJQUFJLENBQUNlLEdBQUwsQ0FBUyxVQUFBQyxJQUFJO0FBQUEsV0FDWjtBQUFJLFNBQUcsRUFBRUEsSUFBSSxDQUFDQyxFQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BREYsRUFJRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFDRSxTQUFHLEVBQUVELElBQUksQ0FBQ0UsS0FEWjtBQUVFLFdBQUssRUFBRTtBQUFDQyxhQUFLLEVBQUUsRUFBUjtBQUFZQyxjQUFNLEVBQUUsRUFBcEI7QUFBd0JDLG1CQUFXLEVBQUU7QUFBckMsT0FGVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BREYsRUFLR0wsSUFBSSxDQUFDTSxNQUFMLENBQVlDLFdBQVosRUFMSCxDQUpGLEVBV0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQ0UsZUFBUyxFQUFFUCxJQUFJLENBQUNRLDJCQUFMLEdBQW1DLENBQW5DLEdBQ1QsY0FEUyxHQUVQLGFBSE47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUtDdEIsYUFBYSxDQUFDYyxJQUFJLENBQUNRLDJCQUFOLENBTGQsQ0FERixDQVhGLEVBb0JFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBS2xCLFlBQVksQ0FBQ1UsSUFBSSxDQUFDUyxhQUFOLEVBQXFCLEVBQXJCLENBQWpCLENBcEJGLEVBcUJFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBS25CLFlBQVksQ0FBQ1UsSUFBSSxDQUFDVSxVQUFOLEVBQWtCLEVBQWxCLENBQWpCLENBckJGLENBRFk7QUFBQSxHQUFiLENBREgsQ0FWRixDQVJGLENBREY7QUFrREQ7S0FsRXVCNUIsSSIsImZpbGUiOiIuL3BhZ2VzL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzJ1xuaW1wb3J0IENvaW5HZWNrbyBmcm9tICdjb2luZ2Vja28tYXBpJztcbmNvbnN0IGNvaW5HZWNrb0NsaWVudCA9IG5ldyBDb2luR2Vja28oKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZShwcm9wcykge1xuICBjb25zdCB7IGRhdGEgfSA9IHByb3BzLnJlc3VsdDtcblxuICBjb25zdCBmb3JtYXRQZXJjZW50ID0gbnVtYmVyID0+IFxuICAgIGAke25ldyBOdW1iZXIobnVtYmVyKS50b0ZpeGVkKDIpfSVgXG5cbiAgY29uc3QgZm9ybWF0RG9sbGFyID0gKG51bWJlciwgbWF4aW11bVNpZ25pZmljYW50RGlnaXRzKSA9PlxuICAgIG5ldyBJbnRsLk51bWJlckZvcm1hdChcbiAgICAgICdlbi1VUycsIFxuICAgICAgeyBcbiAgICAgICAgc3R5bGU6ICdjdXJyZW5jeScsIFxuICAgICAgICBjdXJyZW5jeTogJ1VTRCcsXG4gICAgICAgIG1heGltdW1TaWduaWZpY2FudERpZ2l0c1xuICAgICAgfSlcbiAgICAgIC5mb3JtYXQobnVtYmVyKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+Q29pbm1hcmtldGNhcCBjbG9uZTwvdGl0bGU+XG4gICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb24uaWNvXCIgLz5cbiAgICAgIDwvSGVhZD5cblxuICAgICAgPGgxPkNvaW5tYXJrZXRjYXAgY2xvbmU8L2gxPlxuXG4gICAgICA8dGFibGUgY2xhc3NOYW1lPVwiaDd2bngyLTIgY3pUc2dXIGNtYy10YWJsZSB0YWJsZVwiPlxuICAgICAgICA8dGhlYWQ+XG4gICAgICAgICAgPHRyPlxuICAgICAgICAgICAgPHRoPiM8L3RoPlxuICAgICAgICAgICAgPHRoPlN5bWJvbDwvdGg+XG4gICAgICAgICAgICA8dGg+MjRIIENoYW5nZTwvdGg+XG4gICAgICAgICAgICA8dGg+UHJpY2U8L3RoPlxuICAgICAgICAgICAgPHRoPk1hcmtldCBjYXA8L3RoPlxuICAgICAgICAgIDwvdHI+XG4gICAgICAgIDwvdGhlYWQ+XG4gICAgICAgIDx0Ym9keT5cbiAgICAgICAgICB7ZGF0YS5tYXAoY29pbiA9PiAoXG4gICAgICAgICAgICA8dHIga2V5PXtjb2luLmlkfT5cbiAgICAgICAgICAgICAgPHRkPlxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgICAgPGltZyBcbiAgICAgICAgICAgICAgICAgIHNyYz17Y29pbi5pbWFnZX0gXG4gICAgICAgICAgICAgICAgICBzdHlsZT17e3dpZHRoOiAyNSwgaGVpZ2h0OiAyNSwgbWFyZ2luUmlnaHQ6IDEwfX0gXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICB7Y29pbi5zeW1ib2wudG9VcHBlckNhc2UoKX1cbiAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgPHRkPiBcbiAgICAgICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjb2luLnByaWNlX2NoYW5nZV9wZXJjZW50YWdlXzI0aCA+IDAgPyAoXG4gICAgICAgICAgICAgICAgICAgICd0ZXh0LXN1Y2Nlc3MnIFxuICAgICAgICAgICAgICAgICAgKSA6ICd0ZXh0LWRhbmdlcid9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHtmb3JtYXRQZXJjZW50KGNvaW4ucHJpY2VfY2hhbmdlX3BlcmNlbnRhZ2VfMjRoKX1cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgIDx0ZD57Zm9ybWF0RG9sbGFyKGNvaW4uY3VycmVudF9wcmljZSwgMjApfTwvdGQ+XG4gICAgICAgICAgICAgIDx0ZD57Zm9ybWF0RG9sbGFyKGNvaW4ubWFya2V0X2NhcCwgMTIpfTwvdGQ+XG4gICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L3Rib2R5PlxuICAgICAgPC90YWJsZT5cblxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoY29udGV4dCkge1xuICBjb25zdCBwYXJhbXMgPSB7XG4gICAgb3JkZXI6IENvaW5HZWNrby5PUkRFUi5NQVJLRVRfQ0FQX0RFU0NcbiAgfTtcbiAgY29uc3QgcmVzdWx0ID0gYXdhaXQgY29pbkdlY2tvQ2xpZW50LmNvaW5zLm1hcmtldHMoe3BhcmFtc30pO1xuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICByZXN1bHRcbiAgICB9LFxuICB9XG59XG5cblxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})