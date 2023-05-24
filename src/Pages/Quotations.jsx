import { useEffect, useState } from 'react';
import Navbar from "../Components/Navbar";
import statsimg from "../assets/statsimg.jpg";


function Quotations() {
  const [quoteData, setQuoteData] = useState(null);

  useEffect(() => {
    const symbol = localStorage.getItem('companySymbol');
    if (!symbol) {
      return;
    }

    fetch(`https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${symbol}&apikey=4CWJHIYKYIHCBNAS`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Something went wrong');
        }
      })
      .then((data) => {
        setQuoteData(data['Global Quote']);
        localStorage.removeItem('companySymbol');
      })
      .catch((error) => {
        console.error('Error:', error);
        alert('Error occurred while fetching the data. Please try again later.');
      });
  }, []);

  return (<>
  <Navbar/>
    <div className="max-w-3xl mx-auto p-6">
      <div className='flex gap-4 items-center justify-between'>
  <h1 className="text-3xl font-bold mb-6"> Quotations</h1>
  <img className='w-60 h-60 rounded-full ' src={statsimg} alt="" />
  </div>
  {quoteData && (
    <div className="bg-white rounded-lg shadow-md p-6">
      <p className="text-xl mb-2">Symbol: {quoteData['01. symbol']}</p>
      <div className="grid grid-cols-2 gap-6 mb-4">
        <p className="text-lg"><span className="font-bold">Open:</span> {quoteData['02. open']}</p>
        <p className="text-lg"><span className="font-bold">High:</span> {quoteData['03. high']}</p>
        <p className="text-lg"><span className="font-bold">Low:</span> {quoteData['04. low']}</p>
        <p className="text-lg"><span className="font-bold">Price:</span> {quoteData['05. price']}</p>
        <p className="text-lg"><span className="font-bold">Volume:</span> {quoteData['06. volume']}</p>
        <p className="text-lg"><span className="font-bold">Latest trading day:</span> {quoteData['07. latest trading day']}</p>
        <p className="text-lg"><span className="font-bold">Previous close:</span> {quoteData['08. previous close']}</p>
        <p className="text-lg col-span-2"><span className="font-bold">Change:</span> {quoteData['09. change']}</p>
        <p className="text-lg col-span-2"><span className="font-bold">Change percent:</span> {quoteData['10. change percent']}</p>
      </div>
    </div>
  )}
</div>
</>
  );
}

export default Quotations;
