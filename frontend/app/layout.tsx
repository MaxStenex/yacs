import type { Metadata } from "next";
import Link from "next/link";
import "@/app/styles/index.scss";

export const metadata: Metadata = {
  title: "Yet Another Cloud Storage",
  description: "Yet another cloud storage",
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="en">
      <body>
        <header>
          <Link href="/">Home</Link>
          <br />
          <Link href="/sign-in">Sign in</Link>
          <br />
          <Link href="/sign-up">Sign up</Link>
        </header>
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
