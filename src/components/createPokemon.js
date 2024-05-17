import createAbilities from "../components/createAbilities.js";
import createStats from "../components/createStat.js";

const createPokemon = (pokemonData) => {
  // container
  const container = document.createElement("div");
  container.id = "container";

  // first div
  const firstDiv = document.createElement("div");
  firstDiv.id = "first-div";

  // name
  const name = document.createElement("h2");
  name.id = "name";
  name.innerText = pokemonData.name;

  // image
  const image = document.createElement("img");
  image.id = "image";
  image.src = pokemonData.sprites.front_default;

  // second div
  const secondDiv = document.createElement("div");
  secondDiv.id = "second-div";

  //   abilities name
  const abilities = document.createElement("h3");
  abilities.id = "abilities";
  abilities.innerText = "abilities:";

  //   abilities list
  const abilitiesList = createAbilities(pokemonData.abilities);

  //   stats
  const stats = document.createElement("h3");
  stats.id = "stats";
  stats.innerText = "Statistics:";

  //   stats list
  const statsList = createStats(pokemonData.stats);

  //   append
  firstDiv.append(name, image);
  secondDiv.append(abilities, abilitiesList, stats, statsList);
  container.append(firstDiv, secondDiv);
  return container;
};

export default createPokemon;

