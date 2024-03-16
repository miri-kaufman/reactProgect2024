
import * as React from 'react';
import Sheet from '@mui/joy/Sheet';
import CssBaseline from '@mui/joy/CssBaseline';
import Typography from '@mui/joy/Typography';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';
import Button from '@mui/joy/Button';
import Link from '@mui/joy/Link';
import { signUp } from './userApi';
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { userIn } from './userSlice';
import { useNavigate } from 'react-router-dom';

export default function SignUp() {  
    let navigate=useNavigate()
  let { register, handleSubmit, reset ,formState:{errors} } = useForm({mode:"onBlur"});
          let dispatch = useDispatch();
          const save = (data) => {
            console.log(data)
            signUp(data)
              .then((res) => {
                alert("נרשמת בהצלחה");
             dispatch(userIn(res.data));
            //  localStorage.setItem("currentUser",JSON.stringify(res.data))
             reset()
             navigate("/products")
              })
              .catch((err) => {
                console.log("bgvf")
                alert("שגיאה", err.response);
                console.log(err.response);
              });
          };  
          console.log(errors)
   
    return (
      <main>
        <CssBaseline />
        <Sheet
          sx={{
            width: 300,
            mx: 'auto', 
            my: 4,
            py: 3,
            px: 2, 
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
            border:"none",
            bgcolor:'rgb(255, 245, 238)'
            // borderRadius: 'sm',
            // boxShadow: 'md',
          }}
          variant="outlined"
        >
          <div>
            <Typography level="h4" component="h1">
              <b>Welcome!</b>
            </Typography>
            <Typography level="body-sm">SignUp to continue</Typography>
          </div>
          <form noValidate="true" onSubmit={handleSubmit(save)}>
          <FormControl>
            <FormLabel>name</FormLabel>
            <Input {...register("name",{required:{value:true,message:"שדה חובה"},pattern:{value:/^([^0-9]*)$/,message:"ללא מספרים"}}) }type="text" 
              name="name"
              placeholder=""
            />
                        {errors.name&&errors.name.message}

          </FormControl>
          <FormLabel>Email</FormLabel>
            <Input {...register("email",{required:{value:true,message:"שדה חובה"}}) }type="email" 
              name="email"
              placeholder="johndoe@email.com"
              
            />
          {errors.email&&<Typography className='err-message'> {errors.email.message}</Typography>}
          <FormControl>
            <FormLabel>Password</FormLabel>
            <Input  {...register("password",{required:{value:true,message:"שדה חובה"},
            // minLength: { value: 4, message: "Password must be more than 4 characters" },
            //  maxLength: { value: 12, message: "Password cannot exceed more than 12 characters" },
             pattern:{value:/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{4,12}$/,message:" at least one letter, one number and one special character"
}}) }type="password"
              name="password"
              placeholder="password"
            />
            {errors.password&&errors.password.message}
              <FormLabel>phone</FormLabel>
            <Input  {...register("phone") }type="text"
              name="phone"
              placeholder="+972-123456"
            />
          </FormControl>
          <button type="submit" style={{marginBottom:3,marginTop:6, padding:5}}>sign up</button>
  
       
          <Typography
            endDecorator={<Link href="/login">login</Link>}
            fontSize="sm"
            sx={{ alignSelf: 'center' }}
          >
            Alreay have an account?
          </Typography>
          </form>
        </Sheet>
      </main>
    );
  }
