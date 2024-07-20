import React from "react";

const Docs = ({
  params,
}: {
  params: {
    slug: string[];
  };
}) => {
  console.log(params.slug);

  return (
    <div>
      <h1>Docs Demo Page</h1>
      {params.slug?.map((slug, index) => (
        <p key={index}>{slug}</p>
      ))}
    </div>
  );
};

export default Docs;
