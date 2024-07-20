import { Metadata } from "next";

type Props = {
  params: {
    productId: string;
  };
};

export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const title = await new Promise((resolve) => {
    setTimeout(() => {
      resolve(`IPHONE ${params.productId}`);
    }, 100);
  });
  return {
    title: `Product Detail of ${title}`,
    description: `Product Detail of ${params.productId}`,
  };
};

const ProductDetail = ({ params }: Props) => {
  const id = params.productId;
  return (
    <div>
      <h1>Product Detail</h1>
      <div>{id}</div>
    </div>
  );
};

export default ProductDetail;
