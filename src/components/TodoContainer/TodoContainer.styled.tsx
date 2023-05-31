import styled from "styled-components";

export const StyledContainer = styled.main<{ mode: boolean }>`
  width: 327px;

  .input {
    background: ${(props) => (props.mode ? "#25273d" : "#FFFFFF")};
    width: 327px;
    height: 48px;

    box-shadow: ${(props) =>
      props.mode
        ? "0px 35px 50px -15px rgba(0, 0, 0, 0.5)"
        : "0px 35px 50px -15px rgba(194, 195, 214, 0.5)"};
    border-radius: 5px;
    display: flex;
    align-items: center;
    margin-bottom: 16px;
  }
  .input-circle {
    cursor: pointer;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    border: 1px solid #393a4b;
    margin: 0 12px 0 20px;
    &:hover {
      background: linear-gradient(135deg, #55ddff 0%, #c058f3 100%);
    }
  }
  input {
    height: 48px;
    background: ${(props) => (props.mode ? "#25273d" : "white")};

    border-radius: 5px;
    outline: none;
    border: none;
    font-family: "Josefin Sans";
    font-style: normal;
    font-weight: 400;
    font-size: 13px;
    line-height: 12px;
    letter-spacing: -0.166667px;
    color: #767992;
  }
  .list-container {
    width: 327px;
    background-color: ${(props) => (props.mode ? "#25273d" : "#FFFFFF")};
    box-shadow: ${(props) =>
      props.mode
        ? "0px 35px 50px -15px rgba(0, 0, 0, 0.5)"
        : "0px 35px 50px -15px rgba(194, 195, 214, 0.5)"};
    margin-bottom: 16px;
    border-radius: 5px;
  }
  .item {
    box-shadow: ${(props) =>
      props.mode
        ? "0px 35px 50px -15px rgba(0, 0, 0, 0.5)"
        : "0px 35px 50px -15px rgba(194, 195, 214, 0.5)"};
    position: relative;
    width: 327px;
    height: 52px;
    background: ${(props) => (props.mode ? "#25273d" : "white")};

    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    border-radius: 5px;
    border-bottom: ${(props) =>
      props.mode ? "1px solid  #393a4b" : "1px solid #E3E4F1"};
    p {
      margin-left: 12px;
      font-family: "Josefin Sans";
      font-style: normal;
      font-weight: 400;
      font-size: 13px;
      line-height: 12px;
      letter-spacing: -0.166667px;
      color: ${(props) => (props.mode ? "#c8cbe7" : "#494C6B")};
    }
    .tick {
      position: absolute;
      left: 25px;
      display: none;
    }
    .tick.crossed {
      display: block;
    }
    .crossed {
      text-decoration-line: line-through;
      color: ${(props) => (props.mode ? "#4D5067" : "#D1D2DA")};
    }
    .single {
      display: flex;
      align-items: center;
    }
    .delete {
      cursor: pointer;
    }
    .summary {
      color: #5b5e7e;
      cursor: pointer;
    }
    button {
      cursor: pointer;
      border: none;
      background-color: ${(props) => (props.mode ? "#25273d" : "#FFFFFF")};
      font-family: "Josefin Sans";
      font-style: normal;
      font-weight: 700;
      font-size: 14px;
      line-height: 14px;
      letter-spacing: -0.194444px;
      color: #5b5e7e;
      &:focus,
      &:hover {
        color: #3a7cfd;
      }
      @media screen and (min-width: 768px) {
        font-size: 18px;
        line-height: 18px;
      }
    }
  }
  @media screen and (min-width: 768px) {
    width: 540px;
    input {
      font-size: 18px;
      line-height: 18px;
    }

    .input {
      margin-bottom: 24px;
    }
    .input,
    .item {
      width: 540px;
      height: 64px;
      p {
        font-size: 18px;
        line-height: 18px;
      }
    }
    .list-container {
      width: 540px;
    }
  }
`;
