"use client";
import React, { useEffect, useRef, useState } from "react";
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
import Modal from "../uploadcsv/Modal";

interface Row {
  id: number;
  type: string;
  amount: string;
  criteria: string;
  narrative: string;
}

const rows: Row[] = [
  {
    id: 1,
    criteria: "A",
    narrative:
      "Phasellus accumsan imperdiet tempor. Cras tincidunt, arcu nec eleifend porttitor, orci est vehicula ",
    type: "SRC",
    amount: "$3500",
  },
  {
    id: 2,
    criteria: "B",
    narrative:
      "Integer id augue iaculis, iaculis orci ut, blandit quam. Donec in elit auctor, finibus quam in, phar",
    type: "SRC",
    amount: "$4200",
  },
  {
    id: 3,
    criteria: "C",
    narrative:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam rhoncus augue id massa aliquam, at posuere arcu mattis.",
    type: "DST",
    amount: "$2800",
  },
  {
    id: 4,
    criteria: "D",
    narrative:
      "Fusce dapibus justo nec lectus rhoncus, eget euismod velit tristique. Vestibulum suscipit, eros sit amet aliquet fringilla, odio metus sollicitudin eros, id condimentum nulla leo ac nulla.",
    type: "DST",
    amount: "$3800",
  },
  {
    id: 5,
    criteria: "E",
    narrative:
      "Vestibulum nec elit eu mauris aliquam ultricies. Ut maximus ante non libero tincidunt, quis vestibulum libero tempor.",
    type: "SRC",
    amount: "$5000",
  },
  // Additional data with unique IDs
  {
    id: 6,
    criteria: "F",
    narrative:
      "Suspendisse potenti. Vivamus mattis tincidunt dolor, in facilisis nunc pharetra ac. Integer vitae enim eget purus venenatis sollicitudin. ",
    type: "DST",
    amount: "$3100",
  },
  {
    id: 7,
    criteria: "G",
    narrative:
      "Nulla facilisi. Donec auctor dapibus sapien. Vestibulum malesuada suscipit enim, in hendrerit quam lacinia vel. ",
    type: "SRC",
    amount: "$4500",
  },
  {
    id: 8,
    criteria: "H",
    narrative:
      "Pellentesque convallis tortor id imperdiet aliquet. Vestibulum dapibus, nunc ut fermentum lacinia, libero felis vestibulum erat, nec rhoncus est nunc id urna. ",
    type: "DST",
    amount: "$2700",
  },
  {
    id: 9,
    criteria: "I",
    narrative:
      "Cras auctor sagittis libero, eget gravida enim varius quis. Nunc ac vestibulum justo, nec aliquet lorem. ",
    type: "SRC",
    amount: "$3800",
  },
  {
    id: 10,
    criteria: "J",
    narrative:
      "Proin auctor, sapien at finibus ultricies, lectus risus dapibus ipsum, non finibus ex arcu eu enim. ",
    type: "DST",
    amount: "$4200",
  },
];

function calculateColumnWidth(columnName: keyof Row) {
  // Finding the maximum length of content in the specified column
  const maxLength = Math.max(
    ...rows.map((row) => String(row[columnName]).length)
  );
  // Adding some extra padding for better readability
  return maxLength * 7; // Adjust this factor as needed
}

const columns: GridColDef[] = [
  {
    field: "criteria",
    headerName: "Criteria",
    // width: 70,
    headerAlign: "center",
    align: "center",
    sortable: true,
    disableColumnMenu: true,
  },
  {
    field: "narrative",
    headerName: "Narrative",
    width: calculateColumnWidth("narrative"),
    sortable: true,
    disableColumnMenu: true,
  },
  {
    field: "type",
    headerName: "Type",
    sortable: true,
    headerAlign: "center",
    align: "center",
    disableColumnMenu: true,
  },
  {
    field: "amount",
    headerName: "Amount",
    headerAlign: "center",
    align: "center",
    sortable: true,
    disableColumnMenu: true,
  },
];

const initialState = {
  pagination: { paginationModel: { pageSize: 25 } },
  rows: rows,
};

const ReportSection = () => {
  const [open, setOpen] = useState(false);
  const cancelButtonRef = useRef(null);
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
      <Modal setOpen={setOpen} open={open} cancelButtonRef={cancelButtonRef} />
    </>
  );
};

export default ReportSection;
