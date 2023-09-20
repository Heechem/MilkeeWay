import React from "react";

const Booking = () => {
  return (
    <div id="bookings" className="m-w-[1140px] m-auto w-full p-4">
      <form className="w-full items-center lg:flex lg:justify-between">
        <div className="my-2 flex flex-col py-2">
          <label>Destination</label>
          <select className="rounded-md border p-2 md:w-full lg:w-[300px]">
            <option value="Mexico">Mexico</option>
            <option value="Maldives">Maldives</option>
            <option value="Greece">Greece</option>
            <option value="Belize">Belize</option>
            <option value="Thailand">Thailand</option>
          </select>
        </div>
        <div className="flex w-full ">
          <div className="flex w-full flex-col items-center lg:max-w-[550px]   lg:items-center lg:justify-center">
            <label>Check-In</label>
            <input className="rounded-md border p-2" type="date" />
          </div>

          <div className="flex w-full flex-col items-center lg:max-w-[550px]   lg:items-center lg:justify-center">
            <label>Check-Out</label>
            <input className="rounded-md border p-2" type="date" />
          </div>
        </div>

        <div className="my-2 flex w-full flex-col p-2">
          <label>Search</label>
          <button>Rates & Availabilities</button>
        </div>
      </form>
    </div>
  );
};

export default Booking;
