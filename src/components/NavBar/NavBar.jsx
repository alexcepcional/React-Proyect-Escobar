import {
  Box,
  Flex,
  Avatar,
  Text,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
  Center,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon, ChevronDownIcon } from "@chakra-ui/icons";

import { CartWidget } from "../CartWidget/CartWidget";
import { useCategories } from "../../hooks/useCategories";

export function NavBar() {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const { categories } = useCategories();

  return (
    <>
      <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <Box>Un Logo</Box>

          <Menu>
            <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
              Productos
            </MenuButton>
            <MenuList height={"250px"} overflowY={"scroll"}>
              {
                categories.map((category) => {return(
                <MenuItem key={category.slug}>{category.name}</MenuItem>
                )})
              }
            </MenuList>
          </Menu>

          <Flex alignItems={"center"}>
            <CartWidget />
            <Stack direction={"row"} spacing={7}>
              <Button onClick={toggleColorMode}>
                {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
              </Button>

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
                    <p>Usuario</p>
                  </Center>
                  <br />
                  <MenuDivider />
                  <MenuItem>Botón 1</MenuItem>
                  <MenuItem>Botón 2</MenuItem>
                  <MenuItem>Botón 3</MenuItem>
                </MenuList>
              </Menu>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}