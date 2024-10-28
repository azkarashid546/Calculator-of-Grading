import React, { useState } from "react";
import toast, {Toaster} from "react-hot-toast";
const FinalLetters = () => {
  const [currentGrade, setCurrentGrade] = useState("");
  const [desiredGrade, setDesiredGrade] = useState("");
  const [finalExamWeight, setFinalExamWeight] = useState("");
  const [grade, setGrade] = useState("");
  const [result, setResult] = useState("");
  const [iscalculate, setIsCalculated] = useState(false);

  const handleCurrentGradeChange = (e) => {
    setCurrentGrade(e.target.value);
    console.log(e.target.value)
  };

  const handleDesiredGradeChange = (e) => {
    setDesiredGrade(e.target.value);
    console.log(e.target.value)
  };

  const handleFinalExamWeightChange = (e) => {
    setFinalExamWeight(e.target.value);
  };

  const handleCalculate = (e) => {
    e.preventDefault();

    if (
      currentGrade == "" ||
      desiredGrade =="" ||
      finalExamWeight == "")
      {
      toast.error("Please enter valid input values.");
      return;
  }
    const gradeValue = {
      "A+": 100,
      A: 95,
      "A-": 90,
      "B+": 89,
      B: 85,
      "B-": 80,
      "C+": 79,
      C: 75,
      "C-": 70,
      "D+": 69,
      D: 65,
      "D-": 60,
      F: 0,
    };
    const currentGradeValue = gradeValue[currentGrade];
    const desiredGradeValue = gradeValue[desiredGrade];
    const finalExamWeightDecimal = finalExamWeight / 100;
    console.log(finalExamWeightDecimal);
    const weightedAverage =
      ((desiredGradeValue - (1 - finalExamWeightDecimal) * currentGradeValue) /
      finalExamWeightDecimal).toFixed(2);
    console.log((desiredGradeValue - (1 - finalExamWeightDecimal) * currentGradeValue) /
    finalExamWeightDecimal) 
  
   console.log(desiredGrade)
    console.log(desiredGradeValue)
    setResult(weightedAverage);
    if (weightedAverage >= 97) {
      setGrade("A+");
    } else if (weightedAverage >= 93) {
      setGrade("A");
    } else if (weightedAverage >= 90) {
      setGrade("A-");
    } else if (weightedAverage >= 87) {
      setGrade("B+");
    } else if (weightedAverage >= 83) {
      setGrade("B");
    } else if (weightedAverage >= 80) {
      setGrade("B-");
    } else if (weightedAverage >= 77) {
      setGrade("C+");
    } else if (weightedAverage >= 73) {
      setGrade("C");
    } else if (weightedAverage >= 70) {
      setGrade("C-");
    } else if (weightedAverage >= 67) {
      setGrade("D+");
    } else if (weightedAverage >= 63) {
      setGrade("D");
    } else if (weightedAverage >= 60) {
      setGrade("D-");
    } else {
      setGrade("F");
    }

    setIsCalculated(true)
    if(iscalculate){
      toast.success("Calculated Successfully!")
    } 
  };
 
  const handleReset = () => {
    setCurrentGrade("");
    setDesiredGrade("");
    setFinalExamWeight("");
  };
  return (
    <>
      <div className="percentage-grid">
        <div className="percentage-form">
          <form>
            <Toaster/>
            <div className="form-field">
              <label htmlFor="cgrade">Current Grade (%)</label>
              <select
                name="grade"
                id="grade"
                value={currentGrade}
                onChange={handleCurrentGradeChange}
              >
                <option value="A+">A+</option>
                <option value="A">A</option>
                <option value="A-">A-</option>
                <option value="B+">B+</option>
                <option value="B">B</option>
                <option value="B-">B-</option>
                <option value="C+">C+</option>
                <option value="C">C</option>
                <option value="C">C-</option>
                <option value="D+">D+</option>
                <option value="D">D</option>
                <option value="D">D</option>
                <option value="F">F</option>
              </select>
            </div>
            <div className="form-field">
              <label htmlFor="dgrade">Desired Grade (%)</label>
              <select
                name="grade"
                id="grade"
                value={desiredGrade}
                onChange={handleDesiredGradeChange}
              >
                <option value="A+">A+</option>
                <option value="A">A</option>
                <option value="A-">A-</option>
                <option value="B+">B+</option>
                <option value="B">B</option>
                <option value="B-">B-</option>
                <option value="C+">C+</option>
                <option value="C">C</option>
                <option value="C">C-</option>
                <option value="D+">D+</option>
                <option value="D">D</option>
                <option value="D">D</option>
                <option value="F">F</option>
              </select>
            </div>
            <div className="form-field">
              <label htmlFor="fexamweight">Final Exam Weight (%)</label>
              <input
                type="number"
                name="fexamweight"
                id="fexamweight"
                value={finalExamWeight}
                onChange={handleFinalExamWeightChange}
              />
            </div>
          </form>
          <div className="form-buttons">
            <button onClick={handleCalculate}>Calculate</button>
            <button onClick={handleReset}>Reset</button>
          </div>
        </div>
        <div className="percentage-result">
          <div className="heading">
            <h3>Final Exam Grade Needed</h3>
          </div>
          <div className="result-values">{iscalculate ? <span>{result}</span> : <span>--</span>}</div>
          <div className="result-values">{iscalculate ? <span>{grade}</span> : <span>--</span>}</div>
        </div>
      </div>
    </>
  );
};

export default FinalLetters;
