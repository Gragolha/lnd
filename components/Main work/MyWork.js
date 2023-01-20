import { Divider, Flex } from "@chakra-ui/react";

export default function MyWork() {
  return (
    <Flex
      fontFamily="INTER"
      background="url(./env/grain.svg), #1B1B1B"
      zIndex="5"
      h="1000px"
      mainH="auto"
      rounded={16}
      p="65px"
      mt="10px"
      flexDir="column"
    >
      <Flex color="white" fontSize={36} fontWeight="bold">
        WORKS
      </Flex>
      <Divider my="40px" borderColor="rgba(255,255,255,0.1)" />
      <Flex
        alt="texto"
        backgroundImage="./bg1.png"
        backgroundPosition="center"
        backgroundSize="cover"
        w="1000"
        h="1000"
        rounded={20}
      ></Flex>
    </Flex>
  );
}
