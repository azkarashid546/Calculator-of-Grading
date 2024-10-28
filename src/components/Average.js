import React, { useState } from "react";
import Percentage from "./Percentage";
import Letters from "./Letters";
import Points from "./Points";
import { NavLink, Link } from "react-router-dom";
const Average = () => {
  const [isShowComponent1, setIsShowComponent1] = useState(true);
  const [isShowComponent2, setIsShowComponent2] = useState(false);
  const [isShowComponent3, setIsShowComponent3] = useState(false);
 
  const handleClick1 = (e) => {
    e.preventDefault();
    setIsShowComponent1(true);
    setIsShowComponent2(false);
    setIsShowComponent3(false);
  };

  const handleClick2 = (e) => {
    e.preventDefault();
    setIsShowComponent2(true);
    setIsShowComponent1(false);
    setIsShowComponent3(false);
  };

  const handleClick3 = (e) => {
    e.preventDefault();
    setIsShowComponent3(true);
    setIsShowComponent2(false);
    setIsShowComponent1(false);
  };
  return (
    <>
      <div className="average-calculator">
        <div className="average">
          <div className="heading">
            <h1>
              Easiest Average Grade Calculator Online to Find Grade Average
            </h1>
          </div>
          <div className="avergae-buttons">
            <div className="single-button">
              <Link to="./Percentage">
                <button
                  className={isShowComponent1 ? "active" : ""}
                  onClick={handleClick1}
                >
                  Percentage
                </button>
              </Link>
            </div>
            <div className="single-button">
              <Link to="./Letters">
                <button onClick={handleClick2}>Letters</button>
              </Link>
            </div>
            <div className="single-button">
              <Link to="./Points">
                <button
                  onClick={handleClick3}
                  className={isShowComponent3 ? "active" : ""}
                >
                  Points
                </button>
              </Link>
            </div>
          </div>
          <div className="average-form">
            {isShowComponent1 && <Percentage />}
            {isShowComponent2 && <Letters />}
            {isShowComponent3 && <Points />}
          </div>
        </div>
      </div>
    </>
  );
};

export default Average;
