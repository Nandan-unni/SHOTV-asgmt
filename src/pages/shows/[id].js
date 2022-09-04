import { Button, Empty, message, Row, Spin } from "antd";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import FeatherIcon from "../../components/FeatherIcon";
import Navbar from "../../components/Navbar";
import { useRouter } from "next/router";
import { getShow } from "../../../infrastructure/shows";

const ShowDetails = () => {
  const router = useRouter();
  const { id } = router.query;
  const [showData, setshowData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id && showData === null) {
      getShow(id)
        .then((res) => setshowData(res.data))
        .catch((err) => message.error("Some error occured"))
        .finally(() => setLoading(false));
    }
  }, [id]);

  return (
    <div>
      <Navbar />
      {loading ? (
        <Row style={{ minHeight: "50vh" }} align="middle" justify="center">
          <Spin tip="Loading..." />
        </Row>
      ) : showData === null ? (
        <Row style={{ minHeight: "50vh" }} align="middle" justify="center">
          <Empty description="Show not found!" />
        </Row>
      ) : (
        <div className="w-full flex justify-center">
          <div className="m-auto w-fit my-8 lg:mx-4 flex flex-col lg:flex-row">
            <img
              src={showData.image.original}
              className="m-auto max-w-[350px] sm:max-w-[400px] lg:max-w-[450px]"
            />
            <div className="max-w-[350px] sm:max-w-[450px] md:max-w-[600px] lg:mx-8">
              <h1 className="m-0 text-3xl font-bold mt-6 mb-2 uppercase lg:text-5xl lg:mb-4 lg:mt-4">
                {showData?.name}
              </h1>
              <div className="flex flex-wrap lg:mb-4">
                {showData?.genres?.map((genre) => (
                  <p className="m-0 bg-[#eeeeee] text-[#303030] rounded-full text-sm px-4 py-1 mr-2 mb-1">
                    {genre}
                  </p>
                ))}
              </div>
              <p className="flex items-center m-0 text-base">
                <FeatherIcon
                  className="mr-2 text-yellow-400"
                  icon="star"
                  size={16}
                />
                <span>{showData?.rating?.average}</span>
                <b className="mx-1">/</b> <span>10</span>
              </p>
              <p className="flex items-center m-0 text-base">
                <FeatherIcon
                  icon="clock"
                  size={16}
                  className="mr-2 text-green-600"
                />{" "}
                {showData?.runtime} mins
              </p>
              <p className="flex items-center m-0 text-base">
                <FeatherIcon
                  className="mr-2 text-blue-600"
                  icon="book"
                  size={16}
                />
                {showData?.type}, {showData?.language}
              </p>
              <div className="mt-6">
                <b className="text-xl lg:text-2xl">Summary</b>
                <p
                  className="m-0 mt-2 text-base text-justify"
                  dangerouslySetInnerHTML={{ __html: showData?.summary }}
                ></p>
              </div>
              <div className="flex mt-10">
                <a
                  href={showData?.url}
                  target="__blank"
                  rel="noreferrer noopener"
                >
                  <Button
                    size="large"
                    type="primary"
                    className="mr-4 !bg-themeColor !border-themeColor hover:bg-themeColor hover:border-red-600 active:bg-themeColor"
                  >
                    Play now
                  </Button>
                </a>
                <Button size="large" type="ghost" className="">
                  Save for later
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShowDetails;
