import React from 'react';
import { LoadingContainer } from './styles';
import pikachuLoading from '../../assets/loading.gif';

const Loading = () => (
  <LoadingContainer>
    <img src={pikachuLoading} alt="Pikachu Loading" />
    <h2>Aguarde alguns instantes, estamos carregando o conteúdo para você!</h2>
  </LoadingContainer>
);

export default Loading;
