import React from "react";
import PricingCard from "./PricingCard";
import { CardWrapper } from "./style";

const Pricing = () => {
  return (
    <CardWrapper>
      <PricingCard
        title={"Basic"}
        price={"199.99"}
        storage={"500 GB Storage"}
        bandwidth={"2 Users Allowed"}
        uploadSpeed={"Send Up To 3 GB"}
      />
      <PricingCard
        title={"Professional"}
        price={"249.99"}
        storage={"1 TB Storage"}
        bandwidth={"5 Users Allowed"}
        uploadSpeed={"Send Up To 10 GB"}
      />
      <PricingCard
        title={"Master"}
        price={"399.99"}
        storage={"2 TB Storage"}
        bandwidth={"10 Users Allowed"}
        uploadSpeed={"Send Up To 20 GB"}
      />
    </CardWrapper>
  );
};

export default Pricing;
