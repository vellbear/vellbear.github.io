import { Html, Head, Main, NextScript } from "next/document";
export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/*Google Fonts*/}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Antonio:wght@100;400&family=Elsie+Swash+Caps:wght@400;900&family=Six+Caps&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body className="grid lg:justify-center font-antonio font-light subpixel-antialiased bg-zinc-900 text-white">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
