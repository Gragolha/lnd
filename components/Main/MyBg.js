import { Flex } from "@chakra-ui/react";

export default function MyBg() {
  return (
    <Flex
      zIndex="2"
      w="auto"
      h="500px"
      mt="-530px"
      bgGradient="linear-gradient(180deg, rgba(21, 21, 21, 0) 77.6%, #151515 100%)"
    />
  );
}
