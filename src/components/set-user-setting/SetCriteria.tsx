"use client";
import React, { useEffect, useState } from "react";

// MUI
import { DataGrid, GridColDef } from "@mui/x-data-grid";

// UTILS
import { CustomPagination } from "@/utils/CustomPagination";
import { SearchTable } from "@/utils/SearchTable";

// ICONS
import { FaDownload } from "react-icons/fa6";
import { Switch } from "@mui/material";
import { MdEdit } from "react-icons/md";

interface Row {
  id: string;
  amount: number;
  criteria: string;
  description: string;
  isIncluded: boolean;
}

const initialRows: Row[] = [
  {
    id: "1",
    criteria: "A",
    description: "High-risk transaction",
    amount: 0,
    isIncluded: false,
  },
  {
    id: "2",
    criteria: "B",
    description: "National from a high-risk jurisdiction ",
    amount: 0,
    isIncluded: false,
  },
  {
    id: "3",
    criteria: "C",
    description: "Cash Lodgements",
    amount: 0,
    isIncluded: false,
  },
  {
    id: "4",
    criteria: "D",
    description: "EFT Lodgements ",
    amount: 0,
    isIncluded: false,
  },
  {
    id: "5",
    criteria: "E",
    description: "Minor Account Lodgements",
    amount: 0,
    isIncluded: false,
  },
  {
    id: "6",
    criteria: "F",
    description: "Sub-office Lodgements",
    amount: 0,
    isIncluded: false,
  },
  {
    id: "7",
    criteria: "G",
    description: "Counter New Member Lodgements ",
    amount: 0,
    isIncluded: false,
  },
  {
    id: "8",
    criteria: "H",
    description: "Online New Member Lodgements",
    amount: 0,
    isIncluded: false,
  },
  {
    id: "9",
    criteria: "I",
    description: "Self Employed Lodgements",
    amount: 0,
    isIncluded: false,
  },
  {
    id: "10",
    criteria: "J",
    description: "Unemployed Lodgements",
    amount: 0,
    isIncluded: false,
  },
  {
    id: "11",
    criteria: "K",
    description: "Large Cash Withdrawals",
    amount: 0,
    isIncluded: false,
  },
  {
    id: "12",
    criteria: "L",
    description: "Multiple Large Cash Transactions",
    amount: 0,
    isIncluded: false,
  },
  {
    id: "13",
    criteria: "M",
    description: "High-Value Wire Transfers",
    amount: 0,
    isIncluded: false,
  },
  {
    id: "14",
    criteria: "N",
    description: "Foreign Exchange Transactions",
    amount: 0,
    isIncluded: false,
  },
  {
    id: "15",
    criteria: "O",
    description: "High-Frequency Trading Activity",
    amount: 0,
    isIncluded: false,
  },
  {
    id: "16",
    criteria: "P",
    description: "Third-Party Payments",
    amount: 0,
    isIncluded: false,
  },
  {
    id: "17",
    criteria: "Q",
    description: "Large Inbound Transactions",
    amount: 0,
    isIncluded: false,
  },
  {
    id: "18",
    criteria: "R",
    description: "Non-Profit Organization Deposits",
    amount: 0,
    isIncluded: false,
  },
  {
    id: "19",
    criteria: "S",
    description: "Corporate Account Deposits",
    amount: 0,
    isIncluded: false,
  },
  {
    id: "20",
    criteria: "T",
    description: "Trust Account Transactions",
    amount: 0,
    isIncluded: false,
  },
  {
    id: "21",
    criteria: "U",
    description: "Government Grants or Subsidies",
    amount: 0,
    isIncluded: false,
  },
  {
    id: "22",
    criteria: "V",
    description: "Large Cash Transactions with No Apparent Purpose",
    amount: 0,
    isIncluded: false,
  },
  {
    id: "23",
    criteria: "W",
    description: "Suspicious Activity Patterns",
    amount: 0,
    isIncluded: false,
  },
  {
    id: "24",
    criteria: "X",
    description: "Unusually Large ATM Withdrawals",
    amount: 0,
    isIncluded: false,
  },
  {
    id: "25",
    criteria: "Y",
    description: "Overseas Transactions from High-Risk Countries",
    amount: 0,
    isIncluded: false,
  },
  {
    id: "26",
    criteria: "Z",
    description: "Politically Exposed Person (PEP) Transactions",
    amount: 0,
    isIncluded: false,
  },
];

