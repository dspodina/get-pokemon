const createStats = (stats) => {
    const statistics = document.createElement("ul");
    statistics.id = "statistics-list";
  
    stats.forEach((stat) => {
      const item = document.createElement("li");
      item.id = "statistics-el"
      item.innerText = stat.stat.name + ' : ' + stat.base_stat;
      statistics.append(item);
    });
  
    return statistics;
  };
  
  export default createStats;