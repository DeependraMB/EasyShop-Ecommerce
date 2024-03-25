import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Product() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(
          "https://interview-plus.onrender.com/api/items"
        );
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="container mx-auto my-5">
      <Row className="mt-5 mb-3">
        <h5 style={{marginTop: "40px",textAlign: "start", fontSize: "30px", fontWeight: "bolder"}}>Welcome Back!!</h5>
        {products.map((product) => (
          <Col key={product.id} md={3} style={{ marginBottom: "25px" }}>
            <Card style={{ width: "17rem", height: "100%", marginTop: "30px" }} className="shadow">
              <Card.Img
                variant="top"
                src={product.image}
                alt={product.title}
                style={{ height: "150px", objectFit: "cover" }}
              />
              <Card.Body>
                <Card.Title className="fw-bolder">{product.title}</Card.Title>
                <p>${product.price}</p>
                <center>
                  <Button style={{width: "100%"}}>Buy Now</Button>
                </center>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default Product;
