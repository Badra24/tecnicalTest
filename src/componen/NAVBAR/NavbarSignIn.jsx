import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import {
  Avatar,
  Box,
  Button,
  Flex,
  HStack,
  Icon,
  IconButton,
  Link,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import jsCookie from "js-cookie";
import LinkNext from "next/link";
import { BiHelpCircle } from "react-icons/bi";
import { IoLogOutOutline } from "react-icons/io5";
import { RiHome2Line } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import auth_types from ".././.././redux/action/types";
import SearchInput from "../SearchPro";

export default function NavBarSignIn() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    isOpen: isOpenCart,
    onOpen: onOpenCart,
    onClose: onCloseCart,
  } = useDisclosure();
  const router = useNavigate();
  const userSelector = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  function btnlogout() {
    jsCookie.remove("auth_token");
    dispatch({
      type: auth_types.USER_LOGOUT,
    });
  }
  return (
    <>
      <Box
        bg="#ffffff"
        borderBottomWidth="1px"
        boxShadow="md"
        px={4}
        className="topnavbar"
        zIndex={111}
      >
        <Flex h="80px" alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            bg="#ffffff"
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />

          <Link href="/home">
            <HStack
              spacing={8}
              alignItems={"center"}
              _hover={{ cursor: "pointer" }}
            ></HStack>
          </Link>

          <Flex>
            <Button background="white" mr="8px">
              <Icon boxSize="5" as={RiHome2Line} mr="8px" />
              Home
            </Button>
          </Flex>

          <SearchInput />
          <Flex alignItems={"center"} ml="10px">
            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
            >
              {/* {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))} */}
            </HStack>
            <Menu>
              <MenuButton
                as={Button}
                rounded={"full"}
                variant={"link"}
                cursor={"pointer"}
                minW={0}
              >
                <Avatar
                  ml="10px"
                  size={"sm"}
                  src={
                    "https://i.pinimg.com/564x/bb/84/e8/bb84e8891c5b8aea249381b5d7c936e5.jpg"
                  }
                />
              </MenuButton>

              <MenuList>
                <LinkNext href="/profilesetting">
                  <MenuItem>
                    {" "}
                    <Avatar
                      size={"sm"}
                      src={
                        "https://i.pinimg.com/564x/bb/84/e8/bb84e8891c5b8aea249381b5d7c936e5.jpg"
                      }
                    />{" "}
                    <Text ml="10px" fontWeight="bold">
                      {userSelector.username}
                    </Text>
                  </MenuItem>
                </LinkNext>
                <MenuDivider />

                <MenuItem>
                  <Icon boxSize="6" as={BiHelpCircle} />
                  <Text ml="10px">Bantuan</Text>
                </MenuItem>
                <MenuDivider />
                <LinkNext href="/auth">
                  <MenuItem onClick={btnlogout}>
                    <Icon boxSize="6" as={IoLogOutOutline} />
                    <Text ml="10px">Log Out</Text>
                  </MenuItem>
                </LinkNext>
              </MenuList>
            </Menu>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}
