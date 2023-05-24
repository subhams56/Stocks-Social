import React , {useState , useEffect} from 'react'
import Stocks from "../Stocks.json"
import Stockimg from "../assets/stockimg.png"
import { Link } from 'react-router-dom'
import Footer from './Footer'



function Investments() {
  return (
    <>
    <div className="bg-customColor py-6 px-4 sm:px-6 lg:px-8">
    <div className="max-w-7xl mx-auto">
      <h2 className="text-3xl font-semibold text-gray-100">My Stock Investments 📈</h2>
      <div className="mt-4">
        <div className="shadow overflow-hidden border-b border-gray-800 sm:rounded-lg">
          <table className="min-w-full divide-y divide-gray-800">
            <thead className="bg-gray-800">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                  Stock Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                  Stock Code
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                  Current Rate
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                  Current High
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                  Current Low
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                  Buy Date
                </th>
              </tr>
            </thead>
            <tbody className="bg-gray-900 divide-y divide-gray-800">
              {Stocks.map((stock) => (
                <tr key={stock.stock_name}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-10 w-10">
                        <img className="h-10 w-10 rounded-full" src={Stockimg} alt="" />
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-100">{stock.stock_name}</div>
                        <div className="text-sm text-gray-400">{stock.stock_rate}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-100">{stock.stock_rate}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-100">{stock.current_rate}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-100">{stock.current_high}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-100">{stock.current_low}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-100">{stock.buy_date}</td>
                </tr>
              ))}
            </tbody>
          </table>
          
        </div>
      </div>
      
    </div>
    
   
    
    
  </div>
  <Footer/>
  </>
    
  )
}

export default Investments