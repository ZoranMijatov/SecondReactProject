import {
  ProductInfoWrapper,
  Quantifier,
  ImageWrapper,
  ProductFlexWrapper,
} from "./style";
import { H1 } from "../../H1/style";
import { H4 } from "../../H4/style";
import { Button } from "../../Button/style";
import bigImage from "./Images/image-product-1.jpg";
import smallImage1 from "./Images/image-product-1-thumbnail.jpg";
import smallImage2 from "./Images/image-product-2-thumbnail.jpg";
import smallImage3 from "./Images/image-product-3-thumbnail.jpg";
import smallImage4 from "./Images/image-product-4-thumbnail.jpg";

const ProductInfo = () => {
  return (
    <ProductFlexWrapper>
      <ImageWrapper>
        <div
          className="large-img"
          style={{ backgroundImage: `url(${bigImage})` }}
        ></div>
        <div className="small-img-flex-wrap">
          <div
            className="small-img"
            style={{ backgroundImage: `url(${smallImage1})` }}
          ></div>
          <div
            className="small-img"
            style={{ backgroundImage: `url(${smallImage2})` }}
          ></div>
          <div
            className="small-img"
            style={{ backgroundImage: `url(${smallImage3})` }}
          ></div>
          <div
            className="small-img"
            style={{ backgroundImage: `url(${smallImage4})` }}
          ></div>
        </div>
      </ImageWrapper>
      <ProductInfoWrapper>
        <p
          style={{
            color: "#FF7D1D",
            textTransform: "uppercase",
            letterSpacing: "1px",
            fontWeight: "bold",
          }}
        >
          Sneaker company
        </p>
        <H1 Product>Fall Limited Edition Sneakers</H1>
        <p
          style={{
            marginTop: "30px",
            color: "#777",
            maxWidth: "570px",
            letterSpacing: "1px",
            fontSize: "16px",
            lineHeight: "1.5",
          }}
        >
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they'll withstand everything
          the weather can offer
        </p>
        <H4>$125.00</H4>
        <div style={{ display: "flex", gap: "20px", marginTop: "40px" }}>
          <Quantifier>
            <input type="button" value="+" title="Increase Quantity" />
            <p>1</p>
            <input type="button" value="-" title="Decrease Quantity" />
          </Quantifier>
          <Button
            AddToCart
            style={{ paddingLeft: "70px", paddingRight: "70px" }}
          >
            <svg
              width="25"
              height="23"
              viewBox="0 0 22 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
                fill="#fff"
              />
            </svg>
            Add to cart
          </Button>
        </div>
      </ProductInfoWrapper>
    </ProductFlexWrapper>
  );
};

export default ProductInfo;
