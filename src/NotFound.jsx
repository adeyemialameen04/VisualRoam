import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="not-found">
      <h1>NotFound</h1>
      <Link to="/">Back to home</Link>
    </div>
  );
};

export default NotFound;
