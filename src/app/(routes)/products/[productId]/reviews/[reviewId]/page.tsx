import { notFound } from "next/navigation";

const ProductReview = ({
  params,
}: {
  params: {
    productId: string;
    reviewId: string;
  };
}) => {
  const productId = params.productId;
  const reviewId = params.reviewId;

  if (parseInt(reviewId) > 1000) {
    return notFound();
  }

  return (
    <div>
      <h1>
        Product Review about {productId}: the review is {reviewId}
      </h1>
    </div>
  );
};

export default ProductReview;
