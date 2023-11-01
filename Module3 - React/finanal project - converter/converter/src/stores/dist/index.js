"use strict";
exports.__esModule = true;
var converterStore_1 = require("./converterStore");
var currenciesStore_1 = require("./currenciesStore");
var stores = {
    СurrenciesStore: new currenciesStore_1["default"](),
    СonverterStore: new converterStore_1["default"]()
};
exports["default"] = stores;
