
import { Grid } from '@nextui-org/react';
import { FavoriteCardPokemon } from './';

interface Props {
  favoritePokemons: number[]
};

export const FavoritePokemons = ({favoritePokemons}: Props) => (
    <Grid.Container gap={2} direction='row' justify='flex-start'>
        {
          favoritePokemons.map((id: number) => (
            <Grid xs={6} sm={3} md={2} xl={1} key={id}>
              <FavoriteCardPokemon key={id} pokemonId={id} />
            </Grid>
          ))
        }
      </Grid.Container>
  );