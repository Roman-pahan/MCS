// CryptoTable.js
import React, { useState, useEffect } from 'react';
import CryptoRow from './CryptoRow';
import CryptoConverter from './CryptoConverter';
import './CryptoTable.css';

function CryptoTable() {
  const [cryptoData, setCryptoData] = useState([]);
  const [isAutoRefreshEnabled, setIsAutoRefreshEnabled] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const api = "08417e0a0c3906ae2fb20fb46ba6c7cb476d8930e4f0f125332fff931684169e";
        const apiUrl = `https://min-api.cryptocompare.com/data/top/totalvolfull?limit=10&tsym=USD&api_key=${api}`;
        const response = await fetch(apiUrl);
        const data = await response.json();

        setCryptoData(data.Data);
        setIsLoading(false);
      } catch (error) {
        console.error('Error while fetching data from API:', error);
        setIsLoading(false);
      }
    };

    fetchData();

    let intervalId;
    if (isAutoRefreshEnabled) {
      intervalId = setInterval(fetchData, 210000);
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [isAutoRefreshEnabled]);

  const handleAutoRefreshChange = () => {
    setIsAutoRefreshEnabled(!isAutoRefreshEnabled);
  };

  return (
    <div className="crypto-table-container">
      <h1 className="crypto-table-heading">Cryptocurrency Table</h1>
      <div className="radio-buttons">
        <label className="radio-label">
          <input
            type="radio"
            name="autoRefresh"
            checked={isAutoRefreshEnabled}
            onChange={handleAutoRefreshChange}
          />
          Turn on auto-update
        </label>
        <label className="radio-label">
          <input
            type="radio"
            name="autoRefresh"
            checked={!isAutoRefreshEnabled}
            onChange={handleAutoRefreshChange}
          />
          Turn off auto-update
        </label>
      </div>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <table className="crypto-table">
          <thead>
            <tr>
              <th>Icon</th>
              <th>Name</th>
              <th>Full Name</th>
              <th>Price in USD</th>
              <th>Volume in USD (24h)</th>
            </tr>
          </thead>
          <tbody>
            {cryptoData.map((crypto, index) => (
              index === 8 ? null : (
                <CryptoRow key={index} crypto={crypto}/>
              )
            ))}
          </tbody>
        </table>
      )}
      <CryptoConverter cryptoData={cryptoData} />
    </div>
  );
}

export default CryptoTable;