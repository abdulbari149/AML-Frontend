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
import NewsSection from "../shared/NewsSection";

interface Row {
  id: number;
  serial_no: string;
  name: string;
  email: string;
  role: string;
}

const rows: Row[] = [
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
    // width: 150,
    sortable: true,
    headerAlign: "left",
    align: "left",
    disableColumnMenu: true,
  },
  {
    field: "email",
    headerName: "Email",
    width: calculateColumnWidth("email"),
    sortable: true,
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

const initialState = {
  pagination: { paginationModel: { pageSize: 25 } },
  rows: rows,
};

const CurrentAccounts = () => {
  return (
    <>
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
      <div className=" flex gap-2 h-[80%]">
        {/* TABLE */}
        <div
          style={{
            height: "100%",
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
                right: "-248px",
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
                "& .css-68pk0f":
              {
                padding: "0px",
              },
              "& .MuiInput-underline:before, .css-1eed5fa-MuiInputBase-root-MuiInput-root::before, .css-1eed5fa-MuiInputBase-root-MuiInput-root::after, .css-jcincl::after":
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
        <NewsSection />
      </div>
    </>
  );
};

export default CurrentAccounts;
