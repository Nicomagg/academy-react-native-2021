const BASE_URL = 'https://rickandmortyapi.com/api';

export default {
  getAllCharacters: () =>
    fetch(`${BASE_URL}/character`)
      .then(response => response.json())
      .then(data => data.results),
  getCharactersFilteredByName: name =>
    fetch(`${BASE_URL}/character/?name=${name}`)
      .then(response => response.json())
      .then(data => data.results),
};
