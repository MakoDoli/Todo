import styled from "styled-components";

export const StyledHeader = styled.header`
  width: 327px;
  height: 108px;

  gap: 196px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media screen and (min-width: 768px) {
    height: 158px;
    width: 540px;
    .logo {
      width: 157px;
    }
  }
  .switch {
    cursor: pointer;
  }
`;
