import React, { useState, useEffect } from 'react';
import './CryptoRow.css';

const CryptoRow = ({ crypto }) => {
  const [prevPrice, setPrevPrice] = useState(crypto.RAW.USD.PRICE);
  const [rowColor, setRowColor] = useState(''); // Изначально нет 
  console.log(prevPrice)

  useEffect(() => {
    const currentPrice = crypto.RAW.USD.PRICE;
    if (currentPrice > prevPrice) {
      setRowColor('green'); // Зеленый фон для положительных изменений
    } else if (currentPrice < prevPrice) {
      setRowColor('red'); // Красный фон для отрицательных изменений
    } else {
      setRowColor(''); // Если изменений нет, сбросить цвет
    }

    // Обновляем предыдущую цену
    setPrevPrice(currentPrice);
  }, [crypto]);

  return (
    <tr className={`crypto-row ${rowColor}`}>
      <td>
        <img
          src={`https://www.cryptocompare.com${crypto.CoinInfo.ImageUrl}`}
          alt="Icon"
          className="crypto-row-image"
        />
      </td>
      <td className="crypto-row-data">{crypto.CoinInfo.Name}</td>
      <td className="crypto-row-data">{crypto.CoinInfo.FullName}</td>
      <td className="crypto-row-data">
      ${crypto.RAW.USD.PRICE.toFixed(2)}
      </td>
      <td className="crypto-row-data">
      ${parseInt(crypto.RAW.USD.VOLUME24HOUR)}
      </td>
    </tr>
  );
};

export default CryptoRow;