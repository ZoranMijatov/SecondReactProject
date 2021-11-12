import { Li } from "../../Li/style";
import jobdata from "./jobdata.json";
import { Button } from "../../Button/style";

const JobPost = () => {
  const jobData = JSON.parse(JSON.stringify(jobdata));

  return jobData.map((data: any) => (
    <Li Job style={data.featured ? { borderLeft: "7px solid #5aa4a3" } : {}}>
      <div
        style={{
          display: "flex",
          padding: "30px 0",
          alignItems: "center",
          gap: "25px",
        }}
      >
        <svg style={{ width: "88px", height: "88px", marginLeft: "30px" }}>
          {data.id === 1 ? (
            <use href={`#photosnap`} />
          ) : data.id === 2 ? (
            <use href={`#manage`} />
          ) : data.id === 3 ? (
            <use href={`#account`} />
          ) : data.id === 4 ? (
            <use href={`#myhome`} />
          ) : data.id === 5 ? (
            <use href={`#loop-studios`} />
          ) : data.id === 6 ? (
            <use href={`#faceit`} />
          ) : data.id === 7 ? (
            <use href={`#shortly`} />
          ) : data.id === 8 ? (
            <use href={`#insure`} />
          ) : data.id === 9 ? (
            <use href={`#eyecam`} />
          ) : data.id === 10 ? (
            <use href={`#airfilter`} />
          ) : (
            ""
          )}
        </svg>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "7px" }}>
            <p style={{ color: "#65A5A7", fontWeight: "bold" }}>
              {data.company}
            </p>
            {data.new ? (
              <Button style={{ marginLeft: "10px" }} JobNew>
                NEW!
              </Button>
            ) : (
              ""
            )}
            {data.featured ? <Button JobsFeatured>FEATURED</Button> : ""}
          </div>
          <h3 style={{ color: "#65A5A7", fontSize: "20px" }}>
            {data.position}
          </h3>
          <div className="small-text-data">
            <p>{data.postedAt}</p>
            <p>{data.contract}</p>
            <p>{data.location}</p>
          </div>
        </div>
      </div>
      <div style={{ display: "flex" }}>
        <Button Job>{data.role}</Button>
        <Button Job>{data.level}</Button>
        {data.tools.map((subdata: any) => (
          <Button Job>{subdata}</Button>
        ))}
        {data.languages.map((subdata: any) => (
          <Button Job>{subdata}</Button>
        ))}
      </div>
    </Li>
  ));
};

export default JobPost;
