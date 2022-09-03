import React from "react";
import MetaTags from "../components/MetaTags";
import "../styles/globals.css";
import "antd/dist/antd.css";

const App = ({ Component, pageProps }) => {
  return (
    <>
      <MetaTags title={"ShotV"} />
      <Component {...pageProps} />
    </>
  );
};

export default App;
