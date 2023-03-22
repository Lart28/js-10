const BASE_URL = 'https://restcountries.com/v3.1/name/';

function fetchCountries(name) {
  return fetch(`${BASE_URL}${name}?fields=name,capital,population,flags,languages`)
    .then(response => {
            if (response.status !== 200) {
                throw new Error(response.statusText)
            }
            return response;
        })
    .then(response => response.json())
}

export {fetchCountries};