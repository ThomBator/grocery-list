import React from "react";
import { Outlet } from "react-router-dom";
import { Container } from "@chakra-ui/react";

function MainLayout() {
  return (
    <Container as="main">
      <Outlet />
    </Container>
  );
}

export default MainLayout;
