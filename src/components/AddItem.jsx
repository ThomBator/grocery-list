import { useState } from "react";
import { FormControl, HStack, Input, Button, Alert } from "@chakra-ui/react";
import { Form } from "react-router-dom";
import supabase from "../config/supabase-client";
function AddItem() {
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
        console.log(data[0].description);
      }
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      insertData(event);
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
            onKeyDown={handleKeyDown}
          />
          <Button type="submit">Add</Button>
        </HStack>
      </FormControl>
    </Form>
  );
}

export default AddItem;
