import React, { useEffect, useState } from "react";
import { BoardModel } from "../BoardModel";
import { Box, Flex } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { CreateBoard } from "../CreateBoard";

export const Home = () => {
  const data = useSelector((store) => store.prodManager.data);
  const object = useSelector((store) => store.prodManager.object);
  const [Arrdata, setArrdata] = useState([]);

  const Arrfinder = (data) => {
    let arr = [];
    for (let i in data) {
      arr.push({ name: i });
    }
    setArrdata(arr);
  };

  const Refresh = () => {
    Arrfinder(data);
  };
  useEffect(() => {
    Arrfinder(data);
  }, []);

  return (
    <Box height={"100vh"} w="90%" m="auto" pt="5rem">
      <Box display={"flex"} flexWrap={"wrap"} h="auto" gap="15px">
        {Arrdata.map((ele) => {
          return <BoardModel name={ele.name} data={ele.arr} />;
        })}
        <CreateBoard Refresh={Refresh} />
      </Box>
    </Box>
  );
};
