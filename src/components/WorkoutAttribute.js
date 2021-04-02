import React from "react";
import styles from "../css/WorkoutAttribute.module.css";

export default function ({ iconSrc, iconAlt, text }) {
  return (
    <div className={styles.attributeContainer}>
      <img src={iconSrc} alt={iconAlt} className={styles.icon} />
      <p>{text}</p>
    </div>
  )
}