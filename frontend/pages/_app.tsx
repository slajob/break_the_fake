import "../styles/globals.css";
import type { AppProps } from "next/app";
import Menu from "../src/components/Menu/Menu";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <Menu />
      <Component {...pageProps} />
    </QueryClientProvider>
  );
}
