import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import { useState,useEffect } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

// import Delete from './deleteCard'
// import Update from './update'
// import Home from './Home';
import Nav from './Nav';
// import { useNavigate } from 'react-router-dom';
import { View,Delete } from '../global';
import Swal from 'sweetalert2'

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
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


export default function CustomizedTables() {

  // let navigate = useNavigate() 
  const [display,setDisplay]=useState([]);


  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const [selectedUser,setSelectedUser]=useState('');
  const [load,setLoad]=useState(true)

  useEffect(()=>{
    View()
    .then((res)=>{
      console.log(res,"aaaaaaaa")
      console.log("Product Response :" +JSON.stringify(res.data));
      setDisplay(res.data)
      setLoad(false)
    })
    .catch((err)=>{
      console.log("Error: " +err)
    })
  },[load])
     
    

    
    

    const handleSingleView = (id) => {
      setOpen(true)
      setSelectedUser(id)
    }
    


    const handleDelete = (id) => {
      console.log(id,"iiiiiidddddd")
      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then(async(result) => {
        if (result.isConfirmed) {
          console.log(id,"iidd222")
          await Delete(id)
          .then((res)=>{
           console.log(res)
           setLoad(true)
          })
          .catch((err)=>{
            console.log(err)
          })
          Swal.fire(
            'Deleted!',
            'Your file has been deleted.',
            'success'
          )
        }
      })

    }



    // const handleUpdate = (id) => { 
    //     setOpen3(true)
    //     setSelectedUser(id)
    //     console.log(setOpen3);
        
    //   };
    
  const handleClose = () => {setOpen(false);setOpen2(false);setOpen3(false)};
  return (
    <>
    {/* <Home/> 
     */}
     <Nav/>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Sl No</StyledTableCell>
            <StyledTableCell align="right">Name</StyledTableCell>
            <StyledTableCell align="right">Phone</StyledTableCell>
            <StyledTableCell align="right">Email</StyledTableCell>
            <StyledTableCell align="right">Address</StyledTableCell>
            <StyledTableCell align="center" colSpan={3}>Action</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {display?.map((i,index) => (
            <StyledTableRow key={i.index}>
              <StyledTableCell component="th" scope="row">
                {index+1}
              </StyledTableCell>
              <StyledTableCell align="right">{i.name}</StyledTableCell>
              <StyledTableCell align="right">{i.phone}</StyledTableCell>
              <StyledTableCell align="right">{i.email}</StyledTableCell> 
              <StyledTableCell align="right">{i.address}</StyledTableCell>
              <StyledTableCell align="right"><Button variant='outlined' color="secondary" ><Link to={`/singleview/${i._id}`}>View</Link></Button></StyledTableCell> 
              <StyledTableCell align="right"><Button variant='outlined' color="primary" ><Link to={`/update/${i._id}`}> Update </Link></Button></StyledTableCell>
              <StyledTableCell align="right"><Button variant='outlined' color="error" onClick={()=>handleDelete(i._id)}>Delete</Button></StyledTableCell>
              
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    





      
        <Link to={'/'}>
          <Button variant='outlined' fullWidth sx={{mt:2}}>Insert New</Button>
        </Link>





       




    </>
  );
}




