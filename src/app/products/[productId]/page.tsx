const productDetail = ({
  params,
}: {
  params: {
    productId: string;
  };
}) => {
  const id = params.productId;
  return (
    <div>
      <h1>Product Detail</h1>
      <div>{id}</div>
    </div>
  );
};

export default productDetail;
