import { Link, useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Fab from '@mui/material/Fab';
import AddShoppingCartSharpIcon from '@mui/icons-material/AddShoppingCartSharp';
import { addtoBag } from '../order/orderSlice';
import { useDispatch } from 'react-redux';
import { getProductById } from './productApi';
import { useState, useEffect } from 'react';

import "./pdetail.css"
const ProductDetail = () => {
  let Dispatch = useDispatch();
  let navigate = useNavigate();
  let { id } = useParams();
  let [oneProd, setOneProd] = useState({})
  useEffect(() => {
    getProductById(id).then(res => {
      console.log(res)
      setOneProd(res.data)
    }).catch(err => {
      console.log(err)

    })
  }, [])
  return (<> <div style={{
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    minWidth: '100vw',
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)'

  }}
  >
    <div style={{
      marginTop: '5%',
      maxWidth: '50%',
      width: "50vw",
      maxHeight: '90%',
      backgroundColor: 'white',
      border: "rgb(214,99,99,255) 5px solid",
      borderRadius: 2,
      boxShadow: 5,
     
    }}
    >




      <div class="wrapper">
        <article class="media" style={{ direction: "rtl", textAlign: "center" }}>
          <img src={oneProd.imgUrl} alt="" />
          <div class="media__content">
            <h2>
              {oneProd.name}
            </h2>
            <h2>
              {oneProd.company}
            </h2>
            <p>
              {oneProd.description}
            </p>
            <h2>{oneProd.price}₪</h2>

            <Fab variant="extended"
              onClick={(() => {
                Dispatch(addtoBag(oneProd))
              })} >
              <AddShoppingCartSharpIcon sx={{ mr: 1 }} />
              הוסף לסל
            </Fab>
            <br />
            <span style={{ color: "rgb(214,99,99,255)" }} onClick={() => {
              navigate(-1)
            }}>המשך בקניות</span><br />
            <Link to="/shoppingBag" style={{ color: "rgb(214,99,99,255)" }}><span>מעבר לסל קניות  </span></Link>


          </div>


        </article>
      </div></div>

  </div>



  </>

  );
}

export default ProductDetail;