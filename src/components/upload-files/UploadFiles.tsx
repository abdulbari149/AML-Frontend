"use client";
import React, { useEffect } from "react";
import Image from "next/image";

// MUI
import { DataGrid, GridColDef } from "@mui/x-data-grid";

// COMPONENTS
import runReportSvg from "@/assets/svgs/runReport.svg";
import resetCriteriaSvg from "@/assets/svgs/resetCriteria.svg";
import uploadDataSvg from "@/assets/svgs/uploadData.svg";

// UTILS
import { CustomPagination } from "@/utils/CustomPagination";
import { SearchTable } from "@/utils/SearchTable";

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
    width: 700,
    sortable: false,
    disableColumnMenu: true,
  },
  {
    field: "file_type",
    headerName: "File Type",
    sortable: false,
    headerAlign: "center",
    align: "center",
    disableColumnMenu: true,
  },
];

const rows = [
  {
    id: 1,
    date: "23/02/23",
    file_name: "example.png",
    file_type: "PNG",
  },
];

const initialState = {
  pagination: { paginationModel: { pageSize: 25 } },
  rows: rows,
};

const UploadFiles = () => {
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
          <button className=" flex gap-3 justify-center items-center rounded-xl bg-[#FFFFFF] md:px-5 px-4 md:py-3 py-[10px]">
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
              top: "-52px",
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
            "& .MuiInput-underline:before, .css-1eed5fa-MuiInputBase-root-MuiInput-root::before, .css-1eed5fa-MuiInputBase-root-MuiInput-root::after":
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

export default UploadFiles;
