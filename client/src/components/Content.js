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

export default function DataTable() { 
  const url = 'https://api.spacexdata.com/v3/rockets'
 const [rows, setrows] = React.useState() 
 const [isloading, setisloading] = React.useState(true)
  React.useEffect(()=> {
    const getdata = async () => {
      const {data} = await axios.get(url)
      console.log(data)
      setrows(data)
      setisloading(false)
    }
    getdata()
  },[])
  return isloading?null:(
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