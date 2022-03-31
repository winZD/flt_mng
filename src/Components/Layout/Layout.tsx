import React from "react";
import {
  AppShell,
  Burger,
  MediaQuery,
  Text,
  useMantineTheme,
} from "@mantine/core";
import { CustomNavbar } from "../Navbar/CustomNavbar";
import { CustomHeader } from "../Header/CustomHeader";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Crew } from "../Crew/Crew";

export const Layout: React.FC = (props) => {
  return (
    <AppShell
      navbar={<CustomNavbar padding="md" />}
      header={<CustomHeader height={60} padding="md" />}
      styles={(theme) => ({
        main: {
          backgroundColor:
            theme.colorScheme === "dark"
              ? theme.colors.dark[8]
              : theme.colors.gray[0],
        },
      })}
    >
      {props.children}
    </AppShell>
  );
};
