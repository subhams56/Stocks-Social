import { useNavigate } from "react-router-dom";

function Profile() {
  const navigate = useNavigate();
  const username = localStorage.getItem("username");

  const handleInvestmentsClick = () => {
    navigate("/investments");
  };

  const handleAddStockClick = () => {
    navigate("/addstock");
  };

  const handleShowReviewClick = () => {
    navigate("/showReview");
  };

  const handleHelpClick = () => {
    window.open("/help", "_blank");
  };

  return (
    <div className="bg-gray-200 p-4 rounded-md m-4">
      <h2 className="text-2xl font-bold mb-4 text-center">Welcome to your profile, {username}</h2>
      <h3 className="text-xl font-bold mb-2 text-center ">Stock Social Profile Dashboard  </h3>
      <div className="grid gap-4 grid-cols-2">
        <div className="bg-white rounded-lg shadow-md p-4">
          <h3 className="text-lg font-bold mb-2">Your Investments 📊</h3>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={handleInvestmentsClick}
          >
            View Investments
          </button>
        </div>
        <div className="bg-white rounded-lg shadow-md p-4">
          <h3 className="text-lg font-bold mb-2">Stocks 📈</h3>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={handleAddStockClick}
          >
            Add Stock
          </button>
        </div>
        <div className="bg-white rounded-lg shadow-md p-4">
          <h3 className="text-lg font-bold mb-2">Reviews 📜</h3>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={handleShowReviewClick}
          >
            Show Reviews
          </button>
        </div>
        <div className="bg-white rounded-lg shadow-md p-4">
          <h3 className="text-lg font-bold mb-2">Help ⁉️</h3>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={handleHelpClick}
          >
            Get Help
          </button>
        </div>
      </div>
    </div>
  );
}

export default Profile;
