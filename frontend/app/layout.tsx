import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "@/app/styles/index.scss";
import { ThemeProvider } from "@/entities/theme";

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
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;
