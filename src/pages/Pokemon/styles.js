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
  position: relative;
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
`;

export const PokeImages = styled.div`
  display: flex;
  align-items: center;
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
`;

export const Info = styled.div`
  display: flex;
  align-items: center;
`;

export const Stats = styled.table`
  width: 50%;
  margin: 10px;
`;

export const BarStats = styled.td`
  background: #ccc;
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

export const Basic = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  p {
    padding: 10px 12px;
    background: #ddd;
    border-radius: 4px;
    margin: 8px;
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
