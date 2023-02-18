import { useState } from "react";
import { FormControl, HStack, Input, Button, Alert } from "@chakra-ui/react";
import { Form } from "react-router-dom";
import supabase from "../config/supabase-client";

function AddItem({ submitHandler }) {
  const [inputValue, setInputValue] = useState("");

  const insertData = async (event) => {
    const description = inputValue.trim();

    if (!description) {
      return;
    } else {
      const { data, error } = await supabase
        .from("ListItems")
        .insert({ description })
        .select();

      if (error) {
        console.error(error);
      }
      if (data) {
        submitHandler();
        setInputValue("");
      }
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    insertData(event);
  };
  return (
    <Form onSubmit={handleSubmit}>
      <FormControl>
        <HStack>
          <Input
            type="text"
            placeholder="Add an item..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            width="300px"
          />
          <Button type="submit" colorScheme="green">
            Add
          </Button>
        </HStack>
      </FormControl>
    </Form>
  );
}

export default AddItem;
