"use client";
import { RefObject, useEffect, useRef } from "react";

export const useOutsideClick = (ref: RefObject<HTMLElement>, callback: () => void) => {
  const callbackRef = useRef(callback);
  callbackRef.current = callback;

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as Node;

      if (!target || !ref.current) return;

      const isOutside = !ref.current.contains(target);

      if (!isOutside) return;

      callbackRef.current();
    };

    document.addEventListener("mousedown", handleClick);

    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};
