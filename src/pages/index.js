import React from "react";
import { config } from "../../common/config";
import Navbar from "../components/Navbar";

const Index = () => {
  return (
    <div className="text-5xl text-themeColor">
      <Navbar />
      {config.ENV}
    </div>
  );
};

export default Index;
