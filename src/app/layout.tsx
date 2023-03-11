import "./globals.css";
import { getServerSession } from "next-auth/next";
import { getProviders } from "next-auth/react";
import Login from "components/Login";
import Navbar from "components/Navbar";
import Script from "next/script";
import Footer from "components/Footer";
// import { Roboto } from "@next/font/google";
import { name } from "../../staticProducts";

// const roboto = Roboto({
//   subsets: ["latin"],
//   weight: ["400", "700"],
// });

export default async function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const session = await getServerSession();
    const providers = await getProviders();
    console.log(session);

    return (
        <html lang="en">
            {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
            <head>
                <title>${name}</title>
                <link rel="manifest" href="/manifest.json"></link>
            </head>
            <Script src="../path/to/flowbite/dist/flowbite.bundle.js"></Script>
            <body className="wrapper flex flex-col dark:bg-[#05091a]">
                <div className="fixed w-screen bg-white dark:bg-[#05091a] z-10">
                    <Navbar session={session} />
                </div>
                <div className="h-screen">{children}</div>
                <div className="w-screen  bg-white dark:bg-[#05091a] z-10">
                    {/* <Footer /> */}
                </div>
            </body>
        </html>
    );
}
