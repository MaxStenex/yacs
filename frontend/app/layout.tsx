import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import { App } from "@/app/App";

const roboto = Roboto({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
});

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
      <body className={roboto.className}>
        <App>{children}</App>
      </body>
    </html>
  );
};

export default RootLayout;
