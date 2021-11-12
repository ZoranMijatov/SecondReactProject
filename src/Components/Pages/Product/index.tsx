import Navigation from "./Navigation";
import { ProductWrapper } from "./style";
import ProductInfo from "./ProductInfo";

const Product = () => {
  return (
    <ProductWrapper>
      <Navigation />
      <ProductInfo />
    </ProductWrapper>
  );
};

export default Product;
