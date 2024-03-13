"use client";
import React from "react";

// MUI
import { DataGrid, GridColDef } from "@mui/x-data-grid";

// UTILS
import { CustomPagination } from "@/utils/CustomPagination";
import NewsSection from "../shared/NewsSection";

interface Row1 {
  id: number;
  transaction_detail: any;
  transaction_info: any;
}

interface Row2 {
  id: number;
  code: any;
  transaction_detail: any;
  transaction_info: any;
}

// TABLE 1
const rows1: Row1[] = [
  {
    id: 1,
    transaction_detail: "Web Repayment",
    transaction_info: "Online",
  },
  {
    id: 2,
    transaction_detail: "CT Lodgement",
    transaction_info: "EFT",
  },
  {
    id: 3,
    transaction_detail: "CT Repayment",
    transaction_info: "EFT",
  },
  {
    id: 4,
    transaction_detail: "Dispersal Credit",
    transaction_info: "EFT",
  },
  {
    id: 5,
    transaction_detail: "Dispersal Debit",
    transaction_info: "EFT",
  },
  {
    id: 6,
    transaction_detail: "Web Withdrawal",
    transaction_info: "Online",
  },
  {
    id: 7,
    transaction_detail: "Lodgement",
    transaction_info: "Counter",
  },
  {
    id: 8,
    transaction_detail: "Realex Lodgement",
    transaction_info: "Realex",
  },
  {
    id: 9,
    transaction_detail: "Withdrawal",
    transaction_info: "Counter",
  },
  {
    id: 10,
    transaction_detail: "Loan Repayment",
    transaction_info: "Counter",
  },
  {
    id: 11,
    transaction_detail: "Dividend Point Adjustment",
    transaction_info: "Adjustment",
  },
  {
    id: 12,
    transaction_detail: "Web Lodgement",
    transaction_info: "Online",
  },
  {
    id: 13,
    transaction_detail: "DD Withdrawal",
    transaction_info: "Direct Debit",
  },
  {
    id: 14,
    transaction_detail: "Direct Debit Lodgement",
    transaction_info: "Direct Debit",
  },
  {
    id: 15,
    transaction_detail: "Direct Debit Repayment",
    transaction_info: "Direct Debit",
  },
  {
    id: 16,
    transaction_detail: "Transaction Event",
    transaction_info: "Transfer",
  },
  {
    id: 17,
    transaction_detail: "Loan Issue",
    transaction_info: "Counter",
  },
  {
    id: 18,
    transaction_detail: "Reversal",
    transaction_info: "Reversal",
  },
  {
    id: 19,
    transaction_detail: "Web Transfer",
    transaction_info: "Online",
  },
  {
    id: 20,
    transaction_detail: "Intra Transfer",
    transaction_info: "Transfer",
  },
  {
    id: 21,
    transaction_detail: "Transfer",
    transaction_info: "Transfer",
  },
  {
    id: 22,
    transaction_detail: "Standing Order Repayment",
    transaction_info: "Standing Order",
  },
  {
    id: 23,
    transaction_detail: "Standing Order Lodgement",
    transaction_info: "Standing Order",
  },
  {
    id: 24,
    transaction_detail: "Realex Repayment",
    transaction_info: "Realex",
  },
  {
    id: 25,
    transaction_detail: "Interest Due Adjustment",
    transaction_info: "Adjustment",
  },
];

