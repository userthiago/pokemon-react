import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { MdAdd } from 'react-icons/md';
import { toast } from 'react-toastify';
import Api from '../../services/api';

import MenuBar from '../../components/MenuBar';
import Banner from '../../components/Banner';
import Pokedex from '../../components/Pokedex';
import Footer from '../../components/Footer';

import pikachu404 from '../../assets/404.png';
import PokemonInformation from '../../assets/pokemon_information.svg';

import {
  Container,
  PokemonList,
  PokePhoto,
  AddMoreButton,
  ButtonToolTip,
  ToastMessage,
} from './styles';

export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      pokemonPageCount: 0,
      pokemonPageMax: 20,
      serverDown: false,
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
    this.setState({ serverDown: false });

    const { pokemonsList, pokemonPageCount, pokemonPageMax } = this.state;

    const response = await Api.get(
      `/pokemon?offset=${pokemonPageCount}&limit=${pokemonPageMax}`
    ).catch(error => {
      if (!error.response) {
        return this.setState({
          serverDown: true,
        });
      }
      return null;
    });

    const { serverDown } = this.state;

    if (serverDown) {
      return toast.warning(() => (
        <ToastMessage>
          <img src={PokemonInformation} alt="" />
          Parece que o servidor de consulta está fora de área, tente novamente
          mais tarde!.
        </ToastMessage>
      ));
    }

    return this.setState({
      pokemonsList: [...pokemonsList, ...response.data.results],
    });
  };

  changeLink = (image, link) => {
    return `${image + link.slice(34, -1)}.png`;
  };

  render() {
    const { image, pokemonsList, pokemonPageMax, serverDown } = this.state;

    if (serverDown) {
      return <Redirect to="/search" />;
    }

    return (
      <Container>
        <MenuBar />
        <Banner />
        <Pokedex>
          <PokemonList>
            {pokemonsList.map(poke => (
              <Link key={String(poke.name)} to={`/search/${poke.name}`}>
                <li>
                  <div>#{poke.url.slice(34, -1)}</div>
                  <PokePhoto
                    src={[this.changeLink(image, poke.url), pikachu404]}
                    alt={poke.name}
                  />
                  <p>{poke.name}</p>
                </li>
              </Link>
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
        <Footer />
      </Container>
    );
  }
}
