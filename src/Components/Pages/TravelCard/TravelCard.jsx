import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import FlightIcon from "@mui/icons-material/Flight";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import DirectionsBoatFilledIcon from "@mui/icons-material/DirectionsBoatFilled";
import AirportShuttleIcon from "@mui/icons-material/AirportShuttle";
import DirectionsSubwayFilledIcon from "@mui/icons-material/DirectionsSubwayFilled";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import { Rating } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const TravelCard = () => {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className="text-center pt-7">
      <h3 className="text-5xl font-semibold my-5">
        Ultimate Travel Experience
      </h3>
      <Box sx={{ width: "100%", typography: "body1" }}>
        <TabContext value={value}>
          <Box
            sx={{
              borderBottom: 1,
              borderColor: "divider",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <TabList onChange={handleChange} aria-label="lab API tabs example">
              <Tab sx={{fontSize:2}} label="Tour Package" value="1" />
              <Tab label="Hotel" value="2" />
              <Tab label="Transports" value="3" />
            </TabList>
          </Box>
          <TabPanel value="1">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 p-2 md:mx-20">
              <div className="card card-compact w-full bg-base-100 shadow p-4">
                <figure>
                  <img
                    src="https://miro.medium.com/v2/resize:fit:720/format:webp/1*SGstW30w3jQpF2Wc5Qmcnw.jpeg"
                    alt=""
                  />
                </figure>
                <div className="card-body">
                  <h2 className="text-xl font-semibold">
                    Discover Serenity, Exploration, And Enlightenment.
                  </h2>
                  <div class="scroll-container">
                    <p class="scroll-text">
                      SANTI MARTIN <ArrowRightAltIcon /> KHAGRACHORI{" "}
                      <ArrowRightAltIcon /> BANDARBAN
                    </p>
                  </div>
                  <div className="divider"></div>
                  <div className="flex justify-between items-center text-sm ">
                    <div>
                      <p>Starting From:</p>
                      <p className="text-2xl font-semibold">$340</p>
                      <p>TAXES INCL/PERS</p>
                    </div>
                    <div>
                    <button className="bg-red-400 text-white  rounded px-4 py-2">
                      Book A Trip <FlightIcon />
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card card-compact w-full bg-base-100 shadow p-4">
                <figure>
                  <img
                    src="https://img.jakpost.net/c/2016/09/06/2016_09_06_11313_1473161249._large.jpg"
                    alt=""
                  />
                </figure>
                <div className="card-body">
                  <h2 className="text-xl font-semibold">
                    Embracing City Lights, Landm, And Iconic Culture.
                  </h2>
                  <div class="scroll-container">
                    <p class="scroll-text">
                      SANTI MARTIN <ArrowRightAltIcon /> KHAGRACHORI{" "}
                      <ArrowRightAltIcon /> BANDARBAN
                    </p>
                  </div>
                  <div className="divider"></div>
                  <div className="flex justify-between items-center text-sm ">
                    <div>
                      <p>Starting From:</p>
                      <p className="text-2xl font-semibold">$340</p>
                      <p>TAXES INCL/PERS</p>
                    </div>
                    <div>
                    <button className="bg-red-400 text-white  rounded px-4 py-2">
                      Book A Trip <FlightIcon />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card card-compact w-full bg-base-100 shadow p-4">
                <figure>
                  <img src="https://i.ibb.co/5FtxMRS/e0.jpg" alt="" />
                </figure>
                <div className="card-body">
                  <h2 className="text-xl font-semibold">
                    Discover Serenity, Exploration, And Enlightenment.
                  </h2>
                  <div class="scroll-container">
                    <p class="scroll-text">
                      SANTI MARTIN <ArrowRightAltIcon /> KHAGRACHORI{" "}
                      <ArrowRightAltIcon /> BANDARBAN
                    </p>
                  </div>
                  <div className="divider"></div>
                  <div className="flex justify-between items-center text-sm ">
                    <div>
                      <p>Starting From:</p>
                      <p className="text-2xl font-semibold">$340</p>
                      <p>TAXES INCL/PERS</p>
                    </div>
                    <div>
                    <button className="bg-red-400 text-white  rounded px-4 py-2">
                      Book A Trip <FlightIcon />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card card-compact w-full bg-base-100 shadow p-4">
                <figure>
                  <img
                    src="https://img.jakpost.net/c/2016/09/06/2016_09_06_11313_1473161249._large.jpg"
                    alt=""
                  />
                </figure>
                <div className="card-body">
                  <h2 className="text-xl font-semibold">
                    Embracing City Lights, Landm, And Iconic Culture.
                  </h2>
                  <div class="scroll-container">
                    <p class="scroll-text">
                      SANTI MARTIN <ArrowRightAltIcon /> KHAGRACHORI{" "}
                      <ArrowRightAltIcon /> BANDARBAN
                    </p>
                  </div>
                  <div className="divider"></div>
                  <div className="flex justify-between items-center text-sm ">
                    <div>
                      <p>Starting From:</p>
                      <p className="text-2xl font-semibold">$340</p>
                      <p>TAXES INCL/PERS</p>
                    </div>
                    <div>
                    <button className="bg-red-400 text-white  rounded px-4 py-2">
                      Book A Trip <FlightIcon />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card card-compact w-full bg-base-100 shadow p-4">
                <figure>
                  <img src="https://i.ibb.co/5FtxMRS/e0.jpg" alt="" />
                </figure>
                <div className="card-body">
                  <h2 className="text-xl font-semibold">
                    Discover Serenity, Exploration, And Enlightenment.
                  </h2>
                  <div class="scroll-container">
                    <p class="scroll-text">
                      SANTI MARTIN <ArrowRightAltIcon /> KHAGRACHORI{" "}
                      <ArrowRightAltIcon /> BANDARBAN
                    </p>
                  </div>
                  <div className="divider"></div>
                  <div className="flex justify-between items-center text-sm ">
                    <div>
                      <p>Starting From:</p>
                      <p className="text-2xl font-semibold">$340</p>
                      <p>TAXES INCL/PERS</p>
                    </div>
                    <div>
                    <button className="bg-red-400 text-white  rounded px-4 py-2">
                      Book A Trip <FlightIcon />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card card-compact w-full bg-base-100 shadow p-4">
                <figure>
                  <img
                    src="https://img.jakpost.net/c/2016/09/06/2016_09_06_11313_1473161249._large.jpg"
                    alt=""
                  />
                </figure>
                <div className="card-body">
                  <h2 className="text-xl font-semibold">
                    Embracing City Lights, Landm, And Iconic Culture.
                  </h2>
                  <div class="scroll-container">
                    <p class="scroll-text">
                      SANTI MARTIN <ArrowRightAltIcon /> KHAGRACHORI{" "}
                      <ArrowRightAltIcon /> BANDARBAN
                    </p>
                  </div>
                  <div className="divider"></div>
                  <div className="flex justify-between items-center text-sm ">
                    <div>
                      <p>Starting From:</p>
                      <p className="text-2xl font-semibold">$340</p>
                      <p>TAXES INCL/PERS</p>
                    </div>
                    <div>
                      <button className="bg-red-400 text-white  rounded px-4 py-2">
                      Book A Trip <FlightIcon />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TabPanel>
          <TabPanel value="2">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 p-2 md:mx-10">
              <div className="card card-compact w-full bg-base-100 shadow-xl ">
                <figure>
                  <img
                    src="https://miro.medium.com/v2/resize:fit:720/format:webp/1*SGstW30w3jQpF2Wc5Qmcnw.jpeg"
                    alt=""
                  />
                </figure>
                <div className="card-body">
                  <h2 className="text-xl font-semibold">
                    Discover Serenity, Exploration, And Enlightenment.
                  </h2>
                  <div class="scroll-container">
                    <p class="scroll-text">
                      SANTI MARTIN <ArrowRightAltIcon /> KHAGRACHORI{" "}
                      <ArrowRightAltIcon /> BANDARBAN
                    </p>
                  </div>
                  <div className="divider"></div>
                  <div className="flex justify-between items-center text-sm ">
                    <div>
                      <p>Starting From:</p>
                      <p className="text-2xl font-semibold">$340</p>
                      <p>TAXES INCL/PERS</p>
                    </div>
                    <div>
                    <button className="bg-red-400 text-white  rounded px-4 py-2">
                      Book A Trip <FlightIcon />
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card card-compact w-full bg-base-100 shadow-xl ">
                <figure>
                  <img
                    src="https://img.jakpost.net/c/2016/09/06/2016_09_06_11313_1473161249._large.jpg"
                    alt=""
                  />
                </figure>
                <div className="card-body">
                  <h2 className="text-xl font-semibold">
                    Embracing City Lights, Landm, And Iconic Culture.
                  </h2>
                  <div class="scroll-container">
                    <p class="scroll-text">
                      SANTI MARTIN <ArrowRightAltIcon /> KHAGRACHORI{" "}
                      <ArrowRightAltIcon /> BANDARBAN
                    </p>
                  </div>
                  <div className="divider"></div>
                  <div className="flex justify-between items-center text-sm ">
                    <div>
                      <p>Starting From:</p>
                      <p className="text-2xl font-semibold">$340</p>
                      <p>TAXES INCL/PERS</p>
                    </div>
                    <div>
                    <button className="bg-red-400 text-white  rounded px-4 py-2">
                      Book A Trip <FlightIcon />
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card card-compact w-full bg-base-100 shadow-xl ">
                <figure>
                  <img src="https://i.ibb.co/5FtxMRS/e0.jpg" alt="" />
                </figure>
                <div className="card-body">
                  <h2 className="text-xl font-semibold">
                    Discover Serenity, Exploration, And Enlightenment.
                  </h2>
                  <div class="scroll-container">
                    <p class="scroll-text">
                      SANTI MARTIN <ArrowRightAltIcon /> KHAGRACHORI{" "}
                      <ArrowRightAltIcon /> BANDARBAN
                    </p>
                  </div>
                  <div className="divider"></div>
                  <div className="flex justify-between items-center text-sm ">
                    <div>
                      <p>Starting From:</p>
                      <p className="text-2xl font-semibold">$340</p>
                      <p>TAXES INCL/PERS</p>
                    </div>
                    <div>
                     <button className="bg-red-400 text-white  rounded px-4 py-2">
                      Book A Trip <FlightIcon />
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card card-compact w-full bg-base-100 shadow-xl ">
                <figure>
                  <img
                    src="https://img.jakpost.net/c/2016/09/06/2016_09_06_11313_1473161249._large.jpg"
                    alt=""
                  />
                </figure>
                <div className="card-body">
                  <h2 className="text-xl font-semibold">
                    Embracing City Lights, Landm, And Iconic Culture.
                  </h2>
                  <div class="scroll-container">
                    <p class="scroll-text">
                      SANTI MARTIN <ArrowRightAltIcon /> KHAGRACHORI{" "}
                      <ArrowRightAltIcon /> BANDARBAN
                    </p>
                  </div>
                  <div className="divider"></div>
                  <div className="flex justify-between items-center text-sm ">
                    <div>
                      <p>Starting From:</p>
                      <p className="text-2xl font-semibold">$340</p>
                      <p>TAXES INCL/PERS</p>
                    </div>
                    <div>
                     <button className="bg-red-400 text-white  rounded px-4 py-2">
                      Book A Trip <FlightIcon />
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card card-compact w-full bg-base-100 shadow-xl ">
                <figure>
                  <img src="https://i.ibb.co/5FtxMRS/e0.jpg" alt="" />
                </figure>
                <div className="card-body">
                  <h2 className="text-xl font-semibold">
                    Discover Serenity, Exploration, And Enlightenment.
                  </h2>
                  <div class="scroll-container">
                    <p class="scroll-text">
                      SANTI MARTIN <ArrowRightAltIcon /> KHAGRACHORI{" "}
                      <ArrowRightAltIcon /> BANDARBAN
                    </p>
                  </div>
                  <div className="divider"></div>
                  <div className="flex justify-between items-center text-sm ">
                    <div>
                      <p>Starting From:</p>
                      <p className="text-2xl font-semibold">$340</p>
                      <p>TAXES INCL/PERS</p>
                    </div>
                    <div>
                      <button className="bg-red-400 text-white  rounded px-4 py-2">
                      Book A Trip <FlightIcon />
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card card-compact w-full bg-base-100 shadow-xl ">
                <figure>
                  <img
                    src="https://img.jakpost.net/c/2016/09/06/2016_09_06_11313_1473161249._large.jpg"
                    alt=""
                  />
                </figure>
                <div className="card-body">
                  <h2 className="text-xl font-semibold">
                    Embracing City Lights, Landm, And Iconic Culture.
                  </h2>
                  <div class="scroll-container">
                    <p class="scroll-text">
                      SANTI MARTIN <ArrowRightAltIcon /> KHAGRACHORI{" "}
                      <ArrowRightAltIcon /> BANDARBAN
                    </p>
                  </div>
                  <div className="divider"></div>
                  <div className="flex justify-between items-center text-sm ">
                    <div>
                      <p>Starting From:</p>
                      <p className="text-2xl font-semibold">$340</p>
                      <p>TAXES INCL/PERS</p>
                    </div>
                    <div>
                     <button className="bg-red-400 text-white  rounded px-4 py-2">
                      Book A Trip <FlightIcon />
                      </button>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </TabPanel>
          <TabPanel value="3">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 p-2 md:mx-20">
              <div className="card card-compact w-full bg-base-100 shadow-xl p-4">
                <figure>
                  <img
                    src="https://miro.medium.com/v2/resize:fit:720/format:webp/1*SGstW30w3jQpF2Wc5Qmcnw.jpeg"
                    alt=""
                  />
                </figure>
                <div className="card-body">
                  <h2 className="text-xl font-semibold">
                    Athens To Istanbul, Journey Through History’s Heart
                  </h2>
                  <div class="">
                    <p class="">Available Transport :</p>
                    <div className="flex mt-3">
                      <p>
                        <LocalShippingIcon />
                      </p>
                      <p>
                        <DirectionsBoatFilledIcon />
                      </p>
                      <p>
                        <AirportShuttleIcon />
                      </p>
                      <p>
                        <DirectionsSubwayFilledIcon />
                      </p>
                    </div>
                  </div>
                  <div className="divider"></div>
                  <div className="flex justify-between items-center text-sm ">
                    <div>
                     
                      <button className="bg-red-400 text-white  rounded px-4 py-3">
                      View Details
                      </button>
                    </div>
                    <div>
                      <Rating
                        name="half-rating"
                        defaultValue={2.5}
                        precision={0.5}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="card card-compact w-full bg-base-100 shadow-xl p-4">
                <figure>
                  <img
                    src="https://miro.medium.com/v2/resize:fit:720/format:webp/1*SGstW30w3jQpF2Wc5Qmcnw.jpeg"
                    alt=""
                  />
                </figure>
                <div className="card-body">
                  <h2 className="text-xl font-semibold">
                    Athens To Istanbul, Journey Through History’s Heart
                  </h2>
                  <div class="">
                    <p class="">Available Transport :</p>
                    <div className="flex mt-3">
                      <p>
                        <LocalShippingIcon />
                      </p>
                      <p>
                        <DirectionsBoatFilledIcon />
                      </p>
                      <p>
                        <AirportShuttleIcon />
                      </p>
                      <p>
                        <DirectionsSubwayFilledIcon />
                      </p>
                    </div>
                  </div>
                  <div className="divider"></div>
                  <div className="flex justify-between items-center text-sm ">
                    <div>
                     <button className="bg-red-400 text-white  rounded px-4 py-3">
                      View Details
                      </button>
                    </div>
                    <div>
                      <Rating
                        name="half-rating"
                        defaultValue={2.5}
                        precision={0.5}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="card card-compact w-full bg-base-100 shadow-xl p-4">
                <figure>
                  <img
                    src="https://miro.medium.com/v2/resize:fit:720/format:webp/1*SGstW30w3jQpF2Wc5Qmcnw.jpeg"
                    alt=""
                  />
                </figure>
                <div className="card-body">
                  <h2 className="text-xl font-semibold">
                    Athens To Istanbul, Journey Through History’s Heart
                  </h2>
                  <div class="">
                    <p class="">Available Transport :</p>
                    <div className="flex mt-3">
                      <p>
                        <LocalShippingIcon />
                      </p>
                      <p>
                        <DirectionsBoatFilledIcon />
                      </p>
                      <p>
                        <AirportShuttleIcon />
                      </p>
                      <p>
                        <DirectionsSubwayFilledIcon />
                      </p>
                    </div>
                  </div>
                  <div className="divider"></div>
                  <div className="flex justify-between items-center text-sm ">
                    <div>
                    <button className="bg-red-400 text-white  rounded px-4 py-3">
                      View Details
                      </button>
                    </div>
                    <div>
                      <Rating
                        name="half-rating"
                        defaultValue={2.5}
                        precision={0.5}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="card card-compact w-full bg-base-100 shadow-xl p-4">
                <figure>
                  <img
                    src="https://miro.medium.com/v2/resize:fit:720/format:webp/1*SGstW30w3jQpF2Wc5Qmcnw.jpeg"
                    alt=""
                  />
                </figure>
                <div className="card-body">
                  <h2 className="text-xl font-semibold">
                    Athens To Istanbul, Journey Through History’s Heart
                  </h2>
                  <div class="">
                    <p class="">Available Transport :</p>
                    <div className="flex mt-3">
                      <p>
                        <LocalShippingIcon />
                      </p>
                      <p>
                        <DirectionsBoatFilledIcon />
                      </p>
                      <p>
                        <AirportShuttleIcon />
                      </p>
                      <p>
                        <DirectionsSubwayFilledIcon />
                      </p>
                    </div>
                  </div>
                  <div className="divider"></div>
                  <div className="flex justify-between items-center text-sm ">
                    <div>
                    <button className="bg-red-400 text-white  rounded px-4 py-3">
                      View Details
                      </button>
                    </div>
                    <div>
                      <Rating
                        name="half-rating"
                        defaultValue={2.5}
                        precision={0.5}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="card card-compact w-full bg-base-100 shadow-xl p-4">
                <figure>
                  <img
                    src="https://miro.medium.com/v2/resize:fit:720/format:webp/1*SGstW30w3jQpF2Wc5Qmcnw.jpeg"
                    alt=""
                  />
                </figure>
                <div className="card-body">
                  <h2 className="text-xl font-semibold">
                    Athens To Istanbul, Journey Through History’s Heart
                  </h2>
                  <div class="">
                    <p class="">Available Transport :</p>
                    <div className="flex mt-3">
                      <p>
                        <LocalShippingIcon />
                      </p>
                      <p>
                        <DirectionsBoatFilledIcon />
                      </p>
                      <p>
                        <AirportShuttleIcon />
                      </p>
                      <p>
                        <DirectionsSubwayFilledIcon />
                      </p>
                    </div>
                  </div>
                  <div className="divider"></div>
                  <div className="flex justify-between items-center text-sm ">
                    <div>
                    <button className="bg-red-400 text-white  rounded px-4 py-3">
                      View Details
                      </button>
                    </div>
                    <div>
                      <Rating
                        name="half-rating"
                        defaultValue={2.5}
                        precision={0.5}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="card card-compact w-full bg-base-100 shadow-xl p-4">
                <figure>
                  <img
                    src="https://miro.medium.com/v2/resize:fit:720/format:webp/1*SGstW30w3jQpF2Wc5Qmcnw.jpeg"
                    alt=""
                  />
                </figure>
                <div className="card-body">
                  <h2 className="text-xl font-semibold">
                    Athens To Istanbul, Journey Through History’s Heart
                  </h2>
                  <div class="">
                    <p class="">Available Transport :</p>
                    <div className="flex mt-3">
                      <p>
                        <LocalShippingIcon />
                      </p>
                      <p>
                        <DirectionsBoatFilledIcon />
                      </p>
                      <p>
                        <AirportShuttleIcon />
                      </p>
                      <p>
                        <DirectionsSubwayFilledIcon />
                      </p>
                    </div>
                  </div>
                  <div className="divider"></div>
                  <div className="flex justify-between items-center text-sm ">
                    <div>
                    <button className="bg-red-400 text-white  rounded px-4 py-3">
                      View Details
                      </button>
                    </div>
                    <div>
                      <Rating
                        name="half-rating"
                        defaultValue={2.5}
                        precision={0.5}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TabPanel>
        </TabContext>
      </Box>
    </div>
  );
};

export default TravelCard;
