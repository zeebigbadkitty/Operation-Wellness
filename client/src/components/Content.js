import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'am', headerName: 'AM', width: 150 },
  { field: 'noon', headerName: 'NOON', width: 150 },
  { field: 'pm', headerName: 'PM', width: 160, },
];

const rows = [
  { id: 1, noon: 'lexapro', am: 'Naloxen', pm:'Heloo' },
  { id: 2, noon: 'Fetanyl', am: 'Rybelsus', pm: 'Cymbalta'},
  { id: 3, noon: 'Oxycodon', am: 'Wegovy', pm:'Adderall'},
  { id: 4, noon: 'Vicodin', am: 'Xanax', pm: 'Viagra'},
  { id: 5, noon: 'Bunavail', am: 'Ativan', pm: 'Gilenya' },
  { id: 6, noon: 'Nurtec', am: 'Acetominophen', pm: 'Brilinta' },
];

export default function DataTable() {
  return (
    <div style={{ height: 400, width: '40%', }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection

      
      />
    </div>
  );
}