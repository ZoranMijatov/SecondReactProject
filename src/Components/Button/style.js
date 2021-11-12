import styled from "styled-components";

export const Button = styled.button`
  background: ${(props) =>
    props.Pricing
      ? "linear-gradient(to right, #a3a8f0, #696fdd);"
      : props.Job
      ? "#EEF7F6"
      : props.JobNew
      ? "#5DA6A5"
      : props.JobsFeatured
      ? "#111"
      : props.AddToCart
      ? "#FFAC6A"
      : "transparent"};
  border: ${(props) => (props.Pricing ? "2px solid #fff" : "none")};
  display: ${(props) => (props.Pricing ? "inline-block" : "flex")};
  align-items: ${(props) => (props.AddToCart ? "center" : "")};
  gap: 20px;
  margin-top: ${(props) => (props.Pricing ? "30px" : "0")};
  padding: ${(props) =>
    props.Pricing || props.AddToCart
      ? "16px 0"
      : props.Job
      ? "10px"
      : props.JobsFeatured || props.JobNew
      ? "5px 10px 5px"
      : "0.925rem 0"};
  padding-left: ${(props) =>
    props.Pricing || props.AddToCart
      ? "0"
      : props.Job
      ? "10px"
      : props.JobsFeatured || props.JobNew
      ? "10px"
      : "20px"};
  font-size: ${(props) =>
    props.Pricing
      ? "14px"
      : props.Job || props.JobsFeatured || props.JobNew
      ? "14px"
      : "18px"};
  color: ${(props) =>
    props.Pricing || props.JobsFeatured || props.JobNew || props.AddToCart
      ? "#fff"
      : props.Job
      ? "#65A69C"
      : "#6d6fac"};
  font-weight: ${(props) =>
    props.Pricing
      ? "bold"
      : props.Job
      ? "bold"
      : props.JobsFeatured || props.JobNew || props.AddToCart
      ? "600"
      : "500"};
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  width: ${(props) => (props.Pricing ? "80%" : "null")};
  text-align: ${(props) => (props.Pricing ? "center" : "null")};
  letter-spacing: ${(props) => (props.Pricing ? "2px" : "null")};
  text-transform: ${(props) => (props.Pricing ? "uppercase" : "null")};
  border-radius: ${(props) =>
    props.JobsFeatured || props.JobNew
      ? "20px"
      : props.AddToCart
      ? "12px"
      : "7px"};
  margin-right: ${(props) => (props.Job ? "15px" : "")};

  &:hover {
    border: ${(props) =>
      props.Pricing ? "2px solid rgba(112, 118, 223, 0.5)" : "none"};
    color: ${(props) => (props.Pricing ? "#7076DF" : "#fff")};
    background: ${(props) =>
      props.Pricing ? "#fff" : props.Job ? "#59A5A8" : null};
    box-shadow: ${(props) =>
      props.AddToCart ? `rgba(0, 0, 0, 0.2) 0px 18px 50px -10px` : ""};
  }
`;
