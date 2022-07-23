import React from "react";
import { Container } from "@mui/material";

interface MainContainer {
  children: React.ReactNode;
  className?: string;
}

export const MainContainer: React.FC<MainContainer> = ({
  children,
  className,
}) => {
  return (
    <Container maxWidth="lg" className={className}>
      {children}
    </Container>
  );
};
