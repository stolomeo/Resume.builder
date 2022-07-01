import { Box } from "@mui/material";
import { useState } from "react";
import DevTemplate from "../components/DevTemplate";
import BottomNav from "../components/Navigation/BottomNav";
import Sidebar from "../components/Navigation/Sidebar";
import Tool from "../components/Navigation/Tool";
import ResumeForm from "../components/Resume/Form";

export default function Create() {
  const [count, setCount] = useState(20);

  return (
    <>
      <Box
        sx={{
          display: "flex",
          marginLeft: "15vw",
          height: "84vh",
        }}
      >
        <Sidebar count={count} setCount={setCount} />
        <ResumeForm count={count} />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "70%",
          }}
        >
          <Tool setCount={setCount} />
          <DevTemplate />
        </Box>
      </Box>
      <BottomNav count={count} setCount={setCount} />
    </>
  );
}
