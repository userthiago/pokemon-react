import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { HeaderContainer } from './styles';

const Header = props => {
  return (
    <HeaderContainer>
      <div>
        <Link to="/">Home</Link>
        <Link to="/">Informações</Link>
      </div>
    </HeaderContainer>
  );
};

Header.defaultProps = {
  children: PropTypes.node,
};

Header.propTypes = {
  children: PropTypes.node,
};

export default Header;
