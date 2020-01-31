import styled from 'styled-components';

export const Container = styled.div``;

export const Header = styled.header`
  flex: 1;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: #cc1416;
  padding: 12px 0;
`;

export const Form = styled.form`
  display: flex;
  input {
    padding: 8px 16px;
    width: 500px;
    height: 35px;
    border-radius: 4px 0 0 4px;
    border: 1px solid #eee;
  }
`;

export const SubmitButton = styled.button`
  height: 35px;
  width: 35px;
  border: 0;
  background: #8b0002;
  border-radius: 0 4px 4px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  svg {
    color: white;
  }
`;

export const Banner = styled.div`
  flex: 1;
  background: #4182c4;
  height: 200px;
`;
