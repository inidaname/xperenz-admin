import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <meta
        name="keywords"
        content="Avoid Regulatory Pitfalls and Fraud with CaaS."
      />
      <meta property="og:title" content="My page title" key="title" />
      <Head />
      <body className="bg-dashboardBg">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
