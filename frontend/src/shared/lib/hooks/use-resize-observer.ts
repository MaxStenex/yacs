"use client";
import { RefObject, useEffect, useState } from "react";

interface Params {
  ref: RefObject<HTMLElement>;
}

interface Size {
  width: number;
  height: number;
}

export const useResizeObserver = ({ ref }: Params): Size => {
  const [size, setSize] = useState<Size>({ width: 0, height: 0 });

  useEffect(() => {
    if (!ref.current) return;

    const observer = new ResizeObserver(([entry]) => {
      const newSize = entry.borderBoxSize[0];
      setSize({ width: newSize.inlineSize, height: newSize.blockSize });
    });

    observer.observe(ref.current);

    return () => {
      observer.disconnect();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return size;
};
