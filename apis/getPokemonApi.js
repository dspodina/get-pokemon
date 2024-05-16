const getPokemonApi = async () => {
  try {
    const res = await fetch("https://pokeapi.co/api/v2/pokemon/${id}");
    if (res.ok) {
      const data = await res.json();
      console.log(data);
      return data;
    }
    throw new Error("Failed to fetch the pokemon");
  } catch (err) {
    console.log(err);
  }
};

export default getPokemonApi;