const columns1: GridColDef[] = [
  {
    field: "transaction_detail",
    headerName: "Transactions Details",
    headerAlign: "left",
    align: "left",
    width: 200,
    sortable: true,
    disableColumnMenu: true,
  },
  {
    field: "transaction_info",
    headerName: "Transactions Info",
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
const rows2: Row2[] = [
  {
    id: 1,
    code: "CH",
    transaction_detail: "Cheques Withdraw",
    transaction_info: "Cash",
  },
  {
    id: 2,
    code: "CHBK",
    transaction_detail: "Charge Back",
    transaction_info: "Cash",
  },
  {
    id: 3,
    code: "MPCAS",
    transaction_detail: "MPCAS Transaction",
    transaction_info: "Internal Transfer",
  },
  {
    id: 4,
    code: "CHOF",
    transaction_detail: "Charge Off Transaction",
    transaction_info: "Internal Transfer",
  },
  {
    id: 5,
    code: "CINT",
    transaction_detail: "Cucash Interest",
    transaction_info: "Internal Transfer",
  },
  {
    id: 6,
    code: "CNTA",
    transaction_detail: "Contra ATM/Debit Transaction",
    transaction_info: "Internal Transfer",
  },
  {
    id: 7,
    code: "COIT",
    transaction_detail: "Charged Off Interest Transferred to Principal",
    transaction_info: "Internal Transfer",
  },
  {
    id: 8,
    code: "CPRE",
    transaction_detail: "Coop Reconciliation Amount",
    transaction_info: "N/A",
  },
  {
    id: 9,
    code: "CRCH",
    transaction_detail: "Membership Card Charge",
    transaction_info: "N/A",
  },
  {
    id: 10,
    code: "CU",
    transaction_detail: "The Money Goes Into or Out of Cucash",
    transaction_info: "Cash",
  },
  {
    id: 11,
    code: "CUDD",
    transaction_detail: "Direct Debit Originated on Cu Account",
    transaction_info: "EFT",
  },
  {
    id: 12,
    code: "CUIN",
    transaction_detail: "Current Account Interest",
    transaction_info: "Internal Transfer",
  },
  {
    id: 13,
    code: "CUPA",
    transaction_detail: "Cub Payroll",
    transaction_info: "EFT",
  },
  {
    id: 14,
    code: "CUR",
    transaction_detail: "Counter Transactions In and Out of Mpcas",
    transaction_info: "Cash",
  },
  {
    id: 15,
    code: "CUS",
    transaction_detail: "Counter Settlement",
    transaction_info: "Cash",
  },
  {
    id: 16,
    code: "CW",
    transaction_detail: "In and Out of Current New",
    transaction_info: "Cash",
  },
  {
    id: 17,
    code: "D",
    transaction_detail: "Zero Amount Transaction",
    transaction_info: "Cash",
  },
  {
    id: 18,
    code: "DAMI",
    transaction_detail: "ATM Test Transaction Type",
    transaction_info: "N/A",
  },
  {
    id: 19,
    code: "DBC",
    transaction_detail: "Domestic Debit Card Payment",
    transaction_info: "Cash",
  },
  {
    id: 20,
    code: "DBCB",
    transaction_detail: "Debit Card with Cashback",
    transaction_info: "Cash",
  },
  {
    id: 21,
    code: "DBCI",
    transaction_detail: "Non Domestic Pos Debit",
    transaction_info: "Cash",
  },
  {
    id: 22,
    code: "DBCO",
    transaction_detail: "Debit Card Costs",
    transaction_info: "Cash",
  },
  {
    id: 23,
    code: "DBFE",
    transaction_detail: "Debit Card Fees",
    transaction_info: "Internal Transfer",
  },
  {
    id: 24,
    code: "DBI",
    transaction_detail: "Death Benefit",
    transaction_info: "Internal Transfer",
  },
  {
    id: 25,
    code: "DBQF",
    transaction_detail: "Debit Card Quart Fee",
    transaction_info: "Internal Transfer",
  },
  {
    id: 26,
    code: "DBRF",
    transaction_detail: "Debit Card Refund",
    transaction_info: "Cash",
  },
  {
    id: 27,
    code: "DBRI",
    transaction_detail: "Non Domestic Pos Refund",
    transaction_info: "Cash",
  },
  {
    id: 28,
    code: "DBRP",
    transaction_detail: "Debit Card Replacement",
    transaction_info: "N/A",
  },
  {
    id: 29,
    code: "DBSE",
    transaction_detail: "Debit Cards Settlement",
    transaction_info: "N/A",
  },
  {
    id: 30,
    code: "DBSU",
    transaction_detail: "Debit Card Surcharge",
    transaction_info: "Internal Transfer",
  },
  {
    id: 31,
    code: "DBTF",
    transaction_detail: "Debit Card Trx Fee",
    transaction_info: "Internal Transfer",
  },
  {
    id: 32,
    code: "DC",
    transaction_detail: "Debit Card Payments",
    transaction_info: "Cash",
  },
];

const columns2: GridColDef[] = [
  {
    field: "code",
    headerName: "Code",
    headerAlign: "left",
    align: "left",
    sortable: true,
    disableColumnMenu: true,
  },
  {
    field: "transaction_detail",
    headerName: "Transactions Details",
    width: 200,
    sortable: true,
    headerAlign: "left",
    align: "left",
    disableColumnMenu: true,
  },
  {
    field: "transaction_info",
    headerName: "Transactions Info",
    headerAlign: "left",
    width: 150,
    align: "left",
    sortable: true,
    disableColumnMenu: true,
  },
];

const initialState2 = {
  pagination: { paginationModel: { pageSize: 25 } },
  rows: rows2,
};

const TransactionTypes = () => {
  return (
    <>
      <div className=" flex justify-between mb-3">{/* buttons */}</div>
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
            <h3 className=" text-lg font-semibold">Progress Database</h3>
            <h3 className=" text-lg font-semibold">Scion Database</h3>
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

export default TransactionTypes;
