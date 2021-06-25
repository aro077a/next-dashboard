// import * as React from 'react';
import { DataGrid } from '@material-ui/data-grid';

const columns = [
  {
    field: 'fullName',
    headerName: 'Full Name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 260,
  },
  {
    field: 'status',
    headerName: 'Status',
    description: 'This column has a value getter and is not sortable.',
    sortable: true,
    width: 160,
  },
  {
    field: 'type',
    headerName: 'TYPE',
    description: 'This column has a value getter and is not sortable.',
    sortable: true,
    width: 160,
  },
  {
    field: 'email',
    headerName: 'EMAIL',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 260,
  },
  {
    field: 'signedUp',
    headerName: 'SIGNEDUP',
    description: 'This column has a value getter and is not sortable.',
    sortable: true,
    width: 160,
  },
  {
    field: 'userId',
    headerName: 'USERID',
    description: 'This column has a value getter and is not sortable.',
    sortable: true,
    width: 160,
  },
];

const rows = [
  {
    id: 1,
    fullName: 'Snow',
    status: 'Jon',
    type: 35,
    email: 'amanda@example.com',
    signedUp: '1 year ago',
    userId: '67989',
  },
  {
    id: 2,
    fullName: 'Lannister',
    status: 'Cersei',
    type: 42,
    email: 'anne@example.com',
    signedUp: '1 year ago',
    userId: '67989',
  },
  {
    id: 4,
    fullName: 'Lannister',
    status: 'Jaime',
    type: 45,
    email: 'anne@example.com',
    signedUp: '1 year ago',
    userId: '67989',
  },
  {
    id: 5,
    fullName: 'Stark',
    status: 'Arya',
    type: 16,
    email: 'anne@example.com',
    signedUp: '1 year ago',
    userId: '67989',
  },
  {
    id: 6,
    fullName: 'Targaryen',
    status: 'Daenerys',
    type: null,
    email: 'anne@example.com',
    signedUp: '1 year ago',
    userId: '67989',
  },
  {
    id: 7,
    fullName: 'Melisandre',
    status: null,
    type: 150,
    email: 'anne@example.com',
    signedUp: '1 year ago',
    userId: '67989',
  },
  {
    id: 8,
    fullName: 'Clifford',
    status: 'Ferrara',
    type: 44,
    email: 'anne@example.com',
    signedUp: '1 year ago',
    userId: '67989',
  },
  {
    id: 9,
    fullName: 'Frances',
    status: 'Rossini',
    type: 36,
    email: 'anne@example.com',
    signedUp: '1 year ago',
    userId: '67989',
  },
  {
    id: 10,
    fullName: 'Roxie',
    status: 'Harvey',
    type: 65,
    email: 'anne@example.com',
    signedUp: '1 year ago',
    userId: '67989',
  },
];

const DashboardTable = () => {
  return (
    <div
      style={{
        height: 400,
        width: '100%',
        marginTop: '40px',
        fontSize: '14px',
      }}
    >
      <DataGrid rows={rows} columns={columns} pageSize={5} checkboxSelection />
    </div>
  );
};

export default DashboardTable;
