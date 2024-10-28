import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

const Grade = () => {
  const [totalQuestions, setTotalQuestions] = useState("");
  const [wrongQuestions, setWrongQuestions] = useState("");
  const [correctAnswers, setCorrectAnswers] = useState("");
  const [gradeRows, setGradeRows] = useState();
  const [gradePercentage, setGradePercentage] = useState("");
  const [gradeLetter, setGradeLetter] = useState("");
  const [isCalculated, setIsCalculated] = useState(false);

  const calculateGrade = (e) => {
    e.preventDefault();
    if (
      totalQuestions <= 0 ||
      wrongQuestions < 0 ||
      wrongQuestions > totalQuestions
    ) {
      toast.error("Please enter valid input values.");
      return;
    }
    const correct = totalQuestions - wrongQuestions;
    setCorrectAnswers(correct);
    const percentage = ((correct / totalQuestions) * 100).toFixed(0);

    setGradePercentage(percentage);

    let letter = "";
    if (percentage >= 97) {
      letter = "A+";
    } else if (percentage >= 93) {
      letter = "A";
    } else if (percentage >= 90) {
      letter = "A-";
    } else if (percentage >= 87) {
      letter = "B+";
    } else if (percentage >= 83) {
      letter = "B";
    } else if (percentage >= 80) {
      letter = "B-";
    } else if (percentage >= 77) {
      letter = "C+";
    } else if (percentage >= 73) {
      letter = "C";
    } else if (percentage >= 70) {
      letter = "C-";
    } else if (percentage >= 67) {
      letter = "D+";
    } else if (percentage >= 63) {
      letter = "D";
    } else if (percentage >= 60) {
      letter = "D-";
    } else {
      letter = "F";
    }

    setGradeLetter(letter);

    const percentageSummary = (100 - (wrongQuestions / totalQuestions) * 100).toFixed(0);

    let resultTable = `
        <table>
            <tr>
                <th>Right</th>
                <th>Wrong</th>
                <th>Percentage</th>
                <th>Grade</th>
            </tr>`;

    for (
      let currentWrongQuestions = 0;
      currentWrongQuestions <= totalQuestions;
      currentWrongQuestions++
    ) {
      const rightQuestions = totalQuestions - currentWrongQuestions;
      const percentage = ((rightQuestions / totalQuestions) * 100).toFixed(0);
      const grade = resultGrade(parseFloat(percentage));
      console.log(grade)
      resultTable += `
              <tr class="${
                percentage == percentageSummary ? "GC_ActiveResult" : ""
              } ${grade === "F" ? "Fail" : ""}">
                  <td>${rightQuestions}</td>
                  <td>${currentWrongQuestions}</td>
                  <td>${percentage}%</td>
                  <td>${grade}</td>
              </tr>`;
    }

    resultTable += "</table>";

    // Add new row to the table
    setGradeRows(resultTable);

    setIsCalculated(true);
    if(isCalculated){
      toast.success("Calculated Successfully!")
    }
  };

  const resultGrade = (percentage) => {
    let letter = "";
    if (percentage >= 97) {
      letter = "A+";
    } else if (percentage >= 93) {
      letter = "A";
    } else if (percentage >= 90) {
      letter = "A-";
    } else if (percentage >= 87) {
      letter = "B+";
    } else if (percentage >= 83) {
      letter = "B";
    } else if (percentage >= 80) {
      letter = "B-";
    } else if (percentage >= 77) {
      letter = "C+";
    } else if (percentage >= 73) {
      letter = "C";
    } else if (percentage >= 70) {
      letter = "C-";
    } else if (percentage >= 67) {
      letter = "D+";
    } else if (percentage >= 63) {
      letter = "D";
    } else if (percentage >= 60) {
      letter = "D-";
    } else {
      letter = "F";
    }

    return(letter)
  }


  return (
    <>
      <div className="calculator">
        <div className="calculator-content">
          <Toaster />
          <div className="heading">
            <h1>
              Use our easy grade calculator to calculate your grade percentage
            </h1>
          </div>
          <div className="calculator-grid">
            <div className="calculator-form">
              <form>
                <div className="form-field">
                  <label htmlFor="tquestions">Total Questions</label>
                  <input
                    type="number"
                    name="tquestions"
                    id="tquestions"
                    placeholder="Enter Total Questions"
                    value={totalQuestions}
                    onChange={(e) =>
                      setTotalQuestions(parseInt(e.target.value))
                    }
                  />
                </div>
                <div className="form-field">
                  <label htmlFor="wquestions">Wrong Questions</label>
                  <input
                    type="number"
                    name="wquestions"
                    id="wquestions"
                    placeholder="Enter Wrong Questions"
                    value={wrongQuestions}
                    onChange={(e) =>
                      setWrongQuestions(parseInt(e.target.value))
                    }
                  />
                </div>
              </form>
              <button onClick={calculateGrade}>Calculate</button>
            </div>
            <div className="calculator-table">
              <div className="result-grid">
                <div className="correct-ans"># {correctAnswers}</div>
                <div className="wrong-ans">
                  # {isCalculated && wrongQuestions}
                </div>
                <div className="percentage">{gradePercentage}%</div>
                <div className="grade">
                {isCalculated ? <span>{gradeLetter}</span> : <span>--</span>}
                </div>
              </div>
              <div className="result-table">
                <div dangerouslySetInnerHTML={{__html:gradeRows}}/>
                {/* <table>
                  <thead>
                    <tr>
                      <th>Right</th>
                      <th>Wrong</th>
                      <th>Percentage</th>
                      <th>Grade</th>
                    </tr>
                  </thead>
                  <tbody>
                    {gradeRows.map((row, index) => (
                      <tr key={index}>
                        <td>{row.correct}</td>
                        {isCalculated && <td>{row.wrongQuestions}</td>}
                        <td>{row.percentage}%</td>
                        <td>{row.letter}</td>
                      </tr>
                    ))}
                    <tr>
                      <td>10</td>
                      <td>0</td>
                      <td>100%</td>
                      <td>A+</td>
                    </tr>
                    <tr>
                      <td>9</td>
                      <td>1</td>
                      <td>90%</td>
                      <td>A-</td>
                    </tr>
                    <tr>
                      <td>8</td>
                      <td>2</td>
                      <td>80%</td>
                      <td>B-</td>
                    </tr>
                    <tr>
                      <td>7</td>
                      <td>3</td>
                      <td>70%</td>
                      <td>C-</td>
                    </tr>
                  </tbody>
                </table> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Grade;
