import { useMemo, useState } from "react";
import { Column } from "react-table";
import { Modal, Button, Group } from "@mantine/core";

interface Data {
  name: string;
  age: number;
  id: string;
}

export const data: Data[] = [
  {
    name: "John",
    age: 23,
    id: "",
  },
  {
    name: "Jane",
    age: 26,
    id: "",
  },
];

export const Columns = (): Column<{
  name: string;
  age: number;
  id: string;
}>[] => {
  const column: Column<{ name: string; age: number; id: string }>[] = useMemo(
    () => [
      {
        Header: "Column 1",
        accessor: "name", // accessor is the "key" in the data
      },
      {
        Header: "Column 2",
        accessor: "age",
      },
      {
        Header: "",
        accessor: "id",
        Cell: () => {
          return <Button>{"Info"}</Button>;
        },
      },
    ],
    []
  );
  return column;
};
