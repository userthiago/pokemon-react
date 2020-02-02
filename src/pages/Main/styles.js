import styled, { keyframes, css } from 'styled-components';
import pokeball from '../../assets/pokeball.svg';
import ballSprite from '../../assets/pokeballSprite.png';

export const Container = styled.div``;

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

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(-360deg);
  }
`;

export const SubmitButton = styled.button.attrs(props => ({
  type: 'submit',
  disabled: props.loading,
}))`
  height: 35px;
  width: 35px;
  border: 0;
  background: #7a0002;
  border-radius: 0 4px 4px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  svg {
    color: white;
  }

  &:hover {
    background: #8b0002;
  }

  &[disabled] {
    cursor: not-allowed;
    opacity: 0.6;
  }

  ${props =>
    props.loading &&
    css`
      svg {
        animation: ${rotate} 2s linear infinite;
      }
    `}
`;

export const PokemonList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  list-style: none;

  li {
    border: 2px solid #444;
    border-radius: 8px;
    background: #999;
    margin: 10px 10px;
  }

  img {
    width: 150px;
    background-image: url(${ballSprite});
    background-repeat: no-repeat;
    background-position: center;
    background-size: 80%;
  }

  div {
    background: #444;
    color: #fff;
    font-weight: bold;
    border-radius: 4px 0 4px 0;
    padding: 4px;
    width: 70px;
    text-align: center;
  }

  p {
    text-align: center;
    font-weight: bold;
    color: #fff;
    background: #444;
    border-radius: 0 0 4px 4px;
    padding: 4px 0;
    &::first-letter {
      text-transform: uppercase;
    }

    a {
      text-decoration: none;
      color: #fff;

      &:hover {
        color: #cc1416;
      }
    }
  }
`;

export const AddMoreButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  color: white;
  background: #444;
  border: 0;

  &:hover {
    background: #666;
  }
`;

export const PokemonMinInfo = styled.div`
  display: flex;
  justify-content: center;
  border: 1px solid #bbb;
  background: #eee;
  padding: 16px;
  border-radius: 8px;
  position: relative;
`;

export const PokeID = styled.div`
  position: absolute;
  top: -10px;
  left: -10px;
  padding: 4px;
  background: #bbb;
  border-radius: 4px;
  width: 70px;
  text-align: center;
  color: #fff;
  font-weigth: bold;
`;

export const PokePhoto = styled.img.attrs(props => ({ src: props.src }))`
  width: 200px;
  height: 200px;
  background-image: url(${pokeball});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  padding: 5px;
  border-radius: 50%;
`;

export const Sprites = styled.div`
  display: flex;
  flex-direction: column;
`;

export const PokeSprite = styled.img.attrs(props => ({ src: props.src }))`
  width: 100px;
  height: 100px;
  background-image: url(${ballSprite});
  background-repeat: no-repeat;
  background-position: center;
  background-size: 80px;
  border: 0;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 450px;
  margin-left: 24px;

  div {
    display: flex;
    align-items: center;
    padding: 10px 12px;
    background: #ddd;
    border-radius: 4px;
    margin-bottom: 4px;
  }
`;

export const Name = styled.label`
  margin-bottom: 0px !important;
  margin-left: 4px;
  p::first-letter {
    text-transform: uppercase;
  }
`;

export const ButtonMoreDetails = styled.button`
  border: 0;
  background: #8b0002;
  padding: 5px 20px;
  width: 450px;
  height: 30px;
  border-radius: 4px;
  text-transform: uppercase;
  font-weight: bold;
  color: #fff;
`;

export const Tag = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;

  p {
    position: absolute;
    bottom: 0;
    font-size: 12px;
    background-color: #8b0002;
    color: #fff;
    border-radius: 12px;
    padding: 2px 8px;
  }
`;

export const ButtonToolTip = styled.div`
  margin-top: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  & span {
    visibility: hidden;
    width: 300px;
    background-color: #555;
    color: #fff;
    text-align: center;
    border-radius: 6px;
    padding: 5px 0;
    position: absolute;
    z-index: 1;
    bottom: -80%;
    left: 50%;
    margin-left: -150px;
    opacity: 0;
    transition: opacity 0.3s;
  }

  & span::after {
    content: '';
    position: absolute;
    top: -35%;
    left: 50%;
    margin-left: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: transparent transparent #555 transparent;
  }

  &:hover span {
    visibility: visible;
    opacity: 1;
  }
`;

export const ToastMessage = styled.div`
  display: flex;
  align-items: center;
  p {
    margin-left: 5px;
  }

  img {
    width: 40px;
    margin: 0 15px 0 10px;
  }
`;
