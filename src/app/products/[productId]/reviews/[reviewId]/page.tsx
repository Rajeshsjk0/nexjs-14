const productReview = ({
  params,
}: {
  params: {
    productId: string;
    reviewId: string;
  };
}) => {
  const productId = params.productId;
  const reviewId = params.reviewId;

  return (
    <div>
      <h1>
        Product Review about {productId}: the review is {reviewId}
      </h1>
    </div>
  );
};

export default productReview;
