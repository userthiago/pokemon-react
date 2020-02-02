import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Header from '../../components/Header';
import Banner from '../../components/Banner';
import Pokedex from '../../components/Pokedex';

import { Container } from './styles';

export default class Pokemon extends Component {
  async componentDidMount() {
    // const { match } = this.props;
    // const pokemonName = match.params.pokemon;
    // console.log(pokemonName);
  }

  render() {
    return (
      <Container>
        <Header />
        <Banner />
        <Pokedex>
          <Link to="/">Voltar para a lista</Link>
        </Pokedex>
      </Container>
    );
  }
}