interface CriteriaData {
  [key: string]: {
    amount: number;
    isincluded: boolean;
    description: string;
  };
}

const SetCritera = ({ formData, setFormData }: SetUserReportFormType) => {
  const [rows, setRows] = useState<Row[]>(initialRows);
  const [criteriaData, setCriteriaData] = useState<CriteriaData>({});
  const [switchStates, setSwitchStates] = useState<{ [key: string]: boolean }>(
    {}
  );

  useEffect(() => {
    console.log("criteriaData", criteriaData);
    setFormData((prevFormData: any) => ({
        ...prevFormData,
        ["Criteria"]: criteriaData,
      }));
  }, [criteriaData]);


  useEffect(() => {
    // Transform rows data into criteria data format
    const updatedCriteriaData: CriteriaData = rows.reduce(
      (acc: any, row: any) => {
        acc[row.criteria] = {
          amount: row.amount,
          isincluded: row.isIncluded,
          description: row.description,
        };
        return acc;
      },
      {}
    );
    setCriteriaData(updatedCriteriaData);
  }, [rows]);

  // Initialize switch states based on row data when component mounts
  useEffect(() => {
    // Assuming rows is your array of data
    rows.forEach((row) => {
      setSwitchStates((prevState) => ({
        ...prevState,
        [row.id]: row.isIncluded,
      }));
    });
  }, []);

  const handleSwitchChange =
    (id: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
      const { checked } = event.target;
      setSwitchStates((prevState) => ({
        ...prevState,
        [id]: checked,
      }));

      setRows((prevRows) =>
        prevRows.map((row) => {
          if (row.id === id) {
            return { ...row, isIncluded: checked };
          }
          return row;
        })
      );
    };

  function calculateColumnWidth(columnName: keyof Row) {
    // Finding the maximum length of content in the specified column
    const maxLength = Math.max(
      ...rows.map((row) => String(row[columnName]).length)
    );
    // Adding some extra padding for better readability
    return maxLength * 10; // Adjust this factor as needed
  }

  const columns: GridColDef[] = [
    {
      field: "criteria",
      headerName: "Criteria",
      headerAlign: "center",
      align: "center",
      sortable: false,
      disableColumnMenu: true,
      editable: false,
    },
    {
      field: "type",
      headerName: "Is this criteria included?",
      headerAlign: "center",
      align: "center",
      sortable: false,
      editable: true,
      disableColumnMenu: true,
      width: 200,
      renderCell: (params) => {
        const { id } = params.row as Row;
        return (
          <Switch
            checked={switchStates[id] || false}
            onChange={handleSwitchChange(id)}
            name={id}
          />
        );
      },
    },
    {
      field: "amount",
      headerName: "Amount",
      headerAlign: "center",
      align: "center",
      sortable: false,
      editable: true,
      disableColumnMenu: true,
    },
    {
      field: "description",
      headerName: "Description",
      width: calculateColumnWidth("description"),
      disableColumnMenu: true,
      sortable: false,
      editable: false,
    },
    {
      field: "edit",
      headerName: "Edit",
      headerAlign: "center",
      align: "center",
      disableColumnMenu: true,
      sortable: false,
      renderCell: (params) => (
        <MdEdit className=" text-[18px] cursor-pointer" />
      ),
    },
  ];

  const handleProcessRowUpdate = (updatedRow: any, originalRow: any) => {
    // Find the index of the row that was edited
    const rowIndex = rows.findIndex((row) => row.id === updatedRow.id);

    // Replace the old row with the updated row
    const updatedRows = [...rows];
    updatedRows[rowIndex] = updatedRow;

    // Update the state with the new rows
    setRows(updatedRows);

    // Return the updated row to update the internal state of the DataGrid
    return updatedRow;
  };

  return (
    <DataGrid
      sx={{
        border: "none",
        "& .MuiDataGrid-columnHeaderTitle": {
          fontWeight: "600",
        },
        "& .MuiDataGrid-columnHeader": {
          fontSize: "14px",
        },
        "& .MuiDataGrid-columnHeader:focus-within, .MuiDataGrid-cell:focus": {
          outline: "none",
        },

        "& .MuiDataGrid-footerContainer": {
          display: "none !important",
        },
      }}
      rows={rows}
      columns={columns}
      hideFooterPagination={true}
      editMode="row"
      processRowUpdate={handleProcessRowUpdate}
    />
  );
};

export default SetCritera;
