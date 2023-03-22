import './css/styles.css';
import Notiflix from 'notiflix';
import { fetchCountries } from './fetchCountries';
import { countryInfoMarkup, countryListMarkup } from './createMarkup';

const debounce = require('lodash.debounce');
const inputEl = document.querySelector('#search-box');
const contryListEl = document.querySelector('.country-list');
const contryInfoEl = document.querySelector('.country-info');
const DEBOUNCE_DELAY = 300;



inputEl.addEventListener('input', debounce(onSearch, DEBOUNCE_DELAY));

function onSearch(event) {
  contryListEl.innerHTML = '';
  contryInfoEl.innerHTML = '';
  const InputValue = event.target.value.trim();
  
  if (InputValue !== '') {
    fetchCountries(InputValue)
      .then(countries => {
      if (countries.length > 10) {
        Notiflix.Notify.info('Too many matches found. Please enter a more specific name.');
      } else if (countries.length === 1) {
        contryInfoEl.insertAdjacentHTML('beforeend', countryInfoMarkup(countries[0]));
      } else if (countries.length > 1) {
        countries.forEach((country) => {
          contryListEl.insertAdjacentHTML('beforeend', countryListMarkup(country));
        })
      }
      })
      .catch(error => {
      Notiflix.Notify.failure('Oops, there is no country with that name');
    });
  }
}
