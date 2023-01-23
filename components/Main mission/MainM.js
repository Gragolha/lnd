import { Divider, Flex } from "@chakra-ui/react";

export default function MyMission() {
  return (
    <Flex
      fontFamily="inter"
      flexDir="column"
      h="300px"
      bg="#1b1b1b"
      p="65px"
      rounded={16}
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
      backgroundPosition="0% 10%"
      background="linear-gradient(0deg, #1B1B1B, #1B1B1B), linear-gradient(0deg, #1B1B1B, #1B1B1B), linear-gradient(90deg, #1B1B1B 47.21%, rgba(27, 27, 27, 0) 100%), url(./env/lineroad.jpg), #1B1B1B"
      backgroundBlendMode="lighten, color, normal, normal, normal"
    >
      <Flex fontSize={36} fontWeight="bold" color="white">
        O Design vai além.
      </Flex>
      <Flex
        w="385px"
        font-family="Inter"
        font-style="normal"
        font-weight="500"
        font-size=" 16px"
        line-height="19px"
        color="#c5c5c5"
      >
        Muito pelo contrário do que as pessoas acham, o design, não é somente
        algo visual, o design está relacionado ao comportamento humano, épocas,
        sentimentos, lugar, hora e muito além!
      </Flex>
      <Divider w="385px" mt="20px" borderColor="#c5c5c5" />
    </Flex>
  );
}
