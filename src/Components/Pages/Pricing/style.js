import styled from "styled-components";

export const CardWrapper = styled.div`
  display: flex;
  gap: 12px;
  justify-content: center;
  align-items: center;
  background: #f7f7ff;
`;

export const StyledCard = styled.div`
  background-color: #fff;
  border-radius: 12px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  width: 370px;
  transition: all 0.3s ease-in-out;
  position: relative;
  z-index: 1;

  &.primary {
    background: linear-gradient(to right, #a3a8f0, #696fdd);
    transform: scale(1.12);
    position: relative;
    z-index: 2;

    hr {
      background-color: #fff;
    }

    button {
      border: 1px solid #fff;
    }

    h1,
    p,
    span,
    h3 {
      color: #fff;
      transition: color 0.16s ease-in-out;
    }
  }

  p {
    font-weight: 700;
  }

  h3,
  p {
    color: #646477;
  }

  hr {
    background-color: rgba(128, 128, 128, 0.3);
    margin: 18px auto;
    width: 80%;
  }
`;

export const LabelSwitch = styled.label`
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;

  input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  input:checked + .slider {
    background: linear-gradient(to right, #a3a8f0, #696fdd);
  }

  input:not(:checked) + .slider {
    background: linear-gradient(to right, #a3a8f0, #696fdd);
  }

  input:checked + .slider:before {
    transform: translateX(26px);
  }

  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    transition: 0.4s;
    border-radius: 34px;

    &:before {
      position: absolute;
      content: "";
      height: 26px;
      width: 26px;
      left: 4px;
      bottom: 4px;
      background-color: white;
      border-radius: 50%;
      transition: 0.4s;
    }
  }
`;

export const PricingHeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;

  p {
    font-size: 18px;
    color: #b6b5c3;
    font-weight: bold;
  }
`;
