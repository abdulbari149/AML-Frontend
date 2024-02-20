"use client";
import * as React from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import Image from "next/image";
import searchSvg from "@/assets/svgs/search.svg";
import runReportSvg from "@/assets/svgs/runReport.svg";
import resetCriteriaSvg from "@/assets/svgs/resetCriteria.svg";
import uploadDataSvg from "@/assets/svgs/uploadData.svg";

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
    width: 940,
    sortable: false,
    disableColumnMenu: true,
  },
  {
    field: "type",
    headerName: "Type",
    sortable: false,
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

const rows = [
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
];

const ReportSection = () => {
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

        {/* search bar */}
        <div className=" relative md:block hidden">
          <Image
            src={searchSvg}
            alt="notificationSvg"
            className=" absolute top-[10px] left-4 w-5"
          />
          <input
            type="text"
            name="search"
            id="search"
            placeholder=" Search In Table"
            className=" w-56 bg-white py-[10px] pl-10 pr-2 mr-2 rounded-xl text-[##00000080] md:text-sm text-xs focus:outline-none"
          />
        </div>
      </div>

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
          }}
          rows={rows}
          columns={columns}
          hideFooterPagination={true}
        />
      </div>
    </>
  );
};

export default ReportSection;
