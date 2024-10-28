import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

const Points = () => {
  const [fields, setFields] = useState([
    { grade: "", weight: "" },
    { grade: "", weight: "" },
    { grade: "", weight: "" },
  ]);

  const [weightedAverage, setWeightedAverage] = useState(null);
  const [grade, setGrade] = useState("");
  const [isCalculated, setIsCalculated] = useState(false);

  const handleGradeChange = (index, value) => {
    const newFields = [...fields];
    newFields[index].grade = value;
    setFields(newFields);
  };

  const determineLetterGrade = (percentage) => {
    if (percentage >= 98) return "A+";
    else if (percentage >= 95) return "A";
    else if (percentage >= 90) return "A-";
    else if (percentage >= 85) return "B+";
    else if (percentage >= 80) return "B";
    else if (percentage >= 75) return "B-";
    else if (percentage >= 70) return "C+";
    else if (percentage >= 65) return "C";
    else if (percentage >= 60) return "C-";
    else if (percentage >= 55) return "D+";
    else if (percentage >= 50) return "D";
    else if (percentage >= 45) return "D-";
    else return "F";
  };
  const handleWeightChange = (index, value) => {
    const newFields = [...fields];
    newFields[index].weight = value;
    setFields(newFields);
  };

  const calculateWeightedAverage = (e) => {
    e.preventDefault();
    // grades = document.querySelectorAll("#gradesWrapperPoints .grade");
    // maxGrades = document.querySelectorAll("#gradesWrapperPoints .maxGrade");

    var grades,
      maxGrades,
      weights,
      valid = true,
      total = 0,
      maxTotal = 0, // New variable to store total maximum points
      weightSum = 0;
    var letterGrades = [];
    // console.log(fields);
    // return false;
    for (let i = 0; i < fields.length; i++) {
      console.log(fields[i].grade, "grade");
      console.log(fields[i].weight, "max grade");
      // return false
      let gradeValue = parseFloat(fields[i].grade);
      let maxGradeValue = fields[i].weight ? parseFloat(fields[i].weight) : 100;

      if (!isNaN(gradeValue) && !isNaN(maxGradeValue) && maxGradeValue > 0) {
        total += gradeValue;
        maxTotal += maxGradeValue;
      } else {
        valid = false;
        break;
      }
    }

    // Display the total maximum points in the "Points" tab
    const ressult = total.toFixed(2) / maxTotal.toFixed(2);
    console.log(`${total.toFixed(2)} / ${maxTotal.toFixed(2)}`);
    for (let i = 0; i < fields.length; i++) {
      let gradeValue = parseFloat(fields[i].grade);
      let maxGradeValue = fields[i].weight ? parseFloat(fields[i].weight) : 100;
      if (!isNaN(gradeValue) && !isNaN(maxGradeValue) && maxGradeValue > 0) {
        total += (gradeValue / maxGradeValue) * 100;
        weightSum += 1;
        // Convert the percentage to letter grade and store it
        letterGrades.push(
          determineLetterGrade((gradeValue / maxGradeValue) * 100)
        );
      } else {
        valid = false;
        break;
      }
    }

    if (valid && weightSum > 0) {
      let average = total / weightSum;
      let formattedAverage = average.toFixed(2);
      let representativeGrade;
      console.log(formattedAverage);
      setWeightedAverage(formattedAverage)
      // document.getElementById("resultPoints").textContent = `${}`;
      representativeGrade = determineLetterGrade(total);
      console.log(representativeGrade);
      setGrade(representativeGrade)
    } else {
      console.log("error");
    }
  };

  // const calculateWeightedAverage = (e) => {
  //   e.preventDefault();

  //   if (fields.grade === "") {
  //     toast.error("Please enter valid input values.");
  //     return;
  //   }

  //   let totalWeight = 0;
  //   let weightedSum = 0;

  //   fields.forEach((field) => {
  //     const grade = Number(field.grade);
  //     let weight = Number(field.weight || 0);
  //     const maxGrade = Number(field.maxGrade || 100);

  //     if (isNaN(weight) || weight === 0) {
  //       weight = 100 / fields.length;
  //     }

  //     if (!isNaN(grade) && !isNaN(weight)) {
  //       totalWeight += weight;
  //       const proportion = grade / maxGrade;
  //       weightedSum += proportion * weight;
  //     }
  //   });

  //   let average = 0;
  //   if (totalWeight !== 0) {
  //     average = (weightedSum / totalWeight).toFixed(2);
  //     setWeightedAverage(average);
  //   }

  //   if (average >= 97) {
  //     setGrade("A+");
  //   } else if (average >= 93) {
  //     setGrade("A");
  //   } else if (average >= 90) {
  //     setGrade("A-");
  //   } else if (average >= 87) {
  //     setGrade("B+");
  //   } else if (average >= 83) {
  //     setGrade("B");
  //   } else if (average >= 80) {
  //     setGrade("B-");
  //   } else if (average >= 77) {
  //     setGrade("C+");
  //   } else if (average >= 73) {
  //     setGrade("C");
  //   } else if (average >= 70) {
  //     setGrade("C-");
  //   } else if (average >= 67) {
  //     setGrade("D+");
  //   } else if (average >= 63) {
  //     setGrade("D");
  //   } else if (average >= 60) {
  //     setGrade("D-");
  //   } else {
  //     setGrade("F");
  //   }
  //   setIsCalculated(true);
  //   if (isCalculated) {
  //     toast.success("Calculated Successfully!");
  //   }
  // };

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
                    placeholder="Max Grade (optional)"
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
            Weight Average :
            {weightedAverage !== null ? `${weightedAverage}` : ""}
          </div>
          <div className="result-values">Grade : {grade}</div>
        </div>
      </div>
    </>
  );
};

export default Points;
