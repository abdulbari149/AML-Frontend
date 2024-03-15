"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { fetchAuthSession } from "aws-amplify/auth";

// MUI
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { Switch } from "@mui/material";
import { MdEdit } from "react-icons/md";

//ICONS
import EditIcon from "@mui/icons-material/Edit";
import SaveIcon from "@mui/icons-material/Save";
import CancelIcon from "@mui/icons-material/Close";

// COMPONENTS
import resetCriteriaSvg from "@/assets/svgs/resetCriteria.svg";

// UTILS
import { CustomPagination } from "@/utils/CustomPagination";
import { getReportSetting } from "@/api/listReportSetting";
import { succesToastify } from "@/helpers/toast";
import { editCriteria, editReportSettings } from "@/api/report";

interface Row {
  id: string;
  amount: number;
  criteria: string;
  description: string;
  isIncluded: boolean;
}

interface CriteriaData {
  [key: string]: {
    amount: number;
    isincluded: boolean;
    description: string;
  };
}

const initialRows: Row[] = [
  {
    id: "1",
    criteria: "A",
    description: "High-risk transaction",
    amount: 0,
    isIncluded: false,
  },
  {
    id: "2",
    criteria: "B",
    description: "National from a high-risk jurisdiction ",
    amount: 0,
    isIncluded: false,
  },
  {
    id: "3",
    criteria: "C",
    description: "Cash Lodgements",
    amount: 0,
    isIncluded: false,
  },
  {
    id: "4",
    criteria: "D",
    description: "EFT Lodgements ",
    amount: 0,
    isIncluded: false,
  },
  {
    id: "5",
    criteria: "E",
    description: "Minor Account Lodgements",
    amount: 0,
    isIncluded: false,
  },
  {
    id: "6",
    criteria: "F",
    description: "Sub-office Lodgements",
    amount: 0,
    isIncluded: false,
  },
  {
    id: "7",
    criteria: "G",
    description: "Counter New Member Lodgements ",
    amount: 0,
    isIncluded: false,
  },
  {
    id: "8",
    criteria: "H",
    description: "Online New Member Lodgements",
    amount: 0,
    isIncluded: false,
  },
  {
    id: "9",
    criteria: "I",
    description: "Self Employed Lodgements",
    amount: 0,
    isIncluded: false,
  },
  {
    id: "10",
    criteria: "J",
    description: "Unemployed Lodgements",
    amount: 0,
    isIncluded: false,
  },
  {
    id: "11",
    criteria: "K",
    description: "Large Cash Withdrawals",
    amount: 0,
    isIncluded: false,
  },
  {
    id: "12",
    criteria: "L",
    description: "Multiple Large Cash Transactions",
    amount: 0,
    isIncluded: false,
  },
  {
    id: "13",
    criteria: "M",
    description: "High-Value Wire Transfers",
    amount: 0,
    isIncluded: false,
  },
  {
    id: "14",
    criteria: "N",
    description: "Foreign Exchange Transactions",
    amount: 0,
    isIncluded: false,
  },
  {
    id: "15",
    criteria: "O",
    description: "High-Frequency Trading Activity",
    amount: 0,
    isIncluded: false,
  },
  {
    id: "16",
    criteria: "P",
    description: "Third-Party Payments",
    amount: 0,
    isIncluded: false,
  },
  {
    id: "17",
    criteria: "Q",
    description: "Large Inbound Transactions",
    amount: 0,
    isIncluded: false,
  },
  {
    id: "18",
    criteria: "R",
    description: "Non-Profit Organization Deposits",
    amount: 0,
    isIncluded: false,
  },
  {
    id: "19",
    criteria: "S",
    description: "Corporate Account Deposits",
    amount: 0,
    isIncluded: false,
  },
  {
    id: "20",
    criteria: "T",
    description: "Trust Account Transactions",
    amount: 0,
    isIncluded: false,
  },
  {
    id: "21",
    criteria: "U",
    description: "Government Grants or Subsidies",
    amount: 0,
    isIncluded: false,
  },
  {
    id: "22",
    criteria: "V",
    description: "Large Cash Transactions with No Apparent Purpose",
    amount: 0,
    isIncluded: false,
  },
  {
    id: "23",
    criteria: "W",
    description: "Suspicious Activity Patterns",
    amount: 0,
    isIncluded: false,
  },
  {
    id: "24",
    criteria: "X",
    description: "Unusually Large ATM Withdrawals",
    amount: 0,
    isIncluded: false,
  },
  {
    id: "25",
    criteria: "Y",
    description: "Overseas Transactions from High-Risk Countries",
    amount: 0,
    isIncluded: false,
  },
  {
    id: "26",
    criteria: "Z",
    description: "Politically Exposed Person (PEP) Transactions",
    amount: 0,
    isIncluded: false,
  },
];

function calculateColumnWidth(columnName: keyof Row) {
  // Finding the maximum length of content in the specified column
  const maxLength = Math.max(
    ...initialRows.map((row) => String(row[columnName]).length)
  );
  // Adding some extra padding for better readability
  return maxLength * 7; // Adjust this factor as needed
}

