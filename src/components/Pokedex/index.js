import React from 'react';
import PropTypes from 'prop-types';
import { PokedexHeader, Title, Content, Balls, Ball } from './styles';

import blue from '../../assets/ball.png';
import green from '../../assets/green-ball.png';
import red from '../../assets/red-ball.png';
import yellow from '../../assets/yellow-ball.png';

const PokedexContainer = props => {
  const { children } = props;
  return (
    <PokedexHeader>
      <Title>
        <Balls>
          <Ball src={blue} />
          <Ball src={red} />
          <Ball src={yellow} />
          <Ball src={green} />
        </Balls>
      </Title>
      <Content>{children}</Content>
    </PokedexHeader>
  );
};

PokedexContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PokedexContainer;
