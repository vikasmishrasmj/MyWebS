import { useEffect, useState } from "react"

import {
    MDBCard,
    MDBCardImage,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBRow,
    MDBBtn,
    MDBCol
  } from 'mdb-react-ui-kit';
import Footer from "./Footer";
import {useNavigate} from "react-router-dom"

function Home() 
{
    const [apidata,setdata]=useState([])
    const Navigate = useNavigate()
    useEffect(()=>{
        getData()
    },[])
    function getId(pid)
  {
    // 
    const data={pid:pid}
    Navigate("/item",{state:data})
  }
    async function getData()
    {
        var result=await fetch("https://fakestoreapi.com/products")
        // console.log(result)
        var data=await result.json()
        // console.log(data)
        setdata(data)

    }
return(

    <div>
        <br></br>
        <MDBRow className='row-cols-1 row-cols-md-3 g-4'>
      {
        apidata.map((item)=>
        <MDBCol key={item.id}>
        <MDBCard>
          <center>
          <MDBCardImage
            src={item.image} style={{width:"100px", height:"150px"}}
            alt='...'
            position='top'
          />
          </center>
          <MDBCardBody>
            <MDBCardTitle>{item.title}</MDBCardTitle>
            <MDBCardTitle style={{color:"red"}}>{item.price*80} Rs</MDBCardTitle>
            <MDBCardTitle style={{color:"green"}}>{item.category}</MDBCardTitle>
            <MDBCardTitle style={{color:"blue"}}>{item.rating.rate}</MDBCardTitle>
            <MDBCardText>
              {item.description}
            </MDBCardText>
            <center><MDBBtn onClick={()=>getId(item.id)}>view details {item.id}</MDBBtn></center>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
        )
      }
            
    </MDBRow>  
    <Footer></Footer>
    </div>
)
}
export default Home
