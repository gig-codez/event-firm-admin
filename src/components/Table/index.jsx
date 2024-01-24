"use client";
import React from "react";
import DataTable from 'react-data-table-component';
import Loader from "../loader/loader";
import ActionsComponents from "./ActionsComponent";
import Image from "next/image"
import AddIcon from "./AddIcon";
const cols = [
  {
    name:"Photo",
    grow:0,
    cell:row => <Image width={44} height={44} src={row.imageURL} alt=""/>
  },
  {
    name: 'Name',
    sortable: true,
    selector: row => row.heading,
  },
  {
    name: "Price",
    sortable:true,
    selector:row => row.Price
  },
  {
    name: "Location",
    sortable: true,
    selector:row => row.Location
  },
  {
    name:'Actions',
    cell:row => <ActionsComponents id={row.id}/>,
  }
];
export default function Table({
  data,
  tableHeaderText,
  columns,
}) {
  const [pending, setPending] = React.useState(true);
  const [rows, setRows] = React.useState([]);
  React.useEffect(() => {
    const timeout = setTimeout(() => {
      setRows(data);
      setPending(false);
    }, 2000);
    return () => clearTimeout(timeout);
  }, []);
  // console.log(rows);

  return (
    <div className="rounded-sm border mt-5 border-stroke bg-white px-5 pt-6 pb-2.5 shadow sm:px-7.5 xl:pb-1">
    <DataTable
           title={tableHeaderText}
            columns={cols}
            actions={<AddIcon/>}
            data={rows}
            highlightOnHover
            progressPending={pending}
            progressComponent={<Loader text="Loading inventory hire,please wait..." height={20}/>}
            pagination
          />
    </div>
  );
}
