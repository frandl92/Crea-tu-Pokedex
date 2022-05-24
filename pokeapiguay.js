const pokedex$$ = document.querySelector('.pokedex');
const buscador$$ = document.querySelector('.miInput');

let arrayPoke = [];

const getPokemons = async () => {
  for (let i = 1; i < 152; i++) {
    fetch('https://pokeapi.co/api/v2/pokemon/' + i)
      .then((res) => res.json())
      .then((myRes) => {
        arrayPoke.push(myRes);
        if (arrayPoke.length === 151) {
          pintar(arrayPoke);
        }
      });
  }
};

getPokemons();

const pintar = (pokemons) => {
    pokedex$$.innerHTML = '';
    for (const muñe of pokemons){

  const cardDiv$$ = document.createElement('div');
  const cardH2$$ = document.createElement('h2');
  const image$$ = document.createElement('img');
  const description$$ = document.createElement('p');

  cardDiv$$.classList.add('div-pokemon');
  image$$.classList.add('tarjetasPokemon');
  cardH2$$.innerText = muñe.name;
  image$$.src = muñe.sprites.front_default;
  description$$.innerText = muñe.types[0].type.name;

  cardDiv$$.appendChild(cardH2$$);
  cardDiv$$.appendChild(image$$);
  cardDiv$$.appendChild(description$$);
  pokedex$$.appendChild(cardDiv$$);
};
}

const filtrar = () => {
    const arrayFiltrados = [];

    for (const pokemon of arrayPoke) {
        if (pokemon.name.toLowerCase().includes(buscador$$.value.toLowerCase().trim())) {
            arrayFiltrados.push(pokemon)
        }
    }
    pintar (arrayFiltrados);
}


buscador$$.addEventListener('input', () => filtrar());