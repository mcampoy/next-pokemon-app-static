import React, { useEffect, useState } from 'react';

import { GetStaticPaths, GetStaticProps, NextPage } from 'next';

import confetti from 'canvas-confetti';

import { Button, Card, Container, Grid, Image, Text, Col, Row } from "@nextui-org/react";

import { Layout } from '../../components/layouts';

import { Pokemon, PokemonListResponse } from '../../interfaces';
import { getPokemonInfo, localFavorites } from '../../utils';

import { pokeApi } from '../../api';

interface Props {
  pokemon: Pokemon;
};

export const PokemonByNamePage: NextPage<Props> = ({pokemon}) => {
  const [isInFavorites, setIsInFavorites] = useState(false);

  const onToggleFavorite = () => {
    localFavorites.toogleFavorite(pokemon.id);
    setIsInFavorites(!isInFavorites)

    if(isInFavorites) return

    confetti({
      zIndex: 999,
      particleCount: 100,
      spread: 160,
      angle: -100,
      origin: {
        x: .9,
        y: 0.18
      }
    })
  };

  useEffect(() => {
    setIsInFavorites(localFavorites.existInFavorties(pokemon.id))
  }, [pokemon.id]);

  return (
    <Layout title={pokemon.name}>
      <Grid.Container css={{marginTop: '5px'}} gap={2}>
        <Grid xs={12} sm={4}>
          <Card hoverable css={{padding: '30px'}}>
            <Card.Body>
              <Card.Image
                src={pokemon.sprites.other?.dream_world.front_default || 'no-image.png'}
                alt={pokemon.name}
                width='100%'
                height={200}
               />
            </Card.Body>
          </Card>
        </Grid>

        <Grid xs={12} sm={8}>
          <Card>
            <Card.Header>
              <Row>
                <Col>
                <div style={{ display: 'flex', justifyContent: 'end'}}>
                  <Button
                    color='gradient'
                    ghost={ !isInFavorites }
                    onClick={ onToggleFavorite }
                  >
                    {
                      isInFavorites ?
                      'En favoritos'
                      :
                      'Guardar en favoritos'
                    }
                  </Button>
                </div>
                  <Text h1 transform="capitalize">
                    {pokemon.name}
                  </Text>
                </Col>
              </Row>
            </Card.Header>
            <Card.Body>
              <Text size={30}>Sprites:</Text>
              <Container direction="row" display="flex" gap={0}>
                <Image
                  src={pokemon.sprites.front_default}
                  alt={pokemon.name}
                  width={100}
                  height={100}
                />
                <Image
                  src={pokemon.sprites.back_default}
                  alt={pokemon.name}
                  width={100}
                  height={100}
                />
                <Image
                  src={pokemon.sprites.front_shiny}
                  alt={pokemon.name}
                  width={100}
                  height={100}
                />
                <Image
                  src={pokemon.sprites.back_shiny}
                  alt={pokemon.name}
                  width={100}
                  height={100}
                />
              </Container>
            </Card.Body>
          </Card>
        </Grid>

      </Grid.Container>
    </Layout>
  )
};

export const getStaticPaths: GetStaticPaths = async (ctx) => {

  const { data } = await pokeApi.get<PokemonListResponse>('/pokemon?limit=151');
  const pokemonsNames: string[] =  data.results.map(({name}) => name);

  return {
    paths: pokemonsNames.map(name => ({
      params: { name }
    })),
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async ({params}) => {

  const { name } = params as { name: string };

  return {
    props: {
      pokemon: await getPokemonInfo(name)
    }
  }
}

export default PokemonByNamePage;