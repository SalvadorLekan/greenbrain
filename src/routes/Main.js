import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import { BiFilterAlt } from "react-icons/bi";

function Main({ children }) {
  return (
    <div className="bg-gradient-to-t from-green-100 via-green-100 to-white">
      <Header />
      <div className="grid grid-cols-3 p-2 md:p-4 text-center bg-white ">
        <Link to="/lecturenote" className="block pt-4">
          Lecture Notes
        </Link>
        <Link to="/pastquestions" className="block pt-4">
          Past Questions
        </Link>
        <Link to="/projects" className="block pt-4">
          Projects
        </Link>
      </div>
      <div className="shadow ml-8 my-6 rounded w-48 flex justify-between items-center bg-white p-4 text-black">
        <BiFilterAlt />
        <p>Filter By Course</p>
      </div>
      {children}
    </div>
  );
}

export default Main;
