import React from "react";
import { Flex, Box } from "@chakra-ui/react";
import { Input } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";

const Signup = () => {
  return (
    <Flex width="full" bg="" height="100%">
      <Box w={"40%"} h="100%" bg={"blackAlpha.300"} border={"2px"}>
        {/* <Image
          src="https://images.unsplash.com/photo-1547067592-463a85de7fd1?ixlib=rb-4.0.3&w=1080&fit=max&q=80&fm=jpg&crop=entropy&cs=tinysrgb"
          alt="Dan Abramov"
          h={"fit-content"}
        /> */}
      </Box>
      <Flex w={"60%"} h="100%">
        <Flex
          flexDirection={"column"}
          h="xl"
          w={"100%"}
          alignItems={"center"}
          justifyContent="center"
          textAlign={"center"}
          bg="blackAlpha.300"
          mt={"-10"}
        >
          <form action="">
            <Text fontSize={"2xl"}>Join duWeb</Text>
            <Input marginTop={"14"} placeholder="Enter email" size="md" />
            <Input placeholder="Password" size="md" marginTop={"6"} />
          </form>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Signup;
