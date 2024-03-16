import * as React from 'react';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';


const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}));

export default function CustomizedBadges() {
  let basket=useSelector((state)=>state.order.cartArr);
  let navigate=useNavigate()
  console.log(basket);
  return (
    <IconButton aria-label="cart" onClick={(()=>{
navigate("/shoppingBag")
    })} >
      <StyledBadge badgeContent={basket.length} color='rgb(255, 230, 225)'
>
        <ShoppingCartIcon />
      </StyledBadge>
    </IconButton>

  );
}