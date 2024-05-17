import createAbilities from "./createAbilities.js";
import createStats from "./createStat.js";

const updatePokemonDom = (pokemonDom, pokemonData) => {
  // update name
  pokemonDom.querySelector("#name").innerText = pokemonData.name;

  // update image
  pokemonDom.querySelector("#image").src = pokemonData.sprites.front_default;
  pokemonDom.querySelector("#image").alt = pokemonData.name;

  // update abilities
  const oldList = pokemonDom.querySelector("#ability-list");
  const newList = createAbilities(pokemonData.abilities);
  oldList.replaceWith(newList);

    // update stats
    const oldStat = pokemonDom.querySelector("#statistics-list");
    const newStat = createStats(pokemonData.stats);
    oldStat.replaceWith(newStat);
};

export default updatePokemonDom;
