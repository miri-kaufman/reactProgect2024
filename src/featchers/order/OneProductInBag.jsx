import { Divider } from "@mui/material";
import Grid from '@mui/joy/Grid';

import {
    MDBCardImage,
    } from "mdb-react-ui-kit";
const OneProductInCart = ({one}) => {
    return ( <><Grid container spacing={2} sx={{ flexGrow: 1 }}>
  <Grid xs={8}>
<div>

         <h4>{one.name}</h4>
        <h5>{one.price}</h5>
        <p style={{"direction":"rtl"}}> כמות:{one.qty}<br/>
       סה"כ  מחיר:  {one.price*one.qty}</p>
        </div>  </Grid>  <Grid xs={4}>
        <div >
        <MDBCardImage
                              src={one.imgUrl}
                              fluid className="rounded-3" style={{ width: "65px" }}
                              alt="Shopping item" />
        </div>
            </Grid></Grid>
        <Divider></Divider>

    </> );
}
 
export default OneProductInCart ;