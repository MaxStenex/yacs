import React, { PropsWithChildren } from "react";

const AuthLayout = ({ children }: PropsWithChildren) => {
  return (
    <div style={{ border: "1px solid green" }}>
      <h2>Auth layout</h2>
      <div>{children}</div>
    </div>
  );
};

export default AuthLayout;
