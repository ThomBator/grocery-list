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
  Divider,
} from "@chakra-ui/react";
import { Form } from "react-router-dom";
import AddItem from "../components/AddItem";
import ItemsList from "../components/ItemsList";
import supabase from "../config/supabase-client";

function GroceryList() {
  const [list, setList] = useState([]);

  const fetchList = async () => {
    const { data, error } = await supabase.from("ListItems").select();

    if (error) {
      console.error(error);
    }
    if (data) {
      setList(data);
    }
  };

  const updateItem = async (description, item) => {
    const { data, error } = await supabase
      .from("ListItems")
      .update({ description })
      .eq("id", item.id)
      .select();

    if (error) {
      console.error(error);
    }
    if (data) {
      fetchList();
    }
  };

  const deleteItem = async (item) => {
    const { data, error } = await supabase
      .from("ListItems")
      .delete()
      .eq("id", item.id)
      .select();

    if (error) {
      console.error(error);
    }
    if (data) {
      fetchList();
    }
  };

  useEffect(() => {
    fetchList();
  }, []);

  return (
    <Container maxW="36rem">
      <Card
        mt="5rem"
        bg="green.50"
        p="1rem"
        borderRadius="md"
        minHeight="80vh"
        borderTop="8px"
        borderBottom="8px"
        borderColor="green.500"
        shadow="3xl"
        mb="5rem"
      >
        <VStack spacing="2rem">
          <Heading
            bgClip="text"
            textAlign="center"
            fontFamily="Monospace"
            fontSize="1.5rem"
            fontWeight="semibold"
            bgGradient="linear(to-r, teal.500, green.500)"
          >
            Grocery List
          </Heading>
          <AddItem submitHandler={fetchList} />

          <ItemsList
            items={list}
            deleteItem={deleteItem}
            updateItem={updateItem}
          />
        </VStack>
      </Card>
    </Container>
  );
}

export default GroceryList;
