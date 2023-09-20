import React from "react";

const Activities = () => {
  return (
    <div className=" m-auto mt-[-75px] max-w-[1140px] md:flex">
      <div className="relative p-4">
        <h3 className="traslate-y-[-50] absolute left-[50%] top-[50%] z-10 translate-x-[-50%] text-2xl font-bold  text-gray-100">
          Resorts
        </h3>
        <img
          className="relative h-full w-full border-8 object-cover shadow-lg"
          src="https://plus.unsplash.com/premium_photo-1682913629540-3857602b540c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cmVzb3J0c3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60"
          alt="/"
        />
      </div>

      <div className="relative p-4">
        <h3 className="traslate-y-[-50] absolute left-[50%] top-[50%] z-10 translate-x-[-50%] text-2xl font-bold text-gray-100">
          Excursion
        </h3>
        <img
          className="relative h-full w-full border-8 object-cover shadow-lg"
          src="https://images.unsplash.com/photo-1560251180-1a0b93970379?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZXhjdXJzaW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=700&q=60"
          alt="/"
        />
      </div>

      <div className="relative p-4">
        <h3 className="traslate-y-[-50] absolute left-[50%] top-[50%] z-10 translate-x-[-50%] text-2xl font-bold text-gray-100">
          Cruise Ship
        </h3>
        <img
          className="relative h-full w-full border-8 object-cover shadow-lg"
          src="https://images.unsplash.com/photo-1599640842225-85d111c60e6b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y3J1aXNlJTIwc2hpcHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60"
          alt="/"
        />
      </div>
    </div>
  );
};

export default Activities;
