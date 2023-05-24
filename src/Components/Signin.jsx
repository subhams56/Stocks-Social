import { useState } from 'react';
import Logo from '../assets/logo.jpg'
import { Link , useNavigate} from 'react-router-dom';

function Signin() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('username', username);
    formData.append('password', password);

    const requestOptions = {
      method: 'POST',
      headers: {
        
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: new URLSearchParams(formData)
    };

    try {
      const response = await fetch('http://localhost:8000/account/login/', requestOptions);
      const data = await response.json();
      console.log(data);
      if (response.ok) {
        alert(`Login successful. Welcome back, ${username}!`);
        localStorage.setItem('username', username);
        localStorage.setItem('password', password);
        localStorage.setItem("token", data.token);
        localStorage.setItem("userid", data.userid);
        navigate('/account');
      } else {
        alert(`Login failed: ${data.message}`);
      }
    } catch (error) {
      console.log(error);
      alert('An error occurred while logging in. Please try again later.');
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
      <div className='flex justify-center items-center mt-4 '>
        <img className="h-[60px] w-[60px] rounded-full " src={Logo} alt="Logo" />
        <span className="font-montserrat font-semibold  text-3xl tracking-tight">Stocks Social.</span>
      </div>
        <div>
        <h1 className='text-center text-3xl  font-bold'> Hey Investor !</h1>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Sign in to your account
          </h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="username" className="sr-only">
                Username
              </label>
              <input
                id="username"
                name="username"
                type="text"
                autoComplete="username"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
              />
              <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                Remember me
              </label>
            </div>

            <div className="text-sm">
              <a href="#"className="font-medium text-indigo-600 hover:text-indigo-500">
Forgot your password?
</a>
</div>
</div>
<div>
        <button
          type="submit"
          className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          <span className="absolute left-0 inset-y-0 flex items-center pl-3">
            <svg
              className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M3.25 10c0-2.623 2.127-4.75 4.75-4.75s4.75 2.127 4.75 4.75-2.127 4.75-4.75 4.75S3.25 12.623 3.25 10zm7.76-3.22a1.25 1.25 0 10-1.76-1.768l-2.5 2.5a1.25 1.25 0 000 1.768l2.5 2.5a1.25 1.25 0 101.768-1.768L8.768 10l2.242-2.22z"
                clipRule="evenodd"
              />
              <path
                fillRule="evenodd"
                d="M10 0a10 10 0 100 20 10 10 0 000-20zM8.25 15.25a1.25 1.25 0 112.5 0 1.25 1.25 0 01-2.5 0z"
                clipRule="evenodd"
              />
            </svg>
          </span>
          Sign in
        </button>
        <p className="text-gray-600 text-sm flex flex-col justify-center items-center">
          Don't have an account yet?{' '}
          <Link to="/signup" className="text-blue-600 font-medium hover:underline">
            Sign up.
          </Link>
          <Link to="/homepage" className=" w-20 text-center mt-2 border border-blue-600 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-md">
            Home
          </Link>
        </p>
      </div>
    </form>
  </div>
</div>
);
}

export default Signin;
