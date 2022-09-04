import { message, Row, Spin } from "antd";
import React, { useEffect, useState } from "react";
import { getFullSchedule } from "../../infrastructure/schedule";
import Navbar from "../components/Navbar";
import ShowSection from "../components/ShowSection";
import { numericalSort, timeSort } from "../utils/sorters";

const Index = () => {
  const [loading, setLoading] = useState(true);
  const [latestShows, setLatestShows] = useState(null);
  const [popularShows, setPopularShows] = useState(null);
  const [recoShows, setRecoShows] = useState(null);

  useEffect(() => {
    if (latestShows === null) {
      getFullSchedule()
        .then((res) => {
          let allShows = res.data?.filter((show) => show.image);
          let latestShows = allShows?.sort((a, b) =>
            timeSort(a?.airstamp, b?.airstamp)
          );
          let popularShows = allShows?.sort((a, b) =>
            numericalSort(a?.rating?.average, b?.rating?.average)
          );
          let recoShows = allShows?.filter((a) => a?.type === "regular");
          setLatestShows(latestShows?.slice(0, 20));
          setPopularShows(popularShows?.slice(0, 20));
          setRecoShows(recoShows?.slice(0, 20));
        })
        .catch((err) => message.error("Some error occured"))
        .finally(() => setLoading(false));
    }
  }, []);

  return (
    <div>
      <Navbar />
      {loading ? (
        <Row style={{ minHeight: "50vh" }} align="middle" justify="center">
          <Spin tip="Loading shows..." />
        </Row>
      ) : (
        <div className="pb-16">
          <ShowSection title="Latest & Trending" shows={latestShows} />
          <ShowSection title="Popular" shows={popularShows} />
          <ShowSection title="Recommended for you" shows={recoShows} />
        </div>
      )}
    </div>
  );
};

export default Index;
