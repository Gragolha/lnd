import {
  Center,
  Flex,
  Grid,
  GridItem,
  Input,
  Box,
  Image,
} from "@chakra-ui/react";
import MyGrid from "./MyGrid";

import Link from "next/link";

export default function Navbar() {
  return (
    <Center w="100%">
      <Flex
        zIndex="10"
        fontFamily="Inter"
        rounded={90}
        backdropFilter="auto"
        backdropBlur="20px"
        backdropSaturate="200%"
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
              placeholder="Search"
              color="white"
              size="xs"
              px="20px"
              h="30px"
              bgColor="rgba(56,56,56,0.3)"
              borderColor="rgba(87,87,87,0.2)"
              rounded="90px"
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
            <Box
              w="37px"
              h="37px"
              bgImage="/perfil.jpg"
              backgroundPosition="center"
              backgroundSize="cover"
              rounded={90}
            />
          </GridItem>
        </Grid>
      </Flex>
    </Center>
  );
}
("");
