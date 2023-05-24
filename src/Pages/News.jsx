import React, { useState, useEffect } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";



function News() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    fetch(
      "https://api.marketaux.com/v1/news/all?language=en&countries=in&api_token=DWJIuc4XpXug2hC3ARYKS6vKw4kjGsBHZe0ukLzD"
    )
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Something went wrong");
        }
      })
      .then((data) => {
        const filteredData = data.data.map((item) => {
          const {
            exchange_long,
            country,
            match_score,
            sentiment_score,
            ...rest
          } = item;
          const highlights = rest.entities.map((entity) => {
            const { highlighted_in, ...rest } = entity;
            return { ...rest };
          });
          return { ...rest, highlights };
        });
        setNews(filteredData);
      })
      .catch((error) => console.log(error));
  }, []);
  const [imageUrl, setImageUrl] = useState("");

  /*useEffect(() => {
    fetch(
      "https://api.unsplash.com/photos/random?query=stocks&orientation=landscape",
      {
        headers: {
          Authorization: "Client-ID _Od_5q2grrWAyCojqDV-Ytd4DwRfuhLTLNXBKtY2pVw"
        }
      }
    )
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Something went wrong");
        }
      })
      .then((data) => {
        setImageUrl(data.urls.regular);
      })
      .catch((error) => console.log(error));
  }, []);*/

  return (<>
  <Navbar/>
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 my-3 ">
      <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl underline text-center my-10">
        Latest News 📰 ..
      </h1>
     
      <ul className="mt-8 space-y-8">
        {news.map((item) => (
          <li key={item.uuid}>
            <div className="flex flex-wrap justify-center items-center">
              <div className="w-full md:w-1/2 lg:w-3/5">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-500">{item.description}</p>
                <p className="text-gray-500 mt-2">Published on: {item.published_at}</p>
                {item.highlights.map((highlight, index) => (
                  <p className="text-gray-500 mt-2" key={index}>
                    {highlight.highlight}
                  </p>
                ))}
                <p className="text-gray-500 mt-2">Source: {item.source}</p>
                <p className="text-gray-500 mt-2">Industry: {item.entities[0].industry}</p>
              </div>
              
            </div>
          </li>
        ))}
      </ul>

    </div>
                
    <Footer/>
    </>
  );

}

export default News;
