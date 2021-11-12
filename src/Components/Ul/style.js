import styled from "styled-components";

export const Ul = styled.ul`
  padding-top: 20px;
  display: ${(props) => (props.Job ? "flex" : "")};
  flex-direction: ${(props) => (props.Job ? "column" : "")};
  list-style: none;
  max-width: ${(props) => (props.Job ? "1240px" : "")};
  width: ${(props) => (props.Job ? "100%" : "")};
  margin: ${(props) => (props.Job ? "0 auto" : "")};
`;
