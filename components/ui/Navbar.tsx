import { Link, Spacer, Text, useTheme } from "@nextui-org/react";
import NextLink from "next/link";
import Image from "next/image";
import { getRandomArbitrary } from "../../utils";

export const Navbar = () => {

  const { theme } = useTheme();

  return (
    <div style={{
      display: 'flex',
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'start',
        padding: '0px 20px',
        backgroundColor: theme?.colors.gray900.value
      }}>

          <>
            <Image
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${getRandomArbitrary(1, 151)}.png`}
              alt="icono de la app"
              width={70}
              height={70}
            />
            <NextLink href='/' passHref style={{cursor: 'pointer'}}>
              <Link>
                <Text color='white' h2>P</Text>
                <Text color='white' h3>okéland</Text>
              </Link>
           </NextLink>
          </>

        <Spacer css={{flex: 1}}/>
        <NextLink href='/favorites' passHref>
          <Link css={{ marginRight: '10px' }}>
            <Text color='white'>Favoritos</Text>
          </Link>
        </NextLink>
      </div>
  )
}
