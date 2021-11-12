import { GridChild } from "./style";
import { H3 } from "../../H3/style";
import { H1 } from "../../H1/style";
import { Button } from "../../Button/style";
import Zoran from "./Zoran.jpg";
import data from "./data.json";
import { useSelector, useDispatch } from "react-redux";
import {
  daily,
  weekly,
  monthly,
} from "../../../Redux/Reducers/productivitySlice";
import { RootState } from "../../../Redux/store";

const Card = () => {
  const allData = JSON.parse(JSON.stringify(data));
  const productivity = useSelector((state: RootState) => state.productivity);

  return allData.map((data: any, i: any) => (
    <GridChild key={i} className={`GridChild-${i}`}>
      <svg className="absolute-svg">
        {i === 0 ? (
          <use href={`#work`} />
        ) : i === 1 ? (
          <use href={`#play`} />
        ) : i === 2 ? (
          <use href={`#study`} />
        ) : i === 3 ? (
          <use href={`#exercise`} />
        ) : i === 4 ? (
          <use href={`#social`} />
        ) : (
          <use href={`#self-care`} />
        )}
      </svg>
      <div className="dark-child-div">
        <div className="dark-child-div-child">
          <H3>{data.title}</H3>
          <svg width="21" height="5" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M2.5 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Z"
              fill="#fff"
              fill-rule="evenodd"
            />
          </svg>
        </div>
        <div className="dark-child-div-data" style={{ marginTop: "30px" }}>
          <p style={{ fontSize: "75px", color: "#fff" }}>
            {productivity.value === 1
              ? `${data.timeframes.daily.current}hrs`
              : productivity.value === 2
              ? `${data.timeframes.weekly.current}hrs`
              : productivity.value === 3
              ? `${data.timeframes.monthly.current}hrs`
              : productivity.value}
          </p>
          <p style={{ fontSize: "25", color: "#fff", letterSpacing: "2px" }}>
            {productivity.value === 1
              ? `Yesterday - ${data.timeframes.daily.previous}hrs`
              : productivity.value === 2
              ? `Last Week - ${data.timeframes.weekly.previous}hrs`
              : productivity.value === 3
              ? `Last Month - ${data.timeframes.monthly.previous}hrs`
              : productivity.value}
          </p>
        </div>
      </div>
    </GridChild>
  ));
};

const PersonCard = () => {
  const dispatch = useDispatch();

  return (
    <GridChild className="GridChild--1">
      <div className="dark-child-div">
        <div className="person-info">
          <div className="person-info-img">
            <img src={`${Zoran}`} alt="" />
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <p>Report for</p>
            <H1>Zoran Mijatov</H1>
          </div>
        </div>
      </div>
      <div className="select-time">
        <Button onClick={() => dispatch(daily())}>Daily</Button>
        <Button onClick={() => dispatch(weekly())}>Weekly</Button>
        <Button onClick={() => dispatch(monthly())}>Monthly</Button>
      </div>
    </GridChild>
  );
};

export { PersonCard, Card };
