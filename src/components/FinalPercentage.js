import React, {useState} from "react";
import toast, {Toaster} from "react-hot-toast";


const FinalPercentage = () => {
  const [currentGrade, setCurrentGrade] = useState("");
  const [desiredGrade, setDesiredGrade] = useState("");
  const [finalExamWeight, setFinalExamWeight] = useState("");
  const [grade, setGrade] = useState("")
  const [result, setResult] = useState("")
  const [iscalculate, setIsCalculated] = useState(false);

  const handleCurrentGradeChange = (e) => {
    setCurrentGrade(e.target.value);
  };

  const handleDesiredGradeChange = (e) => {
    setDesiredGrade(e.target.value);
  };

  const handleFinalExamWeightChange = (e) => {
    setFinalExamWeight(e.target.value);
  };

  const calculateFinalExamGradeNeeded = () => {
    const finalExamWeightDecimal = finalExamWeight / 100;
    const requiredFinalGrade = (desiredGrade - (1 - finalExamWeightDecimal) * currentGrade) / finalExamWeightDecimal;
    return requiredFinalGrade.toFixed(2);
  };

  const handleCalculate = (e) => {
    e.preventDefault();

    if (
      currentGrade === "" ||
      desiredGrade ==="" ||
      finalExamWeight === "")
      {
      toast.error("Please enter valid input values.");
      return;
  }
    const percentage = calculateFinalExamGradeNeeded();
    console.log("Final Exam Grade Needed:", percentage);
    setResult(percentage)
    if (percentage >= 97) {
      setGrade("A+");
    } else if (percentage >= 93) {
      setGrade("A");
    } else if (percentage >= 90) {
      setGrade("A-");
    } else if (percentage >= 87) {
      setGrade ("B+");
    } else if (percentage >= 83) {
      setGrade("B");
    } else if (percentage >= 80) {
      setGrade("B-");
    } else if (percentage >= 77) {
      setGrade("C+");
    } else if (percentage >= 73) {
      setGrade("C");
    } else if (percentage >= 70) {
      setGrade("C-");
    } else if (percentage >= 67) {
      setGrade("D+");
    } else if (percentage >= 63) {
      setGrade("D");
    } else if (percentage >= 60) {
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
              <input type="number" name="cgrade" id="cgrade" value={currentGrade} onChange={handleCurrentGradeChange}/>
            </div>
            <div className="form-field">
              <label htmlFor="dgrade">Desired Grade (%)</label>
              <input type="number" name="dgrade" id="dgrade" value={desiredGrade} onChange={handleDesiredGradeChange}/>
            </div>
            <div className="form-field">
              <label htmlFor="fexamweight">Final Exam Weight (%)</label>
              <input type="number" name="fexamweight" id="fexamweight" value={finalExamWeight} onChange={handleFinalExamWeightChange} />
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

export default FinalPercentage;
