import dom from "../dom.js";
import data from "../data.js";
import getPokemonApi from "../../apis/getPokemonApi.js";
import createPokemon from "../components/createPokemon.js";
import updatePokemonDom from "../components/updatePokemonDom.js";

const getPokemonHandler = async (e) => {
  const value = Number(dom.input.value);

  //   check if the value already exist
  if (data.oldId === value) {
    return;
  }

  //   check if the value has a valid ID
  const isValidId = value > 0 && value < 1280;
  if (!isValidId) {
    dom.error.className = "error";
    dom.error.innerText = "Pokemon doesn't exist";
    dom.root.append(dom.error);
    return;
  }

  //   remove error massage if exist
  const errorExist = dom.root.querySelector(".error");
  if (errorExist) {
    dom.error.remove();
  }

  //   get Pokemon data
  const pokemonData = await getPokemonApi(value);

  //   check if PokemonDom exist
  const pokemonDomExist = dom.root.querySelector("#container");
  if (pokemonDomExist) {
    updatePokemonDom(pokemonDomExist, pokemonData);
  } else {
    const pokemonDom = createPokemon(pokemonData);
    //   render the data to the page
    dom.root.append(pokemonDom);
  }

  //   clear input
  dom.input.value = "";
  data.oldId = value;
};

export default getPokemonHandler;
