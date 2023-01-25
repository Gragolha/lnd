import { Box } from "@chakra-ui/react";
import Navbar from "../Navbar";

export default function Layout({ children }) {
  return (
    <Box bgColor="#151515" minH="3500px" w="100vw">
      <Navbar />
      {children}
    </Box>
  );
}
