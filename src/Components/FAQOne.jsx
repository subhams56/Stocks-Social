import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

export const FAQOne = () => {
  return (
    <>
      <Navbar />
      <div className=" h-screen w-screen bg-black">
        <section className="max-w-7xl p-2 mx-auto px-10 md:px-0 py-10 bg-black h-screen w-max">
          <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl w-screen">
            <div className="max-w-2xl mx-auto lg:text-center">
              <h2 className="text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl lg:text-5xl">
                Frequently Asked Questions
              </h2>
              <p className="max-w-xl lg:mx-auto mt-4 text-base leading-relaxed text-gray-600">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere,
                assumenda
              </p>
            </div>
            <div className="max-w-3xl mx-auto mt-8 md:mt-16 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h2 className="font-semibold text-xl text-black dark:text-white">
                  How do I view my investments?
                </h2>
                <p className="text-sm leading-6 tracking-wide text-gray-500 mt-6">
                  To view your investments, click on the "View Investments"
                  button on your profile dashboard.
                </p>
              </div>
              <div>
                <h2 className="font-semibold text-xl text-black dark:text-white">
                  How do I add a new stock?
                </h2>
                <p className="text-sm leading-6 tracking-wide text-gray-500 mt-6">
                  To add a new stock, click on the "Add Stock" button on your
                  profile dashboard.
                </p>
              </div>
              <div>
                <h2 className="font-semibold text-xl text-black dark:text-white">
                  How do I view reviews?
                </h2>
                <p className="text-sm leading-6 tracking-wide text-gray-500 mt-6">
                  To view reviews, click on the "Show Reviews" button on your
                  profile dashboard.
                </p>
              </div>
              <div>
                <h2 className="font-semibold text-xl text-black dark:text-white">
                  Where can I find help?
                </h2>
                <p className="text-sm leading-6 tracking-wide text-gray-500 mt-6">
                  For help, click on the "Get Help" button on your profile
                  dashboard or contact us by clicking the link at the bottom of
                  the page.
                </p>
              </div>
            </div>
            <p className="text-center text-gray-600 textbase mt-10">
              Can&apos;t find what you&apos;re looking for?{" "}
              <a
                href="#"
                title=""
                className="font-medium text-indigo-600 hover:underline"
              >
                Contact us
              </a>
            </p>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

FAQOne.displayName = "FAQOne";
