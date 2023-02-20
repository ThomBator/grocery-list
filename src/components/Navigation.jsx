import {
  AtSignIcon,
  EditIcon,
  LockIcon,
  ArrowLeftIcon,
} from "@chakra-ui/icons";
import { Box, Flex, Heading, Image, Text, VStack } from "@chakra-ui/react";
import React from "react";
//<a href="https://www.flaticon.com/free-icons/paper-bag" title="paper bag icons">Paper bag icons created by Freepik - Flaticon</a>
function Navigation() {
  return (
    <Flex justifyContent="center">
      <VStack textAlign="center">
        <Heading
          fontFamily="Monospace"
          fontSize={{ base: "1.5rem", lg: "2rem" }}
          fontWeight="semibold"
          mb="-0.5rem"
        >
          GoGros
        </Heading>

        <Image
          boxSize={{ base: "3rem", lg: "5rem" }}
          src="../../public/images/paper-bag.png"
        />

        <Text
          fontFamily="Monospace"
          fontSize={{ base: ".75rem", lg: "1rem" }}
          fontWeight="normal"
        >
          Grocery lists made easy.
        </Text>
      </VStack>
    </Flex>
  );
}

export default Navigation;
