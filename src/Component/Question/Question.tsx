import React, { useState, useRef, useEffect } from "react";
import Button from "../StartScreen/Button";
import styles from "./Question.module.css";
function Question({ question, total, currentQuestion, setAnswer }: any) {
  const [selectedOption, setSelectedOption] = useState<number>(Infinity);
  const timer = useRef<any>();
  const progressBar = useRef<any>();
  function goNextQuestion() {
    setAnswer(selectedOption);
    setSelectedOption(Infinity);
  }
  useEffect(() => {
    const h = setTimeout(function () {
      progressBar.current.classList.remove(styles["active"]);
    }, 10);
    const t = setTimeout(function () {
      progressBar.current.classList.add(styles["active"]);
    }, 100);
    timer.current = setTimeout(goNextQuestion, 1000 * 10);
    return () => {
      clearTimeout(timer.current);
      clearTimeout(h);
      clearTimeout(t);
    };
  }, [question]);
  return (
    <div className={styles.question}>
      <div className={styles.progressBar} ref={progressBar}></div>
      <div className={styles.count}>
        <b>
          {currentQuestion} of {total}
        </b>
      </div>
      <div className={styles.main}>
        <div className={styles.title}>
          <span>: السؤال</span>
          <p className={styles.ques}>{question.title} ؟ </p>
        </div>
        <div className={styles.options}>
          {question.options.map((option: string, index: number) => {
            return (
              <button
                key={index}
                className={
                  index === selectedOption
                    ? `${styles.option} ${styles.active}`
                    : styles.option
                }
                onClick={() => setSelectedOption(index)}
              >
                {option}
              </button>
            );
          })}
        </div>
        <div className={styles["control"]}>
          <Button onClick={goNextQuestion}>التالي</Button>
        </div>
      </div>
    </div>
  );
}

export default Question;
