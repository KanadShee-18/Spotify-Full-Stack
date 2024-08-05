import React from "react";
import "./Shimmer.css";

const Shimmer = () => {
  return (
    <div className="shimmer-wrapper">
      <div className="shimmer-sidebar">
        <div className="shimmer"></div>
        <div className="shimmer"></div>
      </div>
      <div className="shimmer-content">
        <div className="shimmer-heading shimmer"></div>
        <div className="shimmer-card-container">
          <div className="shimmer-card shimmer"></div>
          <div className="shimmer-card shimmer"></div>
          <div className="shimmer-card shimmer"></div>
          <div className="shimmer-card shimmer"></div>
        </div>
        <div className="shimmer-heading shimmer"></div>
        <div className="shimmer-card-container">
          <div className="shimmer-card small shimmer"></div>
          <div className="shimmer-card small shimmer"></div>
          <div className="shimmer-card small shimmer"></div>
          <div className="shimmer-card small shimmer"></div>
          <div className="shimmer-card small shimmer"></div>
          <div className="shimmer-card small shimmer"></div>
          <div className="shimmer-card small shimmer"></div>
          <div className="shimmer-card small shimmer"></div>
        </div>
      </div>
    </div>
  );
};

export default Shimmer;
