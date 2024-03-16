import React from 'react';
import {
  MDBContainer,
  MDBCol,
  MDBRow,
} from 'mdb-react-ui-kit';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div >
        <Link to="/products"><img src='https://www.beautyp.co.il/images/beautyp-logo2.png' style={{position:"relative",top:"25vw",zIndex:2,border: "15px solid rgb(214,99,99,255)"
    ,padding: "10px"}}/></Link>
    <MDBRow>
      <MDBCol lg={4} md={12} className='mb-4 mb-lg-0'>
      <div class="bg-image hover-zoom">
        <img class="bg-image hover-zoom"
          src='https://www.onlys.co.il/on/demandware.static/-/Sites-onlys-storefront-catalog/default/dw2fdc5ed7/%D7%91%D7%90%D7%A0%D7%A8%D7%99%D7%9D-%D7%A7%D7%98%D7%92%D7%95%D7%A8%D7%99%D7%95%D7%AA-PLP/%D7%91%D7%99%D7%A9%D7%95%D7%9D/bismei_nashim_mob.png'
          className='w-100 shadow-1-strong rounded mb-4'
          alt='Boat on Calm Water'
        /></div>
   <div class="bg-image hover-zoom">
        <img
          src='https://topx.co.il/wp-content/uploads/2023/08/DSC07646-PhotoRoom-300x300.png'
          className='w-100 shadow-1-strong rounded mb-4'
          alt='Wintry Mountain Landscape'
        /></div>
      </MDBCol>

      <MDBCol lg={4} className='mb-4 mb-lg-0'>
      <div class="bg-image hover-zoom">
        <img
          src='https://www.derech-hayofi.co.il/wp-content/uploads/2020/05/%D7%91%D7%A9%D7%9E%D7%99%D7%9D-%D7%90%D7%99%D7%A9%D7%941.jpg'
          className='w-100 shadow-1-strong rounded mb-4'
          alt='Mountains in the Clouds'
        /></div>
<div class="bg-image hover-zoom">
        <img
          src='https://cdn.shopify.com/s/files/1/0575/6072/7716/files/Perfumes_6601ee4a-2bb2-4813-83af-3203233a7c7c_600x600.jpg?v=1638375849
          '
          className='w-100 shadow-1-strong rounded mb-4'
          alt='Boat on Calm Water'
        /></div>
      </MDBCol>

      <MDBCol lg={4} className='mb-4 mb-lg-0'>
      <div class="bg-image hover-zoom">
        <img 
          src='https://time-piece.co.il/wp-content/uploads/2022/06/Artboard-%E2%80%93-31.png          '
          className='w-100 shadow-1-strong rounded mb-4'
          alt='Waves at Sea'
        /></div>

<div class="bg-image hover-zoom">
        <img
          src='https://the-funny-bunny.com/oapsikre/2020/04/untitled-15.jpg'
          className='w-100 shadow-1-strong rounded mb-4'
          alt='Yosemite National Park'
        /></div>
      </MDBCol>
    </MDBRow></div>
  );
}