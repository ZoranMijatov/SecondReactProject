import styled from "styled-components";

export const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(5, 1fr);
  grid-column-gap: 20px;
  grid-row-gap: 20px;
  margin: 0 auto;
  padding-top: 100px;
  width: 100%;

  .GridChild--1 {
    grid-area: 1 / 2 / 5 / 3;
    margin-top: 0;
    background: #1d204b;

    .select-time {
      margin-top: 20px;
      margin-left: 10px;
    }

    .dark-child-div {
      margin: 0;
      height: 70%;
      background: #5746ea;

      &:hover {
        background: #5746ea;
        cursor: default;
      }

      div {
        align-items: stretch;
        margin: 0;
      }
    }
  }

  .GridChild-0 {
    grid-area: 1 / 3 / 3 / 6;
    background: #ff8b64;
  }

  .GridChild-1 {
    grid-area: 1 / 4 / 3 / 4;
    background: #56c2e6;
  }

  .GridChild-2 {
    grid-area: 1 / 5 / 3 / 6;
    background: #ff5e7d;
  }

  .GridChild-3 {
    grid-area: 3 / 3 / 5 / 4;
    background: #4bcf82;
  }

  .GridChild-4 {
    grid-area: 3 / 4 / 5 / 5;
    background: #7235d1;
  }

  .GridChild-5 {
    grid-area: 3 / 5 / 5 / 6;
    background: #f1c75b;
  }
`;

export const GridChild = styled.div`
  width: 350px;
  border-radius: 30px;
  position: relative;

  .absolute-svg {
    position: absolute;
    top: 0;
    right: 25px;
    width: 82px;
    height: 100px;
  }

  .dark-child-div {
    height: 84%;
    background: #1d204b;
    border-radius: 30px;
    margin-top: 16%;
    position: relative;
    z-index: 1;
    transition: all 0.2s ease-in-out;

    &:hover {
      background: #34397b;
      cursor: pointer;
    }

    .person-info {
      display: flex;
      flex-direction: column;
      gap: 30px;
      padding: 30px 40px 0;

      p {
        font-size: 16px;
        color: #fff;
      }
      &-img {
        width: 100px;
        height: 100px;

        img {
          width: 100%;
          border-radius: 50%;
          border: 3px solid #fff;
        }
      }
    }

    div {
      margin: 0 30px;
      padding-top: 25px;
    }

    &-child {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    &-data {
      display: flex;
      flex-direction: column;
    }
  }
`;

export const SpriteIcons = styled.svg`
  display: none;
`;
