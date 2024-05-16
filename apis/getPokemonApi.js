const getPokemonApi = async (id) => {
  try {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    if (res.ok) {
      const data = await res.json();
      return data;
    }
    throw new Error("Pokemon not found");
  } catch (err) {
    console.error(`Failed to fetch the pokemon with ${id}`);
  }
};

export default getPokemonApi;
