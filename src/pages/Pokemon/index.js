import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import Api from '../../services/api';

import MenuBar from '../../components/MenuBar';
import Banner from '../../components/Banner';
import Pokedex from '../../components/Pokedex';

import pikachu404 from '../../assets/404.png';

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
      abilities: [],
      moves: [],
      stats: [],
      types: [],
      evolutionChain: [],
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
    const response = await Api.get(`/pokemon/${name.toLowerCase()}`).catch(
      error => {
        if (error.response.status === 404) {
          this.setState({
            emptySearch: true,
          });
        }
        return null;
      }
    );

    const pokemonSpecies = await Api.get(
      `/pokemon-species/${response.data.id}`
    ).catch(error => {
      if (error.response.status === 404) {
        this.setState({
          emptySearch: true,
        });
      }
      return null;
    });

    const evolution = await Api.get(
      `${pokemonSpecies.data.evolution_chain.url.slice(25, -1)}`
    ).catch(error => {
      if (error.response.status === 404) {
        this.setState({
          emptySearch: true,
        });
      }
      return null;
    });

    const evoChain = [];
    let evoData = evolution.data.chain;

    do {
      const evoDetails = evoData.evolution_details[0];

      evoChain.push({
        species_name: evoData.species.name,
        min_level: !evoDetails ? 1 : evoDetails.min_level,
        trigger_name: !evoDetails ? null : evoDetails.trigger.name,
        item: !evoDetails ? null : evoDetails.item,
        url: !evoDetails ? null : evoData.species.url,
      });
      console.log(evoData.species.url.slice(42, -1));

      [evoData] = [evoData.evolves_to[0]];
      // eslint-disable-next-line no-prototype-builtins
    } while (!!evoData && evoData.hasOwnProperty('evolves_to'));

    console.log(evoChain);

    const { emptySearch } = this.state;

    if (emptySearch) {
      return this.setState({
        loading: false,
        emptySearch: false,
        redirect: true,
      });
    }
    return this.setState({
      pokemon: response.data,
      sprites: response.data.sprites,
      evolutionChain: evoChain,
      abilities: response.data.abilities,
      moves: response.data.moves,
      stats: response.data.stats,
      types: response.data.types,
      loading: false,
    });
  };

  makeLink = (id, image, url) => {
    let link = '';
    if (url) link = `${image + url.slice(42, -1)}.png`;
    else link = `${image + id}.png`;
    return link;
  };

  render() {
    const { redirect, loading } = this.state;
    const {
      pokemon,
      image,
      sprites,
      evolutionChain,
      abilities,
      moves,
      stats,
      types,
    } = this.state;

    const uriImage = `${image + pokemon.id}.png`;
    const fileType = '.png';

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
            <>
              <h1>Evolution</h1>
              {evolutionChain.map((evolution, i) => (
                <li key={i}>
                  <div>{evolution.species_name}</div>
                  <div>{evolution.min_level}</div>
                  <div>{evolution.item}</div>
                  <img
                    src={this.makeLink(pokemon.id, image, evolution.url)}
                    alt={evolution.species_name}
                  />
                </li>
              ))}
              <h1>abilities</h1>
              {abilities.map((pokeAbility, i) => (
                <li key={i}>
                  <div>{pokeAbility.ability.name}</div>
                </li>
              ))}
              <h1>moves</h1>
              {moves.map((pokeMove, i) => (
                <li key={i}>
                  <div>{pokeMove.move.name}</div>
                </li>
              ))}
              <h1>stats</h1>
              {stats.map((pokeStats, i) => (
                <li key={i}>
                  <div>{pokeStats.stat.name}</div>
                  <div>{pokeStats.base_stat}</div>
                </li>
              ))}
              <h1>types</h1>
              {types.map((pokeType, i) => (
                <li key={i}>
                  <div>{pokeType.type.name}</div>
                </li>
              ))}
              <PokemonMinInfo>
                <PokeID>#{pokemon.id}</PokeID>
                <PokePhoto src={[uriImage, pikachu404]} alt={pokemon.name} />
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
            </>
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
