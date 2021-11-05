import styled from "styled-components";

export const Button = styled.button`
  background: ${(props) =>
    props.Pricing
      ? "linear-gradient(to right, #a3a8f0, #696fdd)"
      : "transparent"};
  border: none;
  display: ${(props) => (props.Pricing ? "inline-block" : "flex")};
  gap: 20px;
  padding: ${(props) => (props.Pricing ? "16px 0" : "0.925rem 0")};
  padding-left: ${(props) => (props.Pricing ? "0" : "20px")};
  font-size: ${(props) => (props.Pricing ? "16px" : "18px")};
  color: ${(props) => (props.Pricing ? "#fff" : "#6d6fac")};
  font-weight: ${(props) => (props.Pricing ? "bold" : "500")};
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  width: ${(props) => (props.Pricing ? "80%" : "null")};
  text-align: ${(props) => (props.Pricing ? "center" : "null")};
  letter-spacing: ${(props) => (props.Pricing ? "2px" : "null")};
  text-transform: ${(props) => (props.Pricing ? "uppercase" : "null")};
  border-radius: 7px;

  &:hover {
    color: #fff;
  }
`;
