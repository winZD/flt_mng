import React, { useState } from "react";
import {
  ActionIcon,
  Navbar,
  NavbarProps,
  Text,
  useMantineTheme,
} from "@mantine/core";
import { NavigateFunction, useNavigate } from "react-router-dom";
import { useHover } from "@mantine/hooks";
import "./StylesNavbar.scss";

export const CustomNavbar = (props: Omit<NavbarProps, "children">) => {
  const theme = useMantineTheme();
  const { hovered, ref } = useHover();
  const navigate: NavigateFunction = useNavigate();

  return (
    <Navbar
      {...props}
      padding="md"
      // Breakpoint at which navbar will be hidden if hidden prop is true
      hiddenBreakpoint="sm"
      // Hides navbar when viewport size is less than value specified in hiddenBreakpoint

      width={{ sm: 300, lg: 350 }}
    >
      {/* First section with normal height (depends on section content) */}

      <Navbar.Section
        className="navigation-item"
        onClick={() => navigate("/crew")}
      >
        Crew
      </Navbar.Section>

      {/* Grow section will take all available space that is not taken by first and last sections */}
      <Navbar.Section className="navigation-item">Grow section</Navbar.Section>

      {/* Last section with normal height (depends on section content) */}
      <Navbar.Section className="navigation-item">Last section</Navbar.Section>
    </Navbar>
  );
};
