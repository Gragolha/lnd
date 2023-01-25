import {
  Box,
  Flex,
  Modal,
  ModalContent,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import { useState } from "react";

export default function Myimg({ bgi, setModalImage, onOpen }) {
  return (
    <>
      <Flex gap="30px" my="30px">
        <Flex
          onClick={(e) => {
            setModalImage(0);
            onOpen();
          }}
          backgroundImage="/bg2.png"
          bgColor="#1b1b1b"
          backgroundPosition="center"
          backgroundSize="cover"
          w="350px"
          h="350px"
          rounded={16}
        />
        <Flex
          onClick={(e) => {
            setModalImage(1);
            onOpen();
          }}
          backgroundImage="/bg1.png"
          bgColor="#1b1b1b"
          backgroundPosition="center"
          backgroundSize="cover"
          w="350px"
          h="350px"
          rounded={16}
        />
        <Flex
          onClick={(e) => {
            setModalImage(2);
            onOpen();
          }}
          backgroundImage="/bg3.png"
          bgColor="#1b1b1b"
          backgroundPosition="center"
          backgroundSize="cover"
          w="350px"
          h="350px"
          rounded={16}
        />
      </Flex>
      <Flex gap="30px">
        <Flex
          onClick={(e) => {
            setModalImage(3);
            onOpen();
          }}
          backgroundImage="/bg4.png"
          bgColor="#1b1b1b"
          backgroundPosition="center"
          backgroundSize="cover"
          w="350px"
          h="350px"
          rounded={16}
        />
        <Flex
          onClick={(e) => {
            setModalImage(4);
            onOpen();
          }}
          backgroundImage="/bg5.png"
          bgColor="#1b1b1b"
          backgroundPosition="center"
          backgroundSize="cover"
          w="350px"
          h="350px"
          rounded={16}
        />
        <Flex
          onClick={(e) => {
            setModalImage(5);
            onOpen();
          }}
          backgroundImage="/bg6.png"
          bgColor="#1b1b1b"
          backgroundPosition="center"
          backgroundSize="cover"
          w="350px"
          h="350px"
          rounded={16}
        />
      </Flex>
      <Flex gap="30px" my="30px">
        <Flex
          backgroundImage={bgi}
          bgColor="#1b1b1b"
          backgroundPosition="center"
          backgroundSize="cover"
          w="350px"
          h="350px"
          rounded={16}
        />
        <Flex
          backgroundImage={bgi}
          bgColor="#1b1b1b"
          backgroundPosition="center"
          backgroundSize="cover"
          w="350px"
          h="350px"
          rounded={16}
        />
        <Flex
          backgroundImage={bgi}
          bgColor="#1b1b1b"
          backgroundPosition="center"
          backgroundSize="cover"
          w="350px"
          h="350px"
          rounded={16}
        />
      </Flex>
      <Flex gap="30px">
        <Flex
          backgroundImage={bgi}
          bgColor="#1b1b1b"
          backgroundPosition="center"
          backgroundSize="cover"
          w="350px"
          h="350px"
          rounded={16}
        />
        <Flex
          backgroundImage={bgi}
          bgColor="#1b1b1b"
          backgroundPosition="center"
          backgroundSize="cover"
          w="350px"
          h="350px"
          rounded={16}
        />
        <Flex
          backgroundImage={bgi}
          bgColor="#1b1b1b"
          backgroundPosition="center"
          backgroundSize="cover"
          w="350px"
          h="350px"
          rounded={16}
        />
      </Flex>
    </>
  );
}
