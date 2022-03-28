import { Box, Button, Divider, Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";

function Result(props) {
  return (
    <Flex
      boxShadow='2xl'
      border='1px'
      borderColor='blue.50'
      bg='white'
      className='p-5 m-10 result rounded-2xl items-center space-x-5 justify-center'>
      <Heading size='xl'> Result: </Heading>
      <Text fontSize='4xl'>{props.sum}</Text>
    </Flex>
  );
}

export default Result;
