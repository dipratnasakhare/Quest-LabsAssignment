import { Box, Input, Text, Flex, Button, Spacer } from "@chakra-ui/react";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { AddIcon, CloseIcon } from "@chakra-ui/icons";
import { setPost } from "../Redux/products/Prodaction";

export const CreateBoard = ({Refresh}) => {
//   const data = useSelector((store) => store.prodManager.data);
  const [cardName, setcardName] = useState("");
  const [card, setcard] = useState(true);

  const dispatch = useDispatch();

  const HandelSubmit = (cardName) => {
    dispatch(setPost(cardName ));
    setcard(!card);
    Refresh()
  };


  return (
    <Box
      h={card ? "150px" : "180px"}
      width={"250px"}
      bg="white"
      p="5"
      borderRadius={"8%"}
      display={"grid"}
      gap="5"
    >
      <Text textAlign={"start"}>Add Board</Text>

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
