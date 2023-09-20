import React from "react";

const FormFile = () => {
  return (
    <div id="contact" className="m-auto w-full max-w-[1140px] p-4 py-16">
      <h2 className="text-center text-gray-500 ">Send us a message</h2>
      <p className="py-2 text-center  text-gray-500">
        We are unique in the business
      </p>
      <div className="grid md:grid-cols-2">
        <img
          className="max-h-[300px] w-full object-cover p-2 md:h-full"
          src="https://images.unsplash.com/photo-1536683650733-795c018f043a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGJvdHRsZSUyMGluJTIwdGhlJTIwc2VhfGVufDB8fDB8fHww&auto=format&fit=crop&w=700&q=60"
          alt="/"
        />
        <form>
          <div className="grid grid-cols-2">
            <input
              className="m-2 border p-2"
              type="text"
              placeholder="First Name"
            />
            <input
              className="m-2 border p-2"
              type="text"
              placeholder="Last Name"
            />
            <input
              className="m-2 border p-2"
              type="email"
              placeholder="Email"
            />
            <input className="m-2 border p-2" type="tel" placeholder="Phone" />
            <input
              className="col-span-2 m-2 border p-2"
              type="text"
              placeholder="Address"
            />
            <textarea
              className="col-span-2 m-2 border p-2 shadow-md"
              cols="30"
              rows="10"
            ></textarea>
            <button className="col-span-2 m-2">submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormFile;
