import React from "react";
import Button from "./Button";
import styles from "./Start.module.css";
function Start({ start }: any) {
  return (
    <div className={styles.joinscreen}>
      <h1>شارك بالاختبار</h1>
      <p className={styles.pp}>هيا لتختبر ذكائك</p>
      <Button onClick={start}>إبدأ</Button>
    </div>
  );
}

export default Start;
