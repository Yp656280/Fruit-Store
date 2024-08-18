import React from "react";
import { Link } from "react-router-dom";

function DisplayPage({ data }) {
  return (
    <div className="display-page-container">
      <div className="display-page-title">{data?.title}</div>
      <ol className="display-page-breadcrumb">
        <li className="breadcrumb-item">
          <Link to="/home">Home</Link>
        </li>
        <li className="breadcrumb-item-divider">/</li>
        <li className="breadcrumb-item">
          <Link to="/home">Pages</Link>
        </li>
        <li className="breadcrumb-item-divider">/</li>
        <li className="breadcrumb-item  text-white">{data?.title}</li>
      </ol>
    </div>
  );
}

export default DisplayPage;
