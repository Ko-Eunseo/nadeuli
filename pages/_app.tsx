import React from "react";
import type { NextPageContext } from "next";
import type { AppProps } from "next/app";
import {
  DehydratedState,
  Hydrate,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { RecoilRoot } from "recoil";
import GlobalStyle from "@/styles/globalStyle";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

type PageProps = {
  dehydratedState?: DehydratedState;
};
type ExtendedAppProps<P = {}> = {
  err?: NextPageContext["err"];
} & AppProps<P>;

export default function MyApp({
  Component,
  pageProps,
}: ExtendedAppProps<PageProps>): React.JSX.Element {
  const [queryClient] = React.useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <Hydrate state={pageProps.dehydratedState}>
          <GlobalStyle />
          <Component {...pageProps} />
        </Hydrate>
      </RecoilRoot>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}
