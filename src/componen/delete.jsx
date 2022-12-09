import {
  Box,
  Button,
  Icon,
  Menu,
  MenuItem,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import { GoTrashcan } from "react-icons/go";
import { axiosInstance } from "../configs/ape";

export default function DeletProduct(props) {
  // const {id} = useParams()
  const { idDel } = props;
  const { isOpen, onOpen, onClose } = useDisclosure();

  const toast = useToast();

  async function deletProduct() {
    try {
      await axiosInstance.delete(`/kontrak/delete` + idDel);

      toast({
        title: "Succes",
        description: "Succes deleting Gps",
        status: "success",
        isClosable: true,
      });
    } catch (err) {
      console.log(err);
      toast({
        title: "Error",
        status: "error",
        isClosable: true,
      });
    }
  }

  return (
    <>
      <Button
        focusBorderColor="black"
        color="#00A8B5"
        ml="10px"
        onClick={onOpen}
      >
        <Icon as={GoTrashcan} />
      </Button>
      <Menu>
        <MenuItem>
          <Text fontWeight="semibold"></Text>
        </MenuItem>
        <Modal isOpen={isOpen} onClose={onClose} size="xs">
          <ModalOverlay
            bg="blackAlpha.300"
            backdropFilter="blur(10px) hue-rotate(90deg)"
          />
          <ModalContent>
            <ModalHeader>Delete GPS : {idDel}</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              <Box justifyContent={"space-between"}>
                <Text>
                  If deleted, the GPS data that has been entered will be lost
                  and the GPS will be lost from the product list
                </Text>
              </Box>
              <Box mt="10px" display="flex" justifyContent="flex-end">
                <Button
                  mr={3}
                  colorScheme="red"
                  onClick={() => {
                    async function submit() {
                      await deletProduct();
                    }
                    submit();
                  }}
                >
                  Delete
                </Button>
              </Box>
            </ModalBody>
          </ModalContent>
        </Modal>
      </Menu>
    </>
  );
}
