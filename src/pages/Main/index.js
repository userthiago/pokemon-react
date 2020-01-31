import React from 'react';
import { MdSearch } from 'react-icons/md';

import { Container, Header, Form, SubmitButton, Banner } from './styles';

export default function Main() {
  return (
    <Container>
      <Header>
        <Form>
          <input type="text" placeholder="Buscar pokémon por nome ou número." />
          <SubmitButton>
            <MdSearch size="16" />
          </SubmitButton>
        </Form>
      </Header>
      <Banner />
    </Container>
  );
}
