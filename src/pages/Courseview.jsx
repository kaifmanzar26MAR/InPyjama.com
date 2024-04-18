import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import courses from "../api/TestApi.js";
const Courseview = () => {
  const { id } = useParams();
  const [course, setCourse] = useState({
    template: "",
    time_laps: "",
    category: "",
    stack: "",
    language: "",
    default_price: "",
    prices: "",
    description: "",
    title: "",
    name: "",
  });
  const [country, setCountry] = useState(null);
  console.log(id);

  useEffect(() => {
    // window.scrollTo({top:0})
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
    const data = courses.filter((e) => {
      if (e.id === Number(id)) {
        return e;
      }
    });
    console.log(data);
    setCourse(data[0]);
  }, [id]);

  const {
    template,
    time_laps,
    category,
    stack,
    language,
    default_price,
    prices,
    description,
    title,
    name,
    demo_video,
  } = course;
  return (
    <div className="">
      {/* heror section */}
      <div className="hero_view h-[50vh] lg:h-screen w-full pt-14 sm-md:h-[29vh] bg-gradient-to-t from-yellow-500 via-yellow-300 to-yellow-500 relative flex ">
        <div className="w-1/2 sm-md:w-[56%] flex flex-col gap-y-2 px-4 lg:px-8 items-start justify-center">
          <div className="w-full">
            <p className="sm-md:text-xl text-2xl lg:text-4xl font-bold sm-md:truncate w-full">
              let's Learn With us <br className="hidden sm-md:block" />
              {name}
            </p>
            <p className="font-semibold text-red-600 sm-md:text-sm lg:text-2xl sm-md:truncate w-full">
              Course: {title}
            </p>
            <p className="text-gray-700 hidden lg:block w-96 truncate overflow-hidden">
              {description}
            </p>
          </div>
          <button className="btn text-white bg-red-500 hover:bg-red-600 w-fit ">
            Buy @_
            {prices
              ? prices[country]
                ? prices[country].symbol + "" + prices[country].mrp
                : default_price.symbol + "" + default_price.mrp
              : ""}
          </button>
        </div>

        <div className="w-1/2 sm-md:w-5/6 h-full">
          <img
            src="/piyush.png"
            alt="itankar"
            className="w-full h-full  object-contain "
          />
        </div>
      </div>

      <div className="w-full p-4 lg:p-8 ">
        <p className="p-2 font-bold text-3xl text-red-600 w-full">
          Course Demo Video
        </p>
        {demo_video ? (
          <iframe
            src={demo_video}
            title="Section 1: 1. What to Imagine? | (Preview) C Pointers: Secrets every Embedded Engineers MUST know!"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
            className="lg:w-[70%] lg:h-[70vh] w-full h-[55vw]"
          ></iframe>
        ) : (
          <img src={template} alt="template" />
        )}
      </div>

      {/* Courese Time Laps */}
      <div className="w-full p-4 lg:p-8">
        <h1 className="text-3xl font-bold text-gray-900">Time Stamps</h1>
        {Object.keys(time_laps).map((e) => {
          return (
            <div>
              <p className="font-semibold p-2 w-full lg:w-1/2 bg-gray-200 rounded-sm mt-2">
                <span className="text-blue-900">{e}</span> :{" "}
                <span className="font-bold">{time_laps[e]}</span>
              </p>
            </div>
          );
        })}
      </div>

      {/* course description */}
      <div className="w-full lg:w-1/2 p-4 lg:p-8 text-lg">
        <h1 className="text-3xl font-bold text-gray-900">Course curriculum</h1>

        <div className="w-full flex flex-col items-center justify-center border-2 rounded-lg overflow-hidden">
          <div className="w-full p-5 bg-gray-200 font-semibold cursor-text">
            78 Sessions • 59 Lessons / Assignments • 5h 21m total length
          </div>

          <div className="w-full p-5 flex flex-col justify-center items-center">
            <h1 className="w-full ">MODULE 1</h1>
            <h1 className="w-full  font-semibold text-2xl">Mental Models, Motivation and Reasoning about pointers</h1>
            <div className="p-5 w-full">
              <p><i>@ </i>What to Imagine? </p>
              <p><i>@ </i>Assignment - 1 </p>
              <p><i>@ </i>What is a pointer?</p>
              <p><i>@ </i>Assignment - 2</p>
              <p><i>@ </i>Why pointers? </p>
              <p><i>@ </i>Assignment - 3</p>
            </div>
            <hr className="w-full p-1" />
            <h1 className="w-full ">MODULE 2</h1>
            <h1 className="w-full  font-semibold text-2xl">Pointers: Syntax and Code</h1>
            <div className="p-5 w-full">
              <p><i>@ </i>Environment Setup </p>
              <p><i>@ </i>Declaring/Defining a Pointer </p>
              <p><i>@ </i> Assignment - 4</p>
              <p><i>@ </i>Pointer Variable and Address</p>
              <p><i>@ </i>* and & in relation to pointer variable</p>
              <p><i>@ </i>Declaration and Definition</p>
              <p><i>@ </i>Assignment - 5</p>
            </div>
            <hr className="w-full p-1" />
            <h1 className="w-full ">MODULE 3</h1>
            <h1 className="w-full  font-semibold text-2xl">Multi-level Pointers</h1>
            <div className="p-5 w-full">
              <p><i>@ </i>Use of * and &</p>
              <p><i>@ </i>Assignment - 6 </p>
              <p><i>@ </i> Array and Pointers - Similarity and differences</p>
              <p><i>@ </i> Assignment - 7</p>
              <p><i>@ </i>Many *s and Many &s</p>
              <p><i>@ </i>Assignment - 8</p>
              <p><i>@ </i>pointer to pointer</p>
              <p><i>@ </i>Assignment - 9</p>
              <p><i>@ </i>Array of pointers</p>
              <p><i>@ </i>Assignment - 10</p>
              <p><i>@ </i>Different types of Pointers</p>
              <p><i>@ </i>Assignment - 11</p>
            </div>


          </div>
        </div>

        <div className="w-full border-2 mt-2 p-5 rounded-lg ">
        <h1 className="font-semibold text-2xl"><span className="text-red-800">C Pointers:</span> Secrets every Embedded Engineer MUST know!</h1>
          <p>Instucted by <a href="#" className="font-semibold underline">Piyush Itankar</a></p>

          <p>@ Easy payment method</p>
          <p>@ Course access for 90 days</p>
          <p>@ Learn Anytime, Anywhere</p>
          <p>@ Hurry Up!</p>

          <div className="btn w-full  bg-red-600  text-2xl hover:bg-red-700 text-white h-16 my-2"> Register Today</div>
        </div>


      </div>

      {/* Related courses */}
      <div className="w-full  h-fit lg:pb-0 pb-8 p-4">
        <h1 className="lg:text-3xl text-2xl font-bold">
          Other related Courses
        </h1>
        <div className="carousel carousel-center w-full p-4 space-x-4 rounded-box">
          {courses.map((e) => {
            return (
              <div className="carousel-item">
                <div class="card lg:w-96 w-72 h-full  sm-md:h-[40vh] bg-base-100  shadow-xl">
                  <figure>
                    <img src={e.template} alt="phone template" />
                  </figure>
                  <div class="card-body lg:p-8 p-4">
                    <h2 class="card-title">
                      <span className="truncate">{e.name}</span>
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
    </div>
  );
};

export default Courseview;
