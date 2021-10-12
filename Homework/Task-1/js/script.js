class CityFact {
  constructor(name = "", population = "", continent = "") {
    (this.name = name),
      (this.population = population),
      (this.continent = continent);
  }
}

let obj = new CityFact("Baku", "10,200,167", "Asia");

let method = (obj) => {
  let result = "";

  result = `${obj.name} has a population of ${obj.population} and is situated in ${obj.continent}`;

  return result;
};

console.log(method(obj));
