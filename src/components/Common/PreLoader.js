import { useEffect, useState } from "react";
import "./PreLoader.scss";
import { preLoaderAnim } from "../animations";

function PreLoader() {
  useEffect(() => {
    preLoaderAnim();
  }, []);
  return (
    <div className="preloader">
      <div className="texts-container">
        <span>Loading...</span>
      </div>
    </div>
  );
}

export default PreLoader;
