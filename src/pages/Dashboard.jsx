import { Box, Flex } from "@chakra-ui/react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Gps from "../componen/TabelPegawai/TabelPegawai";

function Dashboard() {
  const userSelector = useSelector((state) => state.auth);
  const history = useNavigate();

  const HandleClick = () => {
    history("/home");
  };
  useEffect(() => {
    if (!userSelector?.id) {
      HandleClick();
    }
  }, [userSelector?.id]);

  return (
    <>
      <Flex
        bgGradient="linear(to-tr, #ffffff 50%, ##ffffff )"
        w="100%"
        h="100%"
      >
        <Box>
          <Flex
            flexWrap={"wrap"}
            paddingTop="10px"
            justifyContent={"space-around"}
          >
            <Box m="10px" h="70px" w="100px" fontWeight="semibold">
              Tabel{" "}
            </Box>
          </Flex>
          <Flex dir="row">
            <Box
              mb={"10px"}
              ml="10px"
              h="100px"
              w="800px"
              fontWeight="semibold"
            ></Box>
          </Flex>
          <Flex mt="10px">
            {/* <FilterProduct/> */}
            <Box mb="20px" mt="10px"></Box>
          </Flex>

          <Flex>
            <Box
              m="15px"
              h="300px"
              w="1400px"
              fontWeight="semibold"
              pb="100px"
              bg="#ffffff"
            >
              <Gps />{" "}
            </Box>
          </Flex>
        </Box>
      </Flex>
    </>
  );
}

export default Dashboard;
