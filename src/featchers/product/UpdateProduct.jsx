import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from "react-router-dom";
import React ,{ useEffect, useState } from "react";
import Sheet from '@mui/joy/Sheet';
import FormControl from '@mui/joy/FormControl';
import {TextField} from "@mui/material"
import { getProductById, updateProduct } from "./productApi";

const UpdateProduct=()=>{ 
  let navigate=useNavigate();   
      let {id}=useParams() 
      let [currentProduct,setcurrentProduct]=useState({})
       useEffect(()=>{
         getProductById(id).then((res) => {
          setcurrentProduct(res.data)
         console.log("המוצר הובא מהשרת")
      })
      .catch((err) => {
        alert("שגיאה", err.response);
        console.log(err.response);
      })},[]);
      useEffect(() => {
        reset(currentProduct)},
         [currentProduct]); 
      console.log(currentProduct);
    const { register, handleSubmit, formState: { errors }, reset } = useForm({});   
    
    const update = (data) => {
        updateProduct(id,data).then((res) => { 
            alert("המוצר התעדכן");
            reset()
            navigate("/products")}).catch((err) => {
            alert("שגיאה", err.response);
            console.log(err.response);
          });
      };  
     
 
      return (
        <main >
        <Sheet
          sx={{
            width: 300,
            mx: 'auto', // margin left & right
            my: 4, // margin top & bottom
            py: 3, // padding top & bottom
            px: 2, // padding left & right
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
            border:'none',
            bgcolor:'rgb(255, 245, 238)'
          }}
          variant="outlined"
        >
         <form onSubmit={handleSubmit(update)}>
           <h2>Update product</h2>
          {errors.name?<TextField error id="outlined-error" label={errors.name?.message}/>:
             <FormControl sx={{py:3}}>
             <TextField id="outlined-basic" label="name" defaultValue=" "   variant="outlined" {...register("name")}/></FormControl>}
          
    {errors.sum?<TextField
          error
          id="outlined-error"
          label={errors.sum?.message}
        />:<FormControl >
             <TextField id="outlined-basic" label="price " defaultValue=" " 
              variant="outlined" {...register("price")}
 /></FormControl>}
       
          
          {errors.content?<TextField
          error
          id="outlined-error"
          label={errors.inscription?.message}  
        />:<FormControl sx={{py:3}} >
             <TextField id="outlined-basic" label="content" defaultValue=" "
              variant="outlined" {...register("content")}
 /></FormControl>}
        
          
    
          <button type="submit">Update</button>
         </form></Sheet>
         </main>
       )
      }
export default UpdateProduct