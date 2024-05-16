const createAbilities = (abilities) => {
  const list = document.createElement("ul");
  list.id = "ability-list";

  abilities.forEach((ability) => {
    const item = document.createElement("li");
    item.id = "abilities-list"
    item.innerText = ability.ability.name;
    list.append(item);
  });

  return list;
};

export default createAbilities;
