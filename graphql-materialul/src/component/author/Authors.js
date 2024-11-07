import { useQuery } from "@apollo/client";
import React from "react";
import { GET_AUTHORS_INFO } from "../../graphql/Queries";

function Authors() {
  const { loading, data, error } = useQuery(GET_AUTHORS_INFO);
  console.log(data);

  if (loading) return <h4>Loading...</h4>;
  if (error) return <h4>somethinf went wrong</h4>;

  return <div>Authors</div>;
}

export default Authors;
