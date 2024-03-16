import * as React from 'react';
import { useColorScheme } from '@mui/joy/styles';
import Sheet from '@mui/joy/Sheet';
import CssBaseline from '@mui/joy/CssBaseline';
import Typography from '@mui/joy/Typography';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';
import Button from '@mui/joy/Button';
import Link from '@mui/joy/Link';
import { login } from './userApi';
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { userIn } from './userSlice';
import { useNavigate } from 'react-router-dom';

export default function LoginFinal() {  
  let { register, handleSubmit, reset } = useForm();
          let dispatch = useDispatch();
          let navigate=useNavigate()
          const save = (data) => {
               login(data)
              .then((res) => {
                alert("נכנסת בהצלחה");
             dispatch(userIn(res.data));
            //  localStorage.setItem("currentUser",JSON.stringify(res.data))
             console.log(localStorage.getItem("currentUser"))

             reset()
navigate("/products")
              })
              .catch((err) => {
                alert("שגיאה", err.response);
                console.log(err.response);
              });
          };  
   
    return (
      <main >
        <CssBaseline />
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
            // borderRadius: 'sm',
            // boxShadow: 'md',
            bgcolor:'rgb(255, 245, 238)'
          }}
          variant="outlined"
        >
          <div>
            <Typography level="h4" component="h1">
              <b>Welcome!</b>
            </Typography>
            <Typography level="body-sm">Sign in to continue.</Typography>
          </div>
          <form onSubmit={handleSubmit(save)
          
          }>
          <FormControl >
            <FormLabel>Email</FormLabel>
            <Input {...register("email") }type="email" 
              // html input attribute
              name="email"
              placeholder="johndoe@email.com"
              
            />
          </FormControl>
          <FormControl >
            <FormLabel>Password</FormLabel>
            <Input  {...register("password") }type="password"
              // html input attribute
              name="password"
              placeholder="password"
            />
          </FormControl>
          <button type="submit" style={{marginBottom:3,marginTop:6, padding:5}}>login</button>
  
       
          <Typography
            endDecorator={<Link href="/signUp" color='gray'>Sign up</Link>}
            fontSize="sm"
            sx={{ alignSelf: 'center' }}
          >
            Don&apos;t have an account?
          </Typography>
          </form>
        </Sheet>
      </main>
    );
  }
