import React from "react";
import {
  Burger,
  Header,
  HeaderProps,
  MediaQuery,
  Text,
  useMantineTheme,
} from "@mantine/core";

export const CustomHeader = (props: Omit<HeaderProps, "children">) => {
  const theme = useMantineTheme();
  //style={{ background: theme.colors.blue[5] }}
  return (
    <Header {...props}>
      <div style={{ display: "flex", alignItems: "center", height: "100%" }}>
        <Text>
          <strong>Fleet manager</strong>
        </Text>
      </div>
    </Header>
  );
};
