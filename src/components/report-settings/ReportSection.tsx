//
"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

// MUI
import {
  GridRowsProp,
  GridRowModesModel,
  GridRowModes,
  DataGrid,
  GridColDef,
  GridToolbarContainer,
  GridActionsCellItem,
  GridEventListener,
  GridRowId,
  GridRowModel,
  GridRowEditStopReasons,
} from "@mui/x-data-grid";
import Switch from "@mui/material/Switch";

//ICONS
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import SaveIcon from "@mui/icons-material/Save";
import CancelIcon from "@mui/icons-material/Close";

// COMPONENTS
import runReportSvg from "@/assets/svgs/runReport.svg";
import resetCriteriaSvg from "@/assets/svgs/resetCriteria.svg";
import uploadDataSvg from "@/assets/svgs/uploadData.svg";

// UTILS
import { CustomPagination } from "@/utils/CustomPagination";
import { SearchTable } from "@/utils/SearchTable";
import Modal from "../uploadcsv/Modal";
import { Button } from "@mui/material";

interface Row {
  id: number;
  type: string;
  amount: string;
  criteria: string;
  description: string;
}

const initialRows: Row[] = [
  {
    id: 1,
    criteria: "A",
    description: "High-risk transaction",
    type: "SRC",
    amount: "$3500",
  },
  {
    id: 2,
    criteria: "B",
    description: "National from a high-risk jurisdiction ",
    type: "SRC",
    amount: "$4200",
  },
  {
    id: 3,
    criteria: "C",
    description: "Cash Lodgements",
    type: "DST",
    amount: "$2800",
  },
  {
    id: 4,
    criteria: "D",
    description: "EFT Lodgements ",
    type: "DST",
    amount: "$3800",
  },
  {
    id: 5,
    criteria: "E",
    description: "Minor Account Lodgements",
    type: "SRC",
    amount: "$5000",
  },
  // Additional data with unique IDs
  {
    id: 6,
    criteria: "F",
    description: "Sub-office Lodgements",
    type: "DST",
    amount: "$3100",
  },
  {
    id: 7,
    criteria: "G",
    description: "Counter New Member Lodgements ",
    type: "SRC",
    amount: "$4500",
  },
  {
    id: 8,
    criteria: "H",
    description: "Online New Member Lodgements",
    type: "DST",
    amount: "$2700",
  },
  {
    id: 9,
    criteria: "I",
    description: "Self Employed Lodgements",
    type: "SRC",
    amount: "$3800",
  },
  {
    id: 10,
    criteria: "J",
    description: "Unemployed Lodgements",
    type: "DST",
    amount: "$4200",
  },
  {
    id: 11,
    criteria: "K",
    description: "Large Cash Withdrawals",
    type: "DST",
    amount: "$5000",
  },
  {
    id: 12,
    criteria: "L",
    description: "Multiple Large Cash Transactions",
    type: "DST",
    amount: "$6000",
  },
  {
    id: 13,
    criteria: "M",
    description: "High-Value Wire Transfers",
    type: "DST",
    amount: "$10000",
  },
  {
    id: 14,
    criteria: "N",
    description: "Foreign Exchange Transactions",
    type: "SRC",
    amount: "$8000",
  },
  {
    id: 15,
    criteria: "O",
    description: "High-Frequency Trading Activity",
    type: "SRC",
    amount: "$7000",
  },
  {
    id: 16,
    criteria: "P",
    description: "Third-Party Payments",
    type: "DST",
    amount: "$4500",
  },
  {
    id: 17,
    criteria: "Q",
    description: "Large Inbound Transactions",
    type: "SRC",
    amount: "$9000",
  },
  {
    id: 18,
    criteria: "R",
    description: "Non-Profit Organization Deposits",
    type: "SRC",
    amount: "$5500",
  },
  {
    id: 19,
    criteria: "S",
    description: "Corporate Account Deposits",
    type: "SRC",
    amount: "$7500",
  },
  {
    id: 20,
    criteria: "T",
    description: "Trust Account Transactions",
    type: "DST",
    amount: "$6800",
  },
  {
    id: 21,
    criteria: "U",
    description: "Government Grants or Subsidies",
    type: "SRC",
    amount: "$8200",
  },
  {
    id: 22,
    criteria: "V",
    description: "Large Cash Transactions with No Apparent Purpose",
    type: "DST",
    amount: "$5300",
  },
  {
    id: 23,
    criteria: "W",
    description: "Suspicious Activity Patterns",
    type: "SRC",
    amount: "$6700",
  },
  {
    id: 24,
    criteria: "X",
    description: "Unusually Large ATM Withdrawals",
    type: "DST",
    amount: "$4900",
  },
  {
    id: 25,
    criteria: "Y",
    description: "Overseas Transactions from High-Risk Countries",
    type: "SRC",
    amount: "$8800",
  },
  {
    id: 26,
    criteria: "Z",
    description: "Politically Exposed Person (PEP) Transactions",
    type: "DST",
    amount: "$10000",
  },
];

