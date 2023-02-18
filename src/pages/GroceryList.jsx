import { useState, useEffect } from "react";
import {
  Button,
  FormControl,
  Heading,
  HStack,
  Input,
  VStack,
  Card,
  Container,
} from "@chakra-ui/react";
import { Form } from "react-router-dom";
import AddItem from "../components/AddItem";
import ItemsList from "../components/ItemsList";
import supabase from "../config/supabase-client";

function GroceryList() {
  const [list, setList] = useState([]);

  useEffect(() => {
    fetchList();
  }, []);

  const fetchList = async () => {
    const { data, error } = await supabase.from("ListItems").select();

    if (error) {
      console.error(error);
    }
    if (data) {
      setList(data);
    }
  };

  return (
    <Card
      mt="5rem"
      bg="green.50"
      p="1rem"
      borderRadius="xl"
      minHeight="80vh"
      shadow="md"
    >
      <VStack spacing="2rem">
        <Heading
          bgClip="text"
          textAlign="center"
          bgGradient="linear(to-r, teal.500, green.500)"
        >
          Grocery List
        </Heading>
        <AddItem submitHandler={fetchList} />
        <ItemsList items={list} />
      </VStack>
    </Card>
  );
}

export default GroceryList;
