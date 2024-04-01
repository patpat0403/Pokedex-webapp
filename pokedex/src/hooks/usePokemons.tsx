import { useEffect, useState } from "react"
import { IndexedPokemon, PokemonListResponse } from "../interfaces/pokemon.interface"
import { httpClient } from "../api/httpClient"
import { POKEMON_API_POKEMON_URL } from "../constant"


const usePokemons= ()=>{
 
    const [pokemons,setPokemons]= useState<IndexedPokemon[]>([])
    const [nextUrl,setNextUrl]= useState<string|null>(POKEMON_API_POKEMON_URL)
    useEffect(()=>{fetchPokemon()},[])
    const fetchPokemon= async () =>{

        if(nextUrl)
        {
            const result = await httpClient.get<PokemonListResponse>(nextUrl)
            if (result?.data?.results)// ? operator checks if data and results is null or not
            {
                setPokemons(result.data.results)

            }
        }


    }
    return {
        pokemons
    }



}

export default usePokemons