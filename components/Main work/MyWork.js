import { Divider, Flex } from "@chakra-ui/react";

export default function MyWork() {
  return (
    <>
      <Flex fontFamily="inter" cursor="default">
        <Flex
          fontSize={40}
          fontWeight="bold"
          color="white"
          textShadow="0px 0px 40px rgba(255, 255, 255, 0.15)"
        >
          WORKS
        </Flex>
        <Divider w="30px" my="auto" mx="10px" borderColor="white" />
        <Flex my="auto" fontWeight="bold" color="#c5c5c5">
          Modelling 3D, Image manipulation, Web Design and Others.
        </Flex>
      </Flex>
    </>
  );
}
