import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const StyledNavLink = styled(NavLink)`
  color: ${(props) => (props.Sidebar ? "#fff" : "#919296")};
  font-size: ${(props) => (props.Sidebar ? "16px" : "")};
  text-decoration: none;
  display: ${(props) => (props.Sidebar ? "flex" : "")};
  flex-shrink: ${(props) => (props.Sidebar ? "0" : "")};
  align-items: ${(props) => (props.Sidebar ? "#center" : "")};
  gap: ${(props) => (props.Sidebar ? "20px" : "")};
  padding: ${(props) => (props.Sidebar ? "0.925rem 0" : "0 0 52px")};
  padding-left: ${(props) => (props.Sidebar ? "20px" : "0")};
  height: ${(props) => (props.Sidebar ? "100%" : "")};
  margin-left: ${(props) => (props.Sidebar ? "0" : "50px")};

  &:hover {
    color: ${(props) => (props.Sidebar ? "" : "#222")};
    border-bottom: ${(props) => (props.Sidebar ? "" : "7px solid #FF7D1D")};
  }
`;
