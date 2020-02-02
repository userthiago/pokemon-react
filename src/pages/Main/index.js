import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { MdSearch, MdReplay, MdAdd } from 'react-icons/md';
import { toast } from 'react-toastify';

import Api from '../../services/api';

import Header from '../../components/Header';
import Banner from '../../components/Banner';
import Pokedex from '../../components/Pokedex';

import {
  PokemonMinInfo,
  Container,
  Form,
  SubmitButton,
  PokemonList,
  AddMoreButton,
  PokePhoto,
  PokeSprite,
  Name,
  Sprites,
  Info,
  ButtonMoreDetails,
  Tag,
  TextTest,
} from './styles';

export default class Main extends Component {
  constructor() {
    super();
    this.state = {
      loading: false,
      emptySearch: false,
      newPokemon: '',
      pokemonPageCount: 0,
      pokemonPageMax: 20,
      pokemonsList: [],
      pokemon: {},
      sprites: [],
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other-sprites/official-artwork/',
    };
  }

  componentDidMount() {
    this.handleLoad();
  }

  handleInputChange = e => {
    this.setState({ newPokemon: e.target.value });
  };

  loadMore = () => {
    const { pokemonPageCount } = this.state;
    this.setState({ pokemonPageCount: pokemonPageCount + 20 }, () => {
      this.handleLoad();
    });
  };

  handleLoad = async () => {
    const { pokemonsList, pokemonPageCount, pokemonPageMax } = this.state;

    this.setState({ loading: true });

    const response = await Api.get(
      `?offset=${pokemonPageCount}&limit=${pokemonPageMax}`
    ).catch(error => {
      if (error.response.status === 404) {
        this.setState({ emptySearch: true });
      }
    });

    this.setState({
      pokemonsList: [...pokemonsList, ...response.data.results],
      loading: false,
    });
  };

  handleSubmit = async e => {
    e.preventDefault();

    const { newPokemon } = this.state;
    if (!newPokemon) return null;

    this.setState({ loading: true });
    const response = await Api.get(`/${newPokemon.toLowerCase()}`).catch(
      error => {
        if (error.response.status === 404) {
          this.setState({ emptySearch: true });
        }
      }
    );

    const { emptySearch } = this.state;
    if (emptySearch) {
      toast.error('Nenhum pokémon encontrado.', {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
      return this.setState({
        newPokemon: '',
        loading: false,
        emptySearch: false,
      });
    }
    const pokemonData = response.data;
    const pokemonSprites = response.data.sprites;
    return this.setState({
      newPokemon: '',
      pokemon: pokemonData,
      sprites: pokemonSprites,
      loading: false,
    });
  };

  changeLink = (image, link) => {
    return `${image + link.slice(34, -1)}.png`;
  };

  render() {
    const {
      loading,
      newPokemon,
      pokemon,
      sprites,
      image,
      pokemonsList,
      pokemonPageMax,
    } = this.state;
    const uriImage = `${image + pokemon.id}.png`;
    return (
      <Container>
        <Header>
          <Form onSubmit={this.handleSubmit}>
            <input
              type="text"
              placeholder="Buscar pokémon por nome ou número."
              value={newPokemon}
              onChange={this.handleInputChange}
            />
            <SubmitButton loading={loading ? 1 : 0}>
              {loading ? <MdReplay size="16" /> : <MdSearch size="16" />}
            </SubmitButton>
          </Form>
        </Header>

        <Banner />

        <Pokedex>
          {!pokemon.id ? (
            <>
              <PokemonList>
                {pokemonsList.map(poke => (
                  <li key={String(poke.name)}>
                    <div>#{poke.url.slice(34, -1)}</div>
                    <img
                      src={this.changeLink(image, poke.url)}
                      alt={poke.name}
                    />
                    <p>
                      <Link to={`/pokemon/${poke.name}`}>{poke.name}</Link>
                    </p>
                  </li>
                ))}
              </PokemonList>
              <TextTest>
                <AddMoreButton type="button" onClick={() => this.loadMore()}>
                  <MdAdd size="40" />
                </AddMoreButton>
                <span className="tooltiptext">
                  Clique para buscar mais {pokemonPageMax} Pokémons
                </span>
              </TextTest>
            </>
          ) : (
            <>
              <Link
                onClick={() => {
                  this.setState({ pokemon: {} });
                }}
                to="/"
              >
                Voltar para a lista
              </Link>
              <PokemonMinInfo>
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
                    <strong>Posição na Pokédex:</strong>{' '}
                    <Name>{pokemon.id}</Name>
                  </div>
                  <div>
                    <strong>Nome:</strong>{' '}
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
                  <ButtonMoreDetails>Mais Detalhes</ButtonMoreDetails>
                </Info>
              </PokemonMinInfo>
            </>
          )}
        </Pokedex>
      </Container>
    );
  }
}
