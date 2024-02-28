"use client";
import React from "react";
import Image from "next/image";
import { DataGrid, GridColDef } from "@mui/x-data-grid";

// SVGS
import updateSvg from "@/assets/svgs/Update.svg";
import saveSvg from "@/assets/svgs/Save.svg";
import discardSvg from "@/assets/svgs/Discard.svg";
import saveCopySvg from "@/assets/svgs/saveCopy.svg";
import searchSvg from "@/assets/svgs/search.svg";

// UTILS
import { CustomPagination } from "@/utils/CustomPagination";
import { SearchTable } from "@/utils/SearchTable";

interface Row {
  id: number;
  ac_no: string;
  trs_no: string;
  date: string;
  type: string;
  amount: string;
  criteria: string;
  narrative: string;
  customer1: string;
  customer2: string;
  customer3: string;
}

const rows: Row[] = [
  {
    id: 1,
    ac_no: "651535",
    trs_no: "2241564809",
    date: "12/06/2020",
    type: "SRC",
    amount: "$210.00",
    criteria: "A",
    narrative:
      "Phasellus accumsan imperdiet tempor. Cras tincidunt, arcu nec eleifend porttitor, orci est vehicula ",
    customer1: "(free text)",
    customer2: "(free text)",
    customer3: "(free text)",
  },
  {
    id: 2,
    ac_no: "651535",
    trs_no: "2241564809",
    date: "12/06/2020",
    type: "SRC",
    amount: "$210.00",
    criteria: "A",
    narrative:
      "Phasellus accumsan imperdiet tempor. Cras tincidunt, arcu nec eleifend porttitor, orci est vehicula ",
    customer1: "(free text)",
    customer2: "(free text)",
    customer3: "(free text)",
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
    field: "ac_no",
    headerName: "A/C No",
    // width: 110,
    headerAlign: "center",
    align: "center",
    sortable: true,
    disableColumnMenu: true,
  },
  {
    field: "trs_no",
    headerName: "Trs No",
    // width: 88,
    sortable: true,
    disableColumnMenu: true,
  },
  {
    field: "date",
    headerName: "Date",
    sortable: true,
    // headerAlign: "center",
    align: "center",
    disableColumnMenu: true,
  },
  {
    field: "type",
    headerName: "Type",
    headerAlign: "center",
    align: "center",
    // width: 102,
    sortable: true,
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
  {
    field: "criteria",
    headerName: "Criteria",
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
    field: "customer1",
    headerName: "Customer",
    headerAlign: "center",
    align: "center",
    sortable: true,
    disableColumnMenu: true,
  },
  {
    field: "customer2",
    headerName: "Customer",
    headerAlign: "center",
    align: "center",
    sortable: true,
    disableColumnMenu: true,
  },
  {
    field: "customer3",
    headerName: "Customer",
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

const MonthlyReport = () => {
  return (
    <>
      {/* btn and saerch bar */}
      <div className=" flex justify-between mb-3">
        {/* buttons */}
        <div className=" flex gap-3">
          <button className=" flex gap-3 justify-center items-center rounded-xl bg-[#FFFFFF] md:px-5 px-[14px] md:py-3 py-[10px]">
            <Image
              src={updateSvg}
              alt="updateSvg"
              className=" md:block hidden"
              width={18}
              height={18}
            />
            <span className="md:text-sm text-xs font-normal">Update</span>
          </button>
          <button className=" flex gap-3 justify-center items-center rounded-xl bg-[#FFFFFF] md:px-5 px-[14px] md:py-3 py-[10px]">
            <Image
              src={saveSvg}
              alt="saveSvg"
              className=" md:block hidden"
              width={18}
              height={18}
            />
            <span className="md:text-sm text-xs font-normal">Save</span>
          </button>
          <button className=" flex gap-3 justify-center items-center rounded-xl bg-[#FFFFFF] md:px-5 px-[14px] md:py-3 py-[10px]">
            <Image
              src={discardSvg}
              alt="discardSvg"
              className=" md:block hidden"
              width={18}
              height={18}
            />
            <span className="md:text-sm text-xs font-normal">Discard</span>
          </button>
          <button className=" flex gap-3 justify-center items-center rounded-xl bg-[#FFFFFF] md:px-5 px-[14px] md:py-3 py-[10px]">
            <Image
              src={saveCopySvg}
              alt="saveCopySvg"
              className=" md:block hidden"
              width={22}
              height={22}
            />
            <span className="md:text-sm text-xs font-normal">Save Copy</span>
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
          // overflowX:'scroll'
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

export default MonthlyReport;
