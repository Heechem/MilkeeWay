import React from "react";

const Hero = () => {
  return (
    <div className="h-[90vh] w-full">
      <img
        className="h-full w-full object-cover"
        src="https://images.unsplash.com/photo-1437719417032-8595fd9e9dc6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
        alt="/"
      />
      <div className="m-auto max-w-[1140px]">
        <div className="md:-[50%] absolute top-[40%] flex h-full w-full max-w-[600px] flex-col text-white">
          <h1 className="text-4xl font-bold text-gray-300">
            Find your special Trip
          </h1>
          <h2 className="py-4 text-4xl italic">With milkeeWay</h2>
          <p>
            Embark on unforgettable journeys, discover breathtaking
            destinations, and create lasting memories with our travel
            experiences. Your adventure awaits!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
