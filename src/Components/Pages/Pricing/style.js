import styled from "styled-components";

export const CardWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background: #f7f7ff;
`;

export const StyledCard = styled.div`
  background: #fff;
  border-radius: 12px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  width: 380px;

  p {
    font-weight: 700;
    color: #646477;
  }

  h3 {
    color: #646477;
  }

  hr {
    background-color: rgba(128, 128, 128, 0.3);
    margin: 16px auto;
    width: 80%;
  }
`;
