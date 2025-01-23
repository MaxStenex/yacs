import React, { ButtonHTMLAttributes, PropsWithChildren } from "react";
import styles from "./button.module.scss";
import { classNames } from "@/shared/lib";

type Props = {} & ButtonHTMLAttributes<HTMLButtonElement> & PropsWithChildren;

export const Button: React.FC<Props> = ({ children, ...rest }) => {
  return (
    <button {...rest} className={classNames(styles.root, rest.className)}>
      {children}
    </button>
  );
};
