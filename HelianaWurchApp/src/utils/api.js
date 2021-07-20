export const API_URL = 'https://rickandmortyapi.com/api/';

export function fetchEndpointData(endpoint, setData, setLoadingParam) {
  fetch(`${API_URL + endpoint}`)
    .then(response => response.json())
    .then(json => {
      setData(json.results);
    })
    .catch(error => console.error(error))
    .finally(() => setLoadingParam(false));
}
