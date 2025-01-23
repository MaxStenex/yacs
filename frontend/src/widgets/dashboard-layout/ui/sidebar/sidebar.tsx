"use client";
import React from "react";
import Link from "next/link";
import styles from "./sidebar.module.scss";
import { usePathname } from "next/navigation";
import { classNames } from "@/shared/lib";
import { Button } from "@/shared/ui";

type SidebarLink = {
  text: string;
  href: string;
};

const links: SidebarLink[] = [
  {
    text: "Files",
    href: "/dashboard",
  },
  {
    text: "Trash",
    href: "/trash",
  },
];

export const DashboardSidebar = () => {
  const pathname = usePathname();

  return (
    <div className={styles.container}>
      <div className={styles.controlPanel}>
        <Button>Upload</Button>
        <Button>Create</Button>
      </div>
      <ul className={styles.links}>
        {links.map((l) => (
          <li
            className={classNames(styles.link, {
              [styles.linkActive]: pathname === l.href,
            })}
            key={l.text}
          >
            <Link href={l.href}>{l.text}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
