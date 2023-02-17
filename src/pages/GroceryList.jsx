import { useState } from "react";
import {
  Button,
  FormControl,
  Heading,
  HStack,
  Input,
  VStack,
} from "@chakra-ui/react";
import { Form } from "react-router-dom";
import AddItem from "../components/AddItem";

function GroceryList() {
  return (
    <VStack mt="5rem">
      <Heading bgClip="text" bgGradient="linear(to-r, teal.500, green.500)">
        Grocery List
      </Heading>
      <AddItem />
    </VStack>
  );
}

export default GroceryList;
