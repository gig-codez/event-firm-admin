"use client";
import React from "react";
import DataTable from 'react-data-table-component';
import Loader from "../loader/loader";

const columns = [
	{
		name: 'Title',
		selector: row => row.title,
	},
	{
		name: 'Year',
		selector: row => row.year,
	},
];

const data = [
  	{
		id: 1,
		title: 'Beetlejuice',
		year: '1988',
	},
	{
		id: 2,
		title: 'Ghostbusters',
		year: '1984',
	},
]
export default function Table({
  dat = [],
  tableHeaderText,
  colums = [],
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
  console.log(data);

  return (
    <div className="rounded-sm border mt-5 border-stroke bg-white px-5 pt-6 pb-2.5 shadow sm:px-7.5 xl:pb-1">
        
    <DataTable
           title={tableHeaderText}
            columns={columns}
            data={rows}
            progressPending={pending}
            progressComponent={<Loader text="Loading inventory hire,please wait..." height={20}/>}
            pagination
          />
    </div>
  );
}
