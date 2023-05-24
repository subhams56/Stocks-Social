import React, { useState, useEffect } from 'react';

function Api(props) {
  const [stocks, setStocks] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8000/stocks/stream')
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setStocks(data);  
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, []);

  return (
    <div className="bg-white p-4 rounded-lg shadow-lg">
      {stocks.map((stock) => (
        <div key={stock.id} className="mb-4">
          <h2 className="text-lg font-semibold">{stock.holder[0].platform}: {stock.holder[0].name}</h2>
          <p className="text-gray-600">Bought for: {stock.holder[0].boughtFor}</p>
          <p className="text-gray-600">Number rating: {stock.holder[0].number_rating}</p>
          <p className="text-gray-600">Average rating: {stock.holder[0].avg_rating}</p>
          <p className="text-gray-600">Bought from: {stock.boughtFrom}</p>
        </div>
      ))}
    </div>
  );
}

export default Api;
