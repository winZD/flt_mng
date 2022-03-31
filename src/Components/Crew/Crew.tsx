import React, { useMemo } from "react";
import { Column } from "react-table";
import { Columns, data } from "../../Helpers/crew_helper";
import CustomTable from "../Table/Table";

export const Crew = () => {
  return <CustomTable columns={Columns()} data={data} />;
};

/*For defining table
 
 
 interface Data {
    name: string;
    age: number;
  }

  const data: Data[] = [
    {
      name: "John",
      age: 23,
    },
    {
      name: "Jane",
      age: 26,
    },
  ];

  const columns: Column<{ name: string; age: number }>[] = useMemo(
    () => [
      {
        Header: "Column 1",
        accessor: "name", // accessor is the "key" in the data
      },
      {
        Header: "Column 2",
        accessor: "age",
      },
    ],
    []
  );*/
