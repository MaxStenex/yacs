import React from "react";
import styles from "./dashboard-layout.module.scss";

interface Props {
  children: React.ReactNode;
  header: React.ReactNode;
}

export const DashboardLayout: React.FC<Props> = ({ children, header }) => {
  return (
    <div className={styles.container}>
      {header}
      {children}
    </div>
  );
};
