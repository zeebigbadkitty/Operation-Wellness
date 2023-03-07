import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import axios from "axios"


const columns = [
  { field: 'company', headerName: 'Company', width: 150 },
  { field: 'boosters', headerName: 'Boosters', width: 150 },
  { field: 'rocket_name', headerName: 'Rocket Name', width: 160, },
  { field: 'first_flight', headerName: 'First Flight', width: 160, },
  { field: 'country', headerName: 'Country', width: 160, },
];



export default function DataTable() { 
  const [rows, setRows] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch('/drugs');
        const data = await response.json();
        setRows(data);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
        setIsLoading(false);
      }
    };
    getData();
  }, []);

  return isLoading ? null : (
    <div style={{ height: 430, width: '60%', }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[10]}
        checkboxSelection
      />
    </div>
  );
}


const temp = [
  { id: 1, noon: 'lexapro', am: 'Naloxen', pm:'Heloo', other: 'Hello World' },
  { id: 2, noon: 'Fetanyl', am: 'Rybelsus', pm: 'Cymbalta', other: 'Hello World'},
  { id: 3, noon: 'Oxycodon', am: 'Wegovy', pm:'Adderall', other: 'Hello World'},
  { id: 4, noon: 'Vicodin', am: 'Xanax', pm: 'Viagra', other: 'Hello World'},
  { id: 5, noon: 'Bunavail', am: 'Ativan', pm: 'Gilenya', other: 'Hello World'},
  { id: 6, noon: 'Nurtec', am: 'Acetominophen', pm: 'Brilinta', other: 'Hello World' },
  { id: 6, noon: 'Nurtec', am: 'Acetominophen', pm: 'Brilinta', other: 'Hello World' },
  { id: 6, noon: 'Nurtec', am: 'Acetominophen', pm: 'Brilinta', other: 'Hello World' },
  { id: 6, noon: 'Nurtec', am: 'Acetominophen', pm: 'Brilinta', other: 'Hello World' },
  { id: 6, noon: 'Nurtec', am: 'Acetominophen', pm: 'Brilinta', other: 'Hello World' },
];