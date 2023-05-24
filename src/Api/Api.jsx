import React, { useState, useEffect } from 'react';

function Api(props) {
  const [users, setUsers] = useState('');

  useEffect(() => {
    fetch('https://dummyjson.com/users/1')
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setUsers(data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, []);

  console.log(users)

  return (
    <div className="bg-white p-4 rounded-lg shadow-lg">
    <div className="flex items-center mb-4">
      <img
        src={users.image}
       
        className="w-16 h-16 rounded-full border-2 border-red-500 mr-4 object-cover"
      />
      <div>
        <h2 className="text-lg font-semibold">{users.firstName} {users.lastName}</h2>
        <p className="text-gray-600">{users.email}</p>
      </div>
    </div>
    <div>
      <h3 className="text-gray-800 font-medium mb-2">Phone</h3>
      <p className="text-gray-600">{users.phone}</p>
    </div>
  </div>
  );
}

export default Api;
