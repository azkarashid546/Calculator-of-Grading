import React, { useState } from "react";
import toast, {Toaster} from "react-hot-toast";


const Percentage = () => {
  const [fields, setFields] = useState([
    { grade: "", weight: "" },
    { grade: "", weight: "" },
    { grade: "", weight: "" },
  ]);
  const [desiredAverage, setDesiredAverage] = useState("");
  const [averageGrade, setAverageGrade] = useState(null);
  const [additionalGradeNeeded, setAdditionalGradeNeeded] = useState(null);
  const [grade , setGrade] = useState("")
  const [isCalculated, setIsCalculated] = useState(false);


  const addRow = (e) => {
    e.preventDefault();
    if (
      fields.grade === "" ||
      fields.weight === "" 
      )
      {
      toast.error("Please enter valid input values.");
      return;
  }
    setFields([...fields, { grade: "", weight: "" }]);
  };

  const handleReset = (e) => {
    e.preventDefault();
    setFields([]);
  };

  const handleGradeChange = (index, value) => {
    const newFields = [...fields];
    newFields[index].grade = value;
    setFields(newFields);
  };

  const handleWeightChange = (index, value) => {
    const newFields = [...fields];
    newFields[index].weight = value;
    setFields(newFields);
  };
  const handleCalculate = (e) => {
    e.preventDefault();

    const totalWeight = fields.reduce(
      (acc, field) => acc + Number(field.weight),
      0
    );
    const weightedGrades = fields.reduce(
      (acc, field) => acc + Number(field.grade) * Number(field.weight),
      0
    );

    const average = weightedGrades / totalWeight;
    setAverageGrade(average.toFixed(2));

    if (desiredAverage !== "") {
      const additional =
        ((desiredAverage - average) / (100 - totalWeight)) * 100;
      setAdditionalGradeNeeded(additional.toFixed(2));
    }
    let letter = "";
    let averagePercentage = ""
      if (averagePercentage >= 97) {
        letter = "A+";
      } else if (averagePercentage >= 93) {
        letter = "A";
      } else if (averagePercentage >= 90) {
        letter = "A-";
      } else if (averagePercentage >= 87) {
        letter = "B+";
      } else if (averagePercentage >= 83) {
        letter = "B";
      } else if (averagePercentage >= 80) {
        letter = "B-";
      } else if (averagePercentage >= 77) {
        letter = "C+";
      } else if (averagePercentage >= 73) {
        letter = "C";
      } else if (averagePercentage >= 70) {
        letter = "C-";
      } else if (averagePercentage >= 67) {
        letter = "D+";
      } else if (averagePercentage >= 63) {
        letter = "D";
      } else if (averagePercentage >= 60) {
        letter = "D-";
      } else {
        letter = "F";
      }
    setGrade(letter)
    setIsCalculated(true)
    if(isCalculated){
      toast.success("Calculated Successfully!")
    }
  };
  
  return (
    <>
      <div className="percentage-grid">
        <div className="percentage-form">
          <form>
            <Toaster/>
             {fields.map((field, index) => (
            <div className="percentage-form-field" key={index}>
              <div className="percentage-from-inputs">
                <input
                  type="number"
                  name="grade"
                  id="grade"
                  placeholder="Grade"
                  value={field.grade}
                  onChange={(e) => handleGradeChange(index, e.target.value)}
                />
                <input
                  type="number"
                  name="weight"
                  id="weight"
                  placeholder="Weight"
                  value={field.weight}
                  onChange={(e) => handleWeightChange(index, e.target.value)}
                />
              </div>
            </div>
             ))}
            <div className="form-buttons">
              <button onClick={addRow}>Add Row</button>
              <button onClick={handleReset}>Reset</button>
            </div>
            <div className="additional-field">
              <label htmlFor="desiredaverage">
                Find additional grade needed to get average grade of:
              </label>
              <input
                type="number"
                name="desiredaverage"
                id="desiredaverage"
                placeholder="Desired Average (%)"
                value={desiredAverage}
                onChange={(e) => setDesiredAverage(e.target.value)}
              />
            </div>
            <div className="percentage-calculate-button">
              <button onClick={handleCalculate}>Calculate Average</button>
            </div>
          </form>
        </div>
        <div className="percentage-result">
          <div className="heading">
            <h3>Results</h3>
          </div>
          <div className="result-values">Weight Average : {averageGrade !== null ? `${averageGrade}` : ""}</div>
          <div className="result-values">Grade : {averageGrade !== null ? `${grade}` : ""}</div>
          <div className="result-values">Additional Grade Needed ({isCalculated && desiredAverage}%) : {additionalGradeNeeded !== null ? `${additionalGradeNeeded}` : ""}</div>
        </div>
      </div>
    </>
  );
};

export default Percentage;
