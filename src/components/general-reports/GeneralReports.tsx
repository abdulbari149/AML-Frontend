"use client";
import React from "react";

// MUI
import { DataGrid, GridColDef } from "@mui/x-data-grid";

// UTILS
import { CustomPagination } from "@/utils/CustomPagination";
import NewsSection from "../shared/NewsSection";

interface Row {
  id: number;
  date: any;
  type: string;
  report: string;
}

// TABLE 1
const rows1: Row[] = [
  {
    id: 1,
    date: "12/06/2020",
    type: "Type 1",
    report: "Current Account",
  },
  {
    id: 2,
    date: "07/05/2016",
    type: "Type 2",
    report: "Account Analysis",
  },
];

const columns1: GridColDef[] = [
  {
    field: "date",
    headerName: "Date",
    headerAlign: "left",
    align: "left",
    sortable: true,
    disableColumnMenu: true,
  },
  {
    field: "type",
    headerName: "Type",
    // width: 150,
    sortable: true,
    headerAlign: "left",
    align: "left",
    disableColumnMenu: true,
  },
  {
    field: "report",
    headerName: "Report",
    headerAlign: "left",
    width: 200,
    align: "left",
    sortable: true,
    disableColumnMenu: true,
  },
];

const initialState1 = {
  pagination: { paginationModel: { pageSize: 25 } },
  rows: rows1,
};

// TABLE 2
const rows2: Row[] = [
  {
    id: 1,
    date: "12/06/2020",
    type: "Type 1",
    report: "January 24",
  },
  {
    id: 2,
    date: "12/06/2020",
    type: "Type 2",
    report: "December 23",
  },
  {
    id: 3,
    date: "07/05/2016",
    type: "Type 3",
    report: "November 23",
  },
];

const columns2: GridColDef[] = [
  {
    field: "date",
    headerName: "Date",
    headerAlign: "left",
    align: "left",
    sortable: true,
    disableColumnMenu: true,
  },
  {
    field: "type",
    headerName: "Type",
    // width: 150,
    sortable: true,
    headerAlign: "left",
    align: "left",
    disableColumnMenu: true,
  },
  {
    field: "report",
    headerName: "Report",
    headerAlign: "left",
    width: 200,
    align: "left",
    sortable: true,
    disableColumnMenu: true,
  },
];

const initialState2 = {
  pagination: { paginationModel: { pageSize: 25 } },
  rows: rows2,
};

const GeneralReports = () => {
  return (
    <>
      <div className=" flex justify-between mb-3">
        {/* buttons */}
        <div className=" flex gap-3">
          <button className=" flex gap-3 justify-center items-center rounded-xl bg-[#FFFFFF] md:px-5 px-4 md:py-3 py-[10px]">
            <span className="md:text-sm text-xs font-normal">
              Report Type 1
            </span>
          </button>

          <button className=" flex gap-3 justify-center items-center rounded-xl bg-[#FFFFFF] md:px-5 px-4 md:py-3 py-[10px]">
            <span className="md:text-sm text-xs font-normal">
              Report Type 2
            </span>
          </button>
        </div>
      </div>
      <div className=" flex gap-2 h-[70%] rounded-[10px]">
        {/* TABLE */}
        <div className=" rounded-[10px] flex-col w-full">
          <div
            className=" flex justify-around bg-white py-3"
            style={{
              borderTopLeftRadius: "10px",
              borderTopRightRadius: "10px",
              borderBottom: "1px solid #e5e7eb",
            }}
          >
            <h3 className=" text-lg font-semibold">User Reports</h3>
            <h3 className=" text-lg font-semibold">Monthly Reports</h3>
          </div>
          <div className=" flex h-full w-full">
            <div
              style={{
                height: "100%",
                width: "100%",
                backgroundColor: "#fff",
                border: "none",
                borderBottomLeftRadius: "10px",
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

                  // CHECK BOX
                  "& .css-12wnr2w-MuiButtonBase-root-MuiCheckbox-root": {
                    color: "black !important",
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
                rows={rows1}
                columns={columns1}
                checkboxSelection
                hideFooterPagination={false}
                slots={{ pagination: CustomPagination }}
                initialState={initialState1}
              />
            </div>
            {/* TABLE 2 */}
            <div
              style={{
                height: "100%",
                width: "100%",
                backgroundColor: "#fff",
                border: "none",
                borderBottomRightRadius: "10px",
                borderLeft: "1px solid #e5e7eb",
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

                  // CHECK BOX
                  "& .css-12wnr2w-MuiButtonBase-root-MuiCheckbox-root": {
                    color: "black !important",
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
                rows={rows2}
                columns={columns2}
                checkboxSelection
                hideFooterPagination={false}
                slots={{ pagination: CustomPagination }}
                initialState={initialState2}
              />
            </div>
          </div>
        </div>
        <NewsSection />
      </div>
    </>
  );
};

export default GeneralReports;
