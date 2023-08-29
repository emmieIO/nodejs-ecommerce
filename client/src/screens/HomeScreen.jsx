import { useEffect,useState } from "react";
import { Row, Col } from "react-bootstrap";
// import products from "../products.js";
import Product from "../components/Product";
import axios from "axios";
const HomeScreen = () => {
  const [products, setProducts] = useState([]);
  useEffect(()=>{
   const fetchProducts =  async () =>{
    const {data} = await axios.get('/api/products');

    setProducts(data)
   }
   fetchProducts()
  },[])
  return (
    <>
      <h3 className="mt-2">Latest Products</h3>
      <Row>
        {products.map((prod) => (
          <Col sm={12} xs={12} md={6} lg={4} xl={3 } key={prod._id}>
            <Product product={prod} />
          </Col>
        ))}
      </Row>
    </>
  );
}

export default HomeScreen