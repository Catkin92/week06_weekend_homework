document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript Loaded');

  const form = document.querySelector('#new-form');
  form.addEventListener('submit', handleFormSubmit);
})

const handleFormSubmit = function (event) {
  event.preventDefault();

  const pokemonList = document.querySelector('ul');
  const pokemonEntry = document.createElement('li');
  pokemonList.appendChild(pokemonEntry);

  const pokemonName = document.createElement('h2');
  pokemonName.textContent = `${event.target.name.value}`;
  pokemonEntry.appendChild(pokemonName);

}
