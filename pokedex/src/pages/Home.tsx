import React from 'react'
import usePokemons from '../hooks/usePokemons'
import PokemonList from '../components/PokemonList';
import { Container } from '@mui/material';

const Home = () => {
  
    const {pokemons}=usePokemons();
  
    return (
    <Container><PokemonList pokemons={pokemons}></PokemonList></Container>
    )
  
}

export default Home