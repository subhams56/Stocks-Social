import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

function Predictor() {
  const handleClick = () => {
    window.open("https://colab.research.google.com/drive/1OMwzoJl1pmIJ3Zuz3Jbh48pUZJHjh7Ds", "_blank");
  };

  return (
    <>
      <Navbar />
      <div className="bg-customColor">
        <section className="text-gray-400 body-font">
          <div className="container px-5 py-24 mx-auto">
            <div className="text-center mb-20">
              <h1 className="sm:text-3xl text-2xl font-medium title-font text-white mb-4">
                Welcome to our Stock Predictor
              </h1>
              <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-200s">
                Predict the future trends of stocks and make informed investment decisions. Our stock predictor utilizes advanced algorithms and accurate data to provide reliable forecasts.
              </p>
              <div className="flex mt-6 justify-center">
                <div className="w-16 h-1 rounded-full bg-green-500 inline-flex" />
              </div>
            </div>
            <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
              <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
                <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-green-100 text-green-500 mb-5 flex-shrink-0">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    className="w-10 h-10"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                  </svg>
                </div>
                <div className="flex-grow">
                  <h2 className="text-gray-300 text-lg title-font font-medium mb-3">
                    Super Fast
                  </h2>
                  <p className="leading-relaxed text-base">
                    Our stock predictor offers lightning-fast analysis and predictions, allowing you to stay ahead in the stock market with real-time insights.
                  </p>
                  <a className="mt-3 text-green-500 inline-flex items-center">
                    Learn More
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      className="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>
              <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
                <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-green-100 text-green-500 mb-5 flex-shrink-0">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}                    className="w-10 h-10"
                    viewBox="0 0 24 24"
                  >
                    <circle cx={6} cy={6} r={3} />
                    <circle cx={6} cy={18} r={3} />
                    <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12" />
                  </svg>
                </div>
                <div className="flex-grow">
                  <h2 className="text-gray-300 text-lg title-font font-medium mb-3">
                    Accurate Data
                  </h2>
                  <p className="leading-relaxed text-base">
                    Our stock predictor leverages accurate and reliable data sources to provide precise predictions, empowering you to make well-informed investment decisions.
                  </p>
                  <a className="mt-3 text-green-500 inline-flex items-center">
                    Learn More
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      className="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>
              <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
                <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-green-100 text-green-500 mb-5 flex-shrink-0">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    className="w-10 h-10"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
                    <circle cx={12} cy={7} r={4} />
                  </svg>
                </div>
                <div className="flex-grow">
                  <h2 className="text-gray-300 text-lg title-font font-medium mb-3">
                    User Friendly
                  </h2>
                  <p className="leading-relaxed text-base">
                    Our stock predictor is designed with a user-friendly interface, making it easy for both beginners and experienced investors to access and interpret the predictions.
                  </p>
                  <a className="mt-3 text-green-500 inline-flex items-center">
                    Learn More
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      className="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <button onClick={handleClick} className="flex mx-auto mt-16 text-white bg-green-500 border-0 py-2 px-8 focus:outline-none hover:bg-green-600 rounded text-lg">
              Go to Predictor
            </button>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}

export default Predictor;


