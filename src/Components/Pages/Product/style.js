import styled from "styled-components";

export const ProductWrapper = styled.div`
  width: 100%;
  background: #fff;
`;

export const NavigationWrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0 40px;
  border-bottom: 1px solid rgba(128, 128, 128, 0.3);
  width: 100%;
  background: #fff;

  .avatar {
    height: 60px;
    width: 60px;

    &:hover {
      border-radius: 50%;
      cursor: pointer;
      outline: thick solid #ffac6a;
    }
  }
`;

export const ProductInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
  flex: 0 1 50%;
`;

export const Quantifier = styled.div`
  display: flex;
  align-items: center;
  background: #f7f8fd;
  border-radius: 10px;
  gap: 10px;

  input {
    color: #ffac6a;
    font-weight: bold;
    font-size: 30px;
    padding: 10px 25px;
    background: transparent;
    border: none;
    cursor: pointer;
  }

  p {
    padding: 10px;
    font-weight: bold;
    font-size: 16px;
  }
`;

export const ImageWrapper = styled.div`
  flex: 0 1 40%;
  margin-left: 10%;

  .large-img {
    padding: 50% 0;
    background-position: center center;
    background-size: cover;
    border-radius: 16px;
  }

  .small-img-flex-wrap {
    display: flex;
    margin-top: 30px;
    gap: 20px;

    .small-img {
      padding-bottom: 23%;
      background-position: center center;
      background-size: cover;
      flex: 0 1 25%;
      border-radius: 16px;
      transition: opacity 0.2s ease-in-out;

      &:hover {
        cursor: pointer;
        opacity: 0.4;
        outline: thick solid #ffac6a;
      }
    }
  }
`;

export const ProductFlexWrapper = styled.div`
  display: flex;
  gap: 140px;
  padding-top: 100px;
  max-width: 1360px;
  width: 100%;
  margin: 0 auto;
`;
