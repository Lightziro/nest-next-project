import React from "react";
import { Container } from "@mui/material";

interface MainContainer {
  children: React.ReactNode;
}

export const MainContainer: React.FC<MainContainer> = ({ children }) => {
  return <Container maxWidth="lg">{children}</Container>;
};
