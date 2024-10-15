"use client";
import React, { PropsWithChildren } from "react";
import { classNames } from "@/shared/lib";
import { useTheme } from "@/entities/theme";

export const AppWrapper: React.FC<PropsWithChildren> = ({ children }) => {
  const { theme } = useTheme();

  return <div className={classNames("app", theme)}>{children}</div>;
};
