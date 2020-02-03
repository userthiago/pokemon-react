import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { toast } from 'react-toastify';
import { MdKeyboardArrowRight } from 'react-icons/md';
import PropTypes from 'prop-types';

import Api from '../../services/api';

import MenuBar from '../../components/MenuBar';
import Banner from '../../components/Banner';
import Pokedex from '../../components/Pokedex';

import pikachu404 from '../../assets/404.png';
import PokemonInformation from '../../assets/pokemon_information.svg';

import {
  Container,
  PokemonContainer,
  PokeTitle,
  PokeInfo,
  PokeImages,
  PokeImagesContent,
  Sprites,
  StatsContainer,
  StatsContent,
  BarStats,
  Basic,
  Types,
  TypeColor,
  PokePhoto,
  PokeSprite,
  EvolutionContainer,
  EvolutionContent,
  Evolution,
  InfoContainer,
  Info,
  Tag,
  AbilitiesContainer,
  AbilitiesContent,
  MovesContainer,
  MovesContent,
  ToastMessage,
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

    const { emptySearch } = this.state;
    if (emptySearch || response.data.id > 807) {
      toast.warning(() => (
        <ToastMessage>
          <img src={PokemonInformation} alt="" />
          Não há informação sobre {response.data.name}.
        </ToastMessage>
      ));
      return this.setState({
        loading: false,
        emptySearch: false,
        redirect: true,
      });
    }

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
        url: evoData.species.url,
      });
      [evoData] = [evoData.evolves_to[0]];
      // eslint-disable-next-line no-prototype-builtins
    } while (!!evoData && evoData.hasOwnProperty('evolves_to'));

    console.log(response.data);

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

  transformTextStat = name => {
    switch (name) {
      case 'hp':
        return 'HP:';
      case 'attack':
        return 'Ataque:';
      case 'defense':
        return 'Defesa:';
      case 'special-attack':
        return 'Ataque Especial:';
      case 'special-defense':
        return 'Defesa Especial:';
      case 'speed':
        return 'Velocidade:';
      default:
        return 'Indefinido:';
    }
  };

  getColorType = type => {
    switch (type) {
      case 'normal':
        return '#aba49a';
      case 'fire':
        return '#ff4b32';
      case 'water':
        return '#3e9cff';
      case 'electric':
        return '#f6bf27';
      case 'grass':
        return '#7fce4f';
      case 'ice':
        return '#58caec';
      case 'fight':
        return '#a55135';
      case 'poison':
        return '#b25c9d';
      case 'ground':
        return '#d3bf4c';
      case 'flying':
        return '#a1a6fa';
      case 'psychic':
        return '#fc77a6';
      case 'bug':
        return '#a2ba1a';
      case 'rock':
        return '#b7a251';
      case 'ghost':
        return '#6261af';
      case 'dragon':
        return '#7d61ea';
      case 'steel':
        return '#adafc6';
      case 'dark':
        return '#775c47';
      case 'fairy':
        return '#f8b8f5';
      default:
        return '#bebebe';
    }
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

    if (redirect) {
      return <Redirect to="/search" />;
    }

    if (loading) {
      return '<div>Carregando...</div>';
    }

    return (
      <Container>
        <MenuBar />
        <Banner />
        <Pokedex>
          <PokeTitle>
            <h1>{pokemon.name}</h1>
            <h1>#{pokemon.id}</h1>
          </PokeTitle>
          <PokemonContainer>
            <PokeInfo>
              <PokeImages>
                <PokeImagesContent>
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
                </PokeImagesContent>
                <Types>
                  {types.map((pokeType, i) => (
                    <TypeColor
                      typeColor={this.getColorType(pokeType.type.name)}
                      key={i}
                    >
                      <div>{pokeType.type.name}</div>
                    </TypeColor>
                  ))}
                </Types>
              </PokeImages>
              <InfoContainer>
                <h3>Informações Básicas</h3>
                <Info>
                  <Basic>
                    <h3>Perfil</h3>
                    <p>
                      <strong>Peso:</strong> {pokemon.weight} Kg
                    </p>
                    <p>
                      <strong>Altura:</strong> {(pokemon.height * 10) / 100} m
                    </p>
                    <h3>Habilidades</h3>
                    <AbilitiesContainer>
                      <AbilitiesContent>
                        {abilities.map((pokeAbility, i) => (
                          <li key={i}>
                            <div>{pokeAbility.ability.name}</div>
                          </li>
                        ))}
                      </AbilitiesContent>
                    </AbilitiesContainer>
                  </Basic>
                  <StatsContainer>
                    <h3>Atributos</h3>
                    <StatsContent>
                      <tbody>
                        {stats.reverse().map((pokeStats, i) => (
                          <tr key={i}>
                            <td>
                              <strong>
                                {this.transformTextStat(pokeStats.stat.name)}
                              </strong>
                            </td>
                            <BarStats stat={pokeStats.base_stat}>
                              <div>{pokeStats.base_stat}</div>
                            </BarStats>
                          </tr>
                        ))}
                      </tbody>
                    </StatsContent>
                  </StatsContainer>
                </Info>
              </InfoContainer>
            </PokeInfo>

            <EvolutionContainer>
              <h3>Evoluções</h3>
              <EvolutionContent>
                {evolutionChain.map((evolution, i, arr) => (
                  <li key={i}>
                    <Evolution>
                      <img
                        src={this.makeLink(pokemon.id, image, evolution.url)}
                        alt={evolution.species_name}
                      />
                      <div>
                        <p>{evolution.species_name}</p>
                      </div>
                      <div>Level {evolution.min_level}</div>
                    </Evolution>
                    {arr.length - 1 !== i ? <MdKeyboardArrowRight /> : <></>}
                  </li>
                ))}
              </EvolutionContent>
            </EvolutionContainer>

            <MovesContainer>
              <h3>Ataques</h3>
              <MovesContent>
                <tbody>
                  <tr>
                    <th>Ataque</th>
                    <th>Nível</th>
                    <th>Método</th>
                  </tr>
                  {moves
                    .sort((a, b) => {
                      if (
                        a.version_group_details[0].level_learned_at >
                        b.version_group_details[0].level_learned_at
                      ) {
                        return 1;
                      }
                      if (
                        a.version_group_details[0].level_learned_at <
                        b.version_group_details[0].level_learned_at
                      ) {
                        return -1;
                      }
                      return 0;
                    })
                    .map((pokeMove, i) => (
                      <tr key={i}>
                        <td>
                          {pokeMove.version_group_details[0].level_learned_at}
                        </td>
                        <td>{pokeMove.move.name}</td>
                        <td>
                          {
                            pokeMove.version_group_details[0].move_learn_method
                              .name
                          }
                        </td>
                      </tr>
                    ))}
                </tbody>
              </MovesContent>
            </MovesContainer>
          </PokemonContainer>
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
