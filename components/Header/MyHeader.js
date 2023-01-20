import { Flex, Box, Input, Button } from "@chakra-ui/react";

export default function MyHeader() {
  return (
    <Flex
      zIndex="3"
      w={["none", "none", "404px", "404px"]}
      maxH="404px"
      mt={["230", "230", "250", "250"]}
      fontFamily="inter"
      flexDir="column"
    >
      <Box
        fontWeight="bold"
        fontSize={48}
        color="white"
        textShadow="0px 0px 40px rgba(255, 255, 255, 0.25)"
        cursor="default"
      >
        TITLE HEADER
      </Box>
      <Box fontWeight="regular" fontSize={16} color="#C5C5C5" cursor="default">
        Mussum Ipsum, cacilds vidis litro abertis. Mé faiz elementum girarzis,
        nisi eros vermeio.Quem num gosta di mim que vai caçá sua turmis!Sapien
        in monti palavris qui num significa nadis i pareci latim.Leite de
        capivaris, leite de mula manquis sem cabeça.
      </Box>

      <Input
        backgroundImage="./env/grain.svg"
        mt="20px"
        fontSize={12}
        rounded="full"
        placeholder="Nome"
        border="none"
        bgColor="rgba(52,52,52,0.5)"
        backdropFilter="auto"
        backdropBlur="20px"
        backdropSaturate="200%"
        color="#C5C5C5"
        _placeholder={{
          fontWeight: "regular",
          color: "#8E8E8E",
        }}
      />
      <Input
        backgroundImage="./env/grain.svg"
        mt="12px"
        fontSize={12}
        rounded="full"
        placeholder="E-mail ou Numero"
        border="none"
        bgColor="rgba(52,52,52,0.5)"
        backdropFilter="auto"
        backdropBlur="20px"
        backdropSaturate="200%"
        color="#C5C5C5"
        _placeholder={{ fontWeight: "regular", color: "#8E8E8E" }}
      />
      <Button
        px="27px"
        mt="12px"
        ml="auto"
        maxW="300px"
        rounded="full"
        fontWeight=""
        transition="0.5s"
        bgColor="#D2431B"
        color="white"
        boxShadow="0px 0px 40px #D2431B"
        _hover={{
          bgGradient: "linear(to-r, #D2431B 0%, #ed722f 51%, #D2431B 100%)",
          transform: "scale(1.05)",
          transition: "0.5s",
        }}
      >
        Agendar consulta
      </Button>
    </Flex>
  );
}
