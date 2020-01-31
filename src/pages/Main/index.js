import React, { Component } from 'react';
import { MdSearch } from 'react-icons/md';
import blue from '../../assets/ball.png';
import green from '../../assets/green-ball.png';
import red from '../../assets/red-ball.png';
import yellow from '../../assets/yellow-ball.png';

import Api from '../../services/api';

import {
  Container,
  Header,
  Form,
  SubmitButton,
  Banner,
  Pokemon,
  Title,
  Balls,
  Ball,
  PokePhoto,
  Name,
  Content,
} from './styles';

export default class Main extends Component {
  constructor() {
    super();
    this.state = {
      newPokemon: '',
      pokemon: {},
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other-sprites/official-artwork/',
    };
  }

  handleInputChange = e => {
    this.setState({ newPokemon: e.target.value });
  };

  handleSubmit = async e => {
    const { newPokemon } = this.state;
    e.preventDefault();

    const response = await Api.get(`/${newPokemon.toLowerCase()}`);
    const pokemonData = response.data;

    this.setState({
      newPokemon: '',
      pokemon: pokemonData,
    });
  };

  render() {
    const { newPokemon, pokemon, image } = this.state;
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
            <SubmitButton>
              <MdSearch size="16" />
            </SubmitButton>
          </Form>
        </Header>
        <Banner>
          <h1>Pokédex React</h1>
        </Banner>
        <Pokemon>
          <Title>
            <Balls>
              <Ball src={blue} />
              <Ball src={red} />
              <Ball src={yellow} />
              <Ball src={green} />
            </Balls>
            {pokemon.id == null ? (
              ''
            ) : (
              <Name>
                {pokemon.name} Nº {pokemon.id}
              </Name>
            )}
          </Title>
          <Content>
            {pokemon.id == null ? 'teste' : <PokePhoto src={uriImage} />}
          </Content>
        </Pokemon>
      </Container>
    );
  }
}
