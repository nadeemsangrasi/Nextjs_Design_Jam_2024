import ProductClient from "./ProductClient";
import Wrapper from "@/components/shared/Wrapper";
import RelatedProduct from "./RelatedProduct";
import { getProductsFromSanity } from "@/lib/FetchProducts";
import { IProduct } from "@/types/types";

export const generateStaticParams = async () => {
  const products = await getProductsFromSanity();
  return products.map((product: IProduct) => ({
    product_id: product._id.toString(),
  }));
};

const ProductPage = async ({ params }: { params: { product_id: string } }) => {
  const products = await getProductsFromSanity();
  const { product_id } = params;
  const product = products.find(
    (product: IProduct) => product._id === product_id
  )!;
  return (
    <div>
      <Wrapper>
        <div className="py-20">
          <ProductClient product={product} />
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
