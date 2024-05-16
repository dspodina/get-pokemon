import createAbilities from "../components/createAbilities.js";

const createPokemon = (pokemonData) => {
  // container
  const container = document.createElement("div");
  container.className.padEnd("container");
  container.id = "container";

  // name
  const name = document.createElement("h2");
  name.id = "name";
  name.innerText = pokemonData.name;

  // image
  const image = document.createElement("img");
  image.id = "image";
  image.src = pokemonData.sprites.front_default;

  //   abilities name
  const abilities = document.createElement("h3");
  abilities.id = "abilities";
  abilities.innerText = "abilities:";

  //   abilities list
  const abilitiesList = createAbilities(pokemonData.abilities);

  //   append
  container.append(name, image, abilities, abilitiesList);
  return container;
};

export default createPokemon;
