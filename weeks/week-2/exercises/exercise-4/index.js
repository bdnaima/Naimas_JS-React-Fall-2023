// Arrays Exercise

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

console.log("Iteration 01");
const countThem = () => {
  // print out, in a sentence, how many pokemons I have.
  // like: "I have x pokemons!"
  console.log(`I have ${pokemons.length} pokemons`);
};
countThem();

console.log("Iteration 02");
console.log("Using sort() method");
const orderThem = () => {
  // order the pokemons alphabetically
  const orderedPokemons = pokemons.sort((a, b) => a[1].localeCompare(b[1]));
  console.log("This is the ordered array:", orderedPokemons);
};
orderThem();
console.log("----");

orderThem();

const flipThem = () => {
  // reverse the order of the pokemons
  const reverse = pokemons.reverse();
  console.log(reverse);
};
flipThem();
console.log("----");

flipThem();

const makeThemBig = () => {
  // print the pokemons in UPPERCASE letters

  //Using for classic loop
  for (let i = 0; i < pokemons.length; i++) {
    console.log(pokemons[i].toUpperCase());
  }

  // Using forEach method
  pokemons.forEach((pokemon) => {
    console.log(pokemon.toUpperCase());
  });
};
makeThemBig();
console.log("----");

makeThemBig();

const onlyTheBs = () => {
  // only print the pokemons that starts with B

  // Using for loop
  for (let i = 0; i < pokemons.length; i++) {
    if (pokemons[i].includes("B")) {
      console.log("This is an array with only Bs:", pokemons);
    }
  }
  // Using forEach method
  pokemons.forEach((name) => {
    if (name.includes("B")) {
      console.log(name);
    }
  });
};
onlyTheBsTwo();
console.log("----");

onlyTheBs();

const notTheCs = () => {
  // remove all pokemons that starts with C

  for (let i = 0; i < pokemons.length; i++) {
    if (!pokemons[i].includes("C")) {
      console.log("These are the filtered pokemons:", pokemons);
    }
  }

  const filtered = pokemons.filter((pokemon) => {
    if (!pokemon.includes("C")) {
      return true;
    }
  });
  console.log(filtered);
};
notTheCs();
console.log("----");

console.log("Iteration 07");
const nameAndIdThanks = () => {
  // print out name and index of all pokemons
  // like: number x - Squirtle

  //Loop with for loop
  for (let i = 0; i < pokemons.length; i++) {
    console.log(`Number ${i + 1} - ${pokemons[i]}`);
  }
  // Loop with forEach method
  pokemons.forEach((pokemon, index) =>
    console.log(`Number ${index + 1} - ${pokemon}`)
  );
};
nameAndIdThanks();

const catchPokemon = (name) => {
  // add a pokemon with a name of your choice to the list,
  // print the list so you see its there.
  pokemons.push(name);
  console.log(pokemons);
};
catchPokemon("Raichu");
console.log(pokemons);
console.log("----");

catchPokemon("Misty-thunder");

const didICatchIt = (name) => {
  // check the pokemons to see if a specific pokemon is in the array

  //Using for loop
  for (let i = 0; i < pokemons.length; i++) {
    if (pokemons[i].includes(name)) {
      console.log(`Ye! ${name} does exist!`);
    } else {
      console.log(`No! ${name} does not exist!!`);
    }
  }

  //Another way
  if (pokemons.includes(name)) {
    console.log(`Yes! ${name} does exist!`);
  } else {
    console.log(`No! ${name} does not exist!!`);
  }
};
didICatchIt("Mewtwo");
console.log("----");

didICatchIt("Wartortle");

const addInThirdPlace = () => {
  // add the pokemon "Clefairy" in the third place of the array
  pokemons.splice(2, 0, "Clefairy");
  console.log("Third array added:", pokemons);
};
addInThirdPlace();

console.log("Iteration 11 ");
console.log("Bonus");
// ***BONUS***
const theLongestName = () => {
  // find the pokemon with the longest name
  // for (let i = 0; i < pokemons.length; i++) {
  //   for(let j = 0; i <)
  //   console.log(pokemons[i].length);
  // }

  const longestName = pokemons.reduce(function (a, b) {
    return a.length > b.length ? a : b;
  });
  console.log(longestName);

  // let lgth = 0;
  // let longest;
  // for (let i = 0; i < pokemons.length; i++) {
  //   if (pokemons[i].length > lgth) {
  //     lgth = pokemons[i].length;
  //     longest = pokemons[i];
  //   }
  // }
  // console.log(longest);

  function getLongestString() {
    return pokemons.sort((a, b) => {
      return b.length - a.length;
    })[0];
  }
  console.log(getLongestString());
};

theLongestName();
