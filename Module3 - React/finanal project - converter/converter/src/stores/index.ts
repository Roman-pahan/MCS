import СonverterStore from "./converterStore";
import CurrenciesStore from "./currenciesStore";

const stores = {
    СurrenciesStore: new CurrenciesStore(),
    СonverterStore: new СonverterStore(),
}

export default stores