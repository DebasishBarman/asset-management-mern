import * as React from 'react';
import { Grid,Stack, Divider, Typography, } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import { tableCellClasses } from '@mui/material/TableCell';


// Styled components
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    // backgroundColor: theme.palette.common.yellow,
    // color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));


function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

// const columns = [
//   {
//     field: 'fullName',
//     headerName: 'Name',
//     description: 'This column has a value getter and is not sortable.',
//     sortable: false,
//     width: 160,
//     valueGetter: (params) =>
//       `${params.getValue(params.id, 'firstName') || ''} ${
//         params.getValue(params.id, 'lastName') || ''
//       }`,
//   },

//   { field: 'lastName', headerName: 'Category', width: 130,backgroundColor:'#d2e317',sortable: false, },
//   { field: 'id', headerName: 'Asset ID', width: 130,backgroundColor:'#d2e317',sortable: false, },
//   { field: 'date', headerName: 'Date of Assignment', width: 130,backgroundColor:'#d2e317' },
//   { field: 'assignedTo', headerName: 'Assigned To', width: 130,backgroundColor:'#d2e317',sortable: false, },
//   { field: 'status', headerName: 'Status', width: 130,backgroundColor:'#d2e317',sortable: false, },
  
  
// ];

// const rows = [
//   { id: 1, lastName: 'Snow', firstName: 'Jon', status: 35,date:"12/11/2022",assignedTo:"Debasish" },
//   { id: 2, lastName: 'Lannister', firstName: 'Cersei', status: 42,date:"12/11/2022",assignedTo:"Debasish" },
//   { id: 3, lastName: 'Lannister', firstName: 'Jaime', status: 45,date:"12/11/2022",assignedTo:"Debasish" },
//   { id: 4, lastName: 'Stark', firstName: 'Arya', status: 16,date:"12/11/2022",assignedTo:"Debasish" },
//   { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', status: 44,date:"12/11/2022",assignedTo:"Debasish" },
//   { id: 6, lastName: 'Melisandre', firstName: null, status: 150,date:"12/11/2022",assignedTo:"Debasish" },
//   { id: 7, lastName: 'Clifford', firstName: 'Ferrara', status: 44,date:"12/11/2022",assignedTo:"Debasish" },
//   { id: 8, lastName: 'Frances', firstName: 'Rossini', status: 36,date:"12/11/2022",assignedTo:"Debasish" },
//   { id: 9, lastName: 'Roxie', firstName: 'Harvey', status: 65,date:"12/11/2022",assignedTo:"Debasish" },
// ];

export default function AssetLogs() {
  return (
      <>
      <Grid item lg={12} sx={{  }}>
                       
                        {/* <div style={{ height: '90vh', width: '70vw' }}>
      <DataGrid
        sx={{padding:4}}
        rows={rows}
        columns={columns}
        pageSize={9}
        rowsPerPageOptions={[10]}
      
        disableSelectionOnClick
      />
    </div> */}
                      <TableContainer component={Paper} sx={{ minWidth: '70vw',minHeight:'90vh' }} >
      <Table >
        <TableHead>
          <TableRow sx={{backgroundColor:'#d2e317'}}>
            <StyledTableCell align="center" sx={{fontSize:16}}>Name</StyledTableCell>
            <StyledTableCell align="center" sx={{fontSize:16}}>Category</StyledTableCell>
            <StyledTableCell align="center" sx={{fontSize:16}}>Asset ID</StyledTableCell>
            <StyledTableCell align="center" sx={{fontSize:16}}>Date of Assignment</StyledTableCell>
            <StyledTableCell align="center" sx={{fontSize:16}}>Assigned To</StyledTableCell>
            <StyledTableCell align="center" sx={{fontSize:16}}>Status</StyledTableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell align="center" component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="center">{row.calories}</StyledTableCell>
              <StyledTableCell align="center">{row.fat}</StyledTableCell>
              <StyledTableCell align="center">{row.carbs}</StyledTableCell>
              <StyledTableCell align="center">{row.protein}</StyledTableCell>
              <StyledTableCell align="center">{row.protein}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>     
    </Grid>
      </>    
  );
}
