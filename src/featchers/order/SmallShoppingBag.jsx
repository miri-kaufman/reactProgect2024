// import * as React from 'react';
// import List from '@mui/joy/List';

// import Typography from '@mui/joy/Typography';
// import Sheet, { sheetClasses } from '@mui/joy/Sheet';
// import { useDispatch, useSelector } from 'react-redux';
// import OneProductInCart from './OneProductInBag.jsx';
// import { ListItem } from '@mui/material';
// import ListItemDecorator from '@mui/joy/ListItemDecorator';
// // import OneProduct from '../product/OneProduct';
// import { calcNumOfProductsInOrder, calcSumOfOrder } from '../../functions';
// import { useEffect,useState } from 'react';
// export default function SmallShoppingCart() {

// let basket=useSelector((state)=>state.order.cartArr);
// console.log(basket)

//   return (
//     <Sheet variant="soft" sx={{ width: "15vw", p: 3, borderRadius: 'sm',height:"93vh",}} style=
//     {{"position":"absolute","right":"0px","top":0}}>
//       <Typography
//         level="h3"
//         fontSize="xl2"
//         fontWeight="xl"
//         id="ios-example-demo"
//         mb={1}
//       >
//         סל הקניות
//       </Typography>
//       <ul>{basket.map(item => <li key={item.id}><OneProductInCart one={item} /></li>)}</ul>
//       <div>סה"כ מוצרים בסל {calcNumOfProductsInOrder(basket)} <br/>
//       סה"כ לתשלום{calcSumOfOrder(basket)}
//       </div>

//     </Sheet>
//   );
// }
import {
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBIcon,
  MDBTypography,
} from "mdb-react-ui-kit";
import React from "react";
import { useSelector } from "react-redux";
import { calcNumOfProductsInOrder, calcSumOfOrder } from "../../functions";
import { Link } from "react-router-dom";
import { Directions } from "@mui/icons-material";


export default function SmallShoppingCart() {
  const basket = useSelector((state) => state.order.cartArr)
  return (
    <section className="h-100 h-custom" style={{ backgroundColor: "#eee", width: "25vw", "right": "0px", position: "fixed",top:"10px" }}>
      <MDBCard>
        <MDBCardBody className="p-4" style={{ width: "25vw", height: "50vw", overflow: "scroll", "right": "0px" }}>

          <MDBTypography tag="h5">
            <Link to="/products" className="text-body">
              <MDBIcon fas icon="long-arrow-alt-left me-2" /> bag
              shopping
            </Link>
          </MDBTypography>

          <hr />

          {basket.map((item) => (

            <MDBCard className="mb-3">
              <MDBCardBody>
                <div className="d-flex justify-content-between">
                  <div className="d-flex flex-row align-items-center">
                    <div>
                      <MDBCardImage
                        src={item.imgUrl}
                        fluid className="rounded-3" style={{ width: "65px" }}
                        alt="Shopping item" />
                    </div>
                    <div className="ms-3">
                      <MDBTypography tag="h5">
                        {item.name}
                      </MDBTypography>
                      <p className="small mb-0">{item.company}</p>
                    </div>
                  </div>
                  <div className="d-flex flex-row align-items-center">
                    <div style={{ width: "50px" }}>
                      <MDBTypography tag="h5" className="fw-normal mb-0">
                        {item.qty}
                      </MDBTypography>
                    </div>
                    <div style={{ width: "80px" }}>
                      <MDBTypography tag="h5" className="mb-0">
                        {item.price}₪
                      </MDBTypography>
                    </div>

                  </div>
                </div>

              </MDBCardBody>
            </MDBCard>))}
          <div className="d-flex justify-content-between px-x" style={{direction:"rtl"}}> 
            <p className="fw-bold">סה"כ מוצרים בסל:</p>
            <p className="fw-bold">{calcNumOfProductsInOrder(basket)} </p>
          </div>
          <div
            className="d-flex justify-content-between p-2 mb-2"
            style={{ backgroundColor: "#e1f5fe", direction:"rtl"}}
          > 
            <MDBTypography tag="h5" className="fw-bold mb-0" >סה"כ לתשלום:
            </MDBTypography>
            <MDBTypography tag="h5" className="fw-bold mb-0" >
           {calcSumOfOrder(basket)}
            </MDBTypography>
          </div>

        </MDBCardBody>
      </MDBCard>

    </section>)
}

