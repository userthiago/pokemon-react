import styled from 'styled-components';

import bg from '../../assets/bg.gif';
import pokeball from '../../assets/pokeball.svg';

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

export const SubmitButton = styled.button.attrs({
  type: 'submit',
})`
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
  background-image: url(${bg});
  height: 200px;
  padding: 0 120px;
  display: flex;
  align-items: center;

  @keyframes animatedBackground {
    from {
      background-position: 0 100%;
    }
    to {
      background-position: 100% 0;
    }
  }

  @-webkit-keyframes animatedBackground {
    from {
      background-position: 0 100%;
    }
    to {
      background-position: 100% 0;
    }
  }

  animation: animatedBackground 40s linear infinite;

  h1 {
    color: #fff;
    font-size: 50px;
  }
`;

export const Pokemon = styled.div`
  background: #fff;
  border-radius: 10px;
  border: 3px solid #000;
  flex: 1;
  margin: 20px 15%;
`;

export const Content = styled.div`
  overflow: auto;
  border-radius: 0 0 6px 6px;
  padding: 20px;
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

export const Balls = styled.div`
  display: flex;
`;

export const Ball = styled.img.attrs(props => ({ src: props.src }))`
  height: 30px;
  width: 30px;

  & + img {
    height: 10px;
    width: 10px;
    margin-left: 5px;
  }
`;

export const PokePhoto = styled.img.attrs(props => ({ src: props.src }))`
  width: 200px;
  height: 200px;
  background-image: url(${pokeball});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  padding: 20px;
  border-radius: 50%;
`;

export const Name = styled.div`
  margin-left: 10px;
`;
