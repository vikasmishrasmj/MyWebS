
import { useEffect, useState } from 'react';
import  {  useLocation } from 'react-router-dom';
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
  MDBRipple
} from 'mdb-react-ui-kit';

export default function Item() {
    const location = useLocation();
    const data=location.state
    const [apidata,setdata]=useState({})
    useEffect(()=>{
      fetch("https://fakestoreapi.com/products/"+data.pid).then((result)=>{
        result.json().then((data1)=>{
          setdata(data1)
        })
        
       

      })

    },[])
  return (
    <div>
      <br></br> <MDBCard>
    <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
      <MDBCardImage src={apidata.image} fluid alt='...' />
      <a>
        <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
      </a>
    </MDBRipple>
    <MDBCardBody>
      <MDBCardTitle>{apidata.title}</MDBCardTitle>
      <MDBCardTitle>{apidata.price*80} Rs</MDBCardTitle>
      <MDBCardTitle>{apidata.category}</MDBCardTitle>
      <MDBCardTitle>{apidata.rating.rate}</MDBCardTitle>
      <MDBCardTitle>{apidata.description}</MDBCardTitle>
      <MDBCardText>
        Some quick example text to build on the card title and make up the bulk of the card's content.
      </MDBCardText>
      <MDBBtn href='#'>Buy Now</MDBBtn>
    </MDBCardBody>
  </MDBCard></div>
  )
}
