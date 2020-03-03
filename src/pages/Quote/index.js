import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { MdKeyboardArrowRight } from 'react-icons/md';
import { Link } from 'react-router-dom';

import MenuBar from '../../components/MenuBar';
import Banner from '../../components/Banner';
import Pokedex from '../../components/Pokedex';
import Footer from '../../components/Footer';

import ApiPokemon from '../../services/apiPokemon';
import ApiCotacao from '../../services/apiCotacao';

import pikachu404 from '../../assets/404.png';

import {
  Container,
  PokePhoto,
  CurrencyImage,
  CurrencyContent,
  CurrencyTitle,
  CurrencyText,
  CurrencyValue,
  CurrencyIcon,
  Message,
  PokemonMinInfo,
  PokeID,
  Sprites,
  Tag,
  PokeSprite,
  Info,
  Name,
} from './styles';

export default class Quote extends Component {
  constructor() {
    super();
    this.state = {
      loading: true,
      serverDown: false,
      cotacao: 0.0,
      pokemon: {},
      sprites: [],
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/',
    };
  }

  async componentDidMount() {
    this.handleSubmit();
  }

  handleSubmit = async () => {
    const responseCotacao = await ApiCotacao.get('/USD-BR').catch(error => {
      if (!error.response) {
        return this.setState({
          serverDown: true,
        });
      }
      return null;
    });

    const responsePokemon = await ApiPokemon.get(
      `/pokemon/${this.formatQuote(
        parseFloat(responseCotacao.data.USD.high).toFixed(2)
      )}`
    ).catch(error => {
      if (!error.response) {
        return this.setState({
          serverDown: true,
        });
      }
      return null;
    });

    console.log(responsePokemon);

    return this.setState({
      pokemon: responsePokemon.data,
      sprites: responsePokemon.data.sprites,
      cotacao: responseCotacao.data.USD,
      loading: false,
    });
  };

  formatQuote = quote => {
    return quote.replace(/\D+/g, '').slice(0, 3);
  };

  render() {
    const { cotacao, image, pokemon, sprites, loading } = this.state;
    const uriImage = `${image}other-sprites/official-artwork/${pokemon.id}.png`;
    const uriImageCurrency1 = `${image}${Math.floor(Math.random() * 803)}.png`;
    const uriImageCurrency2 = `${image}${Math.floor(Math.random() * 803)}.png`;
    const today = new Date();
    return (
      <Container>
        <MenuBar />
        <Banner />
        <Pokedex>
          {loading ? (
            <>Carregando</>
          ) : (
            <>
              <CurrencyTitle>
                <CurrencyImage src={[uriImageCurrency1, pikachu404]} />
                <h1>
                  PokéCotação
                  <div>
                    Valor da cotação de {cotacao.code} para {cotacao.codein}{' '}
                    hoje
                  </div>
                </h1>
                <CurrencyImage src={[uriImageCurrency2, pikachu404]} />
              </CurrencyTitle>
              <CurrencyContent>
                <CurrencyText>{cotacao.code}</CurrencyText>
                <CurrencyValue>$ 1.00</CurrencyValue>
                <CurrencyIcon>
                  <MdKeyboardArrowRight />
                </CurrencyIcon>
                <CurrencyValue>
                  R$ {parseFloat(cotacao.high).toFixed(2)}
                </CurrencyValue>
                <CurrencyText>{cotacao.codein}</CurrencyText>
              </CurrencyContent>
              <Message>
                O pokémon escolhido é o número <strong>#{pokemon.id}</strong>{' '}
                conforme a cotação de hoje ({today.toLocaleDateString()}) a{' '}
                <strong>R$ {parseFloat(cotacao.high).toFixed(2)}</strong>:
              </Message>
              <PokemonMinInfo>
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
                    <strong>Peso:</strong> <Name>{pokemon.weight / 10} Kg</Name>
                  </div>
                  <div>
                    <strong>Altura:</strong>{' '}
                    <Name>{(pokemon.height * 10) / 100} m</Name>
                  </div>
                  <Link to={`/pokemon/${pokemon.name}`}>Mais Detalhes</Link>
                </Info>
              </PokemonMinInfo>
            </>
          )}
        </Pokedex>
        <Footer />
      </Container>
    );
  }
}

Quote.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      name: PropTypes.string,
    }),
  }).isRequired,
};
