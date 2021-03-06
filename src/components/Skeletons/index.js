import styled from 'styled-components';

export const PhotoSkeleton = styled.div`
  min-width: 200px;
  min-height: 200px;
  border-radius: 50%;
  background: #ddd;
`;

export const TagSkeleton = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;

  p {
    position: absolute;
    bottom: 0;
    width: 46px;
    height: 16px;
    font-size: 12px;
    background-color: #ddd;
    border-radius: 12px;
    padding: 2px 8px;
  }
`;

export const PokeSpriteSkeleton = styled.div`
  margin: 10px;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background-color: #ddd;
`;

export const InfoSkeleton = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  margin-left: 24px;

  div {
    display: flex;
    align-items: center;
    padding: 10px 12px;
    height: 39px;
    background: #ddd;
    border-radius: 4px;
    margin-bottom: 4px;
  }

  p {
    border: 0;
    background: #ddd;
    padding: 5px 20px;
    width: 100%;
    height: 30px;
    border-radius: 4px;
    color: #fff;
  }

  @media screen and (max-width: 650px) {
    margin: 0;

    p {
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 20px;
      height: 60px;
    }
  }
`;
