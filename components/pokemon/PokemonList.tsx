import { FC } from 'react';
import { Grid } from '@nextui-org/react';
import { SmallPokemon } from '../../interfaces';
import { PokemonCard } from './PokemonCard';

type Props = {
  pokemon: SmallPokemon
};

export const PokemonList: FC <Props> = ({pokemon}) => {
  return (
    <Grid xs={6} sm={3} md={2} xl={1} >
      <PokemonCard pokemon={pokemon} />
    </Grid>
  )
};
