import React, { useEffect, useState, useRef } from "react";
import styles from "./QuestionScreen.module.css";
import QuizResult from "../QuizResult/QuizResult";
import Question from "../Question/Question";
function QuestionScreen({ retry, randomQuestions }: any) {
  const [cureentQuestionIndex, setCureentQuestionindex] = useState(0);
  const [markUp, setMarkUp] = useState<number[]>(
    new Array(randomQuestions.length)
  );

  const isQuestionEnd = cureentQuestionIndex === randomQuestions.length;
  return (
    <div className={styles.quizScreen}>
      {isQuestionEnd ? (
        <QuizResult result={markUp} retry={retry} check={randomQuestions} />
      ) : (
        <Question
          question={randomQuestions[cureentQuestionIndex]}
          total={randomQuestions.length}
          currentQuestion={cureentQuestionIndex + 1}
          setAnswer={(index: number) => {
            setMarkUp((arr: number[]): number[] => {
              let newArr = [...arr];
              newArr[cureentQuestionIndex] = index;
              return newArr;
            });
            setCureentQuestionindex(cureentQuestionIndex + 1);
          }}
        />
      )}
    </div>
  );
}

export default QuestionScreen;
