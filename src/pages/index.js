import React from "react";
import Navbar from "../components/Navbar";
import ShowSection from "../components/ShowSection";
import { showData } from "../data/show";

const Index = () => {
  return (
    <div>
      <Navbar />
      <div className="pb-16">
        <ShowSection
          title="Latest & Trending"
          shows={Array(10)
            .fill(0)
            .map((_) => showData)}
        />
        <ShowSection
          title="Popular"
          shows={Array(10)
            .fill(0)
            .map((_) => showData)}
        />
        <ShowSection
          title="Recommended for you"
          shows={Array(10)
            .fill(0)
            .map((_) => showData)}
        />
      </div>
    </div>
  );
};

export default Index;
