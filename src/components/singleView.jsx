import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
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

export default function RecipeReviewCard() {
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
    <Card sx={style} >
      
       
          <>
            <CardHeader
                avatar={
                <Avatar
                    sx={{ bgcolor: red[500], textTransform: "capitalize" }}
                    aria-label="recipe"
                >
                {/* {state.name.charAt(0)} */}
                </Avatar>
            }
            title={
                <p style={{ fontWeight: "bolder", fontSize: "20px" }}>
                    {state.name}<br></br>
                    {state.email}
                </p>
            }
             
                subheader={<p style={{ fontWeight: "bolder" }}></p>}
            />
            <CardMedia component="img" style={{height:'320px'}} image={dp} alt="Paella dish" />
            <CardActions disableSpacing>
                <ExpandMore
                    expand={expanded}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                >
                    <ExpandMoreIcon />
                </ExpandMore>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                {/* {i?.address} */}
                    <Typography paragraph>Phone : +91 {state.phone} </Typography>
                    <Typography paragraph>Address : {state.address} </Typography>
                </CardContent>+ 
            </Collapse>
        </>
       
    </Card>
    </>
    );
}
