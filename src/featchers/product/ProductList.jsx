import { useEffect, useState } from "react";
import { getAllProductFromServer } from "./productApi";
import OneProduct from "./OneProduct";
import Grid from '@mui/joy/Grid';
import { Link, Outlet } from "react-router-dom";
import { useMemo } from "react";
import { MDBInputGroup, MDBInput, MDBIcon, MDBBtn } from 'mdb-react-ui-kit';

const ProducList = () => {
  let [productArr, setProductArr] = useState([])
  let [search, setSearch] = useState("")
  const deleteFromArr = (id) => {
    setProductArr(productArr.filter(item => item.id != id))
  }
 
  let filtered = productArr.filter(item => item.name.includes(search))
  console.log(filtered);
  useEffect(() => {
    getAllProductFromServer().then(res => {
      console.log(res.data)
      setProductArr(res.data)
    }).catch(err => {
      console.log(err)

    })
  }, [])


  return (
    <div style={{ top: 50, position: 'relative' }}>
      <MDBInputGroup color="neutral" style={{ width: "30vw", color: "#e57373", marginBottom: "8px" }} >
        <MDBInput label='Search' color="neutral" onChange={((e) => setSearch(e.target.value))} />
        <MDBBtn rippleColor='dark' color="neutral">
          <MDBIcon icon='search'color="neutral" />
        </MDBBtn>
      </MDBInputGroup>
      <Grid
        container

        spacing={{ xs: 10 }}
        columns={{ xs: 4, sm: 8, md: 16 }}
        sx={{ flexGrow: 1 }}
      >

        {filtered.map((item, index) => (
          <Grid xs={4} sm={4} md={4} key={index} >

            <OneProduct onDelete={deleteFromArr}  one={item}>xs=2</OneProduct>
          </Grid>
        ))}
      </Grid>


      <Outlet /></div>
  )
}

export default ProducList;
// let filtered = productArr.filter(item =>item.name.includes(search))
// console.log(filtered)
// return (<>

// <Grid
//     container

//     spacing={{ xs: 10}}
//     columns={{ xs: 4, sm: 8, md: 16 }}
//     sx={{ flexGrow: 1 }}
//   >
//     {filtered.map((item, index) => (
//       <Grid xs={4} sm={4} md={4} key={index}>
//   <OneProduct onDelete={deleteFromArr} one={item}>xs=2</OneProduct>
//       </Grid>
//     ))}
//   </Grid>
//    <label>search</label>
// <input type="text"  onChange={((e)=>setSearch(e.target.value))}/>
//   <Outlet/></>