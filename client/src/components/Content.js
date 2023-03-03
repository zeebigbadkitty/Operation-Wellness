import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'am', headerName: 'AM', width: 150 },
  { field: 'noon', headerName: 'NOON', width: 150 },
  { field: 'pm', headerName: 'PM', width: 160, },
  { field: 'other', headerName: 'Other', width: 160, },
];

const rows = [
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
  return (
    <div style={{ height: 430, width: '45%', }}>
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