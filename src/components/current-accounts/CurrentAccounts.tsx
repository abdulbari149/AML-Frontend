"use client";
import React, { useEffect } from "react";
import Image from "next/image";

// MUI
import { DataGrid, GridColDef } from "@mui/x-data-grid";

// COMPONENTS
import plusSvg from "@/assets/svgs/Plus.svg";
import editSvg from "@/assets/svgs/Edit.svg";
import discardSvg from "@/assets/svgs/Discard.svg";

// UTILS
import { CustomPagination } from "@/utils/CustomPagination";
import { SearchTable } from "@/utils/SearchTable";

const columns: GridColDef[] = [
  {
    field: "serial_no",
    headerName: "Serial No",
    // width: 70,
    headerAlign: "left",
    align: "left",
    sortable: true,
    disableColumnMenu: true,
  },
  {
    field: "name",
    headerName: "Name",
    width: 150,
    sortable: false,
    headerAlign: "left",
    align: "left",
    disableColumnMenu: true,
  },
  {
    field: "email",
    headerName: "Email",
    width: 720,
    sortable: false,
    disableColumnMenu: true,
  },
  {
    field: "role",
    headerName: "Role",
    headerAlign: "left",
    width: 150,
    align: "left",
    sortable: true,
    disableColumnMenu: true,
  },
];

const rows = [
  {
    id: 1,
    serial_no: "651535",
    name: "Dianne Russell ",
    email: "trungkienspktnd@gamail.com",
    role: "Data Analyst",
  },
  {
    id: 2,
    serial_no: "267400",
    name: "Jane Cooper",
    email: "vuhaithuongnute@gmail.com",
    role: "Data Organizer",
  },
  {
    id: 3,
    serial_no: "812345",
    name: "John Doe",
    email: "johndoe@example.com",
    role: "Software Engineer",
  },
  {
    id: 4,
    serial_no: "932846",
    name: "Alice Smith",
    email: "alice.smith@example.com",
    role: "Project Manager",
  },
  {
    id: 5,
    serial_no: "742819",
    name: "Emily Brown",
    email: "emily.brown@example.com",
    role: "UX Designer",
  },
  {
    id: 6,
    serial_no: "583291",
    name: "Michael Johnson",
    email: "michael.johnson@example.com",
    role: "Marketing Specialist",
  },
  {
    id: 7,
    serial_no: "109238",
    name: "Sarah Lee",
    email: "sarah.lee@example.com",
    role: "Financial Analyst",
  },
  {
    id: 8,
    serial_no: "384729",
    name: "Christopher Wilson",
    email: "chris.wilson@example.com",
    role: "Software Developer",
  },
  {
    id: 9,
    serial_no: "572910",
    name: "Emma Taylor",
    email: "emma.taylor@example.com",
    role: "Graphic Designer",
  },
  {
    id: 10,
    serial_no: "691234",
    name: "Daniel Martinez",
    email: "daniel.martinez@example.com",
    role: "Customer Support Specialist",
  },
  {
    id: 11,
    serial_no: "820173",
    name: "Olivia Anderson",
    email: "olivia.anderson@example.com",
    role: "Product Manager",
  },
  {
    id: 12,
    serial_no: "103847",
    name: "Matthew Thompson",
    email: "matt.thompson@example.com",
    role: "HR Coordinator",
  },
];

const initialState = {
  pagination: { paginationModel: { pageSize: 25 } },
  rows: rows,
};

const CurrentAccounts = () => {
  return (
    <>
      <div className=" flex flex-col">
        <div className=" flex justify-between mb-3">
          {/* buttons */}
          <div className=" flex gap-3">
            <button className=" flex gap-3 justify-center items-center rounded-xl bg-[#FFFFFF] md:px-5 px-4 md:py-3 py-[10px]">
              <Image src={plusSvg} alt="plusSvg" className=" md:block hidden" />
              <span className="md:text-sm text-xs font-normal">Add</span>
            </button>

            <button className=" flex gap-3 justify-center items-center rounded-xl bg-[#FFFFFF] md:px-5 px-4 md:py-3 py-[10px]">
              <Image src={editSvg} alt="editSvg" className=" md:block hidden" />
              <span className="md:text-sm text-xs font-normal">Edit</span>
            </button>

            <button className=" flex gap-3 justify-center items-center rounded-xl bg-[#FFFFFF] md:px-5 px-4 md:py-3 py-[10px]">
              <Image
                src={discardSvg}
                alt="discardSvg"
                className=" md:block hidden"
              />
              <span className="md:text-sm text-xs font-normal">Delete</span>
            </button>
          </div>
        </div>

        {/* TABLE AND NEWS */}

        <div className=" flex gap-5">
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
                  right: -90,
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
              rows={rows}
              columns={columns}
              checkboxSelection
              hideFooterPagination={false}
              slots={{ toolbar: SearchTable, pagination: CustomPagination }}
              initialState={initialState}
            />
          </div>

          {/* NEWS */}

          <div className=" flex flex-col bg-[#FFFFFF] py-[14px] px-[15px] h-screen">
            <h1 className=" text-lg font-normal text-[#000000]">News</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default CurrentAccounts;
