import { LabelSwitch, PricingHeaderWrapper } from "./style";
import { H2 } from "../../H2/style";
import { useDispatch } from "react-redux";
import { togglePricing } from "../../../Redux/Reducers/pricingSlice";

const TogglePackages = () => {
  const dispatch = useDispatch();

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "30px",
        padding: "70px 0",
      }}
    >
      <H2>Our Pricing</H2>
      <PricingHeaderWrapper>
        <p>Annually</p>
        <LabelSwitch>
          <input type="checkbox" onChange={() => dispatch(togglePricing())} />
          <span className="slider" />
        </LabelSwitch>
        <p>Monthly</p>
      </PricingHeaderWrapper>
    </div>
  );
};

export default TogglePackages;
