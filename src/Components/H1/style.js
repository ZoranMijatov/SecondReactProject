import styled from "styled-components";

export const H1 = styled.h1`
  font-size: ${(props) => (props.Pricing ? "75px" : "52px")};
  font-weight: ${(props) => (props.Pricing ? "700" : "400")};
  color: ${(props) => (props.Pricing ? "#4D5062" : "#fff")};
  margin: ${(props) => (props.Pricing ? "10px 0 20px" : null)};
`;
