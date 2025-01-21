import React from "react";
import styles from "./layout.module.scss";
import { DashboardHeader } from "../header/header";
import { DashboardSidebar } from "../sidebar/sidebar";

interface Props {
  children: React.ReactNode;
}

export const DashboardLayout: React.FC<Props> = ({ children }) => {
  return (
    <div className={styles.container}>
      <DashboardHeader />
      <main className={styles.main}>
        <DashboardSidebar />
        <div className={styles.content}>{children}</div>
      </main>
    </div>
  );
};
