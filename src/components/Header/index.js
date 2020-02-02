import React from 'react';
import PropTypes from 'prop-types';
import { HeaderContainer } from './styles';

const Header = props => {
  const { children } = props;
  return <HeaderContainer>{children}</HeaderContainer>;
};

Header.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Header;
