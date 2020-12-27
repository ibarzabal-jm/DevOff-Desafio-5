
export const getPokemon = async( name ) =>{

    try {
        const url = `https://pokeapi.co/api/v2/pokemon/${name}`;
    
        const resp = await fetch( url );
        const pokemon = await resp.json();
        
        return pokemon;
    } catch (error) {

        console.log(error);
        
    }
    
}