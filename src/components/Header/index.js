import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { HeaderContainer } from './styles';

const Header = props => {
  const { children } = props;
  return (
    <HeaderContainer>
      <div>
        <Link to="/">Home</Link>
        <Link to="/">Informações</Link>
      </div>
      {children}
    </HeaderContainer>
  );
};

Header.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Header;
