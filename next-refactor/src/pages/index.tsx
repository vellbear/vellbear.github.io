import Head from "next/head";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Levell Mack</title>
      </Head>
      <main className="grid gap-y-20 lg:w-[1000px] min-w-screen relative">
        <Navbar links={["about", "projects", "contact"]} />
        <Footer />
      </main>
    </>
  );
}
