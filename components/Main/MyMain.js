import { Button, Flex } from "@chakra-ui/react";
import MyGrid from "../MyGrid";

export default function MyMain() {
  return (
    <Flex
      fontFamily="inter"
      background="url(./env/grain.svg),linear-gradient(259.41deg, rgba(208, 68, 27, 0.2) 5.42%, rgba(0, 0, 0, 0) 55.73%), #1B1B1B"
      zIndex="5"
      height="480px"
      rounded={16}
      p="65px"
      mt="100px"
    >
      <Flex
        background="url(./env/grain.svg), url(./env/portrait.png)"
        w="315px"
        h="350"
        rounded={20}
      />
      <Flex ml="32px" w="630px" h="100%" flexDir="column">
        <Flex
          backgroundImage="../env/assin.png"
          width="182px"
          height="98px"
          backgroundRepeat="no-repeat"
        />
        <Flex mt="24px" color="#C5C5C5">
          Mussum Ipsum, cacilds vidis litro abertis. Todo mundo vê os porris que
          eu tomo, mas ninguém vê os tombis que eu levo!Si u mundo tá muito
          paradis? Toma um mé que o mundo vai girarzis!Mé faiz elementum
          girarzis, nisi eros vermeio.Quem num gosta di mé, boa gentis num é.
          {<br />}
          Posuere libero varius. Nullam a nisl ut ante blandit hendrerit. Aenean
          sit amet nisi.In elementis mé pra quem é amistosis quis leo.Paisis,
          filhis, espiritis santis.Detraxit consequat et quo num tendi nada.
        </Flex>
        <Button
          fontWeight="normal"
          mt="auto"
          ml="auto"
          color="white"
          rounded={20}
          backdropFilter="auto"
          _hover={{ backdropSaturate: "300%" }}
          bgColor="rgba(255,255,255,0.2)"
        >
          More info
        </Button>
      </Flex>
    </Flex>
  );
}
