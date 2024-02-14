import { FC } from "react";
import Head from "next/head";

interface CustomHeadProps {
  pageTitle: string;
}

const CustomHead: FC<CustomHeadProps> = ({ pageTitle }) => {
  return (
    <Head>
      <meta charSet="utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
      {/* Page Title */}
      <title>{pageTitle}</title>
    </Head>
  );
};

export default CustomHead;
