import styled from 'styled-components';

export const PokedexHeader = styled.div`
  background: #fff;
  border-radius: 10px;
  border: 3px solid #000;
  flex: 1;
  margin: 20px 15%;
`;

export const Title = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  flex: 1;
  padding: 0 20px;
  font-weight: bold;
  height: 50px;
  text-transform: uppercase;
  background: #cc1416;
  color: #fff;
  border-radius: 6px 6px 0 0;
  border-bottom: 3px solid #000;
`;

export const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 0 0 6px 6px;
  padding: 40px 20px;
`;

export const Balls = styled.div`
  display: flex;
`;

export const Ball = styled.img.attrs(props => ({ src: props.src }))`
  height: 30px;
  width: 30px;

  & + img {
    height: 10px;
    width: 10px;
    margin-left: 8px;
  }
`;
