
import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import Button from '@mui/material/Button';
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import dp from "../files/dp.png";
import { useState, useEffect } from "react";
import { useParams } from "react-router";
import Axios  from 'axios';
import Nav from "./Nav";
const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  minWidth: 350,
  marginTop:20,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 10,
  p: 3,
};
export default function Sview() {
    const [expanded, setExpanded] = React.useState(false);
  
    const[single,setSingle]=useState([])
   
   const params = useParams();
   console.log(params,"params")
   
   const user=params.id;
   console.log(user,"user");
   const[state,setState]=useState({})
   
   useEffect(()=>{
     Axios.get(`http://localhost:7000/api/student/viewOne/${user}`)
     .then((res)=>{
       console.log(res.data,'res.data');
   
       const val = res.data
       setState(res.data)
     })
     .catch((err)=>{
       console.log(err,"err")
     })
   },[])
   
   
   console.log(state, "stateeeeeeeeee");
   
     const handleExpandClick = () => {
       setExpanded(!expanded);
     };
  return (
    <>
    <Nav/>
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="/static/images/cards/contemplative-reptile.jpg"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {state.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    </>
  )
}
