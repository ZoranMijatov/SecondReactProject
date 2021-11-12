import styled from "styled-components";

export const Li = styled.li`
  width: ${(props) => (props.Job ? "" : "100%")};
  background-color: ${(props) => (props.Job ? "#fff" : "")};
  display: ${(props) => (props.Job ? "flex" : "")};
  align-items: ${(props) => (props.Job ? "center" : "")};
  justify-content: ${(props) => (props.Job ? "space-between" : "")};
  margin-bottom: ${(props) => (props.Job ? "30px" : "")};
  border-radius: ${(props) => (props.Job ? "10px" : "")};
  box-shadow: ${(props) =>
    props.Job ? "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px" : ""};

  &:hover {
    cursor: ${(props) => (props.Job ? "pointer" : "")};
  }
`;
