import React, { useState } from "react";
import FinalPercentage from "./FinalPercentage";
import FinalLetters from "./FinalLetters";
import { Link } from "react-router-dom";
const Final = () => {
  const [isShowComponent1, setIsShowComponent1] = useState(true);
  const [isShowComponent2, setIsShowComponent2] = useState(false);

  const handleClick1 = (e) => {
    e.preventDefault();
    setIsShowComponent1(true);
    setIsShowComponent2(false);
  };

  const handleClick2 = (e) => {
    e.preventDefault();
    setIsShowComponent2(true);
    setIsShowComponent1(false);
  };
  return (
    <>
      <div className="final-calculator">
        <div className="final">
          <div className="heading">
            <h1>QuickGrade Calculator to Find Required Final Grades</h1>
          </div>
          <div className="avergae-buttons">
            <div className="single-button">
              <Link to = "./FinalPercentage">
                <button
                  onClick={handleClick1}
                  className={isShowComponent1 ? "active" : ""}
                >
                  Percentage
                </button>
              </Link>
            </div>
            <div className="single-button">
              <Link to = "./FinalLetters">
              <button onClick={handleClick2} className={isShowComponent2 ? "active" : ""}>Letters</button>
              </Link>

            </div>
          </div>
          <div className="average-form">
            {isShowComponent1 && <FinalPercentage />}
            {isShowComponent2 && <FinalLetters />}
          </div>
        </div>
      </div>
    </>
  );
};

export default Final;
