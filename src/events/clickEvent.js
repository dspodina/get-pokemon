import dom from "../dom.js";
import getPokemonHandler from "../handlers/getPokemonHandler.js";

const clickEvent = () => {
  dom.getPokemonBtn.addEventListener("click", getPokemonHandler);
};

export default clickEvent;
