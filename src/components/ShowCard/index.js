import React, { useState } from "react";

const ShowCard = ({ showData }) => {
  const [isHovering, setIsHovering] = useState(false);
  return (
    <div
      className="w-[200px] cursor-pointer mx-2 relative rounded-lg overflow-hidden"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <img className="w-full h-auto" src={showData?.image?.medium} />
      <div
        className={`trans3 flex flex-col justify-end w-full overflow-hidden absolute z-10 bottom-0 bg-gradient-to-t from-black to-transparent text-white ${
          isHovering ? "h-[300px] p-4" : "h-0 p-0"
        }`}
      >
        <h2 className="text-white font-semibold text-xl mb-0">
          {showData?.name}
        </h2>
        <p className="m-0 text-gray-300">{showData?.runtime} mins</p>
        <p className="m-0 text-gray-300 mb-2">
          {showData?.type}, {showData?.language}
        </p>
        <div className="flex flex-wrap">
          {showData?.genres?.map((genre) => (
            <p className="m-0 bg-[#303030] text-[#f6f6f6] rounded-full text-xs px-2 mr-2 mb-1">
              {genre}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShowCard;
