import React, { MouseEvent } from "react";
import DataTable from "react-data-table-component";
// import DataTableExtensions from "react-data-table-component-extensions";
const DataTableExtensions:any = dynamic(() => import('react-data-table-component-extensions'), { ssr: false });

import differenceBy from 'lodash/differenceBy';
// import { tableDataItems } from ""
import { Button } from "react-bootstrap";
import "react-data-table-component-extensions/dist/index.css";
import dynamic from "next/dynamic";
interface TableDataItem {
  id: string;
  SNO: number;
  NAME: string;
  LASTNAME: string;
  POSITION: string;
  DATE: string;
  SALARY: string;
  EMAIL: string;
}

export const tableDataItems :TableDataItem[] = [
  {
      id: "1",
      SNO: 1,
      NAME: "Yonna",
      LASTNAME: "Qond",
      POSITION: "Financial Controller",
      DATE: "2012/02/21",
      SALARY: "$143,654",
      EMAIL: "i.bond@datatables.net",
  },
  {
      id: "2",
      SNO: 2,
      NAME: "Zonna",
      LASTNAME: "Jond",
      POSITION: "Accountant",
      DATE: "2012/02/21",
      SALARY: "$343,654",
      EMAIL: "a.bond@datatables.net",
  },
  {
      id: "3",
      SNO: 3,
      NAME: "Nonna",
      LASTNAME: "Tond",
      POSITION: "Chief Executive Officer",
      DATE: "2012/02/21",
      SALARY: "$743,654",
      EMAIL: "s.bond@datatables.net",
  },
  {
      id: "4",
      SNO: 4,
      NAME: "Bonna",
      LASTNAME: "Oond",
      POSITION: "Chief Operating Officer",
      DATE: "2012/02/21",
      SALARY: "$643,654",
      EMAIL: "w.bond@datatables.net",
  },
  {
      id: "5",
      SNO: 5,
      NAME: "Honna",
      LASTNAME: "Pond",
      POSITION: "Data Coordinator",
      DATE: "2012/02/21",
      SALARY: "$243,654",
      EMAIL: "e.bond@datatables.net",
  },
  {
      id: "6",
      SNO: 6,
      NAME: "Fonna",
      LASTNAME: "Nond",
      POSITION: "Developer",
      DATE: "2012/02/21",
      SALARY: "$543,654",
      EMAIL: "r.bond@datatables.net",
  },
  {
      id: "7",
      SNO: 7,
      NAME: "Aonna",
      LASTNAME: "Xond",
      POSITION: "Development lead",
      DATE: "2012/02/21",
      SALARY: "$843,654",
      EMAIL: "g.bond@datatables.net",
  },
  {
      id: "8",
      SNO: 8,
      NAME: "Qonna",
      LASTNAME: "Vond",
      POSITION: "Director",
      DATE: "2012/02/21",
      SALARY: "$743,654",
      EMAIL: "x.bond@datatables.net",
  },
  {
      id: "9",
      SNO: 9,
      NAME: "Jond",
      LASTNAME: "Zonna",
      POSITION: "Marketing Officer",
      DATE: "2012/02/21",
      SALARY: "$543,654",
      EMAIL: "k.bond@datatables.net",
  },
  {
      id: "10",
      SNO: 10,
      NAME: "Yonna",
      LASTNAME: "Qond",
      POSITION: "Financial Controller",
      DATE: "2012/02/21",
      SALARY: "$143,654",
      EMAIL: "s.bond@datatables.net",
  },
  {
      id: "11",
      SNO: 11,
      NAME: "Yonna",
      LASTNAME: "Qond",
      POSITION: "Financial Controller",
      DATE: "2012/02/21",
      SALARY: "$143,654",
      EMAIL: "b.bond@datatables.net",
  },
  {
      id: "12",
      SNO: 12,
      NAME: "Yonna",
      LASTNAME: "Qond",
      POSITION: "Financial Controller",
      DATE: "2012/02/21",
      SALARY: "$143,654",
      EMAIL: "o.bond@datatables.net",
  },
  {
      id: "13",
      SNO: 13,
      NAME: "Qonna",
      LASTNAME: "Pond",
      POSITION: "Data Coordinator",
      DATE: "2012/02/21",
      SALARY: "$243,654",
      EMAIL: "q.bond@datatables.net",
  },
  {
      id: "14",
      SNO: 14,
      NAME: "Yonna",
      LASTNAME: "Qond",
      POSITION: "Financial Controller",
      DATE: "2012/02/21",
      SALARY: "$143,654",
      EMAIL: "m.bond@datatables.net",
  },
]

