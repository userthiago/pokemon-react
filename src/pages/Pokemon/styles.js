import styled from 'styled-components';
import pokeball from '../../assets/pokeball.svg';
import ballSprite from '../../assets/pokeballSprite.png';

export const Container = styled.div``;

export const PokemonMinInfo = styled.div`
  display: flex;
  justify-content: center;
  border: 1px solid #bbb;
  background: #eee;
  padding: 16px;
  border-radius: 8px;
  position: relative;
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

  a {
    border: 0;
    background: #8b0002;
    padding: 5px 20px;
    width: 450px;
    height: 30px;
    border-radius: 4px;
    text-transform: uppercase;
    text-align: center;
    text-decoration: none;
    font-weight: bold;
    color: #fff;
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
