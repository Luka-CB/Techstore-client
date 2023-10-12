import React from "react";
import { Helmet } from "react-helmet-async";

const Head = ({
  title,
  description = "This is a demo website for portfolio",
}) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
    </Helmet>
  );
};

export default Head;
