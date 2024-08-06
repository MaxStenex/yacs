import React, { InputHTMLAttributes } from "react";
import styles from "./input.module.scss";
import { classNames } from "@/shared/lib";

interface Props extends InputHTMLAttributes<HTMLInputElement> {}

export const Input: React.FC<Props> = ({ ...rest }) => {
  return <input className={classNames(styles.root, rest.className)} {...rest} />;
};
