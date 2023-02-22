import React from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { UserAuth } from "../context/AuthContext";
import { db } from "../firebase";
import { updateDoc, doc, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
const SavedShows = () => {
  const [movies, setMovies] = useState([]);
  const { user } = UserAuth();

  const slideleft = () => {
    let slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 500;
  };
  const slideright = () => {
    let slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  useEffect(() => {
    onSnapshot(doc(db, "users", `${user?.email}`), (doc) => {
      setMovies(doc.data()?.savedShows);
    });
  }, [user?.email]);

  const movieRef = doc(db, "users", `${user?.email}`);
  const deleteShow = async (passedId) => {
    try {
      const results = movies.filter((item) => item.id !== passedId);
      await updateDoc(movieRef, {
        savedShows: results,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h2 className="text-white font-bold md:text-xl p-4">My Shows</h2>
      <div className="relative flex items-center group">
        <MdChevronLeft
          className="bg-white rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block left-0 "
          size={40}
          onClick={slideleft}
        />
        <div
          id={"slider"}
          className="h-full w-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative"
        >
          {movies.map((item, id) => (
            <div
              key={id}
              className="w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2 "
            >
              <img
                src={`https://image.tmdb.org/t/p/w500${item?.img}`}
                alt={item?.title}
              />
              <div className="absolute top-0 left-0 w-full h-full  hover:bg-black/80 opacity-0 text-white hover:opacity-100">
                <p className="flex justify-center items-center text-center font-bold h-full text-xs md:text-sm whitespace-normal">
                  {item?.title}
                </p>
                <p
                  onClick={() => {
                    deleteShow(item.id);
                  }}
                  className=" bg-red-600 rounded-full p-1 m-3 top-0 right-0 absolute"
                >
                  <AiOutlineClose />
                </p>
              </div>
            </div>
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
export default SavedShows;
