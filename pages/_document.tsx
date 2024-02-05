import { Html, Head, Main, NextScript } from 'next/document';
import { useRouter } from 'next/router';
import basePath from '@/next.config'
import React, { Fragment, useEffect } from "react";
import { ThemeChanger } from '@/shared/redux/actions';
import { localStorageBackUp } from '@/shared/data/switcherdata/switcherdata';
export default function Document() {
  return (
    <Html lang="en" >
      <Head>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
