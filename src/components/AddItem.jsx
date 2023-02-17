import { useState } from "react";
import { FormControl, HStack, Input, Button } from "@chakra-ui/react";
import { Form } from "react-router-dom";
function AddItem() {
  const [inputValue, setInputValue] = useState("");

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      console.log(event.target.value);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputValue);
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
