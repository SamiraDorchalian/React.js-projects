import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import App from "./App";

import { InMemoryCache, ApolloClient, ApolloProvider } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://us-west-2.cdn.hygraph.com/content/cm34qayg5029w07we2s91i4og/master",
  cache: new InMemoryCache(),
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);