export function Hoverdatatable() {
  const columns :any = [
    {
      name: "S.NO",
      selector: (row:TableDataItem) => [row.SNO],
      sortable: true
    },
    {
      name: "NAME",
      selector: (row:TableDataItem) => [row.NAME],
      sortable: true
    },
    {
      name: "LAST NAME",
      selector: (row:TableDataItem) => [row.LASTNAME],
      sortable: true
    },
    {
      name: "POSITION",
      selector: (row:TableDataItem) => [row.POSITION],
      sortable: true,

    },
    {
      name: "DATE",
      selector: (row:TableDataItem) => [row.DATE],
      sortable: true,

    },
    {
      name: " SALARY",
      selector: (row:TableDataItem) => [row.SALARY],
      sortable: true
    },
    {
      name: "EMAIL",
      selector: (row:TableDataItem) => [row.EMAIL],
      sortable: true
    },
  ];
  const data = [
    {
      id: "1",
      SNO: 1,
      NAME: "Yonna",
      LASTNAME: "Qond",
      POSITION: "Financial Controller",
      DATE: "04/02/22",
      SALARY: "$143,654",
      EMAIL: "i.bond@datatables.net",
    },
    {
      id: "2",
      SNO: 2,
      NAME: "Zonna",
      LASTNAME: "Jond",
      POSITION: "Accountant",
      DATE: "08/02/22",
      SALARY: "$343,654",
      EMAIL: "a.bond@datatables.net",
    },
    {
      id: "3",
      SNO: 3,
      NAME: "Nonna",
      LASTNAME: "Tond",
      POSITION: "Chief Executive Officer",
      DATE: "12/02/22",
      SALARY: "$743,654",
      EMAIL: "s.bond@datatables.net",
    },
    {
      id: "4",
      SNO: 4,
      NAME: "Bonna",
      LASTNAME: "Oond",
      POSITION: "Chief Operating Officer",
      DATE: "15/02/22",
      SALARY: "$643,654",
      EMAIL: "w.bond@datatables.net",
    },
    {
      id: "5",
      SNO: 5,
      NAME: "Honna",
      LASTNAME: "Pond",
      POSITION: "Data Coordinator",
      DATE: "16/02/22",
      SALARY: "$243,654",
      EMAIL: "e.bond@datatables.net",
    },
    {
      id: "6",
      SNO: 6,
      NAME: "Fonna",
      LASTNAME: "Nond",
      POSITION: "Developer",
      DATE: "22/02/22",
      SALARY: "$543,654",
      EMAIL: "r.bond@datatables.net",
    },
    {
      id: "7",
      SNO: 7,
      NAME: "Aonna",
      LASTNAME: "Xond",
      POSITION: "Development lead",
      DATE: "24/02/22",
      SALARY: "$843,654",
      EMAIL: "g.bond@datatables.net",
    },
    {
      id: "8",
      SNO: 8,
      NAME: "Qonna",
      LASTNAME: "Vond",
      POSITION: "Director",
      DATE: "25/02/22",
      SALARY: "$743,654",
      EMAIL: "x.bond@datatables.net",
    },
    {
      id: "9",
      SNO: 9,
      NAME: "Jond",
      LASTNAME: "Zonna",
      POSITION: "Marketing Officer",
      DATE: "29/02/22",
      SALARY: "$543,654",
      EMAIL: "k.bond@datatables.net",
    },
    {
      id: "10",
      SNO: 10,
      NAME: "Yonna",
      LASTNAME: "Qond",
      POSITION: "Financial Controller",
      DATE: "30/02/22",
      SALARY: "$143,654",
      EMAIL: "s.bond@datatables.net",
    },
    {
      id: "11",
      SNO: 11,
      NAME: "Yonna",
      LASTNAME: "Qond",
      POSITION: "Financial Controller",
      DATE: "02/03/22",
      SALARY: "$143,654",
      EMAIL: "b.bond@datatables.net",
    },
    {
      id: "12",
      SNO: 12,
      NAME: "Yonna",
      LASTNAME: "Qond",
      POSITION: "Financial Controller",
      DATE: "05/04/22",
      SALARY: "$143,654",
      EMAIL: "o.bond@datatables.net",
    },
    {
      id: "13",
      SNO: 13,
      NAME: "Qonna",
      LASTNAME: "Pond",
      POSITION: "Data Coordinator",
      DATE: "09/03/22",
      SALARY: "$243,654",
      EMAIL: "q.bond@datatables.net",
    },
    {
      id: "14",
      SNO: 14,
      NAME: "Yonna",
      LASTNAME: "Qond",
      POSITION: "Financial Controller",
      DATE: "11/03/22",
      SALARY: "$143,654",
      EMAIL: "m.bond@datatables.net",
    },
  ]
  const tableData = {
    columns,
    data,
  };
  return (
    <div className="table">
      <DataTableExtensions {...tableData} >
        <DataTable
          title="Desserts"
          columns={columns}
          data={data}
          noHeader
          defaultSortAsc={false}
          striped={true}
          persistTableHead
          pagination
          highlightOnHover
        />
      </DataTableExtensions>
    </div>
  );
}
export const DataTables = () => {
  const [selectedRows, setSelectedRows] = React.useState([]);
  const [toggleCleared, setToggleCleared] = React.useState(false);
  const [data, setData] = React.useState(tableDataItems);

  const handleRowSelected = React.useCallback((state: any) => {
    setSelectedRows(state.selectedRows);
  }, []);

  const columns :any = [
    {
      name: "S.NO",
      selector: (row: TableDataItem) => [row.SNO],
      sortable: true
    },
    {
      name: "NAME",
      selector: (row: TableDataItem) => [row.NAME],
      sortable: true
    },
    {
      name: "LAST NAME",
      selector: (row: TableDataItem) => [row.LASTNAME],
      sortable: true
    },
    {
      name: "POSITION",
      selector: (row: TableDataItem) => [row.POSITION],
      sortable: true,

    },
    {
      name: "DATE",
      selector: (row: TableDataItem) => [row.DATE],
      sortable: true,

    },
    {
      name: " SALARY",
      selector: (row: TableDataItem) => [row.SALARY],
      sortable: true
    },
    {
      name: "EMAIL",
      selector: (row: TableDataItem) => [row.EMAIL],
      sortable: true
    },
  ];
  const contextActions = React.useMemo(() => {
    const handleDelete = () => {

      if (window.confirm(`Are you sure you want to delete:\r ${selectedRows.map((r:TableDataItem) => r.SNO)}?`)) {
        setToggleCleared(!toggleCleared);
        setData(differenceBy(data, selectedRows, 'SNO'));
      }
    };

    return (
      <Button key="delete" onClick={handleDelete} >
        Delete
      </Button>
    );
  }, [data, selectedRows, toggleCleared]);
  const tableDatas = {
    columns,
    data,
  };
  return (

    <DataTableExtensions {...tableDatas} >
      <DataTable
        title
        columns={columns}
        data={data}
        selectableRows
        contextActions={contextActions}
        onSelectedRowsChange={handleRowSelected}
        clearSelectedRows={toggleCleared}
        pagination
      />
    </DataTableExtensions>
  );
}
function convertArrayOfObjectsToCSV(array: object[]): string {
  let result: string;

  const columnDelimiter = ',';
  const lineDelimiter = '\n';
  const keys = Object.keys(data[0]);

  result = '';
  result += keys.join(columnDelimiter);
  result += lineDelimiter;

  array.forEach((item:any) => {
    let ctr = 0;
    keys.forEach((key: string) => {
      if (ctr > 0) result += columnDelimiter;

      result += item[key];

      ctr++;
    });
    result += lineDelimiter;
  });

  return result;
}
// Blatant "inspiration" from https://codepen.io/Jacqueline34/pen/pyVoWr
interface CSVRow {
  [key: string]: string;
}
function downloadCSV(array: any[]) {
  const link = document.createElement('a');
  let csv = convertArrayOfObjectsToCSV(array);
  if (csv == null) return;

  const filename = 'export.csv';

  if (!csv.match(/^data:text\/csv/i)) {
    csv = `data:text/csv;charset=utf-8,${csv}`;
  }

  link.setAttribute('href', encodeURI(csv));
  link.setAttribute('download', filename);
  link.click();
}
interface ExportProps {
  onExport: (value: string) => void;
}
const Export = ({ onExport }:ExportProps) => <Button onClick={(e: MouseEvent<HTMLButtonElement>) => onExport(e.currentTarget.value)}>Export</Button>;
const data = [
  {
    id: "1",
    SNO: 1,
    NAME: "Yonna",
    LASTNAME: "Qond",
    POSITION: "Financial Controller",
    DATE: "15/05/22",
    SALARY: "$143,654",
    EMAIL: "i.bond@datatables.net",
  },
  {
    id: "2",
    SNO: 2,
    NAME: "Zonna",
    LASTNAME: "Jond",
    POSITION: "Accountant",
    DATE: "18/05/22",
    SALARY: "$343,654",
    EMAIL: "a.bond@datatables.net",
  },
  {
    id: "3",
    SNO: 3,
    NAME: "Nonna",
    LASTNAME: "Tond",
    POSITION: "Chief Executive Officer",
    DATE: "18/05/22",
    SALARY: "$743,654",
    EMAIL: "s.bond@datatables.net",
  },
  {
    id: "4",
    SNO: 4,
    NAME: "Bonna",
    LASTNAME: "Oond",
    POSITION: "Chief Operating Officer",
    DATE: "20/05/22",
    SALARY: "$643,654",
    EMAIL: "w.bond@datatables.net",
  },
  {
    id: "5",
    SNO: 5,
    NAME: "Honna",
    LASTNAME: "Pond",
    POSITION: "Data Coordinator",
    DATE: "22/05/22",
    SALARY: "$243,654",
    EMAIL: "e.bond@datatables.net",
  },
  {
    id: "6",
    SNO: 6,
    NAME: "Fonna",
    LASTNAME: "Nond",
    POSITION: "Developer",
    DATE: "24/05/22",
    SALARY: "$543,654",
    EMAIL: "r.bond@datatables.net",
  },
  {
    id: "7",
    SNO: 7,
    NAME: "Aonna",
    LASTNAME: "Xond",
    POSITION: "Development lead",
    DATE: "26/05/22",
    SALARY: "$843,654",
    EMAIL: "g.bond@datatables.net",
  },
  {
    id: "8",
    SNO: 8,
    NAME: "Qonna",
    LASTNAME: "Vond",
    POSITION: "Director",
    DATE: "28/05/22",
    SALARY: "$743,654",
    EMAIL: "x.bond@datatables.net",
  },
  {
    id: "9",
    SNO: 9,
    NAME: "Jond",
    LASTNAME: "Zonna",
    POSITION: "Marketing Officer",
    DATE: "29/05/22",
    SALARY: "$543,654",
    EMAIL: "k.bond@datatables.net",
  },
  {
    id: "10",
    SNO: 10,
    NAME: "Yonna",
    LASTNAME: "Qond",
    POSITION: "Financial Controller",
    DATE: "01/06/22",
    SALARY: "$143,654",
    EMAIL: "s.bond@datatables.net",
  },
  {
    id: "11",
    SNO: 11,
    NAME: "Yonna",
    LASTNAME: "Qond",
    POSITION: "Financial Controller",
    DATE: "02/06/22",
    SALARY: "$143,654",
    EMAIL: "b.bond@datatables.net",
  },
  {
    id: "12",
    SNO: 12,
    NAME: "Yonna",
    LASTNAME: "Qond",
    POSITION: "Financial Controller",
    DATE: "05/06/22",
    SALARY: "$143,654",
    EMAIL: "o.bond@datatables.net",
  },
  {
    id: "13",
    SNO: 13,
    NAME: "Qonna",
    LASTNAME: "Pond",
    POSITION: "Data Coordinator",
    DATE: "08/06/22",
    SALARY: "$243,654",
    EMAIL: "q.bond@datatables.net",
  },
  {
    id: "14",
    SNO: 14,
    NAME: "Yonna",
    LASTNAME: "Qond",
    POSITION: "Financial Controller",
    DATE: "11/06/22",
    SALARY: "$143,654",
    EMAIL: "m.bond@datatables.net",
  },
]
const columns :any = [
  {
    name: "S.NO",
    selector: (row : TableDataItem) => [row.SNO],
    sortable: true
  },
  {
    name: "NAME",
    selector: (row : TableDataItem) => [row.NAME],
    sortable: true
  },
  {
    name: "LAST NAME",
    selector: (row : TableDataItem) => [row.LASTNAME],
    sortable: true
  },
  {
    name: "POSITION",
    selector: (row : TableDataItem) => [row.POSITION],
    sortable: true,

  },
  {
    name: "DATE",
    selector: (row : TableDataItem) => [row.DATE],
    sortable: true,

  },
  {
    name: " SALARY",
    selector: (row : TableDataItem) => [row.SALARY],
    sortable: true
  },
  {
    name: "EMAIL",
    selector: (row : TableDataItem) => [row.EMAIL],
    sortable: true
  },
];
const tableDatas = {
  columns,
  data,
};
export const ExportCSV = () => {
  const actionsMemo = React.useMemo(() => <Export onExport={() => downloadCSV(data)} />, []);

  return (
    <DataTableExtensions {...tableDatas} >
      <DataTable columns={columns} data={data} actions={actionsMemo} pagination />
    </DataTableExtensions>
  );
};
export const BasicDatatable = () => {
  const data = [
    {
      id: "1",
      SNO: 1,
      NAME: "Yonna",
      LASTNAME: "Qond",
      POSITION: "Financial Controller",
      DATE: "01/03/22",
      SALARY: "$143,654",
      EMAIL: "i.bond@datatables.net",
    },
    {
      id: "2",
      SNO: 2,
      NAME: "Zonna",
      LASTNAME: "Jond",
      POSITION: "Accountant",
      DATE: "02/06/22",
      SALARY: "$343,654",
      EMAIL: "a.bond@datatables.net",
    },
    {
      id: "3",
      SNO: 3,
      NAME: "Nonna",
      LASTNAME: "Tond",
      POSITION: "Chief Executive Officer",
      DATE: "06/04/22",
      SALARY: "$743,654",
      EMAIL: "s.bond@datatables.net",
    },
    {
      id: "4",
      SNO: 4,
      NAME: "Bonna",
      LASTNAME: "Oond",
      POSITION: "Chief Operating Officer",
      DATE: "08/04/22",
      SALARY: "$643,654",
      EMAIL: "w.bond@datatables.net",
    },
    {
      id: "5",
      SNO: 5,
      NAME: "Honna",
      LASTNAME: "Pond",
      POSITION: "Data Coordinator",
      DATE: "12/04/22",
      SALARY: "$243,654",
      EMAIL: "e.bond@datatables.net",
    },
    {
      id: "6",
      SNO: 6,
      NAME: "Fonna",
      LASTNAME: "Nond",
      POSITION: "Developer",
      DATE: "14/04/22",
      SALARY: "$543,654",
      EMAIL: "r.bond@datatables.net",
    },
    {
      id: "7",
      SNO: 7,
      NAME: "Aonna",
      LASTNAME: "Xond",
      POSITION: "Development lead",
      DATE: "15/04/22",
      SALARY: "$843,654",
      EMAIL: "g.bond@datatables.net",
    },
    {
      id: "8",
      SNO: 8,
      NAME: "Qonna",
      LASTNAME: "Vond",
      POSITION: "Director",
      DATE: "18/04/22",
      SALARY: "$743,654",
      EMAIL: "x.bond@datatables.net",
    },
    {
      id: "9",
      SNO: 9,
      NAME: "Jond",
      LASTNAME: "Zonna",
      POSITION: "Marketing Officer",
      DATE: "20/04/22",
      SALARY: "$543,654",
      EMAIL: "k.bond@datatables.net",
    },
    {
      id: "10",
      SNO: 10,
      NAME: "Yonna",
      LASTNAME: "Qond",
      POSITION: "Financial Controller",
      DATE: "22/04/22",
      SALARY: "$143,654",
      EMAIL: "s.bond@datatables.net",
    },
    {
      id: "11",
      SNO: 11,
      NAME: "Yonna",
      LASTNAME: "Qond",
      POSITION: "Financial Controller",
      DATE: "24/04/22",
      SALARY: "$143,654",
      EMAIL: "b.bond@datatables.net",
    },
    {
      id: "12",
      SNO: 12,
      NAME: "Yonna",
      LASTNAME: "Qond",
      POSITION: "Financial Controller",
      DATE: "26/04/22",
      SALARY: "$143,654",
      EMAIL: "o.bond@datatables.net",
    },
    {
      id: "13",
      SNO: 13,
      NAME: "Qonna",
      LASTNAME: "Pond",
      POSITION: "Data Coordinator",
      DATE: "28/04/22",
      SALARY: "$243,654",
      EMAIL: "q.bond@datatables.net",
    },
    {
      id: "14",
      SNO: 14,
      NAME: "Yonna",
      LASTNAME: "Qond",
      POSITION: "Financial Controller",
      DATE: "30/04/22",
      SALARY: "$143,654",
      EMAIL: "m.bond@datatables.net",
    },
  ]
  const columns : any = [
    {
      name: "S.NO",
      selector: (row : TableDataItem) => [row.SNO],
      sortable: false
    },
    {
      name: "NAME",
      selector: (row : TableDataItem) => [row.NAME],
      sortable: true
    },
    {
      name: "LAST NAME",
      selector: (row : TableDataItem) => [row.LASTNAME],
      sortable: true
    },
    {
      name: "POSITION",
      selector: (row : TableDataItem) => [row.POSITION],
      sortable: true,

    },
    {
      name: "DATE",
      selector: (row : TableDataItem) => [row.DATE],
      sortable: true,

    },
    {
      name: " SALARY",
      selector: (row : TableDataItem) => [row.SALARY],
      sortable: true
    },
    {
      name: "EMAIL",
      selector: (row : TableDataItem) => [row.EMAIL],
      sortable: true
    },
  ];
  const tableDatas = {
    columns,
    data,
  };
  return (
    <DataTableExtensions {...tableDatas} >
      <DataTable

        columns={columns}
        data={data}
        pagination
      />
    </DataTableExtensions>
  )
}