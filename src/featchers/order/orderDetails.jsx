import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBRow,
  MDBTypography,
  } from "mdb-react-ui-kit";
  import React from "react";
  import { useDispatch, useSelector } from "react-redux";
  import { calcNumOfProductsInOrder,calcSumOfOrder } from "../../functions";
import { Link, useNavigate } from "react-router-dom";
import { deleteFromBagByAdmin } from "../product/productApi";
import { useRef } from "react";
import { addOrder } from "./orderApi";
import { emptyBag } from "./orderSlice";


  export default function orderDetails() {
  const basket = useSelector((state)=>state.order.cartArr)
  let Dispatch=useDispatch()
  // let thisOrder=useSelector((state)=>state.order.cartArr);
  let userId=useSelector((state)=>state.user.currentUser)
  let navigate=useNavigate()
  let inputAddress=useRef("")
  const save = () => {
    let address=inputAddress.current.value
  let data={ cartArr:basket, Address: address,UserId:userId.id };
    console.log(data)
    addOrder(data)
      .then((res) => {
        alert("ההזמנה נקלטה במערכת");
        console.log(res.data)
Dispatch(emptyBag())
         navigate("/shoppingBag")
     
      })
      .catch((err) => {
        console.log(data)
        alert("שגיאה", err.response);
        console.log(err.response);
      });
  };  
  const deleteFromBag=()=>{
      deleteFromBagByAdmin(one.id).then(res=>{
        console.log(res)
        // onDelete(one.id)
    }).catch(err=>{
        console.log(err.messege)

    })
    }
  return (
  <section className="h-100 h-custom" >
    <MDBContainer className="py-5 h-100"  >
      <MDBRow className="justify-content-center align-items-center h-100">
        <MDBCol>
          <MDBCard>
            <MDBCardBody className="p-4">
              <MDBRow>
                <MDBCol lg="7">
                  <MDBTypography tag="h5">
                    <Link to="/products" className="text-body">
                      <MDBIcon fas icon="long-arrow-alt-left me-2" /> Continue
                      shopping
                    </Link>
                  </MDBTypography>
  
                  <hr />
  
                  <div className="d-flex justify-content-between align-items-center mb-4">
                    <div>
                      <p className="mb-1">Shopping cart</p>
                      <p className="mb-0">You have {calcNumOfProductsInOrder(basket)} items in your cart</p>
                    </div>
                  
                  </div>
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
                              {item.price*item.qty}₪
                            </MDBTypography>
                          </div>
                          <span onClick={deleteFromBag}> 
                            <MDBIcon  fas icon="trash-alt"  />
                      </span>
                        </div>
                      </div>
                    </MDBCardBody>
                  </MDBCard>))}
                </MDBCol>
  
                <MDBCol lg="5" >
                  <MDBCard className="bg-primary text-white rounded-3">
                    <MDBCardBody>
                      <div className="d-flex justify-content-between align-items-center mb-4">
                        <MDBTypography tag="h5" className="mb-0">
                          Card details
                        </MDBTypography>
                      </div>
   
                      <form className="mt-4">
                        <MDBInput className="mb-4" label="Cardholder's Name" type="text" size="lg"
                          placeholder="Cardholder's Name" contrast />
  
                        <MDBInput className="mb-4" label="Card Number" type="text" size="lg"
                          minLength="19" maxLength="19" placeholder="1234 5678 9012 3457" contrast />
  
                        <MDBRow className="mb-4">
                          <MDBCol md="6">
                            <MDBInput className="mb-4" label="Expiration" type="text" size="lg"
                              minLength="7" maxLength="7" placeholder="MM/YYYY" contrast />
                          </MDBCol>
                          <MDBCol md="6">
                            <MDBInput className="mb-4" label="Cvv" type="text" size="lg" minLength="3"
                              maxLength="3" placeholder="&#9679;&#9679;&#9679;" contrast />
                             </MDBCol>
                             <div className="d-flex justify-content-between align-items-center mb-4">
                        <MDBTypography tag="h5" className="mb-0">
                          Address Details
                        </MDBTypography>
                      </div>
                             <MDBCol md="6">
                            <MDBInput className="mb-4" label="City" type="text" size="lg"
                               placeholder="City" contrast />
                          </MDBCol>
                          <MDBCol md="6">
                            <MDBInput ref={inputAddress} className="mb-4" label="Adderss" type="Adderss" size="lg"
                               placeholder="Address;" contrast />
                             </MDBCol>
                          
                        </MDBRow>
                      </form>
  
                      <hr />
                      
  
                      <div className="d-flex justify-content-between">
                        <p className="mb-2">Subtotal</p>
                        <p className="mb-2">{calcSumOfOrder(basket)}₪</p>
                      </div>
  
                      <div className="d-flex justify-content-between">
                        <p className="mb-2">Shipping</p>
                        <p className="mb-2">20₪</p>
                      </div>
  
                      <div className="d-flex justify-content-between">
                        <p className="mb-2">Total</p>
                        <p className="mb-2">{calcSumOfOrder(basket)+20}₪</p>
                      </div>
  
                      <span onClick={()=>{save()}} >
                      <MDBBtn color="info" block size="lg">
                        <div className="d-flex justify-content-between">
                          <span  >{calcSumOfOrder(basket)}₪</span>
                            Checkout{" "}
                            <i className="fas fa-long-arrow-alt-right ms-2"></i>
                        </div>
                        
                      </MDBBtn>
                      </span>
                    </MDBCardBody>
                  </MDBCard>
                </MDBCol>
              </MDBRow>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  </section>
  );
  }