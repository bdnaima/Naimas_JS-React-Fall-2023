// Loops & Objects Exercise

const pokemons = [
  "Bulbasaur",
  "Ivysaur",
  "Venusaur",
  "Charmander",
  "Charmeleon",
  "Charizard",
  "Squirtle",
  "Wartortle",
  "Blastoise",
  "Metapod",
  "Weedle",
  "Pikachu",
  "Pidgey",
];

// 1)
// create a loop that prints all
// the pokemons from the pokemons array
// invoke the function to see that it works

for (let i = 0; i < pokemons.length; i++) {
  console.log(pokemons[i]);
}

// Creating function
const listPokenames = (pokename) => {
  console.log(pokename);
  // };
  // Add function to forEach()
  pokemons.forEach(listPokenames);

  // Common way is through annonymous functions:
  pokemons.forEach((pokename) => {
    console.log(pokename);
  });
};
// 2)
// Create an object for the pokemon Pikachu.
// it could have properties such as name, element,
// strength, color, amountOfLegs or something like that.
console.log("Iteration 02");
console.log("This iteration pertains to creating an object in code");
let pokemon = {
  name: "Pikachu",
  age: 400,
  category: "Mouse",
  abilities: ["static electricity", "cute"],
  strength: 32,
  weight: "6.0 KG",
};

const pikachu = {
  name: "pikachu",
  element: "electric-type",
  strength: 32,
  color: "yellow",
  amountOfLegs: 2,
};

// 3)
// console.log something like
// 'Pikachu is a electricity pokemon with the strength of 32'
// Selecting some of the information about your pikachu object.
console.log("Iteration 03");
console.log(
  `${pokemon.name} is a ${pokemon.abilities[0]} pokemon with the strength of ${pokemon.strength}`
);
console.log("----");

console.log(
  `Pikachu is an ${pikachu.element} pokemon with the strengh of ${pikachu.strength}`
);

// 4)
// Add the property stillToCatch: true to the Pikachu object.
pikachu.stillToCatch = true;
console.log(pikachu);

// 5)
// change the value of the key strength in the Pikachu object.
pikachu.strength = 40;

// 6)
// Delete a property from the Pikachu object.
delete pikachu.stillToCatch;

// 7)
// Fill up this array with a few more pokemons.
// It is an array with objects!
// I made some suggestions
// but feel free to change as you want.
console.log("Iteration 07");
console.log(
  "This iteration pertains to adding more pokemonsObjects to the array of objects"
);
const moreAboutPokemons = [
  {
    name: "Bulbasaur",
    element: "water",
    strength: 32,
  },
  {
    name: "Charmander",
    element: "fire",
    strength: 32,
  },
  {
    name: "Misty",
    element: "air",
    strength: 20,
  },
  {
    name: "Cacoon",
    element: "earth",
    strength: 40,
  },
];

// 8)
// Print out all the NAMES of the pokemons in this new array.
for (let i = 0; i <= moreAboutPokemons.length; i++) {
  console.log(moreAboutPokemons[i]);
}

const pokemonDetails = (name) => {
  console.log(name);
};

moreAboutPokemons.forEach(pokemonDetails);

moreAboutPokemons.forEach((name) => {
  console.log(name);
});

// Using Map
console.log("---- Using Map() Array Method");
moreAboutPokemons.map((pokemon) => {
  console.log(`Pokemon name: ${pokemon.name}`);
});

// Using Dot Notation
console.log("---- Using Dot Notation");
let dotNotationExample = `
Pokemon names: 
${moreAboutPokemons[0].name}
${moreAboutPokemons[1].name}
${moreAboutPokemons[2].name}
${moreAboutPokemons[3].name}
`;
console.log(dotNotationExample);

console.log("----");
// 9)
// Print out something like
// 'Bulbasaur is a water pokemon with the strength of 32'
// Do this for all the pokemons.

moreAboutPokemons.forEach((pokemon) => {
  console.log(
    `${pokemon.name} is a ${pokemon.element} pokémon with the strength of ${pokemon.strength}`
  );
});
