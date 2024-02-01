import React from "react";
import Table from "rc-table";
import { ColumnsType } from "rc-table";

export interface Data {
  name: string;

  key: string;
}

interface MyTableProps {
  columns: ColumnsType<Data>;
  data: Data[];
}
export const MyTable = (props: MyTableProps) => {
  return <Table columns={props.columns} data={props.data} />;
};
