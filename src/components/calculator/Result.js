import { Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";

function Result(props) {
  return (
    <Flex boxShadow='2xl' bg='#057bff' className='p-5 m-10 result rounded-2xl items-center space-x-5 justify-center'>
      <Heading color='white' size='xl'>
        Result:
      </Heading>
      <Text color='white' fontSize='4xl'>
        {props.sum}
      </Text>
    </Flex>
  );
}

export default Result;
