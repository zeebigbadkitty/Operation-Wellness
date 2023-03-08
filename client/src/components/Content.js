import * as React from "react";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import axios from "axios";
import { useQuery } from "@apollo/client";
import { QUERY_USER_DRUGS, QUERY_SINGLE_DRUG, QUERY_SINGLE_USER_WITH_DRUGS } from "../utils/queries";
import { CSVLink, CSVDownload } from "react-csv";


//JWT TOKEN NEEDS TO BE RETRIEVED SO WE CAN ADD TO LINE 22

const columns = [
  { field: "proprietaryname", headerName: "Drug Name", width: 450 },
  { field: "active_numerator_strength", headerName: "Strength", width: 200 },
  { field: "active_ingred_unit", headerName: "Strength Unit", width: 200 },
];


export default function DataTable() {
  const [rows, setRows] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [csv, setCsv] = React.useState({});

  // const { loading, data } = useQuery(QUERY_USER_DRUGS);
  const { loading, data } = useQuery(QUERY_SINGLE_USER_WITH_DRUGS);
  const userDrugs = data?.user || [];
  console.log(userDrugs);
  let newArray = [];
  newArray.push(userDrugs);
  console.log(newArray);
  React.useEffect(() => {
    
      handleDownloadCsv();
    
  }, [])
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
    
    console.log("columns",columns);
    console.log("csvData",csvData);
    console.log("userDrugs",userDrugs);
  }
  return (
    <>
    {loading ? (
      <h1>Loading...</h1>
    ) : (
      <div style={{ height: 430, width: "60%" }}>
        <DataGrid
          //need an id for each row, getRowId from MUI, look at docs
          columns={columns}
          rows={newArray}
          getRowId={() => Math.floor(Math.random() * 100000000)}
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
