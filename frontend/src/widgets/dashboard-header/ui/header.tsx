import React from "react";
import Link from "next/link";

interface Props {}

export const DashboardHeader: React.FC<Props> = () => {
  return (
    <header>
      <Link href="/dashboard">Home</Link>
      <br />
      <Link href="/sign-in">Sign in</Link>
      <br />
      <Link href="/sign-up">Sign up</Link>
    </header>
  );
};
