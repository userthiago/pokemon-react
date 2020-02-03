import styled from 'styled-components';

export const LoadingContainer = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.6);
  width: 100%;
  height: 100vh;
  color: #fff;
  font-size: 24px;
  text-align: center;

  img {
    height: 15%;
  }
`;
