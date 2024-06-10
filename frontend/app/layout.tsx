import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "YACS",
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
