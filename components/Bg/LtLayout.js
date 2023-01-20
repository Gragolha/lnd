import { Box } from "@chakra-ui/react";
import Navbar from "../Navbar";

export default function Layout({ children }) {
  return (
    <Box bgColor="#151515" h="5000px">
      <Navbar />
      {children}
    </Box>
  );
}
