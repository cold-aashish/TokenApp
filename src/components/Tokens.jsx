import { Box, Heading, Text } from "@chakra-ui/react";
import TokenCard from "./TokenCard";
import { useContext } from "react";
import { TokenContext } from "../context/TokenContext";

const Tokens = () => {
  const { data } = useContext(TokenContext);

  return (
    <Box>
      <Box maxW={"80vw"} margin={"auto"}>
        <Box
          py={10}
          width={"100%"}
          display={"flex"}
          flexDir={"column"}
          alignItems={"center"}
          mb={20}
        >
          <Heading m={0} color={"white"} fontSize={28} fontWeight={600}>
            Coupon App
          </Heading>
          <Text fontSize={18} fontWeight={400} color={"white"}>
            Click on the button to reedem.
          </Text>
        </Box>
        <Box
          px={"auto"}
          display={"flex"}
          // justifyContent={"center"}
          flexWrap={"wrap"}
          gap={2}
        >
          {data.map((token, index) => {
            return <TokenCard confirm={confirm} key={index} token={token} />;
          })}
        </Box>
      </Box>
    </Box>
  );
};

export default Tokens;
