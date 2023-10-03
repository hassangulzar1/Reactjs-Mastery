import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <>
      <h1>My Home page</h1>
      <p>
        Go to <Link to="/products">The List of products</Link>
      </p>
    </>
  );
};

export default Home;
