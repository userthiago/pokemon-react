import Pokemon from './index';

// Testes da função checkTagEvolution e seus retornos.
test('Espera-se que o retorno da função seja um pokémon do tipo Baby.', () => {
  const pokemon = new Pokemon();
  const evoTest1 = {
    is_baby: true,
  };
  expect(pokemon.checkTagEvolution(evoTest1)).toBe(`Bebê`);
});

test('Espera-se que o retorno da função seja um pokémon que evolua com felicidade.', () => {
  const pokemon = new Pokemon();
  const evoTest2 = {
    min_happiness: '220',
  };
  expect(pokemon.checkTagEvolution(evoTest2)).toBe(`Felicidade 220`);
});

test('Espera-se que o retorno da função seja um pokémon que evolui com algum item.', () => {
  const pokemon = new Pokemon();
  const evoTest3 = {
    item: { name: 'Water Stone' },
  };
  expect(pokemon.checkTagEvolution(evoTest3)).toBe(`Evolui com Water Stone`);
});

test('Espera-se que o retorno da função seja um pokémon que evolui segurando um item.', () => {
  const pokemon = new Pokemon();
  const evoTest4 = {
    held_item: { name: 'Kings Rock' },
  };
  expect(pokemon.checkTagEvolution(evoTest4)).toBe(
    `Evolui segurando Kings Rock`
  );
});

test('Espera-se que o retorno da função seja um pokémon que evolui aprendendo um certo tipo de ataque.', () => {
  const pokemon = new Pokemon();
  const evoTest5 = {
    known_move_type: { name: 'fogo' },
  };
  expect(pokemon.checkTagEvolution(evoTest5)).toBe(
    `Evolui se aprender um ataque do tipo fogo`
  );
});

test('Espera-se que o retorno da função seja um pokémon que evolui passando de nível em um mapa.', () => {
  const pokemon = new Pokemon();
  const evoTest6 = {
    location: { name: 'kanto' },
  };
  expect(pokemon.checkTagEvolution(evoTest6)).toBe(
    `Evolui se passar de nível no mapa kanto`
  );
});

test('Espera-se que o retorno da função seja um pokémon que evolui em um determinado nível.', () => {
  const pokemon = new Pokemon();
  const evoTest7 = {
    min_level: 20,
  };
  expect(pokemon.checkTagEvolution(evoTest7)).toBe(`Level 20`);
});
