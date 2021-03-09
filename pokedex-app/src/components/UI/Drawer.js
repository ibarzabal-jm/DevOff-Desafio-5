import React from "react";
import {
  Drawer,
  DrawerOverlay,
  DrawerContent,
  Stack,
  Icon,
  Heading,
} from "@chakra-ui/react";
import NavButtons from "./NavButtons";
import { ArrowBackIcon } from "@chakra-ui/icons";
import { FaGithub } from "react-icons/fa";

const DrawerNav = ({ onClose }) => {
  return (
    <Drawer isOpen placement="right" onClose={onClose} size="sm">
      <DrawerOverlay>
        <DrawerContent bg="gray.200">
          <Stack
            align="center"
            direction="row"
            bg="gray.700"
            padding={2}
            textColor="white"
            justify="space-between"
          >
            <ArrowBackIcon onClick={onClose} w={8} h={8} cursor="pointer" />
            <Heading textAlign="center">Juanma PokedexApp</Heading>
          </Stack>

          <Stack
            padding={4}
            justify="center"
            h="100%"
            spacing={{ base: 4, md: 10 }}
          >
            <NavButtons functionOnClick={onClose} />
          </Stack>
          <Stack
            align="center"
            as="footer"
            bg="gray.700"
            paddingY={2}
            textColor="white"
          >
            <Icon as={FaGithub} w={8} h={8} />
          </Stack>
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  );
};

export default DrawerNav;
