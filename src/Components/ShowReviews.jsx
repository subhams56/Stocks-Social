import { useEffect, useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { Link } from 'react-router-dom';

function ShowReviews() {
  const [reviews, setReviews] = useState([]);
  const username = localStorage.getItem('username');

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await fetch(`http://localhost:8000/stocks/reviews/?username=${username}`);
        const data = await response.json();
        console.log(data);
        if (response.ok) {
          setReviews(data);
          alert('Here are the reviews!');
        } else {
          alert(`Error: ${data}`);
        }
      } catch (error) {
        console.log(error);
        alert('An error occurred while fetching reviews. Please try again later.');
      }
    };

    fetchReviews();
  }, [username]);

  

  return (<>
  <Navbar/> 
  
    <div className="flex flex-col items-center bg-blue-100 max-h-screen">
      <h1 className="text-3xl font-bold my-10">Reviews 📝</h1>
      <Link
            to="/account"
            className="py-2 px-4 font-semibold rounded-lg bg-gray-800 text-white hover:bg-gray-700"
          >
            Go Back to Account
          </Link>
          <Link
            to="/reviewForm"
            className=" m-4 py-2 px-4 mb-3 font-semibold rounded-lg bg-gray-800 text-white hover:bg-gray-700"
          >
            Create Another Review
          </Link>
      {Array.isArray(reviews) ? (
        reviews.map((review) => {
          if (
            review.id &&
            review.review_user &&
            review.rating &&
            review.description
          ) {
            return (
              <div
                key={review.id}
                className="bg-white shadow-lg rounded-md my-4 w-full md:w-3/5 lg:w-2/3 xl:w-1/2"
              >
                <div className="px-6 py-4">
                  
                  <h3 className="text-xl font-bold mb-2">
                   User : {review.review_user}
                  </h3>
                  <p className="text-gray-600 text-base mb-2">
                    Rating: {review.rating}/5
                  </p>
                  <p className="text-gray-600 text-base mb-2">
                    Description: {review.description}
                  </p>
                  <p className="text-gray-600 text-base mb-2">
                    Active: {review.active ? 'Yes' : 'No'}
                  </p>
           
                </div>
               
            
              </div>
              
              
            );
          } else {
            console.log(review.message);
            alert(review.message);
            return null;
          }
        })
      ) : (<>
        <div className='text-red-500 text-2xl p-6 m-5'>"{reviews.message}"</div>
        <p className='pt-2 mt-2 mb-1 text-sm text-gray-800'>Create One Right Now?</p>
        <Link
            to="/reviewForm"
            className="py-2 px-4 mb-3 font-semibold rounded-lg bg-gray-800 text-white hover:bg-gray-700"
          >
            Create Review
          </Link>
        
        </>
      )}
    </div>
    
    
    <Footer/>
    </>
  );
}

export default ShowReviews;
