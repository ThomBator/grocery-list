import {
  AtSignIcon,
  EditIcon,
  LockIcon,
  ArrowLeftIcon,
} from "@chakra-ui/icons";
import { Flex, List, ListIcon, ListItem, Spacer } from "@chakra-ui/react";
import React from "react";

function Navigation() {
  return (
    <List
      color="white"
      fontFamily="Monospace"
      fontSize="1.2rem"
      fontWeight="semibold"
      spacing="1rem"
    >
      <Flex
        flexDirection={{ base: "row", lg: "column" }}
        gap="2rem"
        justifyContent="center"
      >
        <ListItem>
          <ListIcon as={AtSignIcon} />
          USER INFO
        </ListItem>
        <ListItem>
          <ListIcon as={EditIcon} /> DASHBOARD
        </ListItem>
        <ListItem>
          <ListIcon as={LockIcon} />
          LOGOUT
        </ListItem>
        <Spacer />
        <ListItem>
          <ListIcon as={ArrowLeftIcon} />
        </ListItem>
      </Flex>
    </List>
  );
}

export default Navigation;
