import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { Link, useParams } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Image, Transformation, CloudinaryContext } from "cloudinary-react";
import Card from "@mui/material/Card";
import Axios from "axios";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}  

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  maxWidth: 450,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 10,
  p: 1,
};
// const defaultTheme = createTheme();

export default function SignIn() {
  const navigate = useNavigate()
  // iconshout
  const [index, setIndex] = useState('');

  let params = useParams()
  const id = params.id
console.log(id , "user")

  const[state,setState]=useState({});

  useEffect(()=>{
    Axios.get(`http://localhost:7000/api/student/viewone/${id}`)
    .then((res)=>{
      console.log(res.data,'res.data')
      setState(res.data)

    })
    .catch((err)=>{
      console.log(err,"err")
    })
  },[])
  



  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };





  // const handleFileChange = (event) => {
  //   setSelectedImage(event.target.files[0]);
  // };
  console.log(state,"ssssssssssss");

  const handleSubmit = async (e) => {
   Axios.put(`http://localhost:7000/api/student/update/${id}`,state)
   .then((res)=>{
    console.log("update product : " +JSON.stringify(res.data))
    
   })
   .catch((err)=>{
    console.log(err.massage)
   })
   navigate('/view')

  };





  

  const handleClose = () => {
    // setOpen3(false);
  };



  return (
      <Card sx={style}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            {/* <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar> */}
            <Typography component="h1" variant="h5">
              Update Form
            </Typography>
            <Box
              component="form"
              onSubmit={handleSubmit}
              noValidate
              sx={{ mt: 1 }}
              encType="multipart/form-data"
            >
              <TextField
              onChange={handleChange}
              margin="normal"
              required
              fullWidth
              id="name"
              label="Name"
              name="name"
              autoComplete="text"
              autoFocus
              value={state.name}
            />
              <TextField
              onChange={handleChange}
              margin="normal"
              required
              fullWidth
              id="email"
              label="email"
              name="email"
              autoComplete="email"
              type="email"
              value={state.email}
            />
            
              <TextField
              onChange={handleChange}
              margin="normal"
              required
              fullWidth
              type="number"
              id="phone"
              label="phone"
              name="phone"
              autoComplete="phone"
              
              value={state.phone}
            />
            <TextField
              onChange={handleChange}
              margin="normal"
              required
              fullWidth
              id="address"
              label="address"
              name="address"
              autoComplete="text"
              type="text"
              value={state.address}
            />
              
              {/* <small>Profile picture</small>
      <TextField
        onChange={handleFileChange}
        margin="normal"
        required
        fullWidth
        name="image"
        type="file"
        autoComplete="off"
      /> */}
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                onClick={handleSubmit}
              >
                Update
              </Button>
              <Grid container>
                <Grid item xs>
                  <Button
                    onClick={() => handleClose()}
                    variant="outlined"
                    color="error"
                    fullWidth
                  >
                    Cancel
                  </Button>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Container>
      </Card>
  );
}
