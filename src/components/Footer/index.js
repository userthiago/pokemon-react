import React from 'react';
import { FooterContainer, Media } from './styles';
import Linkedin from '../../assets/linkedin.svg';
import Github from '../../assets/github.svg';

const Footer = () => (
  <FooterContainer>
    <a href="https://www.linkedin.com/in/thiagohensantos/">
      <Media src={Linkedin} />
    </a>
    <h2>Muito obrigado!</h2>
    <a href="https://github.com/userthiago/pokemon-react">
      <Media src={Github} />
    </a>
  </FooterContainer>
);

export default Footer;
