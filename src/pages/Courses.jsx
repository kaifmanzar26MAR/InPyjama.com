import React, { useState } from "react";
import courses from "../api/TestApi";
import { Link } from "react-router-dom";

const Courses = () => {
  const [country, setCountry] = useState("IN");

  const [displayCourse, setDisplayCourse] = useState(courses);
  const [searchText, setSearchText] = useState("");

  const handleSearch = (text) => {
    setSearchText(text);
    // console.log(text.toString().toLowerCase());
    if (text === "") {
      setDisplayCourse(courses);
    } else {
      const resultantCourses = courses.filter((course) => {
        // Fixed the condition to check if course.title includes the 'text' variable
        if (
          course.name.toString().toLowerCase().includes(text.toString().toLowerCase()) ||
          course.title.toString().toLowerCase().includes(text.toString().toLowerCase())
        ) {
          return course;
        }
        // return null; // Added to handle the case when the condition is not met
      });
      // console.log(resultantCourses);
      setDisplayCourse(resultantCourses); // Setting the filtered courses to display
    }
  };

  return (
    <div className="min-h-fit mt-16 p-2">
      <div className="w-full p-2 flex gap-2">
        <label className="input input-bordered flex items-center gap-2 w-80 ">
          <input
            type="text"
            className="w-full"
            placeholder="Search Your Course"
            value={searchText}
            onChange={(e) => {
              handleSearch(e.target.value);
            }}
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="w-4 h-4 opacity-70"
          >
            <path
              fillRule="evenodd"
              d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
              clipRule="evenodd"
            />
          </svg>
        </label>

        <div className="btn">filters</div>
        <div className="btn">sort</div>
      </div>
      <h1 className="p-2 font-bold text-3xl">Courses</h1>
      <div className="w-full flex flex-wrap gap-x-5 gap-y-8 p-6 items-center justify-center  lg:justify-between ">
        {displayCourse.length>0 ? displayCourse.map((e) => {
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
        }): <div className="h-52 font-semibold text-2xl"> No Course Found!! </div>}
      </div>
    </div>
  );
};

export default Courses;
