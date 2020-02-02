import styled from 'styled-components';

export const HeaderContainer = styled.header`
  position: fixed;
  width: 100%;
  height: 60px;
  top: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: #cc1416;
  padding: 12px 15%;
  div {
    display: flex;
    align-items: center;
    a {
      display: flex;
      align-items: center;
      text-decoration: none;
      background: #7a0002;
      color: #fff;
      max-height: 35px;
      padding: 10px;
      border-radius: 4px;

      & + a {
        margin: 10px;
      }

      &:hover {
        background: #8b0002;
      }
    }
  }
`;
