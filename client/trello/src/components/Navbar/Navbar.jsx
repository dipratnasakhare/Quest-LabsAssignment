import {
  Box,
  Flex,
  Avatar,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useColorModeValue,
  Stack,
  Center,
  Image,
  Text,
} from "@chakra-ui/react";

export const Navbar = () => {
  return (
    <>
      <Box bg={useColorModeValue("gray.100", "gray.900")} px={6}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <Flex gap="25px">
            <Box>
              {" "}
              <Image
                w="25px"
                color={"white"}
                src="https://th.bing.com/th/id/R.bd0d7b1439dc820c64ea180fec232360?rik=y3BPkkh3viAR9Q&riu=http%3a%2f%2fcdn.onlinewebfonts.com%2fsvg%2fimg_63957.png&ehk=9eOBlUI4FtzUt%2fdacrwDyeE0sQAvvRXSvOtkGILOkCY%3d&risl=&pid=ImgRaw&r=0"
              />
            </Box>

            <Box>
              {" "}
              <Image
                w="50px"
                src="https://logos-world.net/wp-content/uploads/2021/02/Trello-Logo-2011-2016.png"
              />
            </Box>

            <Text>Workpages</Text>
            <Text>Recent</Text>
            <Text>Started</Text>
            <Text bg="gray.500" pl="1" pr="1" borderRadius={"5%"} color={"white"} >
              Create
            </Text>
          </Flex>

          <Flex alignItems={"center"}>
            <Stack direction={"row"} spacing={7}>
              <Menu>
                <MenuButton
                  as={Button}
                  rounded={"full"}
                  variant={"link"}
                  cursor={"pointer"}
                  minW={0}
                >
                  <Avatar
                    size={"sm"}
                    src={"https://avatars.dicebear.com/api/male/username.svg"}
                  />
                </MenuButton>
                <MenuList alignItems={"center"}>
                  <br />
                  <Center>
                    <Avatar
                      size={"2xl"}
                      src={"https://avatars.dicebear.com/api/male/username.svg"}
                    />
                  </Center>
                  <br />
                  <Center>
                    <p>Username</p>
                  </Center>
                  <br />
                  <MenuDivider />
                  <MenuItem>Your Servers</MenuItem>
                  <MenuItem>Account Settings</MenuItem>
                  <MenuItem>Logout</MenuItem>
                </MenuList>
              </Menu>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
};
