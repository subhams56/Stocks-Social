import React from "react";

export const Avatar2 = () => {
  return (
    <>
      <div className="isolate flex -space-x-2">
        <img
          className="relative z-30 inline-block h-10 w-10 rounded-full ring-2 ring-white "
          src="https://images.pexels.com/photos/804009/pexels-photo-804009.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Avatar 1"
        />
        <img
          className="relative z-20 inline-block h-10 w-10 rounded-full ring-2 ring-white "
          src="https://images.pexels.com/photos/1270076/pexels-photo-1270076.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="Avatar 2"
        />
        <img
          className="relative z-10 inline-block h-10 w-10 rounded-full ring-2 ring-white "
          src="https://images.pexels.com/photos/428328/pexels-photo-428328.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Avatar 3"
        />
        <img
          className="relative z-0 inline-block h-10 w-10 rounded-full ring-2 ring-white "
          src="https://images.pexels.com/photos/2380794/pexels-photo-2380794.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="Avatar 4"
        />
      </div>
    </>
  );
};

Avatar2.displayName = "Avatar2";
