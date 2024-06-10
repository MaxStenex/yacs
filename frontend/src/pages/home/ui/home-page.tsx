import React, { useState } from "react";

export const HomePage = async () => {
  const res: string = await new Promise((res) =>
    setTimeout(() => res("Hello from Home page"), 1000)
  );

  return <h1>{res}</h1>;
};
