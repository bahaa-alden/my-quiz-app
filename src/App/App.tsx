import React, { Fragment, useState, useEffect } from "react";
import Navbar from "../Component/Navbar/Navbar";
import QuestionScreen from "../Component/QuestionScrenn/Questionscreen";
import Start from "../Component/StartScreen/Start";
import styles from "./App.module.css";
import QuestionsList from "../data/QuestionsList.json";
function App() {
  const [questionStart, setQuestionStart] = useState(false);
  const [randomQuestions, setRandomQuestions] = useState<any>([]);
  useEffect(() => {
    let arr = Object.keys(QuestionsList);
    const array: any[] = [];
    QuestionsList.forEach((e) => {
      const ran: number = Number(arr[Math.floor(Math.random() * arr.length)]);
      array.push(QuestionsList[ran]);
      arr = arr.filter((e) => Number(e) !== ran);
    });
    setRandomQuestions(array);
  }, [questionStart]);
  return (
    <Fragment>
      <Navbar />
      <div className={styles.mainContainer}>
        {questionStart ? (
          <QuestionScreen
            retry={() => setQuestionStart(!questionStart)}
            randomQuestions={randomQuestions}
          />
        ) : (
          <Start start={() => setQuestionStart(!questionStart)} />
        )}
      </div>
    </Fragment>
  );
}
export default App;
