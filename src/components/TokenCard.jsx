import {
  Box,
  Button,
  Card,
  Flex,
  Heading,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import { TokenContext } from "../context/TokenContext";
import ConfirmationModal from "./ConfirmationModal";

const TokenCard = (props) => {
  const { token, setTokens, confirm, setConfirm } = props;
  const { data, setData } = useContext(TokenContext);
  const [currToken] = useState(token);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const reedem = (id) => {
    const newtokens = data.filter((t) => {
      if (t?.id === id) {
        t.isReedemed = true;
        t.balance = 0;
        setTokens(t);

        return t;
      }
      return t;
    });
    setData([...newtokens]);
  };

  useEffect(() => {}, [confirm]);

  return (
    <Card
      borderRadius={6}
      boxShadow={"md"}
      // border={"1px solid red"}
      minW={"300px"}
      px={6}
      py={4}
      bg={"white"}
    >
      <Box>
        <Heading fontSize={20} p={0} m={0}>
          {currToken?.label}
        </Heading>
        <Flex mt={2} justifyContent={"space-between"}>
          <Text fontSize={15}> {currToken?.desc}</Text>
          <Flex gap={1}>
            <Text fontSize={15} fontWeight={600}>
              Balance:
            </Text>
            {"    "}
            <Text fontSize={15}> ${currToken?.balance}</Text>
          </Flex>
        </Flex>

        <Box width={"100%"} display={"flex"} justifyContent={"flex-end"}>
          <Button
            mt={5}
            bg={"#4D0286"}
            minW={"120px"}
            border={"none"}
            cursor={"pointer"}
            color={"white"}
            // fontWeight={600}
            fontSize={"sm"}
            _disabled={{ cursor: "not-allowed", bg: "red.400" }}
            _hover={false}
            isDisabled={currToken?.isReedemed}
            onClick={() => {
              onOpen();
            }}
          >
            Reedem
          </Button>
        </Box>
      </Box>
      <ConfirmationModal
        isOpen={isOpen}
        onClose={onClose}
        setConfirm={setConfirm}
        reedem={reedem}
        token={currToken}
      />
    </Card>
  );
};

export default TokenCard;