function calculateColumnWidth(columnName: keyof Row) {
  // Finding the maximum length of content in the specified column
  const maxLength = Math.max(
    ...initialRows.map((row) => String(row[columnName]).length)
  );
  // Adding some extra padding for better readability
  return maxLength * 7; // Adjust this factor as needed
}

const ReportSection = () => {
  const [open, setOpen] = useState(false);
  const cancelButtonRef = useRef(null);
  const [rows, setRows] = React.useState(initialRows);
  const [rowModesModel, setRowModesModel] = React.useState<GridRowModesModel>(
    {}
  );

  const handleRowEditStop: GridEventListener<"rowEditStop"> = (
    params,
    event
  ) => {
    if (params.reason === GridRowEditStopReasons.rowFocusOut) {
      event.defaultMuiPrevented = true;
    }
  };

  const handleEditClick = (id: GridRowId) => () => {
    setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.Edit } });
  };

  const handleSaveClick = (id: GridRowId) => () => {
    setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.View } });
  };

  const handleCancelClick = (id: GridRowId) => () => {
    setRowModesModel({
      ...rowModesModel,
      [id]: { mode: GridRowModes.View, ignoreModifications: true },
    });

    const editedRow = rows.find((row) => row.id === id);
    // @ts-ignore
    if (editedRow!.isNew) {
      setRows(rows.filter((row) => row.id !== id));
    }
  };

  const handleProcessRowUpdateError = () => {
    console.log("error");
  };
  const processRowUpdate = (newRow: GridRowModel) => {
    // @ts-ignore
    console.log("this is updatedRow", updatedRow);

    const updatedRow = { ...newRow, isNew: false };
    // @ts-ignore
    setRows(rows.map((row) => (row.id === newRow.id ? updatedRow : row)));
    return updatedRow;
  };

  const handleRowModesModelChange = (newRowModesModel: GridRowModesModel) => {
    setRowModesModel(newRowModesModel);
  };
  const columns: GridColDef[] = [
    {
      field: "criteria",
      headerName: "Criteria",
      // width: 70,
      headerAlign: "center",
      align: "center",
      sortable: true,
      disableColumnMenu: true,
      editable: false,
    },

    {
      field: "type",
      headerName: "Is this criteria included?",
      sortable: true,
      headerAlign: "center",
      align: "center",
      disableColumnMenu: true,
      // editable: true,
      // type: "singleSelect",
      // valueOptions: ['SRC','DST','OTH'],
      width: 200,
      renderCell: () => <Switch inputProps={{ "aria-label": "Switch demo" }} />,
    },
    {
      field: "amount",
      headerName: "Amount",
      headerAlign: "center",
      align: "center",
      sortable: true,
      editable: true,
      disableColumnMenu: true,
    },
    {
      field: "description",
      headerName: "Description",
      width: calculateColumnWidth("description"),
      sortable: true,
      disableColumnMenu: true,
      editable: false,
    },
    {
      field: "actions",
      type: "actions",
      headerName: "Actions",
      width: 100,
      cellClassName: "actions",
      getActions: ({ id }) => {
        const isInEditMode = rowModesModel[id]?.mode === GridRowModes.Edit;

        if (isInEditMode) {
          return [
            <GridActionsCellItem
              icon={<SaveIcon />}
              label="Save"
              key={id}
              sx={{
                color: "primary.main",
              }}
              onClick={handleSaveClick(id)}
            />,
            <GridActionsCellItem
              icon={<CancelIcon />}
              label="Cancel"
              className="textPrimary"
              onClick={handleCancelClick(id)}
              color="inherit"
              key={id}
            />,
          ];
        }

        return [
          <GridActionsCellItem
            icon={<EditIcon />}
            label="Edit"
            className="textPrimary"
            onClick={handleEditClick(id)}
            color="inherit"
            key={id}
          />,
        ];
      },
    },
  ];

  const initialState = {
    pagination: { paginationModel: { pageSize: 25 } },
    rows: rows,
  };
  return (
    <>
      <div className=" flex justify-between mb-3">
        {/* buttons */}
        <div className=" flex gap-3">
          <button className=" flex gap-3 justify-center items-center rounded-xl bg-[#FFFFFF] md:px-5 px-4 md:py-3 py-[10px]">
            <Image
              src={runReportSvg}
              alt="runreportSvg"
              className=" md:block hidden"
            />
            <span className="md:text-sm text-xs font-normal">Run Report</span>
          </button>
          <button className=" flex gap-3 justify-center items-center rounded-xl bg-[#FFFFFF] md:px-5 px-4 md:py-3 py-[10px]">
            <Image
              src={resetCriteriaSvg}
              alt="resetCriteriaSvg"
              className=" md:block hidden"
            />
            <span className="md:text-sm text-xs font-normal">
              Reset Criteria
            </span>
          </button>
          <button
            className=" flex gap-3 justify-center items-center rounded-xl bg-[#FFFFFF] md:px-5 px-4 md:py-3 py-[10px]"
            onClick={() => {
              setOpen(true);
            }}
          >
            <Image
              src={uploadDataSvg}
              alt="uploadDataSvg"
              className=" md:block hidden"
            />
            <span className="md:text-sm text-xs font-normal">
              Upload new data
            </span>
          </button>
        </div>
      </div>

      {/* TABLE */}
      <div
        style={{
          height: "80%",
          width: "100%",
          backgroundColor: "#fff",
          border: "none",
          borderRadius: "10px",
        }}
      >
        <DataGrid
          pagination
          sx={{
            border: "none",
            "& .MuiDataGrid-columnHeaderTitle": {
              fontWeight: "600",
            },
            "& .MuiDataGrid-columnHeader": {
              fontSize: "14px",
            },
            "& .MuiDataGrid-columnHeader:focus-within, .MuiDataGrid-cell:focus":
              {
                outline: "none",
              },
            // SEARCH
            "& .MuiBox-root": {
              display: "flex",
              position: "absolute",
              right: 0,
              top: "-55px",
              background: "white",
              borderRadius: "12px",
              fontSize: "14px",
              padding: "6px 12px",
              width: "244px",
            },
            "& .css-3be3ve-MuiFormControl-root-MuiTextField-root-MuiDataGrid-toolbarQuickFilter":
              {
                paddingBottom: "0px",
              },
            "& .css-68pk0f": {
              padding: "0px",
            },
            "& .MuiInput-underline:before, .css-1eed5fa-MuiInputBase-root-MuiInput-root::before, .css-1eed5fa-MuiInputBase-root-MuiInput-root::after, .css-jcincl::after":
              {
                borderBottom: "none !important",
              },
            // PAGINATION
            "& .Mui-selected, .Mui-selected:hover": {
              backgroundColor: "rgba(0, 0, 0, 0.1) !important",
              color: "black !important",
            },
            "& .css-78c6dr-MuiToolbar-root-MuiTablePagination-toolbar": {
              paddingRight: "24px",
            },
            "& .css-pqjvzy-MuiSvgIcon-root-MuiSelect-icon": {
              display: "none",
            },
            "& .css-194a1fa-MuiSelect-select-MuiInputBase-input.css-194a1fa-MuiSelect-select-MuiInputBase-input.css-194a1fa-MuiSelect-select-MuiInputBase-input":
              {
                paddingRight: "4px",
              },
            "& .css-194a1fa-MuiSelect-select-MuiInputBase-input ": {
              padding: "2px 4px !important",
              border: "1px solid",
              borderRadius: "6px",
              fontSize: "14px",
            },
          }}
          rows={rows}
          columns={columns}
          hideFooterPagination={false}
          slots={{ toolbar: SearchTable, pagination: CustomPagination }}
          initialState={initialState}
          editMode="row"
          rowModesModel={rowModesModel}
          onRowModesModelChange={handleRowModesModelChange}
          onRowEditStop={handleRowEditStop}
          processRowUpdate={(updatedRow, originalRow) =>
            processRowUpdate(updatedRow)
          }
          onProcessRowUpdateError={handleProcessRowUpdateError}
          slotProps={{
            toolbar: { setRows, setRowModesModel },
          }}
        />
      </div>
      <Modal setOpen={setOpen} open={open} cancelButtonRef={cancelButtonRef} />
    </>
  );
};

export default ReportSection;
