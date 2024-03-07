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
  date: string;
  file_name: string;
  month: string;
  file_type: string;
}

const rows = [
  {
    id: 1,
    date: "23/02/23",
    file_name: "example.png",
    month: "December",
    file_type: "PNG",
  },
];

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
    field: "date",
    headerName: "Date",
    // width: 70,
    headerAlign: "center",
    align: "center",
    sortable: true,
    disableColumnMenu: true,
  },
  {
    field: "file_name",
    headerName: "File Name",
    width: calculateColumnWidth("file_name"),
    headerAlign: "center",
    align: "center",
    sortable: true,
    disableColumnMenu: true,
  },
  {
    field: "month",
    headerName: "Month",
    // width: ,
    headerAlign: "center",
    align: "center",
    sortable: true,
    disableColumnMenu: true,
  },
  {
    field: "download",
    headerName: "Download",
    // sortable: true,
    headerAlign: "center",
    align: "center",
    disableColumnMenu: true,
    renderCell: (params) => (
      <button>
        <FaDownload className=" text-base" />
      </button>
    ),
  },
  {
    field: "file_type",
    headerName: "File Type",
    sortable: true,
    headerAlign: "center",
    align: "center",
    disableColumnMenu: true,
  },
  {
    field: "view",
    headerName: "View",
    // sortable: true,
    headerAlign: "center",
    align: "center",
    disableColumnMenu: true,
    renderCell: (params) => <button>View</button>,
  },
];

const initialState = {
  pagination: { paginationModel: { pageSize: 25 } },
  rows: rows,
};

const AllPerviousMonthlyReports = () => {
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

export default AllPerviousMonthlyReports;
