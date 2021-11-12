import PricingCard from "./PricingCard";
import { CardWrapper } from "./style";
import TogglePackages from "./TogglePackages";
import { useSelector } from "react-redux";
import { RootState } from "../../../Redux/store";

const Pricing = () => {
  const pricing = useSelector((state: RootState) => state.pricing);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        position: "relative",
      }}
    >
      <svg
        style={{ position: "absolute", right: "0", top: "0" }}
        xmlns="http://www.w3.org/2000/svg"
        width="375"
        height="658"
      >
        <g fill="none" fill-rule="evenodd" stroke="#D0D5F6" stroke-width="2">
          <path d="M172.71-101C70.623-79.38 17.478-39.688 13.273 18.074c-6.307 86.643 231.598 17.186 136.358 198-95.241 180.813-181.318 185.29-136.358 298C58.233 626.784 178.96 685.954 319.21 641.2c93.501-29.836 144.652-140.545 153.453-332.126" />
          <path d="M214.7-101C134.617-82.012 92.926-47.154 89.628 3.575c-4.948 76.093 181.679 15.094 106.966 173.89C121.882 336.262 54.36 340.192 89.628 439.18c35.269 98.986 129.974 150.95 239.995 111.646C402.97 524.622 443.096 427.395 450 259.141" />
          <path d="M250.935-103c-60.604 16.56-92.153 46.963-94.65 91.208-3.743 66.367 137.488 13.165 80.949 151.664-56.54 138.5-107.638 141.927-80.948 228.261 26.69 86.335 98.359 131.656 181.618 97.376C393.41 442.655 423.775 357.855 429 211.108" />
        </g>
      </svg>

      <svg
        style={{ position: "absolute", left: "0", bottom: "0" }}
        xmlns="http://www.w3.org/2000/svg"
        width="353"
        height="304"
      >
        <g fill="none" fill-rule="evenodd" stroke="#D0D5F6" stroke-width="2">
          <path d="M180.29 759c102.087-21.62 155.232-61.312 159.437-119.074 6.307-86.643-231.598-17.186-136.358-198 95.241-180.813 181.318-185.29 136.358-298C294.767 31.216 174.04-27.954 33.79 16.8c-93.501 29.836-144.652 140.545-153.453 332.126" />
          <path d="M138.3 759c80.083-18.988 121.774-53.846 125.072-104.575 4.948-76.093-181.679-15.094-106.966-173.89C231.118 321.738 298.64 317.808 263.372 218.82 228.103 119.834 133.398 67.87 23.377 107.174-49.97 133.378-90.096 230.605-97 398.859" />
          <path d="M102.065 761c60.604-16.56 92.153-46.963 94.65-91.208 3.743-66.367-137.488-13.165-80.949-151.664 56.54-138.5 107.638-141.927 80.948-228.261-26.69-86.335-98.359-131.656-181.618-97.376C-40.41 215.345-70.775 300.145-76 446.892" />
        </g>
      </svg>

      <TogglePackages />
      <CardWrapper>
        <PricingCard
          title={"Basic"}
          price={pricing.value ? "199.99" : "19.99"}
          storage={"500 GB Storage"}
          bandwidth={"2 Users Allowed"}
          uploadSpeed={"Send Up To 3 GB"}
        />
        <PricingCard
          title={"Professional"}
          price={pricing.value ? "249.99" : "24.99"}
          storage={"1 TB Storage"}
          bandwidth={"5 Users Allowed"}
          uploadSpeed={"Send Up To 10 GB"}
          primaryCard={true}
        />
        <PricingCard
          title={"Master"}
          price={pricing.value ? "399.99" : "39.99"}
          storage={"2 TB Storage"}
          bandwidth={"10 Users Allowed"}
          uploadSpeed={"Send Up To 20 GB"}
        />
      </CardWrapper>
    </div>
  );
};

export default Pricing;
