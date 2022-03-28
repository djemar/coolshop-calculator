import { Box } from "@chakra-ui/react";
import React from "react";
import Calculator from "./components/calculator/Calculator";
import Navbar from "./components/Navbar";
import Title from "./components/Title";
import "./styles.css";

export default function App() {
  return (
    <Box>
      <Navbar />
      <Title />
      <Calculator />
    </Box>
  );
}
