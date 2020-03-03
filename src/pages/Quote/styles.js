import styled from 'styled-components';
import ImageReact from 'react-image';
import bgCurrency from '../../assets/bgCurrency.jpg';
import pokeball from '../../assets/pokeball.svg';
import ballSprite from '../../assets/pokeballSprite.png';

export const Container = styled.div``;

export const CurrencyTitle = styled.div`
  position: relative;
  background-image: url(${bgCurrency});
  background-repeat: no-repeat;
  background-position: bottom;
  background-size: cover;
  width: 50%;
  height: 140px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  padding: 4px 24px;
  margin-bottom: 48px;
  border-radius: 16px;
  text-shadow: 2px 2px 0px #000000;
  h1 {
    z-index: 5;
    font-size: 32px;
    color: #fff;
    padding: 4px 16px;
    border-radius: 8px;
  }

  @media screen and (max-width: 1300px) {
    width: 60%;
  }

  @media screen and (max-width: 1050px) {
    width: 70%;
  }

  @media screen and (max-width: 850px) {
    width: 90%;
  }
`;

export const CurrencyImage = styled(ImageReact)`
  position: absolute;
  left: 0;
  width: 120px;
  height: 120px;
  &:last-child {
    left: unset;
    right: 0;
  }
`;

export const CurrencyContent = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 24px;
  margin-bottom: 48px;
`;

export const CurrencyText = styled.p`
  position: absolute;
  top: -10px;
  left: -10px;
  background: #990000;
  color: #fff;
  font-size: 10px;
  padding: 4px 8px;
  border-radius: 8px;
  &:last-child {
    left: unset;
    right: -10px;
  }
`;

export const CurrencyValue = styled.div`
  border: 1px solid #aaa;
  padding: 8px 16px;
  border-radius: 8px;
`;

export const CurrencyIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  width: 40px;
  background: #990000;
  color: #fff;
  font-size: 24px;
  border-radius: 50%;
  margin: 0 24px;
`;

export const Message = styled.div`
  background: #caffc6;
  padding: 12px;
  border: 1px solid #529d3e;
  border-radius: 8px;
  color: #0d3e00;
  text-align: center;
  margin-bottom: 24px;
  width: 50%;

  @media screen and (max-width: 1300px) {
    width: 60%;
  }

  @media screen and (max-width: 1050px) {
    width: 70%;
  }

  @media screen and (max-width: 850px) {
    width: 90%;
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
  width: 50%;

  @media screen and (max-width: 1300px) {
    width: 60%;
  }

  @media screen and (max-width: 1050px) {
    width: 70%;
  }

  @media screen and (max-width: 850px) {
    width: 90%;
  }

  @media screen and (max-width: 650px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const PokePhoto = styled(ImageReact)`
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
  @media screen and (max-width: 650px) {
    flex-direction: row;
    margin-bottom: 16px;
  }
`;

export const PokeSprite = styled(ImageReact)`
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
  width: 100%;
  margin-left: 24px;

  div {
    display: flex;
    align-items: center;
    padding: 10px 12px;
    background: #ddd;
    border-radius: 4px;
    margin-bottom: 4px;
  }

  a {
    border: 0;
    background: #8b0002;
    padding: 5px 20px;
    width: 100%;
    height: 30px;
    border-radius: 4px;
    text-transform: uppercase;
    text-align: center;
    text-decoration: none;
    font-weight: bold;
    color: #fff;
  }

  @media screen and (max-width: 650px) {
    margin: 0;

    a {
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 20px;
      height: 60px;
    }
  }
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
  font-weight: bold;
`;

export const Name = styled.label`
  margin-bottom: 0px !important;
  margin-left: 4px;
  p::first-letter {
    text-transform: uppercase;
  }
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
