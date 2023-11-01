"use strict";
exports.__esModule = true;
var react_1 = require("react");
var material_1 = require("@mui/material");
var Paper_1 = require("@mui/material/Paper");
var Grid_1 = require("@mui/material/Grid");
var styles_1 = require("@mui/material/styles");
var components_1 = require("./components");
var Item = styles_1.styled(Paper_1["default"])(function (_a) {
    var theme = _a.theme;
    return ({
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary
    });
});
var Main = styles_1.styled(material_1.Container)(function (_a) {
    var theme = _a.theme;
    return ({
        padding: theme.spacing(10)
    });
});
function App() {
    // const [allCoins, setAllCoins] = React.useState<TCoin[]>([]);
    var items = [];
    // useEffect(() => {
    //   axios.get('https://min-api.cryptocompare.com/data/top/totalvolfull?limit=20&tsym=USD')
    //     .then(({ data }) => {
    //       const coins: TCoin[] = data.Data.map((coin: any) => {
    //         if (coin.CoinInfo && coin.CoinInfo.ImageUrl && coin.RAW && coin.RAW.USD) {
    //           const obj: TCoin = {
    //             name: coin.CoinInfo.Name,
    //             fullName: coin.CoinInfo.FullName,
    //             imageURL: `https://www.cryptocompare.com/${coin.CoinInfo.ImageUrl}`,
    //             price: coin.RAW.USD.PRICE.toFixed(2),
    //             volume24Hour: parseInt(coin.RAW.USD.VOLUME24HOUR)
    //           };
    //           return obj;
    //         } else {
    //           return {};
    //         }
    //       });
    //       setAllCoins(coins);
    //     });
    // }, []);
    console.log(allCoins);
    return (react_1["default"].createElement(Main, { maxWidth: "lg" },
        react_1["default"].createElement(Grid_1["default"], { container: true, spacing: 2 },
            react_1["default"].createElement(Grid_1["default"], { item: true, xs: 8 },
                react_1["default"].createElement(Item, { elevation: 2 },
                    react_1["default"].createElement(components_1.CryptoTable, { classes: classes }))),
            react_1["default"].createElement(Grid_1["default"], { item: true, xs: 4 },
                react_1["default"].createElement(Item, { elevation: 2 },
                    react_1["default"].createElement(components_1.ConverterBlock, { classes: classes }))))));
}
exports["default"] = App;
