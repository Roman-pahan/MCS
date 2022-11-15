import prices from "./prices.js";

export const getPrice = (currency) => {
  return prices.ethereum[currency] ?? "Нет данных";
};
