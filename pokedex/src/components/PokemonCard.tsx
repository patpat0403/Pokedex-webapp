import React, { useEffect } from 'react'
import { IndexedPokemon, ListPokemon } from '../interfaces/pokemon.interface'
import { Box, Card, CardActionArea, CardContent, CardMedia, Typography, capitalize } from '@mui/material'
import { useState } from 'react'
import { getColorFromURL } from '../utils/colors'
interface PokemonCardProps
{
    pokemon: ListPokemon
}
const PokemonCard = ({pokemon}:PokemonCardProps) => {

  const [pokemonColor,setPokemonColor]= useState<string| null>(null)

  const getPokemonColor= async() =>{

    const color= await getColorFromURL(pokemon.image)

    if(color) setPokemonColor(color)
    
  }

  useEffect(()=>{
    getPokemonColor();

  },[])
  return (
    <Card sx={{bgcolor:pokemonColor}}>
      <CardActionArea> 
        <CardMedia component="img" image={pokemon.image} title={pokemon.name} sx={{height: 100, objectFit: "contain"}}/>
          <CardContent>
              <Box sx={{display:"flex",justifyContent: "center",flexDirection:"column",alignItems:"center",color:"black" }}>
                  <Typography sx={{textTransform:"capitalize"}}>{pokemon.name}</Typography>
                  <Typography sx={{textTransform:"capitalize"}}>{pokemon.pokedexNumber}</Typography>
              </Box>
          </CardContent>

      </CardActionArea>
        

    </Card>
  )
}

export default PokemonCard