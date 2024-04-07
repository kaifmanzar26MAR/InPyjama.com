import React, { useState, useEffect } from "react";
import axios from "axios";
import courses from "../api/TestApi";
import { Link } from "react-router-dom";
const Home = () => {
  const [location, setLocation] = useState(null);
  const [country, setCountry] = useState(null);
  const [error, setError] = useState(null);
  const countryData = {
    IT: 100,
    IN: 75,
    GB: 90,
    FR: 80,
    DE: 85,
    // Add more countries as needed
  };

  useEffect(() => {
    // Function to get the current location

    window.scrollTo({
      top:0,
    })
    const getLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          async (position) => {
            const { latitude, longitude } = position.coords;

            try {
              // Use CORS proxy to bypass CORS restriction
              // const response = await axios.get(
              //   `https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=f9a38f4828df69b1a1c077f88edb0d56`
              // );

              console.log(latitude, longitude);

              const response = await fetch(
                `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=f9a38f4828df69b1a1c077f88edb0d56`
              );
              const resJason = await response.json();
              console.log(resJason);
              // Extract country name from the API response
              const countryName = resJason.sys.country;
              setCountry(countryName);
            } catch (error) {
              setError("Error fetching country details");
            }
          },
          (error) => {
            setError(error.message);
          }
        );
      } else {
        setError("Geolocation is not supported by this browser.");
      }
    };

    getLocation();
  }, []);

  return (
    <div>
      <div id="cara" className="w-full  fixed top-0 z-0">
        <img
          src="./cara/comp.jpg"
          alt="cara image"
          className="w-full h-screen object-cover object-center"
        />
      </div>

      <div className="w-full h-[40vh] md:h-[70vh] lg:h-screen pt-16 z-10 relative flex items-center justify-center bg-gradient-to-t from-[#12111137] via-transparent to-[#12111137] ">
        <div className="w-[95%] lg:w-[80%] h-[80%] backdrop-blur-md  shadow-white shadow-inner bg-white bg-opacity-15 rounded-xl p-1 lg:p-5 flex flex-col justify-center items-center">
          <p className="text-xl lg:text-5xl  font-bold uppercase text-center">
            C-pointers almost killed my career. Please save yours!
          </p>
          <p className="text-sm lg:text-xl uppercase text-center px-5 lg:py-5 py-1 font-semibold  lg:text-yellow-600 text-red-600 ">
            I could have saved four years of my career had I understood C
            pointers sooner!
          </p>
          <div className="w-fit p-2 text-sm lg:text-xl bg-yellow-400  border-white border-2 text-black rounded-md font-semibold cursor-pointer hover:bg-yellow-500">
            Explore Now{" "}
          </div>
        </div>
      </div>

      <div className="w-full p-3 lg:p-10 z-10 relative flex flex-col items-center justify-center bg-[#dddcd6] ">
        <div className="w-full  h-fit  pb-8">
          <h1 className="lg:text-3xl text-2xl">Our Courses</h1>
          <div className="carousel carousel-center w-full p-2 lg:p-4 space-x-4 rounded-box">
            {courses.map((e) => {
              return (
                <div className="carousel-item">
                  <div class="card lg:w-96 w-72 h-[35vh] lg:h-full  bg-base-100  shadow-xl">
                    <figure>
                      <img src={e.template} alt="phone template" />
                    </figure>
                    <div class="card-body lg:p-8 p-4">
                      <h2 class="card-title">
                        <span className='truncate'>{e.name}</span>
                        <div class="badge badge-secondary">NEW</div>
                      </h2>
                      <p className="truncate">{e.title}</p>

                      <div class="card-actions justify-start flex  lg:pt-8">
                        <Link to={`/courseview/${e.id}`}>
                          {" "}
                          <div class="badge badge-outline p-5 bg-red-500 font-semibold text-white hover:bg-red-600 cursor-pointer">
                            View Details
                          </div>
                        </Link>
                        <div class="badge badge-outline p-5 font-semibold hover:bg-gray-200 cursor-pointer">
                          Buy @
                          {e.prices[country]
                            ? e.prices[country].symbol
                            : e.default_price.symbol}
                          <span>
                            {e.prices[country]
                              ? e.prices[country].mrp
                              : e.default_price.mrp}
                            /-
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="w-full  overflow-hidden relative">
          <div className="w-[85%] lg:h-[80%] h-full bg-gradient-to-r from-blue-500 to-green-500 rounded-3xl absolute lg:top-[40%] top-[10%] left-[8%] rotate-12"></div>

          <h1 className="lg:text-3xl text-2xl">
            Meet Our Educators: Get to Know Our Dedicated Teaching Team
          </h1>

          <div className="w-full p-5 flex lg:flex-row flex-col gap-10 items-center justify-center">
            <div className="card lg:w-96 w-full bg-base-100 shadow-inner shadow-white bg-opacity-15 backdrop-blur-sm">
              <figure className="px-10 pt-10 ">
                <img
                  src="/piyush.png"
                  alt="Shoes"
                  className="rounded-xl w-52 h-52 bg-yellow-400"
                />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title font-bold">Piyush Itankar</h2>
                <p className="font-semibold">
                  Embedded Systems @Google | inpyjama.com
                </p>
                <div className="card-actions">
                  <button className="btn btn-primary">View LinkedIn</button>
                </div>
              </div>
            </div>

            <div className="card lg:w-96 w-full bg-base-100 shadow-inner shadow-white bg-opacity-15 backdrop-blur-sm">
              <figure className="px-10 pt-10">
                <img
                  src="https://media.licdn.com/dms/image/C5603AQHrp7zzAU6q0Q/profile-displayphoto-shrink_800_800/0/1626168542490?e=1715817600&v=beta&t=qS28UaToqkqPIhx66Cz2bXncfUXo4mROvvUxCNSuefc"
                  alt="Shoes"
                  className="rounded-xl w-52 h-52"
                />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title font-bold">Washim Akram</h2>
                <p className="font-semibold">
                  Embedded Systems @Google | inpyjama.com
                </p>
                <div className="card-actions">
                  <button className="btn btn-primary">View LinkedIn</button>
                </div>
              </div>
            </div>

            <div className="card lg:w-96 w-full bg-base-100 shadow-inner shadow-white bg-opacity-15 backdrop-blur-sm">
              <figure className="px-10 pt-10">
                <img
                  src="https://media.licdn.com/dms/image/D5603AQHp2CcEsN6rSg/profile-displayphoto-shrink_800_800/0/1704795145081?e=1715817600&v=beta&t=dIBOKR-UmjErMuIcPVj_CWr3CYvzW9xAf5JDQfhiKWo"
                  alt="profile"
                  className="rounded-xl w-52 h-52"
                />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title font-bold">Md Kaif Manzar</h2>
                <p className="font-semibold">
                  SDE-1 Intern @Made2Automate | inpyjama.com
                </p>
                <div className="card-actions">
                  <button className="btn btn-primary">View LinkedIn</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
