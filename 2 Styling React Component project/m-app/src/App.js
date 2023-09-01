import "./App.css";
import React, { useState } from "react";
import CourseInput from "./UI/GoalInput/CourseInput";
import List from "./UI/CourseList/List";
function App() {
  const [initialArr, setInitialArr] = useState([
    { text: "Do all exercises!", id: "g1" },
    { text: "Finish the course!", id: "g2" },
  ]);

  const getValue = (value) => {
    setInitialArr((prevGoals) => {
      const initialGoals = [...prevGoals];
      initialGoals.unshift({
        text: value,
        id: Math.random().toString(),
      });
      return initialGoals;
    });
  };

  const delteOnClick = (goalid) => {
    setInitialArr((prevGoals) => {
      let delGoal = prevGoals.filter((item) => item.id !== goalid);
      return delGoal;
    });
  };

  let content = (
    <p style={{ textAlign: "center" }}>No goals found. Maybe add one?</p>
  );

  if (initialArr.length > 0) {
    content = <List items={initialArr} deletingItem={delteOnClick} />;
  }
  return (
    <div>
      <div>
        <section id="goal-form">
          <CourseInput onSubmitValue={getValue} />
        </section>
        <section id="goals">{content}</section>
      </div>
    </div>
  );
}

export default App;
