import * as React from 'react';
import {useState,useEffect} from 'react'
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
import axios from 'axios'

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




export default function AssetLogs() {
  const [logsArr,setLogs]=useState([])
  const userInfo = localStorage.getItem("userLogin")
      ? JSON.parse(localStorage.getItem("userLogin"))
      : null;
  let token = userInfo.token;
  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };


  useEffect(()=>{
      const logs=async()=>{
        try {
          const {data}=await axios.get('http://localhost:3001/displayLogs',config);
          console.log(data)
          if(data){
            setLogs(data.map((e)=>e))
          }
        }catch (e) {

        }



      }
      logs()
  },[])



  return (
      <>
      <Grid item lg={12} sx={{  }}>
                       

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
          {logsArr.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell align="center" component="th" scope="row">
                {row.assignedTo}
              </StyledTableCell>
              <StyledTableCell align="center">{row.assetName}</StyledTableCell>
              <StyledTableCell align="center">{row.assetId}</StyledTableCell>
              <StyledTableCell align="center">{row.assignedOn}</StyledTableCell>
              <StyledTableCell align="center">{row.assignedTo}</StyledTableCell>
              <StyledTableCell align="center">{row.assetStatus}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </Grid>
      </>    
  );
}
