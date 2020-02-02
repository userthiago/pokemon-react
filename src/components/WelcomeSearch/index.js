import React from 'react';
import { Welcome, TipContainer, Trainer, Tip, TipText } from './styles';
import TrainerImg from '../../assets/trainer.png';
import TipSearch from '../../assets/tipSearch.png';

const WelcomeSearch = () => (
  <Welcome>
    <h2>Seja bem vindo!</h2>
    <TipContainer>
      <Trainer src={TrainerImg} alt="Dica para obter mais detalhes" />
      <Tip src={TipSearch} alt="Dica para obter mais detalhes" />
    </TipContainer>
    <TipText>
      Quer saber mais sobre o pokémon buscado? Basta clicar em{' '}
      <strong>mais detalhes</strong>.
    </TipText>
  </Welcome>
);

export default WelcomeSearch;
