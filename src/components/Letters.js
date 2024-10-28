import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

const Letters = () => {
  const [fields, setFields] = useState([
    { grade: "", weight: "" },
    { grade: "", weight: "" },
    { grade: "", weight: "" },
  ]);
  const [weightedAverage, setWeightedAverage] = useState(null);
  const [grade, setGrade] = useState("");
  const [isCalculated, setIsCalculated] = useState(false);

  const letterToNumeric = (grade) => {
    switch (grade) {
      case "A+":
        return 97;
      case "A":
        return 93;
      case "A-":
        return 90;
      case "B+":
        return 87;
      case "B":
        return 83;
      case "B-":
        return 80;
      case "C+":
        return 77;
      case "C":
        return 73;
      case "C-":
        return 70;
      case "D+":
        return 67;
      case "D":
        return 63;
      case "D-":
        return 60;
      case "F":
        return 59;
      default:
        return 0;
    }
  };

  var letterGradePercentages = {
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

  const handleGradeChange = (index, value) => {
    console.log("Index:", index);
    console.log("Grade Value:", value);
    const newFields = [...fields];
    const updatedField = { ...newFields[index], grade: value };
    console.log("Azka", updatedField);
    newFields[index] = updatedField;
    setFields(newFields);

    console.log(setFields);
  };

  const handleWeightChange = (index, value) => {
    const newFields = [...fields];
    newFields[index].weight = value;
    setFields(newFields);
  };

  const calculateWeightedAverage = (e) => {
    if (fields.grade === "" || fields.weight === "") {
      toast.error("Please enter valid input values.");
      return;
    }
    e.preventDefault();
    console.log("Fields:", fields);

    const totalWeight = fields.reduce(
      (acc, field) => acc + Number(field.weight),
      0
    );
    const weightedGrades = fields.reduce(
      (acc, field) => acc + letterGradePercentages[field.grade] * Number(field.weight),
      0
    );
    const average = parseInt(weightedGrades) / parseInt(totalWeight);
    setWeightedAverage(average.toFixed(2));
    console.log("Total Weight:", totalWeight);
    console.log("Weighted Grades:", weightedGrades);
    console.log("Average:", average);
    if (average >= 97) {
      setGrade("A+");
    } else if (average >= 93) {
      setGrade("A");
    } else if (average >= 90) {
      setGrade("A-");
    } else if (average >= 87) {
      setGrade("B+");
    } else if (average >= 83) {
      setGrade("B");
    } else if (average >= 80) {
      setGrade("B-");
    } else if (average >= 77) {
      setGrade("C+");
    } else if (average >= 73) {
      setGrade("C");
    } else if (average >= 70) {
      setGrade("C-");
    } else if (average >= 67) {
      setGrade("D+");
    } else if (average >= 63) {
      setGrade("D");
    } else if (average >= 60) {
      setGrade("D-");
    } else {
      setGrade("F");
    }

    setIsCalculated(false);

    if (isCalculated) {
      toast.success("Calculated Successfully!");
    }
  };

  const addRow = (e) => {
    e.preventDefault();
    setFields([...fields, { grade: "", weight: "" }]);
  };

  const handleReset = (e) => {
    e.preventDefault();
    setFields([]);
  };
  return (
    <>
      <div className="percentage-grid">
        <div className="percentage-form">
          <form>
            <Toaster />
            {fields.map((field, index) => (
              <div className="letters-form-field" key={index}>
                <div className="letters-from-inputs">
                  <select
                    name="grade"
                    id={`grade-${index}`}
                    value={field.grade}
                    onChange={(e) => {
                      console.log(e.target.value);
                      handleGradeChange(index, e.target.value);
                    }}
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
                  <input
                    type="number"
                    name="weight"
                    id={`weight-${index}`}
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
            <div className="percentage-calculate-button">
              <button onClick={calculateWeightedAverage}>
                Calculate Average
              </button>
            </div>
          </form>
        </div>
        <div className="percentage-result">
          <div className="heading">
            <h3>Results</h3>
          </div>
          <div className="result-values">
            Weight Average :{" "}
            {weightedAverage !== null ? `${weightedAverage}` : ""}
          </div>
          <div className="result-values">Grade :{grade}</div>
        </div>
      </div>
    </>
  );
};

export default Letters;
