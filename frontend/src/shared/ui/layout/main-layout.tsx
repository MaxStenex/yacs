import React from "react";
import styles from "./main-layout.module.scss";

interface Props {
  children: React.ReactNode;
  header: React.ReactNode;
}

export const MainLayout: React.FC<Props> = ({ children, header }) => {
  return (
    <div className={styles.container}>
      {header}
      {children}
    </div>
  );
};
