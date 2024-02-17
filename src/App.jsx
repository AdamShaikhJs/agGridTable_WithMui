import React from 'react';
import { AgGridReact } from 'ag-grid-react';
import { Chip, Grid, Button, Box } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import AddIcon from '@mui/icons-material/Add';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import 'ag-grid-community/styles/ag-grid.css'; // Core CSS
import 'ag-grid-community/styles/ag-theme-quartz.css'; // Theme
import './App.css';
import Switch from '@mui/material/Switch';

import FormControlLabel from '@mui/material/FormControlLabel';
const StatusChip = ({ value }) => {
  let chipColor;
  switch (value.toLowerCase()) {
    case 'approved':
      chipColor = 'success';
      break;
    case 'draft':
      chipColor = 'error';
      break;
    case 'pending approval':
      chipColor = 'primary';
      break;
    default:
      chipColor = 'success';
      break;
  }
  return (
    <Chip
      label={value}
      color={chipColor}
      size="small"
      sx={{ fontSize: '12px' }}
    />
  );
};

const StatusChipMap = ({ value }) => {
  let chipColor;
  switch (value.toLowerCase()) {
    case 'checked':
      chipColor = 'success';
      break;
    case 'unChecked':
      chipColor = 'error';
      break;
    default:
      chipColor = 'default';
      break;
  }
  return <CheckCircleOutlineIcon fontSize="small" color="success" mt={1} />;
};

const ActionButtons = () => (
  <div>
    <IconButton
      size="small"
      color="primary"
      onClick={() => console.log('Edit clicked')}
    >
      <EditIcon />
    </IconButton>
    <IconButton
      size="small"
      color="error"
      onClick={() => console.log('Delete clicked')}
    >
      <DeleteIcon />
    </IconButton>
    <IconButton
      size="small"
      color="info"
      onClick={() => console.log('Copy clicked')}
    >
      <FileCopyIcon />
    </IconButton>
    <IconButton
      size="small"
      color="success"
      onClick={() => console.log('Add clicked')}
    >
      <AddIcon />
    </IconButton>
  </div>
);

const App = () => {
  const [checked, setChecked] = React.useState(false);
  const handleChange = () => {
    setChecked((prev) => !prev);
  };
  const columnDefs = [
    { headerCheckboxSelection: true, checkboxSelection: true, width: 50 },
    { headerName: 'Target', field: 'target' },
    { headerName: 'Last Modified By', field: 'lastModifiedBy' },
    { headerName: 'Last Modified Date', field: 'lastModifiedDate' },
    { headerName: 'Map Version', field: 'mapVersion' },
    { headerName: 'Map Status', field: 'mapStatus', cellRenderer: StatusChip },
    {
      headerName: 'Dry Run Status',
      field: 'dryRunStatus',
      cellRenderer: StatusChipMap,
    },
  ];

  const rowData = [
    {
      id: 1,
      target: 'AE',
      lastModifiedBy: 'dummygmail@gmail.com',
      lastModifiedDate: '12/02/2024',
      mapVersion: 'V2',
      mapStatus: 'approved',
      dryRunStatus: 'checked',
      filed: 'done',
    },
    {
      id: 2,
      target: 'ME',
      lastModifiedBy: 'dummygmail@gmail.com',
      lastModifiedDate: '12/02/2024',
      mapVersion: 'V2',
      mapStatus: 'draft',
      dryRunStatus: 'checked',
      filed: 'done',
    },
    {
      id: 3,
      target: 'FE',
      lastModifiedBy: 'dummygmail@gmail.com',
      lastModifiedDate: '12/02/2024',
      mapVersion: 'V2',
      mapStatus: 'pending Approval',
      dryRunStatus: 'unChecked',
      filed: 'done',
    },
    {
      id: 4,
      target: 'FE',
      lastModifiedBy: 'adamShaikh@gmail.com',
      lastModifiedDate: '12/02/2024',
      mapVersion: 'V2',
      mapStatus: 'pending Approval',
      dryRunStatus: 'checked',
      filed: 'done',
    },
    {
      id: 5,
      target: 'FE',
      lastModifiedBy: 'adamShaikh@gmail.com',
      lastModifiedDate: '12/02/2024',
      mapVersion: 'V2',
      mapStatus: 'approved',
      dryRunStatus: 'unChecked',
      filed: 'done',
    },
    {
      id: 6,
      target: 'FE',
      lastModifiedBy: 'adamShaikh@gmail.com',
      lastModifiedDate: '12/02/2024',
      mapVersion: 'V2',
      mapStatus: 'pending Approval',
      dryRunStatus: 'checked',
      filed: 'done',
    },
    {
      id: 7,
      target: 'FE',
      lastModifiedBy: 'adamShaikh@gmail.com',
      lastModifiedDate: '12/02/2024',
      mapVersion: 'V2',
      mapStatus: 'draft',
      dryRunStatus: 'checked',
      filed: 'done',
    },
    {
      id: 8,
      target: 'FE',
      lastModifiedBy: 'adamShaikh@gmail.com',
      lastModifiedDate: '12/02/2024',
      mapVersion: 'V2',
      mapStatus: 'pending Approval',
      dryRunStatus: 'checked',
      filed: 'done',
    },
    {
      id: 9,
      target: 'FE',
      lastModifiedBy: 'adamShaikh@gmail.com',
      lastModifiedDate: '12/02/2024',
      mapVersion: 'V2',
      mapStatus: 'approved',
      dryRunStatus: 'unChecked',
      filed: 'done',
    },
    {
      id: 10,
      target: 'FE',
      lastModifiedBy: 'adamShaikh@gmail.com',
      lastModifiedDate: '12/02/2024',
      mapVersion: 'V2',
      mapStatus: 'pending Approval',
      dryRunStatus: 'checked',
      filed: 'done',
    },
    {
      id: 11,
      target: 'FE',
      lastModifiedBy: 'adamShaikh@gmail.com',
      lastModifiedDate: '12/02/2024',
      mapVersion: 'V2',
      mapStatus: 'approved',
      dryRunStatus: 'checked',
      filed: 'done',
    },
  ];

  return (
    <>
      <h2>Dynamic Table</h2>
      <Box display={'flex'} justifyContent={'end'} mx={4} mb={1}>
        <FormControlLabel
          control={<Switch checked={checked} onChange={handleChange} />}
          label={checked ? 'Dark' : 'Light'}
        />
      </Box>
      <>
        <div
          className={checked ? 'ag-theme-quartz-dark' : 'ag-theme-quartz'}
          style={{ height: '100%', width: '90vw' }}
        >
          <AgGridReact
            columnDefs={columnDefs}
            rowData={rowData}
            defaultColDef={{
              sortable: true,
              filter: true,
            }}
            rowSelection="multiple"
            domLayout="autoHeight"
            style={{ width: '100%', height: '100%' }}
          />
        </div>
      </>
      <Grid container px={5}>
        <p>ddss</p>
      </Grid>
    </>
  );
};

export default App;
