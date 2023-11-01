"use strict";
exports.__esModule = true;
var react_1 = require("react");
var Paper_1 = require("@mui/material/Paper");
var TextField_1 = require("@mui/material/TextField");
var Select_1 = require("@mui/material/Select");
var MenuItem_1 = require("@mui/material/MenuItem");
var InputLabel_1 = require("@mui/material/InputLabel");
var FormControl_1 = require("@mui/material/FormControl");
var classes = {
    cryptoInputBox: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: '20px',
        marginBottom: '20px'
    },
    currencyInput: {
        minWidth: 'calc(70% - 10px)',
        marginRight: '10px'
    },
    currencyType: {
        minWidth: '30%'
    },
    label: {
        marginTop: '-7px'
    }
};
var ConverterBlock = function (_a) {
    var classes = _a.classes;
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement(Paper_1["default"], { className: classes.cryptoInputBox },
            react_1["default"].createElement(FormControl_1["default"], { className: classes.currencyInput, fullWidth: true },
                react_1["default"].createElement(TextField_1["default"], { label: "\u0421\u0443\u043C\u043C\u0430" })),
            react_1["default"].createElement(FormControl_1["default"], { className: classes.currencyType },
                react_1["default"].createElement(InputLabel_1["default"], { className: classes.label }, "\u0412\u0430\u043B\u044E\u0442\u0430"),
                react_1["default"].createElement(Select_1["default"], { value: 10 },
                    react_1["default"].createElement(MenuItem_1["default"], { value: 10 }, "Ten"),
                    react_1["default"].createElement(MenuItem_1["default"], { value: 20 }, "Twenty"),
                    react_1["default"].createElement(MenuItem_1["default"], { value: 30 }, "Thirty")))),
        react_1["default"].createElement(Paper_1["default"], { className: classes.cryptoInputBox },
            react_1["default"].createElement(FormControl_1["default"], { className: classes.currencyInput, fullWidth: true },
                react_1["default"].createElement(TextField_1["default"], { label: "\u0421\u0443\u043C\u043C\u0430" })),
            react_1["default"].createElement(FormControl_1["default"], { className: classes.currencyType },
                react_1["default"].createElement(InputLabel_1["default"], { className: classes.label }, "\u0412\u0430\u043B\u044E\u0442\u0430"),
                react_1["default"].createElement(Select_1["default"], { value: 10 },
                    react_1["default"].createElement(MenuItem_1["default"], { value: 10 }, "Ten"),
                    react_1["default"].createElement(MenuItem_1["default"], { value: 20 }, "Twenty"),
                    react_1["default"].createElement(MenuItem_1["default"], { value: 30 }, "Thirty"))))));
};
exports["default"] = ConverterBlock;
