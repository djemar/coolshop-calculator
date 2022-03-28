import { Box, Image } from "@chakra-ui/react";
import React from "react";

function Navbar(props) {
  return (
    <>
      <Box p={4} h="56px" className="mb-5">
        <Image
          src="https://www.coolshop.it/src/images/logo_coolshop_72_blue.png"
          alt="coolshop-logo"
          htmlWidth={112}
        />
      </Box>
    </>
  );
}

export default Navbar;
