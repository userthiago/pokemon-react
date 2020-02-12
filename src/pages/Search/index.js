import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';
import { MdSearch, MdReplay } from 'react-icons/md';

import Api from '../../services/api';

import PikachuFound from '../../assets/pokemon_found.svg';
import PokemonMiss from '../../assets/pokemon_miss.svg';

import MenuBar from '../../components/MenuBar';
import Banner from '../../components/Banner';
import WelcomeSearch from '../../components/WelcomeSearch';
import Pokedex from '../../components/Pokedex';
import Footer from '../../components/Footer';

import pikachu404 from '../../assets/404.png';
import PokemonInformation from '../../assets/pokemon_information.svg';

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
      serverDown: false,
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
    } else {
      this.setState({ loading: false });
    }
  }

  handleInputChange = e => {
    this.setState({ newPokemon: e.target.value });
  };

  handleSearch = e => {
    e.preventDefault();
    const { newPokemon } = this.state;
    if (!newPokemon) return null;
    this.setState({ loading: true });
    return this.handleSubmit(newPokemon);
  };

  handleSubmit = async name => {
    this.setState({ serverDown: false });

    const response = await Api.get(`/pokemon/${name.toLowerCase()}`).catch(
      error => {
        if (!error.response) {
          return this.setState({
            serverDown: true,
            loading: false,
          });
        }
        return this.setState({
          emptySearch: true,
        });
      }
    );

    const { emptySearch, serverDown } = this.state;

    if (serverDown) {
      return toast.warning(() => (
        <ToastMessage>
          <img src={PokemonInformation} alt="" />
          Parece que o servidor de consulta está fora de área, tente novamente
          mais tarde!.
        </ToastMessage>
      ));
    }

    if (emptySearch) {
      toast.error(() => (
        <ToastMessage>
          <img src={PokemonMiss} alt="" />
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
        <MenuBar />
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
          {!pokemon.id ? (
            <WelcomeSearch />
          ) : (
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
                  <PokePhoto src={[uriImage, pikachu404]} />
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
                      <strong>Peso:</strong>{' '}
                      <Name>{pokemon.weight / 10} Kg</Name>
                    </div>
                    <div>
                      <strong>Altura:</strong>{' '}
                      <Name>{(pokemon.height * 10) / 100} m</Name>
                    </div>
                    <Link to={`/pokemon/${pokemon.name}`}>Mais Detalhes</Link>
                  </Info>
                </>
              )}
            </PokemonMinInfo>
          )}
        </Pokedex>
        <Footer />
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
