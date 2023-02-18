import React from "react";
import Item from "./Item";
import { List, ListItem } from "@chakra-ui/react";

function ItemsList({ items }) {
  return (
    <List>
      {items &&
        items.map((item) => (
          <ListItem key={item.id}>
            <Item description={item.description} />
          </ListItem>
        ))}
    </List>
  );
}

export default ItemsList;
