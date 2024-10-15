"use client";
import { useCallback, useEffect, useState } from "react";

type SaveValueFn<T> = (value: T) => void;

type ClearValueFn = () => void;

export const useLocalStorage = <T>(
  key: string,
  initialValue: T
): [T, SaveValueFn<T>, ClearValueFn] => {
  const [value, setValue] = useState<T>(initialValue);

  const saveValue: SaveValueFn<T> = useCallback(
    (value) => {
      try {
        const deserializedValue = JSON.stringify(value);
        localStorage.setItem(key, deserializedValue);
        setValue(value);
      } catch (error) {
        console.error(`Error in JSON.stringify with key: ${key}`, error);
      }

      return value;
    },
    [key]
  );

  const clearValue: ClearValueFn = useCallback(() => {
    localStorage.removeItem(key);
    setValue(initialValue);
  }, [initialValue, key]);

  const readSavedValue = useCallback(
    (key: string): T => {
      let value: T = initialValue;

      const serializedValue = localStorage.getItem(key);
      if (serializedValue === null) return value;

      try {
        value = JSON.parse(serializedValue);
      } catch (error) {
        console.error(`Error in JSON.parse with key: ${key}`, error);
      }

      return value;
    },
    [initialValue]
  );

  useEffect(() => {
    setValue(readSavedValue(key));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key]);

  return [value, saveValue, clearValue];
};
