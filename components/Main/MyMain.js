import { Flex } from "@chakra-ui/react";
import MyGrid from "../MyGrid";

export default function MyMain() {
  return (
    <Flex
      backgroundImage="./env/grain.svg"
      flexDir="column"
      back
      bgColor="#1B1B1B"
      zIndex="5"
      h="1000px"
      rounded={16}
      p="40px"
      mt="100px"
    >
      <Flex opacity="5%" fontWeight="bold" fontSize={48} color="white">
        TITLE MAIN
      </Flex>
    </Flex>
  );
}
