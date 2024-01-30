import React from "react";

const Projects = () => {
  return (
    <div className="w-[400px]">
      <div className="pro_image">
        <img src="/image.png" alt="image" className="w-full h-full" />
      </div>
      <div className="pro_details mt-2">
        <p className="pro_title font-bold text-2xl">Project Title</p>
        <p className="small_desc mt-[2px] font-semibold text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore,
          placeat.
        </p>
        <div className="tech_stack flex mt-1">
          <p className="border-2 border-black p-1 rounded mr-2">ReactJS</p>
          <p className="border-2 border-black p-1 rounded mr-2">NextJS</p>
          <p className="border-2 border-black p-1 rounded mr-2">Javascript</p>
        </div>
      </div>
    </div>
  );
};

export default Projects;
