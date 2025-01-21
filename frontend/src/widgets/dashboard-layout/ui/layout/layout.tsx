import React from "react";
import styles from "./layout.module.scss";
import { DashboardHeader } from "../header/header";

interface Props {
  children: React.ReactNode;
}

export const DashboardLayout: React.FC<Props> = ({ children }) => {
  return (
    <div className={styles.container}>
      <DashboardHeader />
      {children}
    </div>
  );
};
