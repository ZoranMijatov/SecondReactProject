import React from "react";
import { StyledCard } from "./style";
import { H1 } from "../../H1/style";
import { Button } from "../../Button/style";

interface CardDetails {
  title: string;
  storage: string;
  price: string | number;
  bandwidth: string;
  uploadSpeed: string;
  primaryCard?: boolean;
}

const PricingCard = ({
  title,
  storage,
  price,
  bandwidth,
  uploadSpeed,
  primaryCard,
}: CardDetails) => {
  return (
    <StyledCard className={primaryCard ? "primary" : ""}>
      <div
        style={{
          textAlign: "center",
          paddingTop: "30px",
          paddingBottom: "40px",
        }}
      >
        <h3>{title}</h3>
        <H1
          Pricing
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "5px",
          }}
        >
          <span style={{ fontSize: "43px" }}>$</span>
          {price}
        </H1>
        <hr />
        <p>{storage}</p>
        <hr />
        <p>{bandwidth}</p>
        <hr />
        <p>{uploadSpeed}</p>
        <hr />
        <Button Pricing>Learn More</Button>
      </div>
    </StyledCard>
  );
};

export default PricingCard;
