import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* / */}
        {/*-Font Icon*/}
        <link
          href="static/plugin/font-awesome/css/fontawesome-all.min.css"
          rel="stylesheet"
        />
        <link
          href="static/plugin/themify-icons/themify-icons.css"
          rel="stylesheet"
        />
        {/* / */}
        {/* Plugin CSS */}
        <link
          href="static/plugin/bootstrap/css/bootstrap.min.css"
          rel="stylesheet"
        />
        <link
          href="static/plugin/owl-carousel/css/owl.carousel.min.css"
          rel="stylesheet"
        />
        <link href="static/plugin/magnific/magnific-popup.css" rel="stylesheet" />
        <link href="static/plugin/nav/css/component.css" rel="stylesheet" />
        {/* / */}
        {/* Theme Style */}
        <link href="static/css/styles.css" rel="stylesheet" />
        <link href="static/css/color/default.css" rel="stylesheet" />
        {/* / */}
        {/* Favicon */}
        <link rel="icon" href="favicon.ico" />
        {/* / */}
        {/* Add other stylesheets as needed */}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
