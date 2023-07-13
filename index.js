//https://pokeapi.co/api/v2/pokemon/


const catchPokemon = async() => {

try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon`);

     const statement = await response.json();
     const pokemon = statement.results
    render(pokemon);
} catch (err) {
    const errorMessage = `trying to catch them all`;
    render(errorMessage);

    }
}
    const render = (allPokemon) => {
    const ul = document.querySelector(`ul`);
        const pokeNumber = allPokemon.url.split(`/`);
    
    const pokemonNames = allPokemon.map((singlePokemon) => {
    return `<li>${singlePokemon.name}</li>`;
    });
     console.log(allPokemon);
     console.log(pokemonNames);
     ul.innerHTML = pokemonNames

    }
 
    catchPokemon();


    //coconst body = document.querySelector(`body`)
    //body.addEventListener(`click`, () => {
        //event.preventDefault()
       // console.log(working``)
     //   
    //})