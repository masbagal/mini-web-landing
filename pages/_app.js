import "../styles/index.css";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans+Condensed:wght@700&family=Open+Sans:wght@300&display=swap"
          rel="stylesheet"
        />
        <script
          src="https://identity.netlify.com/v1/netlify-identity-widget.js"
          async
          defer
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
