import { ApolloProvider } from "@apollo/client";
import client from "../config/apollo";

function MyApp({ Component, pageProps }) {
  console.log("desde el archivo principal");

  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

export default MyApp;
