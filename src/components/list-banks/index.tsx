"use client";
import React, { useEffect, useState } from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";

// UTILS
import { CustomPagination } from "@/utils/CustomPagination";
import { SearchTable } from "@/utils/SearchTable";
import { MdEdit } from "react-icons/md";
import { FaRegListAlt } from "react-icons/fa";
import { FaHistory } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { listUsers } from "@/api/user";
import { getReportSetting } from "@/api/listReportSetting";

interface Row {
  id: string;
  email: string;
  name: string;
}

const ListBanks = () => {
  const router = useRouter();

  const [userEmails, setUserEmails] = useState<Array<Row>>([]);

  useEffect(() => {
    console.log(userEmails);
  }, [userEmails]);

  useEffect(() => {
    listUsers()
      .then((data) => {
        setUserEmails(() =>
          data.map((item: any) => {
            return {
              id: item.id,
              email: item.email,
              name: item["preferred_username"],
            };
          })
        );
      })
      .catch(console.log);
  }, []);

  const handleViewUserReport = async (rowData: Row) => {
    router.push(`/report-settings/view?user=${rowData.id}`);
  };
  const handleEditUserReport = async (rowData: Row) => {
    router.push(`/report-settings/create?user=${rowData.id}`);
  };

  const rows = userEmails && userEmails;

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
      field: "name",
      headerName: "Name",
      sortable: true,
      disableColumnMenu: true,
      width: calculateColumnWidth("name"),
    },
    {
      field: "email",
      headerName: "Email",
      sortable: true,
      disableColumnMenu: true,
      width: calculateColumnWidth("email"),
    },
    {
      field: "actions",
      headerName: "Actions",
      sortable: false,
      headerAlign: "center",
      align: "center",
      disableColumnMenu: true,
      renderCell: (params) => (
        <div className=" flex gap-8">
          <FaRegListAlt
            onClick={() => handleViewUserReport(params.row as Row)}
            className=" text-[18px] cursor-pointer"
          />
          <MdEdit
            onClick={() => handleEditUserReport(params.row as Row)}
            className=" text-[18px] cursor-pointer"
          />
        </div>
      ),
    },
    {
      field: "history",
      headerName: "History",
      sortable: false,
      headerAlign: "center",
      align: "center",
      disableColumnMenu: true,
      renderCell: (params) => (
        <FaHistory className=" text-[18px] cursor-pointer" />
      ),
    },
  ];

  const initialState = {
    pagination: { paginationModel: { pageSize: 25 } },
    rows: rows,
  };
  return (
    <>
      <div className=" h-12"></div>
      {/* TABLE */}
      {userEmails.length > 0 && (
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
      )}
    </>
  );
};

export default ListBanks;
