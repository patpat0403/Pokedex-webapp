import React from 'react'
import usePokemons from '../hooks/usePokemons'
import PokemonList from '../components/PokemonList';
import { Box, Button, Container } from '@mui/material';

const Home = () => {
  
    const {pokemons,hasMorePokemon,fetchNextPage}=usePokemons();
  
    return (
    <Container>
        
        <PokemonList pokemons={pokemons}></PokemonList>
        {hasMorePokemon ? (
         <Box textAlign='center'>
            <Button variant='contained' onClick={fetchNextPage}>More pokemon</Button>
        
         </Box>
        ):null}
    
    </Container>
    
    )
  
}

export default Home