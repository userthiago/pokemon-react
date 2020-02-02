import styled, { keyframes } from 'styled-components';
import bg from '../../assets/bg.gif';

const bannerMove = keyframes`
  from {
    background-position: 0 0;
  }
  to {
    background-position: 100% -100%;
  }
`;

export const BannerContainer = styled.div`
  background-position: 0 0;
  flex: 1;
  background-image: url(${bg});
  height: 200px;
  padding: 0 120px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 60px;

  animation: ${bannerMove} 60s forwards linear infinite;

  h1 {
    color: #fff;
    font-size: 50px;
  }
`;

export const Logo = styled.img`
  width: 120px;
  margin-right: 16px;
`;
