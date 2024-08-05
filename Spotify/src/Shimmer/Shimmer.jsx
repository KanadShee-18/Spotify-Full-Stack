import React from "react";
import "./Shimmer.css";

const Shimmer = () => {
  return (
    <div className="shimmer-wrapper">
      <div className="shimmer-title shimmer"></div>
      <div className="shimmer-card">
        <div className="shimmer"></div>
        <div className="shimmer"></div>
        <div className="shimmer"></div>
        <div className="shimmer"></div>
        <div className="shimmer"></div>
      </div>
      <div className="shimmer-title shimmer"></div>
      <div className="shimmer-card">
        <div className="shimmer"></div>
        <div className="shimmer"></div>
        <div className="shimmer"></div>
        <div className="shimmer"></div>
        <div className="shimmer"></div>
      </div>
    </div>
  );
};

export default Shimmer;
