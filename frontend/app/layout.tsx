import type { Metadata } from "next";
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
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;
