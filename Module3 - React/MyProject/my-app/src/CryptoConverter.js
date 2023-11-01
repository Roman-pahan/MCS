import React, { useState } from 'react';
import './CryptoConverter.css';

function CryptoConverter({ cryptoData }) {
    const [fromCurrency, setFromCurrency] = useState('BTC');
    const [toCurrency, setToCurrency] = useState('ETH');
    const [fromAmount, setFromAmount] = useState(1);
    const [toAmount, setToAmount] = useState(null);

    const handleFromCurrencyChange = (e) => {
        setFromCurrency(e.target.value);
        convertCurrency(fromAmount, e.target.value, toCurrency);
    };

    const handleToCurrencyChange = (e) => {
        setToCurrency(e.target.value);
        convertCurrency(fromAmount, fromCurrency, e.target.value);
    };

    const handleFromAmountChange = (e) => {
        setFromAmount(e.target.value);
        convertCurrency(e.target.value, fromCurrency, toCurrency);
    };

    const convertCurrency = (amount, fromCurrency, toCurrency) => {
        if (fromCurrency && toCurrency) {
            const fromCrypto = cryptoData.find((crypto) => crypto.CoinInfo.Name === fromCurrency);
            const toCrypto = cryptoData.find((crypto) => crypto.CoinInfo.Name === toCurrency);

            if (fromCrypto && toCrypto) {
                const fromPrice = fromCrypto.RAW.USD.PRICE;
                const toPrice = toCrypto.RAW.USD.PRICE;
                const convertedAmount = (amount * fromPrice) / toPrice;
                setToAmount(convertedAmount);
            }
        }
    };

    return (
        <div className="crypto-converter-container">
            <h2>Crypto Converter</h2>
            <div className="input-container">
                <label>
                    Convert:
                    <input
                        type="number"
                        value={fromAmount}
                        onChange={handleFromAmountChange}
                    />
                    <select className="select-currency auto-width-select" value={fromCurrency} onChange={handleFromCurrencyChange}>
                        {cryptoData.map((crypto, index) => (
                            <option key={index} value={crypto.CoinInfo.Name}>
                                {crypto.CoinInfo.Name}
                            </option>
                        ))}
                    </select>
                </label>
            </div>
            <div className="input-container">
                <label className="label-result">
                    Result:
                    <input
                        type="number"
                        value={toAmount !== null ? toAmount : ''}
                        readOnly
                        onClick={(e) => e.target.select()}
                    />
                    <select className="select-currency auto-width-select" value={toCurrency} onChange={handleToCurrencyChange}>
                        {cryptoData.map((crypto, index) => (
                            <option key={index} value={crypto.CoinInfo.Name}>
                                {crypto.CoinInfo.Name}
                            </option>
                        ))}
                    </select>
                </label>
            </div>
        </div>
    );
}

export default CryptoConverter;