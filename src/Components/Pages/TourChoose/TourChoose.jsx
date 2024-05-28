import React from "react";

const TourChoose = () => {
  return (
    <div>
        <div>
        <h3 className="text-5xl font-semibold my-5">
        We Are Exploring The Tour With Excitement
      </h3>
      <p className="w-96">Etiam ac tortor id purus commodo vulputate. Vestibulum porttitor erat felis and sed vehicula tortor malesuada gravida. Mauris volutpat enim quis pulv gont congue. Suspendisse ullamcorper</p>
        </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-3">
        <div>
          <img
            className="rounded-lg relative"
            src="https://i.ibb.co/7JbXJTV/istockphoto-1625279491-612x612.jpg"
            alt=""
          />
          <img
            class="hidden md:block absolute mt-[-240px] h-60 left-80 rounded-lg"
            src="https://i.ibb.co/XbgdcMJ/istockphoto-1255153213-612x612.jpg"
            alt="Device Image"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
          <div className="flex px-5 py-10 border hover:bg-pink-800 hover:text-white shadow-md">
            {/* <img src="" alt="" /> */}
            <a href="">icon</a>
            <p className="font-semibold text-xl ml-3">
              Worldwide Tour Coverage
            </p>
          </div>
          <div className="flex px-5 py-10 border hover:bg-pink-800 hover:text-white shadow-md">
            {/* <img src="" alt="" /> */}
            <a href="">icon</a>
            <p className="font-semibold text-xl ml-3">Local Guided Tours</p>
          </div>
          <div className="flex px-5 py-10 border hover:bg-pink-800 hover:text-white shadow-md">
            {/* <img src="" alt="" /> */}
            <a href="">icon</a>
            <p className="font-semibold text-xl ml-3">Fast Booking</p>
          </div>
          <div className="flex px-5 py-10 border hover:bg-pink-800 hover:text-white shadow-md">
            {/* <img src="" alt="" /> */}
            <a href="">icon</a>
            <p className="font-semibold text-xl ml-3">Competitive Pricing</p>
          </div>
          <div className="flex px-5 py-10 border hover:bg-pink-800 hover:text-white shadow-md">
            {/* <img src="" alt="" /> */}
            <a href="">icon</a>
            <p className="font-semibold text-xl ml-3">
              Ultimate Tour Flexibility
            </p>
          </div>
          <div className="flex px-5 py-10 border hover:bg-pink-800 hover:text-white shadow-md">
            {/* <img src="" alt="" /> */}
            <a href="">icon</a>
            <p className="font-semibold text-xl ml-3">Best Support 24/7</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TourChoose;
