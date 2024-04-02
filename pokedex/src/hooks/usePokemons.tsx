import { useEffect, useState } from "react"
import { IndexedPokemon, ListPokemon, PokemonListResponse } from "../interfaces/pokemon.interface"
import { httpClient } from "../api/httpClient"
import { POKEMON_API_POKEMON_URL } from "../constant"
import { POKEMON_IMAGES_BASE_URL } from "../constant"


const usePokemons= ()=>{
 
    const [pokemons,setPokemons]= useState<ListPokemon[]>([])
    const [nextUrl,setNextUrl]= useState<string|null>(POKEMON_API_POKEMON_URL)
    useEffect(()=>{fetchPokemon()},[])


    const indexedPokemontoListPokemon=(indexedPokemon: IndexedPokemon)=>{
        const pokedexNumber= parseInt(indexedPokemon.url.replace(`${POKEMON_API_POKEMON_URL}/`, "").replace("/",""))

        const listPokemon: ListPokemon={

            name: indexedPokemon.name,
            url: indexedPokemon.url,
            image: `${POKEMON_IMAGES_BASE_URL}/${pokedexNumber}.png`,
            pokedexNumber: pokedexNumber



        }

        console.log(listPokemon)

        return listPokemon

    }
    const fetchPokemon= async () =>{

        if(nextUrl)
        {
            const result = await httpClient.get<PokemonListResponse>(nextUrl)
            if (result?.data?.results)// ? operator checks if data and results is null or not
            {
                const listPokemons=result.data.results.map(p => indexedPokemontoListPokemon(p))
                setPokemons([...pokemons,...listPokemons])
                setNextUrl(result.data.next)

            }
        }


    }
    return {
        pokemons,
        fetchNextPage:fetchPokemon,
        hasMorePokemon: !!nextUrl
    }



}

export default usePokemons