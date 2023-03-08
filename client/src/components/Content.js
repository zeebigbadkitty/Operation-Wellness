import * as React from "react";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import axios from "axios";
import { useQuery } from "@apollo/client";
import { QUERY_USER_DRUGS, QUERY_SINGLE_DRUG } from "../utils/queries";
import { CSVLink, CSVDownload } from "react-csv";

//use query hook from Apollo to get data from the server

const columns = [
  { field: "proprietaryname", headerName: "Drug Name", width: 450 },
  { field: "active_numerator_strength", headerName: "Strength", width: 200 },
  { field: "active_ingred_unit", headerName: "Strength Unit", width: 200 },
];

export default function DataTable() {
  const [rows, setRows] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [csv, setCsv] = React.useState({});

  const { loading, data } = useQuery(QUERY_USER_DRUGS);
  const userDrugs = data?.userDrugs || [];
  console.log(userDrugs);

  function handleDownloadCsv() {
    const csvData = userDrugs.map((row) => ({
      proprietaryname: row.proprietaryname,
      active_numerator_strength: row.active_numerator_strength,
      active_ingred_unit: row.active_ingred_unit,
    }));
    setCsv({
      data: csvData,
      fields: columns,
    });
  }
  return (
    <>
    {loading ? (
      <h1>Loading...</h1>
    ) : (
      <div style={{ height: 430, width: "60%" }}>
        <DataGrid
          columns={columns}
          rows={userDrugs}
          slots={{
            toolbar: () => (
              <GridToolbar>
                <CSVLink {...csv} filename={"data.csv"}>
                  Download me
                </CSVLink>
              </GridToolbar>
            ),
          }}
        />
      </div>
    )}
  </>
);
}