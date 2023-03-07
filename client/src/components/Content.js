import * as React from "react";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import axios from "axios";
import { useQuery } from "@apollo/client";
import { QUERY_USER_DRUGS, QUERY_SINGLE_DRUG } from "../utils/queries";

//use query hook from Apollo to get data from the server

const columns = [
  { field: "proprietaryname", headerName: "Drug Name", width: 150 },
  { field: "active_numerator_strength", headerName: "Strength", width: 150 },
  { field: "active_ingred_unit", headerName: "Strength Unit", width: 160 },
];

export default function DataTable() {
  const [rows, setRows] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  const { loading, data } = useQuery(QUERY_USER_DRUGS);
  const userDrugs = data?.userDrugs || [];
  console.log(userDrugs)
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
              toolbar: GridToolbar,
            }}
          />
        </div>
      )}
    </>
  );
}
