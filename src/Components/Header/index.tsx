import React from "react";
import { Button } from "../Button/style";
import { Nav, Ul } from "./style";

const Header = () => {
  return (
    <Nav>
      <Ul>
        <li>
          <Button>Home</Button>
        </li>
        <li>
          <Button>Something</Button>
        </li>
        <li>
          <Button>Something</Button>
        </li>
      </Ul>
    </Nav>
  );
};

export default Header;
