import styled from 'styled-components';

export const Welcome = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 50px;

  h2 {
    margin-bottom: 30px;
  }

  @media screen and (max-width: 500px) {
    text-align: center;
    padding: 0 10px;
  }
`;

export const TipContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const Trainer = styled.img`
  width: 15%;
  height: 15%;
  margin-right: 40px;
  @media screen and (max-width: 1050px) {
    width: 30%;
    height: 30%;
    margin: 0;
  }

  @media screen and (max-width: 500px) {
    width: 60%;
    height: 60%;
    margin: 0;
  }
`;

export const Tip = styled.img`
  margin-top: 40px;
  width: 60%;
  height: 60%;
  @media screen and (max-width: 1050px) {
    display: none;
  }
`;

export const TipText = styled.div`
  background: #99bdff;
  border-radius: 6px;
  border: 1px solid #729be7;
  padding: 20px;
  text-align: center;
`;
