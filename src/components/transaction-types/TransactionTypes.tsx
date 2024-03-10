"use client";
import React, { useEffect } from "react";

// MUI
import { DataGrid, GridColDef } from "@mui/x-data-grid";

// UTILS
import { CustomPagination } from "@/utils/CustomPagination";
import { SearchTable } from "@/utils/SearchTable";

// ICONS
import { FaDownload } from "react-icons/fa6";

interface Row {
  id: number;
  code: string;
  detail: string;
  info: string;
}

const rows = [
  {
    id: 1,
    code: "pqt",
    detail:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis consequat",
    info: "Lorem ipsum dolor sit amet",
  },
  {
    id: 2,
    code: "xyz",
    detail:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis consequat",
    info: "Lorem ipsum dolor sit amet",
  },
  {
    id: 3,
    code: "abc",
    detail:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis consequat",
    info: "Lorem ipsum dolor sit amet",
  },
  {
    id: 4,
    code: "mno",
    detail:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis consequat",
    info: "Lorem ipsum dolor sit amet",
  },
  {
    id: 5,
    code: "def",
    detail:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis consequat",
    info: "Lorem ipsum dolor sit amet",
  },
  {
    id: 6,
    code: "ghi",
    detail:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis consequat",
    info: "Lorem ipsum dolor sit amet",
  },
  {
    id: 7,
    code: "jkl",
    detail:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis consequat",
    info: "Lorem ipsum dolor sit amet",
  },
  {
    id: 8,
    code: "rst",
    detail:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis consequat",
    info: "Lorem ipsum dolor sit amet",
  },
  {
    id: 9,
    code: "uvw",
    detail:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis consequat",
    info: "Lorem ipsum dolor sit amet",
  },
  {
    id: 10,
    code: "qrs",
    detail:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis consequat",
    info: "Lorem ipsum dolor sit amet",
  },
];

function calculateColumnWidth(columnName: keyof Row) {
  // Finding the maximum length of content in the specified column
  const maxLength = Math.max(
    ...rows.map((row) => String(row[columnName]).length)
  );
  // Adding some extra padding for better readability
  return maxLength * 8; // Adjust this factor as needed
}

const columns: GridColDef[] = [
  {
    field: "code",
    headerName: "Code",
    headerAlign: "center",
    align: "center",
    sortable: true,
    disableColumnMenu: true,
  },
  {
    field: "detail",
    headerName: "Detail",
    width: calculateColumnWidth("detail"),
    sortable: true,
    disableColumnMenu: true,
  },
  {
    field: "info",
    headerName: "Info",
    width: calculateColumnWidth("info"),
    sortable: true,
    disableColumnMenu: true,
  },
];

const initialState = {
  pagination: { paginationModel: { pageSize: 25 } },
  rows: rows,
};

const TransactionTypes = () => {
  return (
    <>
      <div className=" h-12"></div>

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
        />
      </div>
    </>
  );
};

export default TransactionTypes;
