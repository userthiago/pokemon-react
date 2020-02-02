import styled from 'styled-components';

export const PhotoSkeleton = styled.div`
  width: 200px;
  height: 200px;
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
  width: 450px;
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
    width: 450px;
    height: 30px;
    border-radius: 4px;
    color: #fff;
  }
`;
