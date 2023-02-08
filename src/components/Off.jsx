import { Box, Text } from "@chakra-ui/react";
export const Off = ({ off }) => {
  return (
    <div>
      <Box
        position="absolute"
        top="0"
        right="0"
        borderRadius=".5rem 0 0 .5rem"
        w="30%"
        bg="green.100"
      >
        <Text p="2" textAlign="center">
          <b>{off}</b>
        </Text>
      </Box>
    </div>
  );
};
