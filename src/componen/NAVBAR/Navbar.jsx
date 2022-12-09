import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Flex,
  HStack,
  Icon,
  IconButton,
  Link,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { BsArrowRightCircle } from "react-icons/bs";
import { RiHome2Line } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import SearchPro from "../SearchPro";
export default function NavBar() {
  const dispatch = useDispatch();

  const {
    isOpen: isOpenSignup,
    onOpen: onOpenSignup,
    onClose: onCloseSignup,
  } = useDisclosure();
  const router = useNavigate();

  // -------------------- Untuk Logout -------------------- //

  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Box
        bg="#ffffff"
        borderBottomWidth="1px"
        px={1}
        className="topnavbar"
        zIndex={111}
        width="1340px"
      >
        <Flex h="70px" alignItems={"center"} justifyContent={"space-between"}>
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

          <Flex mr="20px">
            <Flex>
              <Button background="white" mr="8px">
                <Icon boxSize="5" as={RiHome2Line} mr="8px" />
                Home
              </Button>
            </Flex>
          </Flex>

          <SearchPro />

          <Flex alignItems={"center"}>
            <HStack>
              <Box w="110px">
                <Text
                  fontWeight="bold"
                  my="1px"
                  color="#00A8B5"
                  borderColor="#00A8B5"
                >
                  <Button
                    w="full"
                    borderColor="AppWorkspace"
                    bg={"white"}
                    borderRadius="9px"
                    ml="10px"
                    size="md"
                    my="2px"
                    onClick={onOpenSignup}
                  >
                    <Icon boxsSize="3" as={BsArrowRightCircle} />
                    Sign up{" "}
                  </Button>
                </Text>
                <Modal
                  isOpen={isOpenSignup}
                  onClose={onCloseSignup}
                  size="sm"
                  bg="transparent"
                >
                  <ModalOverlay />
                  <ModalContent>
                    <ModalHeader>Sign up </ModalHeader>
                    <ModalCloseButton />
                    <ModalBody pb={6}></ModalBody>
                  </ModalContent>
                </Modal>
              </Box>
            </HStack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}
