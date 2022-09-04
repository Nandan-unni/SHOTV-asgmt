import { message, Spin } from "antd";
import React, { useEffect, useState } from "react";
import { getFullSchedule } from "../../infrastructure/schedule";
import Navbar from "../components/Navbar";
import ShowSection from "../components/ShowSection";
import { showData } from "../data/show";

const Index = () => {
  const [loading, setLoading] = useState(true);
  const [shows, setShows] = useState(null);

  useEffect(() => {
    if (shows === null) {
      getFullSchedule()
        .then((res) => console.log(res.data))
        .catch((err) => console.log(err))
        .finally(() => setLoading(false));
    }
  }, []);

  return (
    <div>
      <Navbar />
      {loading ? (
        <Spin tip="Loading" />
      ) : (
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
      )}
    </div>
  );
};

export default Index;
