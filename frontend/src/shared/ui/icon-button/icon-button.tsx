import React, { MouseEventHandler, PropsWithChildren } from "react";
import styles from "./icon-button.module.scss";
import { classNames } from "@/shared/lib";

interface Props extends PropsWithChildren {
  rippleSize?: number;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

export const IconButton: React.FC<Props> = ({ children, onClick, rippleSize = 7 }) => {
  return (
    <button
      className={classNames({
        [styles.root]: true,
        [styles.ripple]: rippleSize > 0,
      })}
      style={{
        padding: rippleSize,
      }}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
