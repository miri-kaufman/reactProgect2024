import { useForm } from 'react-hook-form';
import React, { useEffect, useMemo, useState } from "react";
import Sheet from '@mui/joy/Sheet';
import { TextField } from "@mui/material"
import { addProductByAdmin } from "./productApi";
import FormControl from '@mui/joy/FormControl';
import { useNavigate } from 'react-router-dom';

const AddProduct = () => {
  let navigate = useNavigate()
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const save = (data) => {
    addProductByAdmin(data).then((res) => {
      alert("המוצר נוסף בהצלחה");
      reset()
      navigate("/products")
    })
      .catch((err) => {
        alert("שגיאה", err.response);
        console.log(err.response);
      })
  }


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
          border: 'none',
          // borderRadius: 'sm',
          // boxShadow: 'md',
          bgcolor: 'rgb(255, 245, 238)'
        }}
        variant="outlined"
      >
        <form onSubmit={handleSubmit(save)}>
          <h2>add product</h2>

          {errors.name ? <TextField
            error
            id="outlined-error"
            label={errors.name?.message}
          /> : <FormControl sx={{ py: 3 }}>
            <TextField id="outlined-basic" label="name" placeholder=""
              variant="outlined" {...register("name")}
            /></FormControl>}

          {errors.company ? <TextField
            error
            id="outlined-error"
            label={errors.company?.message}
          /> : <FormControl >
            <TextField id="outlined-basic" label="company"
              variant="outlined" {...register("company")}
            /></FormControl>}


          {errors.kategory ? <TextField
            error
            id="outlined-error"
            label={errors.inscription?.message}
          /> : <FormControl sx={{ py: 3 }} >
            <TextField id="outlined-basic" label="kategory"
              variant="outlined" {...register("kategory")}
            /></FormControl>}

          {errors.content ? <TextField
            error
            id="outlined-error"
            label={errors.content?.message}
          /> : <FormControl >
            <TextField id="outlined-basic" label="content"
              variant="outlined" {...register("content")}
            /></FormControl>}


          {errors.price ? <TextField
            error
            id="outlined-error"
            label={errors.price?.message}
          /> : <FormControl sx={{ py: 3 }}>
            <TextField id="outlined-basic" label="price" placeholder=""
              variant="outlined" {...register("price")}
            /></FormControl>}

          {errors.description ? <TextField
            error
            id="outlined-error"
            label={errors.description?.message}
          /> : <FormControl >
            <TextField id="outlined-basic" label="description"
              variant="outlined" {...register("description")}
            /></FormControl>}
          <button type="submit">add product</button>
        </form></Sheet>
    </main>
  )
}
export default AddProduct