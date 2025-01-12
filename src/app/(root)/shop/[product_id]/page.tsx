import { products } from "@/data/data";
import ProductClient from "./ProductClient";
import Wrapper from "@/components/shared/Wrapper";
import ProductDetails from "./ProductDetail";
import RelatedProduct from "./RelatedProduct";

export const generateStaticParams = () =>
  products.map((product) => ({ product_id: product.id.toString() }));
const ProductPage = ({ params }: { params: { product_id: string } }) => {
  const { product_id } = params;
  const product = products.find((product) => product.id === product_id)!;
  return (
    <div>
      <Wrapper>
        <div className="py-20">
          <ProductClient product={product} />
          <ProductDetails />
        </div>
      </Wrapper>
      <div className="border-t">
        <Wrapper>
          <RelatedProduct />
        </Wrapper>
      </div>
    </div>
  );
};
export default ProductPage;
