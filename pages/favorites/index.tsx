import { useState, useEffect } from 'react';

import { Layout } from '../../components/layouts';
import NoFavorites from '../../components/ui/NoFavorites';
import { localFavorites } from '../../utils';
import { FavoritePokemons } from '../../components/pokemon';


const FavoritesPage = () => {

  const [favoritePokemons, setFavoritePokemons] = useState<number[]>([]);

  useEffect(() => {
    setFavoritePokemons(localFavorites.pokemons)
  }, [])

  return (
    <Layout title="Pokémons - Favoritos">
      {
      !favoritePokemons.length
      ? <NoFavorites />
      : <FavoritePokemons favoritePokemons={favoritePokemons} />
      }
    </Layout>
  )
}

export default FavoritesPage;