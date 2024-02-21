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

const columns: GridColDef[] = [
  {
    field: "ac_no",
    headerName: "A/C No",
    width: 110,
    headerAlign: "center",
    align: "center",
    sortable: true,
    disableColumnMenu: true,
  },
  {
    field: "trs_no",
    headerName: "Trs No",
    width: 88,
    sortable: false,
    disableColumnMenu: true,
  },
  {
    field: "date",
    headerName: "Date",
    sortable: false,
    headerAlign: "center",
    align: "center",
    disableColumnMenu: true,
  },
  {
    field: "type",
    headerName: "Type",
    headerAlign: "center",
    align: "center",
    width: 102,
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
    width: 400,
    sortable: false,
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

const rows = [
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

const MonthlyReport = () => {
  return (
    <>
      {/* btn and saerch bar */}
      <div className=" flex justify-between mb-5">
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

      {/* table */}
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
              fontSize: "13px",
              fontWeight: "600",
            },
            "& .MuiDataGrid-columnHeader": {
              fontSize: "14px",
            },
            "& .MuiDataGrid-columnHeader:focus-within, .MuiDataGrid-cell:focus":
              {
                outline: "none",
              },
            "& .MuiDataGrid-row": {
              fontSize: "13px",
              fontWeight: "400",
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

export default MonthlyReport;
