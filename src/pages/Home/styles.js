import styled from 'styled-components';
import ballSprite from '../../assets/pokeballSprite.png';

export const Container = styled.div``;

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
