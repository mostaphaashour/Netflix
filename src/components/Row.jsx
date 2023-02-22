import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import Movie from "./Movie";
const Row = ({ title, fetchURL, rowID }) => {
  const [rowmovies, setrowmovies] = useState([]);

  useEffect(() => {
    axios.get(fetchURL).then((res) => setrowmovies(res.data.results));
  }, [fetchURL]);
  const slideleft = () => {
    let slider = document.getElementById("slider" + rowID);
    slider.scrollLeft = slider.scrollLeft - 500;
  };
  const slideright = () => {
    let slider = document.getElementById("slider" + rowID);
    slider.scrollLeft = slider.scrollLeft + 500;
  };
  return (
    <div>
      <h2 className="text-white font-bold md:text-xl p-4">{title}</h2>
      <div className="relative flex items-center group">
        <MdChevronLeft
          className="bg-white rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block left-0 "
          size={40}
          onClick={slideleft}
        />
        <div
          id={"slider" + rowID}
          className="h-full w-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative"
        >
          {rowmovies.map((item, id) => (
            <Movie key={id} item={item} />
          ))}
          ;
        </div>
        <MdChevronRight
          className="bg-white rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block right-0"
          size={40}
          onClick={slideright}
        />
      </div>
    </div>
  );
};

export default Row;
