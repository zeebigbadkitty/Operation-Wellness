import * as React from "react";
import { DataGrid} from "@mui/x-data-grid";

const morningDrugs = [
  { id: 1, name: 'Aspirin', strength: '325mg', indication: 'Pain relief' },
  { id: 2, name: 'Caffeine', strength: '100mg', indication: 'Stimulant' },
  { id: 3, name: 'Vitamin C', strength: '500mg', indication: 'Immune support' },
];

const noonDrugs = [
  { id: 1, name: 'Ibuprofen', strength: '200mg', indication: 'Pain relief' },
  { id: 2, name: 'Propranolol', strength: '10mg', indication: 'Blood pressure' },
  { id: 3, name: 'Paracetamol', strength: '500mg', indication: 'Fever' },
];

const eveningDrugs = [
  { id: 1, name: 'Loratadine', strength: '10mg', indication: 'Allergy relief' },
  { id: 2, name: 'Melatonin', strength: '3mg', indication: 'Sleep aid' },
  { id: 3, name: 'Magnesium', strength: '250mg', indication: 'Relaxation' },
];

const otherDrugs = [
  { id: 1, name: 'Simvastatin', strength: '20mg', indication: 'Cholesterol' },
  { id: 2, name: 'Metformin', strength: '500mg', indication: 'Diabetes' },
  { id: 3, name: 'Omeprazole', strength: '20mg', indication: 'Acid reflux' },
];

function Table({ title, drugs }) {
  const columns = [
    { field: 'name', headerName: 'Drug name', flex: 1 },
    { field: 'strength', headerName: 'Drug strength', flex: 1 },
    { field: 'indication', headerName: 'Indication', flex: 1 },
  ];

  return (
    <div style={{ height: 300, width: '100%' }}>
      <h2>{title}</h2>
      <DataGrid rows={drugs} columns={columns} pageSize={5} autoHeight autoWidth checkboxSelection/>
    </div>
  );
}

function Content() {
  return (
    <div>
      <Table title="Morning (AM)" drugs={morningDrugs} />
      <Table title="Noon" drugs={noonDrugs} />
      <Table title="Evening (PM/HS)" drugs={eveningDrugs} />
      <Table title="Other/As Needed (PRN)" drugs={otherDrugs} />
      <button style={{ marginRight: '15px', marginLeft: '20px' }}>Add A New Medication</button>
        <button>Submit</button>
        <button style={{ marginRight: '15px', marginLeft: '20px' }}>View Inactive Medications</button>
    </div>
  );
}

export default Content;


// import axios from "axios";
// import { useQuery } from "@apollo/client";
// import { QUERY_USER_DRUGS, QUERY_SINGLE_DRUG } from "../utils/queries";
// import { CSVLink, CSVDownload } from "react-csv";


// const columns = [
//   { field: 'id', headerName: 'ID', width: 70 },
//   { field: "proprietaryname", headerName: "Drug Name", width: 450 },
//   { field: "active_numerator_strength", headerName: "Strength", width: 200 },
//   // { field: "active_ingred_unit", headerName: "Strength Unit", width: 200 },
//   { field: "pharm_classes", headerName: "Indication", width: 200 },
// ];
// const columns = [
//   { field: "proprietaryname", headerName: "Drug Name", width: 450 },
//   { field: "active_numerator_strength", headerName: "Strength", width: 200 },
//   { field: "active_ingred_unit", headerName: "Strength Unit", width: 200 },
// ];


// export default function DataTable() {
//   const [rows, setRows] = React.useState([]);
//   const [isLoading, setIsLoading] = React.useState(true);
//   const [csv, setCsv] = React.useState({});

//   const { loading, data } = useQuery(QUERY_USER_DRUGS); 
//   const userDrugs = data?.userDrugs || [];
//   console.log(userDrugs);

//   function handleDownloadCsv() {
//     const csvData = userDrugs.map((row) => ({
//       proprietaryname: row.proprietaryname,
//       active_numerator_strength: row.active_numerator_strength,
//       active_ingred_unit: row.active_ingred_unit,
//     }));
//     setCsv({
//       data: csvData,
//       fields: columns,
//     });
//   }
//   return (
//     <>
//     {loading ? (
//       <h1>Loading...</h1>
//     ) : (
//       <div style={{ height: 430, width: "60%" }}>
//         <DataGrid
//           columns={columns}
//           rows={userDrugs}
//           slots={{
//             toolbar: () => (
//               <GridToolbar>
//                 <CSVLink {...csv} filename={"data.csv"}>
//                   Download me
//                 </CSVLink>
//               </GridToolbar>
//             ),
//           }}
//         />
//       </div>
//     )}
//   </>
// );
// }
