import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr={4}>
          <Text>Leonardo</Text>
          <Text color="gray.300" fontSize="small">
            Leonardo@gmail.com
          </Text>
        </Box>
      )}

      <Avatar
        size="md"
        name="Leonardo Agostini"
        src="http://github.com/leo-byte-rgb.png"
      />
    </Flex>
  );
}
