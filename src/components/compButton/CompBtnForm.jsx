import React from "react";
import styles from "./compBtnForm.module.css";
const CompBtnForm = ({ children }) => {
  return <button className={styles.btnRegisterProd}>{children}</button>;
};

export default CompBtnForm;
