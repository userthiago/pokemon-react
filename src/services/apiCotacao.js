import axios from 'axios';

const apiCotacao = axios.create({
  baseURL: 'https://economia.awesomeapi.com.br/all',
});

export default apiCotacao;
