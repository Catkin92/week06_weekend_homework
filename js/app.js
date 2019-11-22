document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript Loaded');

  const form = document.querySelector('#new-form');
  form.addEventListener('submit', handleFormSubmit);

  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'Delete All';

  const listHeader = document.querySelector('#list-header');
  listHeader.appendChild(deleteButton);

  deleteButton.addEventListener('click', deleteAll);
})

const handleFormSubmit = function (event) {
  event.preventDefault();

  const pokemonList = document.querySelector('ul');
  const pokemonEntry = document.createElement('li');
  pokemonList.appendChild(pokemonEntry);

  const pokemonName = document.createElement('h2');
  pokemonName.textContent = `${event.target.name.value}`;
  pokemonEntry.appendChild(pokemonName);

  const pokemonTrainer = document.createElement('h4');
  pokemonTrainer.textContent = `Trainer: ${event.target.trainer.value}`;
  pokemonEntry.appendChild(pokemonTrainer);

  const pokemonType = document.createElement('h6');
  pokemonType.textContent = `${event.target.type.value}`;
  pokemonEntry.appendChild(pokemonType);

  document.getElementById('new-form').reset();
}

const deleteAll = function () {
  document.getElementById('pokemon-list').innerHTML = '';
}
