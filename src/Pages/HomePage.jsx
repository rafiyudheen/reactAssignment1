import 'bootstrap/dist/css/bootstrap.min.css';
import banner from "../image/Banner.jpg" 
import decor from "../image/decor.png"
import { useState,useEffect } from 'react';
import MyNavBar from '../Components/myNavBar';
import "../css/HomePage.css"
import loadigImg from "../image/loading.svg"
import { Col } from "react-bootstrap";
import {Row} from "react-bootstrap";
import {Container} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import  "../css/products.css"
import ProductTile from '../Components/ProductTile';


function HomePage(){

    
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch('https://fakestoreapi.com/products'); // Replace with your API URL
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          const result = await response.json();
          setData(result);
        } catch (error) {
          setError(error);
        } finally {
          setLoading(false);
        }
      };
  
      fetchData();
    }, []);

  
    if (loading) return <><img className="loadingImg" src={loadigImg} alt="" /></>;
    if (error) return <div>Error: {error.message}</div>;
    return(
    <>
          {/* <h1>TEST</h1> */}
        <MyNavBar/>
        <div className="MyNavBar">
          <img src={banner} alt="" className='bannerimg' />  
          <div className='bannerTextDiv'>
            <div>
              <p className='text1'>New Arrival</p>
              <p className='text2'>New Style</p>
            </div>
          </div>
          <div className='ImageDiv'>
            <img src={decor} alt="" className='BannerImage imageEntry' />
          </div>
        </div>       
        
        
        <Container>
               

                <Row className='my-5' >
                  {data.map(item=>(
                    
                      <Col xs={12} sm={12} md={6}lg={4}xxl={3}  >   
                        <div style={{paddingTop:"10px", height:"100%"}}>

                        <ProductTile data={item}> </ProductTile>
                        </div>

                        
                      </Col> 
                      ))}
     
                     
                      
                    </Row>
                   
                  </Container>
            



    </>
)
}

export default HomePage