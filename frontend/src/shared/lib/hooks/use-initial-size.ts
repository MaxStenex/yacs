"use client";
import { RefObject, useLayoutEffect, useState } from "react";

interface Params {
  ref: RefObject<HTMLElement>;
}

interface Size {
  width: number;
  height: number;
}

export const useInitialSize = ({ ref }: Params) => {
  const [size, setSize] = useState<Size>({ width: 0, height: 0 });

  useLayoutEffect(() => {
    if (!ref.current) return;

    const { width, height } = ref.current.getBoundingClientRect();

    setSize({ width, height });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return size;
};
