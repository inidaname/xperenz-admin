import React, { FunctionComponent } from "react";
import Head from "next/head";

export interface IHeadLayout {
  title: string
}

const HeadLayout: FunctionComponent<IHeadLayout> = ({title}) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </>
  );
};

export default HeadLayout;
