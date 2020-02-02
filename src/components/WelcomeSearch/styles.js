import styled from 'styled-components';

export const Welcome = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 50px;

  h2 {
    margin-bottom: 30px;
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
`;

export const Tip = styled.img`
  margin-top: 40px;
  width: 60%;
  height: 60%;
`;

export const TipText = styled.div`
  background: #99bdff;
  border-radius: 6px;
  border: 1px solid #729be7;
  padding: 20px;
  text-align: center;
`;
