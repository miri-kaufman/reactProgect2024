import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Badge from '@mui/joy/Badge';
import Box from '@mui/joy/Box';
import IconButton from '@mui/joy/IconButton';
import Typography from '@mui/joy/Typography';
import Add from '@mui/icons-material/Add';
import Remove from '@mui/icons-material/Remove';
import { MDBCardImage, } from "mdb-react-ui-kit";
import { addtoBag, deleteOneFromBag } from './orderSlice';

const BigShoppingCart = () => {
  const basket = useSelector((state) => state.order.cartArr)
  let Dipatch = useDispatch()
  return (<>
    <TableContainer component={Paper}style={{position:"relative", top:"50px"}} >
      <Table sx={{ minWidth: 650 }} aria-label="simple table" style={{direction:"rtl"}}>
        <TableHead>
          <TableRow  style={{}}>
            <TableCell> מוצר</TableCell>
            <TableCell> </TableCell>
            <TableCell >מחיר</TableCell>
            <TableCell>כמות</TableCell>
            <TableCell >סכום ביניים</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {basket.map((item) => (
            <TableRow key={item.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell component="th" scope="row">{item.name}</TableCell>
              <TableCell >{item.price} ₪</TableCell>
              <TableCell >{item.qty}</TableCell>
              <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2, mt: 4,}}>
                <Badge badgeContent={item.qty} color='neutral'>
                  <Typography level="h1" component="h2" >
                    <div>
                      <MDBCardImage
                        src={item.imgUrl}
                        fluid className="rounded-3" style={{ width: "65px" }}
                        alt="Shopping item" />
                    </div>
                  </Typography>
                </Badge>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 2,
                    pt: 4,
                    mb: 2,
                    borderTop: '1px solid',
                    borderColor: 'background.level1',
                  }}
                >
                  <IconButton
                    size="sm"
                    variant="outlined"
                    onClick={(() => {
                      Dipatch(deleteOneFromBag(item))
                    })}        >
                    <Remove />
                  </IconButton>
                  <Typography fontWeight="md" textColor="text.secondary">
                    <div >{item.qty}</div>
                  </Typography>
                  <IconButton
                    size="sm"
                    variant="outlined"
                    onClick={(() => {
                      Dipatch(addtoBag(item))
                    })}
                  >
                    <Add />
                  </IconButton>
                </Box>

              </Box>
              <TableCell align="right">{item.qty * item.price} ₪</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table> 
    <Link to="/products" style={{color:"rgb(214,99,99,255)"}}  >  המשך בקניות    </Link>
   
   <Link to="/finishOrder" style={{color:"rgb(214,99,99,255)"}}>     סיים הזמנה   </Link>
    </TableContainer>
   
  </>
  );
}


export default BigShoppingCart