import {
  Checkbox,
  Icon,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import moment from "moment";
import { useEffect, useState } from "react";
import { FaSort } from "react-icons/fa";
import { axiosInstance } from "../../configs/ape";
import Delete from "../delete";

function GpsTabel() {
  const [gps, setGps] = useState([0]);
  const [pegawai, setPegawai] = useState([0]);

  async function getProduct() {
    await axiosInstance.get("/kontrak/", {}).then((res) => {
      const data = res.data.result;
      setGps([...data]);
      console.log(res.data.result);
      console.log("sasafsafsafsa");
    });
  }
  async function getPegawai() {
    await axiosInstance.get("/pegawai/", {}).then((res) => {
      const data = res.data.result;
      setPegawai([...data]);
      console.log(res.data.result);
      console.log("sasafsafsafsa");
    });
  }

  useEffect(() => {
    getPegawai();
  }, []);

  useEffect(() => {
    getProduct();
  }, []);
  return (
    <>
      <TableContainer rounded={"lg"}>
        <Table variant="simple">
          <TableCaption>Tabel</TableCaption>
          <Thead>
            <Tr bg={"#E1E1F7"}>
              <Th>
                <Checkbox></Checkbox>
              </Th>
              <Th>
                ID
                <Icon as={FaSort} />
              </Th>
              <Th>
                Date
                <Icon as={FaSort} />
              </Th>
              <Th>
                No Kontrak
                <Icon as={FaSort} />
              </Th>
              <Th>
                Nama Kontrak <Icon as={FaSort} />
              </Th>
              <Th isNumeric>
                Nama Pegawai
                <Icon as={FaSort} />
              </Th>
              <Th>Delete</Th>
            </Tr>
          </Thead>
          <Tbody>
            {/* <Tr>
                  <Td>
                  {renderProductList()}
  
                  </Td>
                </Tr> */}
            {gps?.map((Gps) => (
              <Tr key={Gps.id}>
                <Td>
                  <Checkbox></Checkbox>
                </Td>
                <Td>{Gps.id}</Td>
                <Td>{moment(Gps.createdAt).format("YYYY-MM-DD")}</Td>
                <Td>{Gps.no_kontrak}</Td>
                <Td>{Gps.nama} </Td>
                {pegawai?.map((A) => (
                  <Td>{A.nama} </Td>
                ))}

                <Td>
                  <Delete idDel={Gps.id} />
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </>
  );
}
export default GpsTabel;
