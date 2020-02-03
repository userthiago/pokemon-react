import styled from 'styled-components';
import ImageReact from 'react-image';
import pokeball from '../../assets/pokeball.svg';
import ballSprite from '../../assets/pokeballSprite.png';

export const Container = styled.div``;

export const PokemonContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  border: 2px solid #444;
  background: #eee;
  padding: 16px;
  border-radius: 0 0 8px 8px;

  @media screen and (max-width: 500px) {
    padding: 16px 0 0 0;
  }
`;

export const PokeTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background: #444;
  padding: 4px 20px;
  border-radius: 8px 8px 0 0;

  h1 {
    color: #fff;
  }

  h1::first-letter {
    text-transform: uppercase;
  }
`;

export const PokeInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  @media screen and (max-width: 800px) {
    flex-direction: column;
  }
`;

export const PokeImages = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  @media screen and (max-width: 800px) {
    margin-bottom: 16px;
  }
`;

export const PokeImagesContent = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
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

export const Types = styled.div`
  list-style: none;
  display: flex;
  justify-content: center;
  li {
    background: ${props => props.typeColor};
    padding: 8px 32px;
    border-radius: 8px;
    font-weight: bold;
    color: #fff;

    & + li {
      margin-left: 8px;
    }

    div::first-letter {
      text-transform: uppercase;
    }
  }
`;

export const TypeColor = styled.li`
  background: ${props => props.typeColor};
  padding: 8px 32px;
  border-radius: 8px;
  font-weight: bold;
  color: #fff;

  & + li {
    margin-left: 8px;
  }

  div::first-letter {
    text-transform: uppercase;
  }
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  margin-left: 24px;
  border: 2px solid #444;
  border-radius: 8px;

  h3 {
    background: #444;
    padding: 4px 8px;
    color: #fff;
  }

  @media screen and (max-width: 800px) {
    margin: 0;
  }
`;

export const Info = styled.div`
  display: flex;
  align-items: center;

  @media screen and (max-width: 500px) {
    flex-direction: column;
  }
`;

export const Basic = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  margin-top: 8px;

  h3 {
    border-radius: 4px;
    background: #888;
    padding: 4px 8px;
    color: #fff;
    margin: 0 8px;
  }

  p {
    font-size: 16px;
    font-weight: bold;
    background: #ddd;
    padding: 4px 8px;
    border-radius: 4px;
    margin: 4px 8px;

    & + p {
      margin-bottom: 8px;
    }
  }

  @media screen and (max-width: 500px) {
    width: 100%;
  }
`;

export const AbilitiesContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 8px 8px 8px;
`;

export const AbilitiesContent = styled.ul`
  list-style: none;

  li {
    font-size: 16px;
    font-weight: bold;
    background: #ddd;
    padding: 4px 8px;
    border-radius: 4px;
    margin-top: 4px;
  }

  div::first-letter {
    text-transform: uppercase;
  }
`;

export const StatsContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  margin-top: 8px;

  h3 {
    border-radius: 4px;
    background: #888;
    padding: 4px 8px;
    color: #fff;
    margin: 0 8px;
  }

  @media screen and (max-width: 500px) {
    width: 100%;
  }
`;

export const StatsContent = styled.table`
  margin: 4px 8px 8px 8px;
  background: #ddd;
  padding: 8px;
  border-radius: 4px;
`;

export const BarStats = styled.td`
  background: #bbb;
  width: 70%;
  height: 24px;
  border-radius: 4px;
  div {
    display: flex;
    align-items: center;
    background: green;
    padding: 2px 10px;
    width: ${props => (props.stat * 100) / 255}%;
    height: 100%;
    border-radius: 4px;
  }
`;

export const EvolutionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  border: 2px solid #444;
  border-radius: 8px;
  margin-top: 16px;

  h3 {
    background: #444;
    padding: 4px 8px;
    color: #fff;
  }
`;

export const EvolutionContent = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 16px;

  svg {
    width: 100px;
    height: 100px;
    color: #aaa;
  }

  li {
    display: flex;
    align-items: center;
  }

  @media screen and (max-width: 600px) {
    flex-direction: column;
    margin: 16px 0;

    li {
      flex-direction: column;
    }

    svg {
      transform: rotate(90deg);
    }
  }
`;

export const Evolution = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;

  img {
    width: 140px;
    background-image: url(${ballSprite});
    background-repeat: no-repeat;
    background-position: center;
    background-size: 120px;
  }

  div {
    text-align: center;
    p {
      font-weight: bold;
      font-size: 20px;
      margin-bottom: 8px;
    }

    p::first-letter {
      text-transform: uppercase;
    }

    & + div {
      background: #444;
      max-width: 200px;
      padding: 4px 12px;
      border-radius: 16px;
      font-weight: bold;
      color: #fff;
    }
  }
`;

export const MovesContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  border: 2px solid #444;
  border-radius: 8px 8px 0 0;
  margin-top: 16px;

  h3 {
    color: #fff;
    background: #444;
    padding: 4px 8px;
  }
`;

export const MovesContent = styled.table`
  border-collapse: collapse;
  tr:nth-child(even) {
    background-color: #ddd;
  }

  th {
    color: #fff;
    background: #555;
    padding: 8px 4px;
  }

  td {
    text-align: center;
    font-size: 16px;
    padding: 8px 4px;
  }

  td::first-letter {
    text-transform: uppercase;
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
