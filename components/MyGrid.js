import { Flex, Grid, Box } from "@chakra-ui/react";

export default function MyGrid({ children, background }) {
  return (
    <Flex
      zIndex="1"
      mb="30px"
      w="auto"
      background={background}
      backgroundPosition="center"
      h="850px"
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
      px="20px"
    >
      <Grid
        mx="auto"
        w="100%"
        maxW="1110px"
        templateColumns={[
          "repeat(5, 1fr)",
          "repeat(8, 1fr)",
          "repeat(12, 1fr)",
          "repeat(12, 1fr)",
        ]}
        gap={["20px", "20px", "15px", "30px"]}
      >
        {children}
      </Grid>
    </Flex>
  );
}
{
  /** */
}
