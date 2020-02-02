import React from 'react';
import { Link } from 'react-router-dom';
import { MdSearch } from 'react-icons/md';
import { HeaderContainer } from './styles';

const MenuBar = () => {
  return (
    <HeaderContainer>
      <div>
        <Link to="/">Home</Link>
        <Link to="/search">
          <MdSearch /> <p>Buscar</p>
        </Link>
      </div>
    </HeaderContainer>
  );
};

export default MenuBar;
