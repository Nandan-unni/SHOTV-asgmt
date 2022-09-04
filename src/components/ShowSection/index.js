import { Carousel, Empty } from "antd";
import React, { useEffect, useState } from "react";
import { isSsr } from "../../../common/constants";
import ShowCard from "../ShowCard";

const ShowSection = ({ title = "", shows = [] }) => {
  const [slidesToShow, setSlidesToShow] = useState(5);

  useEffect(() => {
    setSlidesToShow(() => {
      if (isSsr) return 5;
      else if (window.innerWidth >= 1300) return 6;
      else if (window.innerWidth >= 1150) return 5;
      else if (window.innerWidth >= 998) return 4;
      else if (window.innerWidth >= 700) return 3;
      else if (window.innerWidth >= 500) return 2;
      else return 1;
    });
  }, []);

  return (
    <div className="mx-10 md:mx-12 lg:mx-16 my-16">
      <h2 className="text-2xl mb-2">{title}</h2>
      <div className="flex items-center mb-6">
        <div className="rounded-full h-[3px] w-[250px] bg-gray-200"></div>
        <div className="rounded-full h-[4px] w-[4px] bg-gray-400 ml-2"></div>
      </div>
      {shows?.length === 0 ? (
        <Empty description="No shows found." />
      ) : (
        <Carousel autoplay slidesToShow={slidesToShow}>
          {shows.map((show) => (
            <ShowCard key={show?.id} showData={show} />
          ))}
        </Carousel>
      )}
    </div>
  );
};

export default ShowSection;
