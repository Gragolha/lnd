import {
  Center,
  Flex,
  Grid,
  GridItem,
  Input,
  Box,
  Image,
  Tooltip,
} from "@chakra-ui/react";

import Link from "next/link";

export default function Navbar() {
  return (
    <Center w="100%">
      <Flex
        //background="url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAMAAAAp4XiDAAAAUVBMVEWFhYWDg4N3d3dtbW17e3t1dXWBgYGHh4d5eXlzc3OLi4ubm5uVlZWPj4+NjY19fX2JiYl/f39ra2uRkZGZmZlpaWmXl5dvb29xcXGTk5NnZ2c8TV1mAAAAG3RSTlNAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEAvEOwtAAAFVklEQVR4XpWWB67c2BUFb3g557T/hRo9/WUMZHlgr4Bg8Z4qQgQJlHI4A8SzFVrapvmTF9O7dmYRFZ60YiBhJRCgh1FYhiLAmdvX0CzTOpNE77ME0Zty/nWWzchDtiqrmQDeuv3powQ5ta2eN0FY0InkqDD73lT9c9lEzwUNqgFHs9VQce3TVClFCQrSTfOiYkVJQBmpbq2L6iZavPnAPcoU0dSw0SUTqz/GtrGuXfbyyBniKykOWQWGqwwMA7QiYAxi+IlPdqo+hYHnUt5ZPfnsHJyNiDtnpJyayNBkF6cWoYGAMY92U2hXHF/C1M8uP/ZtYdiuj26UdAdQQSXQErwSOMzt/XWRWAz5GuSBIkwG1H3FabJ2OsUOUhGC6tK4EMtJO0ttC6IBD3kM0ve0tJwMdSfjZo+EEISaeTr9P3wYrGjXqyC1krcKdhMpxEnt5JetoulscpyzhXN5FRpuPHvbeQaKxFAEB6EN+cYN6xD7RYGpXpNndMmZgM5Dcs3YSNFDHUo2LGfZuukSWyUYirJAdYbF3MfqEKmjM+I2EfhA94iG3L7uKrR+GdWD73ydlIB+6hgref1QTlmgmbM3/LeX5GI1Ux1RWpgxpLuZ2+I+IjzZ8wqE4nilvQdkUdfhzI5QDWy+kw5Wgg2pGpeEVeCCA7b85BO3F9DzxB3cdqvBzWcmzbyMiqhzuYqtHRVG2y4x+KOlnyqla8AoWWpuBoYRxzXrfKuILl6SfiWCbjxoZJUaCBj1CjH7GIaDbc9kqBY3W/Rgjda1iqQcOJu2WW+76pZC9QG7M00dffe9hNnseupFL53r8F7YHSwJWUKP2q+k7RdsxyOB11n0xtOvnW4irMMFNV4H0uqwS5ExsmP9AxbDTc9JwgneAT5vTiUSm1E7BSflSt3bfa1tv8Di3R8n3Af7MNWzs49hmauE2wP+ttrq+AsWpFG2awvsuOqbipWHgtuvuaAE+A1Z/7gC9hesnr+7wqCwG8c5yAg3AL1fm8T9AZtp/bbJGwl1pNrE7RuOX7PeMRUERVaPpEs+yqeoSmuOlokqw49pgomjLeh7icHNlG19yjs6XXOMedYm5xH2YxpV2tc0Ro2jJfxC50ApuxGob7lMsxfTbeUv07TyYxpeLucEH1gNd4IKH2LAg5TdVhlCafZvpskfncCfx8pOhJzd76bJWeYFnFciwcYfubRc12Ip/ppIhA1/mSZ/RxjFDrJC5xifFjJpY2Xl5zXdguFqYyTR1zSp1Y9p+tktDYYSNflcxI0iyO4TPBdlRcpeqjK/piF5bklq77VSEaA+z8qmJTFzIWiitbnzR794USKBUaT0NTEsVjZqLaFVqJoPN9ODG70IPbfBHKK+/q/AWR0tJzYHRULOa4MP+W/HfGadZUbfw177G7j/OGbIs8TahLyynl4X4RinF793Oz+BU0saXtUHrVBFT/DnA3ctNPoGbs4hRIjTok8i+algT1lTHi4SxFvONKNrgQFAq2/gFnWMXgwffgYMJpiKYkmW3tTg3ZQ9Jq+f8XN+A5eeUKHWvJWJ2sgJ1Sop+wwhqFVijqWaJhwtD8MNlSBeWNNWTa5Z5kPZw5+LbVT99wqTdx29lMUH4OIG/D86ruKEauBjvH5xy6um/Sfj7ei6UUVk4AIl3MyD4MSSTOFgSwsH/QJWaQ5as7ZcmgBZkzjjU1UrQ74ci1gWBCSGHtuV1H2mhSnO3Wp/3fEV5a+4wz//6qy8JxjZsmxxy5+4w9CDNJY09T072iKG0EnOS0arEYgXqYnXcYHwjTtUNAcMelOd4xpkoqiTYICWFq0JSiPfPDQdnt+4/wuqcXY47QILbgAAAABJRU5ErkJggg==)"
        zIndex="10"
        backgroundImage="./env/grain.svg"
        fontFamily="Inter"
        rounded={90}
        backdropFilter="blur(20px) saturate(200%)"
        position="fixed"
        mt="100px"
        h="60px"
        bgColor="rgba(52,52,52,0.5)"
      >
        <Grid
          mx="auto"
          w={["90vw", "90vw", "900", "1110"]}
          maxW="1110px"
          templateColumns={[
            "repeat(5, 1fr)",
            "repeat(8, 1fr)",
            "repeat(12, 1fr)",
            "repeat(12, 1fr)",
          ]}
          gap={["20px", "20px", "30px", "30px"]}
        >
          <GridItem
            colStart={[1, 1, 1, 1]}
            colSpan={[1, 2, 2, 2]}
            my="auto"
            px="20px"
            maxW="100px"
            w="100px"
          >
            <Image src="/logo.svg" />
          </GridItem>
          <GridItem my="auto" colStart={[2, 3, 4, 4]} colSpan={[2, 4, 6, 6]}>
            <Input
              backgroundImage="./env/grainb.svg"
              placeholder="Search"
              color="white"
              size="xs"
              px="20px"
              h="30px"
              bgColor="rgba(56,56,56,0.3)"
              borderColor="rgba(87,87,87,0.2)"
              rounded="90px"
              focusBorderColor="#D2431B"
              _placeholder={{
                color: "#8C8C8C",
                fontSize: "12px",
              }}
              _hover={{
                bgColor: "rgba(56,56,56,0.5)",
                borderColor: "rgba(87,87,87,0.5)",
              }}
            />
          </GridItem>
          <GridItem
            display={["none", "none", "flex", "flex"]}
            color="white"
            my="auto"
            fontWeight="medium"
            colStart={[10]}
            justifySelf="center"
            transition="0.5s"
            _hover={{
              textShadow: "0px 0px 20px rgba(255,255,255,0.5)",
              transform: "scale(1.2)",
              transition: "all 0.5s ease-out",
            }}
          >
            <Link href="/" fontSize="12px">
              Work
            </Link>
          </GridItem>
          <GridItem
            color="white"
            my="auto"
            fontWeight="medium"
            colStart={[4, 7, 11, 11]}
            colSpan={[1, 1, 1, 1]}
            justifySelf="center"
            transition="0.5s"
            _hover={{
              textShadow: "0px 0px 20px rgba(255,255,255,0.5)",
              transform: "scale(1.2)",
              transition: "all 0.5s ease-out",
            }}
          >
            <Link href="/" fontSize="12px">
              About
            </Link>
          </GridItem>
          <GridItem
            my="auto"
            colStart={[5, 8, 12, 12]}
            justifySelf="center"
            px="12px"
          >
            <Tooltip
              openDelay={500}
              label="É só para dar estilo"
              bgColor="rgba(52,52,52,0.5)"
              backdropFilter="auto"
              backdropSaturate="300%"
              backdropBlur="20px"
              p="10px"
              rounded="full"
              fontSize={12}
              placement="bottom-end"
              mt="10px"
              color="#c5c5c5"
            >
              <Box
                w="37px"
                h="37px"
                bgImage="/perfil.jpg"
                backgroundPosition="center"
                backgroundSize="cover"
                rounded={90}
              />
            </Tooltip>
          </GridItem>
        </Grid>
      </Flex>
    </Center>
  );
}
("");
