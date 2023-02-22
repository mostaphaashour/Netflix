import React from "react";
import Main from "../components/Main";
import Row from "../components/Row";
import requests from "../requests";
const Home = () => {
  return (
    <div>
      <Main />
      <Row rowID="1" title="Top Rated" fetchURL={requests.requestTopRated} />
      <Row rowID="2" title="Trending" fetchURL={requests.requestTrending} />
      <Row rowID="3" title="Up Coming" fetchURL={requests.requestUpcoming} />
      <Row rowID="4" title="Popular" fetchURL={requests.requestPopular} />
    </div>
  );
};

export default Home;
