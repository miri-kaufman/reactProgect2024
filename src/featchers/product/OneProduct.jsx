import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Box from '@mui/joy/Box';
import Card from '@mui/joy/Card';
import CardCover from '@mui/joy/CardCover';
import IconButton from '@mui/joy/IconButton';
import Typography from '@mui/joy/Typography';
import Favorite from '@mui/icons-material/Favorite';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import CreateNewFolder from '@mui/icons-material/CreateNewFolder';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import {Link, useNavigate}  from 'react-router-dom';
import {  useDispatch,useSelector } from 'react-redux';
import { addtoBag } from '../order/orderSlice';
import { deleteFromBagByAdmin } from './productApi';
import { pink } from '@mui/material/colors';

export default function OneProduct({ onDelete, one }) {
  let navigate=useNavigate();
    let Dispatch=useDispatch()
    let CurrentUser=useSelector((state) => state.user.currentUser)
    let Currentbasket=useSelector((state) => state.order.cartArr)
  let className2 =  Currentbasket.filter(item=>item.id==one.id)
    const deleteFromBag=()=>{
      if(window.confirm('Are sure want to delete?')) {
        deleteFromBagByAdmin(one.id).then(res=>{
          console.log(res)
          onDelete(one.id)
      }).catch(err=>{
          console.log(err)
      })
      } else {
        alert('no deleted');
      }
}

  
  return (
   
    <Card className={className2.length!=0?'inCart':''}
      variant="plain"
      sx={{
        width: 300,
        bgcolor: 'initial',
        p: 0,
      }}
    >         

      <Box sx={{ position: 'relative' }}> 
     <Link to={""+one.id}>
   <AspectRatio ratio="4/3">   
          <figure>
            <img
              src={one.imgUrl}
            />
          </figure>
          
        </AspectRatio>   </Link>  
   <CardCover
          className="gradient-cover"
          sx={{
            '&:hover, &:focus-within': {
              opacity: 1,
            },
            opacity: 0,
            transition: '0.1s ease-in',
            background:
              'linear-gradient(180deg, transparent 62%, rgba(0,0,0,0.00345888) 63.94%, rgba(0,0,0,0.014204) 65.89%, rgba(0,0,0,0.0326639) 67.83%, rgba(0,0,0,0.0589645) 69.78%, rgba(0,0,0,0.0927099) 71.72%, rgba(0,0,0,0.132754) 73.67%, rgba(0,0,0,0.177076) 75.61%, rgba(0,0,0,0.222924) 77.56%, rgba(0,0,0,0.267246) 79.5%, rgba(0,0,0,0.30729) 81.44%, rgba(0,0,0,0.341035) 83.39%, rgba(0,0,0,0.367336) 85.33%, rgba(0,0,0,0.385796) 87.28%, rgba(0,0,0,0.396541) 89.22%, rgba(0,0,0,0.4) 91.17%)',
          }}
        >     
       <div>
            <Box
              sx={{
                p: 2,
                display: 'flex',
                alignItems: 'center',
                gap: 1.5,
                flexGrow: 1,
                alignSelf: 'flex-end',
              }}
            >
              <Typography level="h2" noWrap sx={{ fontSize: 'lg' }}>
             
        <div
                  sx={{
                    color: '#fff',
                    textOverflow: 'ellipsis',
                    overflow: 'hidden',
                    display: 'block',
                  }} >
                
                 {one.name}
                 <br/>
                  {"   "+one.price+" ₪"}

            </div>
              </Typography>
                <div> {CurrentUser && CurrentUser.role == "ADMIN" ? (
               <>
              
              <IconButton onClick={deleteFromBag}
                size="sm"
                variant="solid"
                color="neutral"
                sx={{ ml: 'auto', bgcolor: 'rgba(0 0 0 / 0.2)' }}
             
              >
                <DeleteOutlinedIcon/>
              </IconButton>
              
              <Link to={"/updateProduct/"+one.id} 
  > 
              <IconButton 
                size="sm"
                variant="solid"
                color="neutral"
                sx={{ bgcolor: 'rgba(0 0 0 / 0.2)' }} >
                
          <EditOutlinedIcon/>
              </IconButton> </Link >
              </>
      ):(<>
      
              <IconButton onClick={(()=>{
                // localStorage.setItem("currentBasket",JSON.stringify(Currentbasket))
Dispatch(addtoBag(one))
 navigate("smallShoppingCart")
              let x=setTimeout(()=>{
                navigate("/products")
              },2500);
              })}
                size="sm"
                variant="solid"
                color="neutral"
                sx={{ ml: 'auto', bgcolor: 'rgba(0 0 0 / 0.2)' }}
              >
                
                <ShoppingCartOutlinedIcon />
              </IconButton>
              <Link to={""+one.id}>

              <IconButton
                size="sm"
                variant="solid"
                color="neutral"
                sx={{ bgcolor: 'rgba(0 0 0 / 0.2)' }}
              >
                <Favorite />
              </IconButton>        
</Link>
</>)}</div>
           </Box>
          </div>
        </CardCover>
  </Box>
    </Card>
  );
}