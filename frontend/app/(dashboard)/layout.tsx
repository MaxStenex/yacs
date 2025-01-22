import React, { PropsWithChildren } from "react";
import { DashboardLayout } from "@/widgets/dashboard-layout";

const Layout = ({ children }: PropsWithChildren) => {
  return <DashboardLayout>{children}</DashboardLayout>;
};

export default Layout;
