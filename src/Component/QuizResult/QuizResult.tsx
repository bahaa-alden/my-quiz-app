import React from "react";
import Button from "../StartScreen/Button";
import styles from "./QuizResult.module.css";
function QuizResult({ result, retry, check }: any) {
  let correct = 0;
  result.forEach((e: number, index: number) => {
    if (e === Number(check[index].correctOptionIndex)) {
      correct++;
    }
  });
  return (
    <div className={styles.result}>
      <p className={styles.p}>نتيجة الاختبار</p>
      <h1>النسبة %{((correct / check.length) * 100).toPrecision()}</h1>
      <div style={{ fontSize: "20px", paddingTop: "10px" }}>
        {correct} of {check.length}
      </div>
      <div style={{ padding: "20px 0" }}>
        {" "}
        <Button onClick={retry}>إعادة اللعبة</Button>
      </div>{" "}
    </div>
  );
}

export default QuizResult;
