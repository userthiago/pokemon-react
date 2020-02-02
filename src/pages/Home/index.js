import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { MdAdd } from 'react-icons/md';

import Api from '../../services/api';

import MenuBar from '../../components/MenuBar';
import Banner from '../../components/Banner';
import Pokedex from '../../components/Pokedex';

import { Container, PokemonList, AddMoreButton, ButtonToolTip } from './styles';

export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      loading: false,
      pokemonPageCount: 0,
      pokemonPageMax: 20,
      pokemonsList: [],
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other-sprites/official-artwork/',
    };
  }

  componentDidMount() {
    this.handleLoad();
  }

  handleLoadMore = () => {
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
        console.log('Acabou');
      }
    });

    this.setState({
      pokemonsList: [...pokemonsList, ...response.data.results],
      loading: false,
    });
  };

  changeLink = (image, link) => {
    return `${image + link.slice(34, -1)}.png`;
  };

  render() {
    const { loading, image, pokemonsList, pokemonPageMax } = this.state;

    return (
      <Container>
        <MenuBar />
        <Banner />

        <Pokedex>
          <PokemonList>
            {pokemonsList.map(poke => (
              <li key={String(poke.name)}>
                <div>#{poke.url.slice(34, -1)}</div>
                <img src={this.changeLink(image, poke.url)} alt={poke.name} />
                <p>
                  <Link to={`/search/${poke.name}`}>{poke.name}</Link>
                </p>
              </li>
            ))}
          </PokemonList>
          <ButtonToolTip>
            <AddMoreButton type="button" onClick={() => this.handleLoadMore()}>
              <MdAdd size="40" />
            </AddMoreButton>
            <span className="tooltiptext">
              Clique para buscar mais {pokemonPageMax} Pokémons
            </span>
          </ButtonToolTip>
        </Pokedex>
      </Container>
    );
  }
}
