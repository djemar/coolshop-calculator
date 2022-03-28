import { Box, Flex, Heading, Image } from "@chakra-ui/react";
import React from "react";

function Title(props) {
  return (
    <Flex className='justify-center items-center mb-16'>
      <Image className='-mr-12' boxSize='64px' src='https://cdn.svgporn.com/logos/react.svg' />
      <Box className='text-center'>
        <Heading as='h1' size='2xl' id='calc-title'>
          Calculator
        </Heading>
        <Heading as='h2' size='xl' id='calc-tech' className='pl-28'>
          Tech Challenge
        </Heading>
      </Box>
    </Flex>
  );
}

export default Title;
