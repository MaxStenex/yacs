import { DashboardLayout } from "@/shared/ui";
import { DashboardHeader } from "@/widgets/dashboard-header";
import React, { PropsWithChildren } from "react";

const Layout = ({ children }: PropsWithChildren) => {
  return <DashboardLayout header={<DashboardHeader />}>{children}</DashboardLayout>;
};

export default Layout;
