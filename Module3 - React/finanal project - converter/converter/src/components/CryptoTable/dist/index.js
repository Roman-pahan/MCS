"use strict";
exports.__esModule = true;
var react_1 = require("react");
var mobx_react_1 = require("mobx-react");
var styles_1 = require("@mui/material/styles");
var Table_1 = require("@mui/material/Table");
var Avatar_1 = require("@mui/material/Avatar");
var TableBody_1 = require("@mui/material/TableBody");
var TableCell_1 = require("@mui/material/TableCell");
var TableContainer_1 = require("@mui/material/TableContainer");
var TableHead_1 = require("@mui/material/TableHead");
var TableRow_1 = require("@mui/material/TableRow");
var Paper_1 = require("@mui/material/Paper");
styles_1.styled(Table_1["default"])(function (_a) {
    var theme = _a.theme;
    return ({
        minWidth: '650px'
    });
});
styles_1.styled(Avatar_1["default"])(function (_a) {
    var theme = _a.theme;
    return ({
        height: '18px',
        width: '18px',
        borderRadius: 30
    });
});
var CryptoTable = function () { return mobx_react_1.inject('CurrenciesStore')(mobx_react_1.observer(function (_a) {
    var classes = _a.classes, currenciesStore = _a.currenciesStore;
    var items = [];
    return (react_1["default"].createElement(TableContainer_1["default"], { component: Paper_1["default"] },
        react_1["default"].createElement(Table_1["default"], { className: classes.tableLeft, sx: { minWidth: 650 }, size: "small", "aria-label": "a dense table" },
            react_1["default"].createElement(TableHead_1["default"], null,
                react_1["default"].createElement(TableRow_1["default"], null,
                    react_1["default"].createElement(TableCell_1["default"], null),
                    react_1["default"].createElement(TableCell_1["default"], { align: "left" }, "FullName"),
                    react_1["default"].createElement(TableCell_1["default"], { align: "left" }, "Name"),
                    react_1["default"].createElement(TableCell_1["default"], { align: "left" }, "Price"),
                    react_1["default"].createElement(TableCell_1["default"], { align: "left" }, "Volume24Hour"))),
            react_1["default"].createElement(TableBody_1["default"], null, !items ? "Loading..." : items.map(function (coin, index) {
                if (index < 7 || index >= 8) {
                    return (react_1["default"].createElement(TableRow_1["default"], { key: index },
                        react_1["default"].createElement(TableCell_1["default"], { align: "left" },
                            react_1["default"].createElement(Avatar_1["default"], { className: classes.currencyIcon, src: coin.imageURL, alt: "Coin icon" })),
                        react_1["default"].createElement(TableCell_1["default"], { align: "left" }, coin.name),
                        react_1["default"].createElement(TableCell_1["default"], { align: "left" }, coin.fullName),
                        react_1["default"].createElement(TableCell_1["default"], { align: "left" },
                            "$",
                            coin.price),
                        react_1["default"].createElement(TableCell_1["default"], { align: "left" },
                            "$",
                            coin.volume24Hour)));
                }
                else {
                    return null; // Пропускаем восьмой элемент
                }
            })))));
})); };
exports["default"] = CryptoTable;
