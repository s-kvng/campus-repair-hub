import { Inter } from "next/font/google";
import "@/styles/globals.css";
import { Providers } from "../providers";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import AuthProvider from "@/context/AuthContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Campus Repair Hub",
  description: "Generated by create next app",
};

export default function ProtectedLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <Providers>
            <AntdRegistry>{children}</AntdRegistry>
          </Providers>
        </AuthProvider>
      </body>
    </html>
  );
}
