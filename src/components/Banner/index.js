import React from 'react';
import { BannerContainer, Logo } from './styles';
import logo from '../../assets/logo.png';

const Banner = () => (
  <BannerContainer>
    <Logo src={logo} />
    <h1>Pokédex React</h1>
  </BannerContainer>
);

export default Banner;
