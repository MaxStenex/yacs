import { MainLayout } from "@/shared/ui";
import { DashboardHeader } from "@/widgets/dashboard-header";
import React, { PropsWithChildren } from "react";

const Layout = ({ children }: PropsWithChildren) => {
  return <MainLayout header={<DashboardHeader />}>{children}</MainLayout>;
};

export default Layout;
