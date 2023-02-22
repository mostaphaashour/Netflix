import React from "react";
import requests from "../requests";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

const Main = () => {
  const [movies, setmovies] = useState([]);
  const RandomMovie = movies[Math.floor(Math.random() * movies.length)];
  useEffect(() => {
    axios.get(requests.requestTopRated).then((res) => {
      setmovies(res.data.results);
    });
  }, []);

  const truncstr = (str, num) => {
    if (str?.length > num) return `${str.slice(0, num)} ...`;
    else return str;
  };
  return (
    <div className="w-full h-[550px] text-white">
      <div className="w-full h-full">
        <div className="absolute bg-gradient-to-r from-black h-[550px] w-full"></div>
        <img
          className="w-full h-full object-cover "
          src={`https://image.tmdb.org/t/p/original${RandomMovie?.backdrop_path}`}
          alt={RandomMovie?.title}
        />
      </div>
      <div className="absolute w-full top-[20%] p-4 md:p-8">
        <h1 className=" text-3xl md:text-5xl font-bold">
          {RandomMovie?.title}
        </h1>
        <div className="my-4">
          <button className="border  bg-gray-300  text-black border-gray-300 py-2 px-5">
            Play
          </button>
          <button className="border  text-white  border-gray-300 py-2 px-5 ml-4">
            Watch Later
          </button>
        </div>
        <p className="text-gray-400 text-sm">{`released: ${RandomMovie?.release_date}`}</p>
        <p className="w-full md:max-w-[70%] xl:max-w-[35%] text-gray-200 py-2">
          {truncstr(RandomMovie?.overview, 150)}
        </p>
      </div>
    </div>
  );
};

export default Main;
