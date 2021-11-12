import styled from "styled-components";

export const JobPostingsWrapper = styled.div`
  width: 100%;
  background: #f0fafb;
  position: relative;

  .small-text-data {
    display: flex;
    color: #848c89;
    gap: 10px;
    p:not(:first-child) {
      display: list-item;
      list-style-type: disc;
      list-style-position: inside;
    }
  }
`;
