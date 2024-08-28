import React, { PropsWithChildren } from "react";
import styles from "./typography.module.scss";
import { classNames } from "@/shared/lib";

type Variant = "h1" | "h2" | "h3" | "h4" | "h5" | "body";

const variantToHtmlTagNameMap: Record<Variant, keyof HTMLElementTagNameMap> = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  body: "p",
};

interface Props extends PropsWithChildren {
  variant?: Variant;
}

export const Typography: React.FC<Props> = ({ children, variant = "body" }) => {
  const Tag = variantToHtmlTagNameMap[variant];

  return <Tag className={classNames(styles.root, styles[variant])}>{children}</Tag>;
};
