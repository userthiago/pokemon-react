import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';
import { MdSearch, MdReplay } from 'react-icons/md';

import Api from '../../services/api';

import PikachuFound from '../../assets/pokemon_found.svg';
import PikachuMiss from '../../assets/pokemon_miss.svg';

import Header from '../../components/Header';
import Banner from '../../components/Banner';
import Pokedex from '../../components/Pokedex';

import {
  Form,
  SubmitButton,
  PokemonMinInfo,
  PokeID,
  Container,
  PokePhoto,
  PokeSprite,
  Name,
  Sprites,
  Info,
  Tag,
  ToastMessage,
} from './styles';

import {
  PhotoSkeleton,
  TagSkeleton,
  PokeSpriteSkeleton,
  InfoSkeleton,
} from '../../components/Skeletons';

export default class Search extends Component {
  constructor() {
    super();
    this.state = {
      loading: true,
      emptySearch: false,
      newPokemon: '',
      pokemon: {},
      sprites: [],
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other-sprites/official-artwork/',
    };
  }

  async componentDidMount() {
    const { match } = this.props;

    const { name } = match.params;
    if (name) {
      this.handleSubmit(name);
    }
  }

  handleInputChange = e => {
    this.setState({ newPokemon: e.target.value });
  };

  // handleSubmit = async (e) => {
  //   e.preventDefault();

  //   const { newPokemon } = this.state;
  //   if (!newPokemon) return null;

  //   this.setState({ loading: true });
  //   const response = await Api.get(`/${newPokemon.toLowerCase()}`).catch(
  //     error => {
  //       if (error.response.status === 404) {
  //         this.setState({ emptySearch: true });
  //       }
  //     }
  //   );

  //   const { emptySearch } = this.state;
  //   if (emptySearch) {
  //     toast.error(() => (
  //       <ToastMessage>
  //         <img src={PikachuMiss} alt="" />
  //         Nenhum pokémon encontrado.
  //       </ToastMessage>
  //     ));
  //     return this.setState({
  //       newPokemon: '',
  //       loading: false,
  //       emptySearch: false,
  //     });
  //   }
  //   const pokemonData = response.data;
  //   const pokemonSprites = response.data.sprites;

  //   toast.success(() => (
  //     <ToastMessage>
  //       <img src={PikachuFound} alt="" />{' '}
  //       <strong>
  //         {pokemonData.name[0].toUpperCase() + pokemonData.name.slice(1)}
  //       </strong>
  //       <p>encontrado.</p>
  //     </ToastMessage>
  //   ));

  //   return this.setState({
  //     newPokemon: '',
  //     pokemon: pokemonData,
  //     sprites: pokemonSprites,
  //     loading: false,
  //   });
  // };

  handleSearch = e => {
    e.preventDefault();
    const { newPokemon } = this.state;
    if (!newPokemon) return null;
    this.setState({ loading: true });
    return this.handleSubmit(newPokemon);
  };

  handleSubmit = async name => {
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
      toast.error(() => (
        <ToastMessage>
          <img src={PikachuMiss} alt="" />
          Nenhum pokémon encontrado.
        </ToastMessage>
      ));
      return this.setState({
        loading: false,
        emptySearch: false,
      });
    }

    toast.success(() => (
      <ToastMessage>
        <img src={PikachuFound} alt="" />{' '}
        <strong>
          {response.data.name[0].toUpperCase() + response.data.name.slice(1)}
        </strong>
        <p>encontrado.</p>
      </ToastMessage>
    ));

    return this.setState({
      pokemon: response.data,
      sprites: response.data.sprites,
      loading: false,
    });
  };

  render() {
    const { newPokemon, pokemon, sprites, image, loading } = this.state;
    const uriImage = `${image + pokemon.id}.png`;

    return (
      <Container>
        <Header />
        <Banner />
        <Pokedex>
          <Form onSubmit={this.handleSearch}>
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
          <PokemonMinInfo>
            {loading ? (
              <>
                <PhotoSkeleton />
                <Sprites>
                  <TagSkeleton>
                    <p />
                    <PokeSpriteSkeleton />
                  </TagSkeleton>
                  <TagSkeleton>
                    <p />
                    <PokeSpriteSkeleton />
                  </TagSkeleton>
                </Sprites>
                <InfoSkeleton>
                  <div />
                  <div />
                  <div />
                  <p />
                </InfoSkeleton>
              </>
            ) : (
              <>
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
              </>
            )}
          </PokemonMinInfo>
        </Pokedex>
      </Container>
    );
  }
}

Search.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      name: PropTypes.string,
    }),
  }).isRequired,
};
