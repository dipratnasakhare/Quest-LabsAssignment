import { Box, Input, Text, Flex, Button, Spacer } from "@chakra-ui/react";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AddIcon, CloseIcon, EditIcon } from "@chakra-ui/icons";
import { addPost } from "../Redux/products/Prodaction";

export const BoardModel = ({name, key}) => {
  const data = useSelector((store) => store.prodManager.data);
  const [cardName, setcardName] = useState("");
  const [card, setcard] = useState(true);

  const dispatch = useDispatch();

  const HandelSubmit = (cardName) => {
    dispatch(addPost(cardName, name ));
    setcard(!card);
  };



  return (
    <Box
    h="auto"
     key={key / Math.random()}
      width={"250px"}
      bg="white"
      p="5"
      borderRadius={"8%"}
      gap="5"
    

    >
      <Text textAlign={"start"}>{name}</Text>

      <Box>
        {data[name] &&
          data[name].map((ele, i) => {
            return (
              <Flex key={i} bg="gray.100" m="5px" p="5px" borderRadius={"5%"}>
                <Box>
                  <Text textAlign={"start"}>{ele}</Text>
                </Box>

                <Spacer />
                <Box>
                  {" "}
                  <EditIcon />
                </Box>
              </Flex>
            );
          })}
      </Box>

      {card ? (
        <Flex
          onClick={() => setcard(!card)}
          border={"1px solid blue"}
          alignContent={"center"}
          p="10px"
          gap={"3"}
        >
          <AddIcon mt="1" />
          <Text>Add a card</Text>
        </Flex>
      ) : (
        <Box gap="5" display={"grid"}>
          <Input
            placeholder="Enter the text for this card..."
            onChange={(e) => setcardName(e.target.value)}
          />
          <Flex gap="5">
            <Button
              onClick={() => HandelSubmit(cardName)}
              colorScheme="teal"
              variant="outline"
            >
              Add a card
            </Button>
            <CloseIcon onClick={() => setcard(!card)} mt="3" />
          </Flex>
        </Box>
      )}
    </Box>
  );
};
