function countryInfoMarkup(country) {
  return `<div class="country">
  <img src="${country.flags.svg}" alt="${country.name.common} width="20" height="16"">
  <h1>${country.name.official}</h1>
</div>
<div class="country-info">
  <ul>
    <li><p><span class="ci-list-item">Capital:</span> ${country.capital}</p></li>
    <li><p><span class="ci-list-item">Population:</span> ${country.population}</p></li>
    <li><p><span class="ci-list-item">Languages:</span> ${Object.values(country.languages)}</p></li>
  </ul></div>`};

function countryListMarkup(country) {
  return `<li>
  <img src="${country.flags.svg}" alt="${country.name.common} width="20" height="16"">
  <p>${country.name.common}</p>
</li>`};

export { countryInfoMarkup, countryListMarkup };