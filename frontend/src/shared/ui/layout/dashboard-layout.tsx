import React from "react";

interface Props {
  children: React.ReactNode;
  header: React.ReactNode;
}

export const DashboardLayout: React.FC<Props> = ({ children, header }) => {
  return (
    <div>
      {header}
      {children}
    </div>
  );
};
