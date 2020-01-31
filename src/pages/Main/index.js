import React, { Component } from 'react';
import { MdSearch, MdReplay } from 'react-icons/md';
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
  PokeSprite,
  Name,
  Content,
  Sprites,
  Info,
  ButtonMoreDetails,
  Test,
} from './styles';

export default class Main extends Component {
  constructor() {
    super();
    this.state = {
      loading: false,
      newPokemon: '',
      pokemon: {},
      sprites: [],
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
    this.setState({ loading: true });
    const response = await Api.get(`/${newPokemon.toLowerCase()}`);
    const pokemonData = response.data;
    const pokemonSprites = response.data.sprites;

    this.setState({
      newPokemon: '',
      pokemon: pokemonData,
      sprites: pokemonSprites,
      loading: false,
    });
  };

  render() {
    const { loading, newPokemon, pokemon, sprites, image } = this.state;
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
            <SubmitButton loading={loading}>
              {loading ? <MdReplay size="16" /> : <MdSearch size="16" />}
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
          </Title>
          <Content>
            {pokemon.id == null ? 'teste' : <PokePhoto src={uriImage} />}
            <Sprites>
              <Test>
                <p>Normal</p>
                <PokeSprite src={sprites.front_default} />
              </Test>
              <Test>
                <p>Shiny</p>
                <PokeSprite src={sprites.front_shiny} />
              </Test>
            </Sprites>

            <Info>
              <div>
                <strong>Posição na Pokédex:</strong> <Name>{pokemon.id}</Name>
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
          </Content>
        </Pokemon>
      </Container>
    );
  }
}
