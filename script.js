const pokeContainer=document.getElementById('container');

const pokemonsNO=150;
const colors = {
	fire: '#FDDFDF',
	grass: '#DEFDE0',
	electric: '#FCF7DE',
	water: '#DEF3FD',
	ground: '#f4e7da',
	rock: '#d5d5d4',
	fairy: '#fceaff',
	poison: '#98d7a5',
	bug: '#f8d5a3',
	dragon: '#97b3e6',
	psychic: '#eaeda1',
	flying: '#F5F5F5',
	fighting: '#E6E0D4',
	normal: '#F5F5F5'
};

const mainTypes=Object.keys(colors);
console.log(mainTypes)



const fetchPokemons = async () =>{
   for(let i=1;i<=pokemonsNO;i++){
       await genratePokemons(i);
   }
}


const genratePokemons= async id => {
    const url=`https://pokeapi.co/api/v2/pokemon/${id}`
     const resp = await fetch(url);
     const pokemon= await resp.json();
     console.log(pokemon);
     createPokemonCard(pokemon);
}

fetchPokemons();

function createPokemonCard(pokemon){
    const pokeCards=document.createElement('div');
     pokeCards.classList.add('pokemon');

     const pokemonTypes=pokemon.types.map(el => el.type.name)

     const type= mainTypes.find(type => pokemonTypes.indexOf(type) > -1);

     const name=pokemon.name[0].toUpperCase() + pokemon.name.slice(1)

     const cardColor=colors[type];

     pokeCards.style.backgroundColor=cardColor;

     const card = `
              
      <div class="img-container">
      <img src="https://pokeres.bastionbot.org/images/pokemon/${
        pokemon.id
         }.png" alt="${name}" />

       </div>

    <div class="information">
     <span class="number">#${pokemon.id.toString().padStart(3,'0')}</span>
     <h3 class="name">${name}</h3>
      <small class="type">Type: <span>${type}</span></small>
    </div> 



            
     `

     pokeCards.innerHTML=card;

     pokeContainer.appendChild(pokeCards);

}