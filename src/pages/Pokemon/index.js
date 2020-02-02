import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import MenuBar from '../../components/MenuBar';
import Banner from '../../components/Banner';
import Pokedex from '../../components/Pokedex';

import Api from '../../services/api';

import {
  PokemonMinInfo,
  PokeID,
  Container,
  PokePhoto,
  PokeSprite,
  Name,
  Sprites,
  Info,
  Tag,
} from './styles';

export default class Pokemon extends Component {
  constructor() {
    super();
    this.state = {
      loading: true,
      redirect: false,
      emptySearch: false,
      pokemon: {},
      sprites: [],
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other-sprites/official-artwork/',
    };
  }

  async componentDidMount() {
    const { match } = this.props;
    const pokemonName = match.params.pokemon;
    this.handleLoad(pokemonName);
    // console.log(pokemonName);
  }

  handleLoad = async name => {
    const response = await Api.get(`/${name.toLowerCase()}`).catch(error => {
      if (error.response.status === 404) {
        this.setState({
          emptySearch: true,
        });
      }
      return null;
    });

    const { emptySearch } = this.state;

    if (emptySearch) {
      console.log('deu ruim');
      return this.setState({
        loading: false,
        emptySearch: false,
        redirect: true,
      });
    }

    return this.setState({
      pokemon: response.data,
      sprites: response.data.sprites,
      loading: false,
    });
  };

  render() {
    const { pokemon, image, sprites, redirect, loading } = this.state;
    const uriImage = `${image + pokemon.id}.png`;

    if (redirect) {
      return <Redirect to="/search" />;
    }

    return (
      <Container>
        <MenuBar />
        <Banner />
        <Pokedex>
          {loading ? (
            <div>Carregando...</div>
          ) : (
            <PokemonMinInfo>
              <PokeID>#{pokemon.id}</PokeID>
              <PokePhoto src={uriImage} />
              <Sprites>
                <Tag>
                  <p>Normal</p>
                  <PokeSprite src={sprites.front_default} />
                </Tag>
                <Tag>
                  <p>Shiny</p>
                  <PokeSprite src={sprites.front_shiny} />
                </Tag>
              </Sprites>

              <Info>
                <div>
                  <strong>Nome:</strong>
                  <Name>
                    <p>{pokemon.name}</p>
                  </Name>
                </div>
                <div>
                  <strong>Peso:</strong> <Name>{pokemon.weight}</Name>
                </div>
                <div>
                  <strong>Altura:</strong> <Name>{pokemon.height}</Name>
                </div>
                <Link to={`/pokemon/${pokemon.name}`}>Mais Detalhes</Link>
              </Info>
            </PokemonMinInfo>
          )}
        </Pokedex>
      </Container>
    );
  }
}

Pokemon.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      pokemon: PropTypes.string,
    }),
  }).isRequired,
};