const ReportSection = () => {
  const [rows, setRows] = React.useState<Row[]>(initialRows);
  const [criteriaData, setCriteriaData] = useState<CriteriaData>({});
  const [switchStates, setSwitchStates] = useState<{ [key: string]: boolean }>(
    {}
  );
  const [reportId, setReportId] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const authSession = await fetchAuthSession();
      const userId = authSession?.tokens?.accessToken?.payload.username;

      if (!userId) {
        setLoading(false);
        return;
      }

      const data = await getReportSetting({ user: userId });
      if (!data || !Array.isArray(data) || data.length === 0) {
        setReportId(null);
        setLoading(false);
        return;
      }

      setReportId(data[0]?.Id);
      const userCriteria = data[0]?.criteria ?? data[0]?.Criteria ?? {};
      if (criteriaData) {
        const changeToInitialRows = Object.keys(userCriteria).map(
          (key, index) => ({
            id: `${index + 1}`,
            criteria: key,
            description: userCriteria[key].description,
            amount: userCriteria[key].amount,
            isIncluded: userCriteria[key].isIncluded === true ? true : false,
          })
        );
        setRows(changeToInitialRows);
      } else {
        setRows(initialRows);
      }
      setLoading(false);
    })();
  }, []);

  const changeToCriteriaFormat = (rowsParam: any) => {
    // Transform rows data into criteria data format
    const updatedCriteriaData: CriteriaData = rowsParam.reduce(
      (acc: any, row: any) => {
        acc[row.criteria] = {
          amount: parseInt(row.amount),
          isIncluded: row.isIncluded,
          description: row.description,
        };
        return acc;
      },
      {}
    );
    setCriteriaData(updatedCriteriaData);
    return updatedCriteriaData;
  };

  useEffect(() => {
    changeToCriteriaFormat(rows);
  }, [rows]);

  useEffect(() => {
    rows.forEach((row) => {
      setSwitchStates((prevState) => ({
        ...prevState,
        [row.id]: row.isIncluded,
      }));
    });
  }, [rows]);

  const handleSwitchChange =
    (id: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
      const { checked } = event.target;
      setSwitchStates((prevState) => ({
        ...prevState,
        [id]: checked,
      }));

      setRows((prevRows) =>
        prevRows.map((row) => {
          if (row.id === id) {
            return { ...row, isIncluded: checked };
          }
          return row;
        })
      );
    };

  const handleProcessRowUpdate = (updatedRow: any, originalRow: any) => {
    // Find the index of the row that was edited
    const rowIndex = rows.findIndex((row) => row.id === updatedRow.id);

    // Replace the old row with the updated row
    const updatedRows = [...rows];
    updatedRows[rowIndex] = updatedRow;

    // Update the state with the new rows
    setRows(updatedRows);

    // Return the updated row to update the internal state of the DataGrid
    return updatedRow;
  };

  const resetCriteria = async () => {
    const newRows = rows.map((row) => ({
      ...row,
      amount: 0,
    }));
    setRows(newRows);
    const updatedData = changeToCriteriaFormat(newRows);
    if (newRows) {
      const submitData = await editCriteria(updatedData as any, reportId);
      if (submitData) {
        succesToastify("Report Criteria Updated");
      }
    }
  };

  useEffect(() => {
    console.log(criteriaData);
  }, [criteriaData]);

  const columns: GridColDef[] = [
    {
      field: "criteria",
      headerName: "Criteria",
      // width: 70,
      headerAlign: "center",
      align: "center",
      sortable: true,
      disableColumnMenu: true,
      editable: false,
    },

    {
      field: "type",
      headerName: "Is this criteria included?",
      headerAlign: "center",
      align: "center",
      sortable: false,
      editable: true,
      disableColumnMenu: true,
      width: 200,
      renderCell: (params) => {
        const { id } = params.row as Row;
        return (
          <Switch
            checked={switchStates[id] || false}
            onChange={handleSwitchChange(id)}
            name={id}
          />
        );
      },
    },
    {
      field: "amount",
      headerName: "Amount",
      headerAlign: "center",
      align: "center",
      sortable: true,
      editable: true,
      disableColumnMenu: true,
    },
    {
      field: "description",
      headerName: "Description",
      width: calculateColumnWidth("description"),
      sortable: true,
      disableColumnMenu: true,
      editable: false,
    },
    {
      field: "edit",
      headerName: "Edit",
      headerAlign: "center",
      align: "center",
      disableColumnMenu: true,
      sortable: false,
      renderCell: (params) => (
        <MdEdit className=" text-[18px] cursor-pointer" />
      ),
    },
  ];

  const initialState = {
    pagination: { paginationModel: { pageSize: 25 } },
    rows: rows,
  };

  const updateCriteria = async () => {
    const updatedData = changeToCriteriaFormat(rows);
    const submitData = await editCriteria(updatedData as any, reportId);
    if (submitData) {
      succesToastify("Report Criteria Updated");
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-[80vh]">
        <h1 className="text-2xl font-bold">Loading...</h1>
      </div>
    );
  }

  if (reportId === null) {
    return (
      <div className="flex justify-center items-center h-[80vh]">
        <h1 className="text-2xl font-bold">Report Doesn't Exist</h1>
      </div>
    );
  }

  return (
    <>
      <div className=" flex justify-between mb-3">
        {/* buttons */}
        <div className=" flex gap-3">
          <button
            className=" flex gap-3 justify-center items-center rounded-xl bg-[#FFFFFF] md:px-5 px-4 md:py-3 py-[10px]"
            onClick={resetCriteria}
          >
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
            onClick={updateCriteria}
          >
            <Image
              src={resetCriteriaSvg}
              alt="resetCriteriaSvg"
              className=" md:block hidden"
            />
            <span className="md:text-sm text-xs font-normal">
              Update Criteria
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
          slots={{ pagination: CustomPagination }}
          initialState={initialState}
          editMode="row"
          processRowUpdate={handleProcessRowUpdate}
        />
      </div>
    </>
  );
};

export default ReportSection;
