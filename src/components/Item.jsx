import {
  Button,
  Editable,
  EditableInput,
  EditablePreview,
  HStack,
} from "@chakra-ui/react";
import React from "react";

function Item({ description }) {
  return (
    <Editable defaultValue={description}>
      <EditablePreview
        border="1px"
        borderColor="gray.200"
        width="300px"
        pl="1rem"
        mt="10px"
      />
      <EditableInput width="300px" />
    </Editable>
  );
}

export default Item;
