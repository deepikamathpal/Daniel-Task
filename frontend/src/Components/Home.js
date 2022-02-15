import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';

const Home = () => {

    const [products, setProducts] = useState([]);

    const getProducts = async () => {
        const productsList = await new Promise(resolve => {

            fetch(process.env.REACT_APP_URL + "/products")
                .then(data => {
                    resolve(data.json());
                })
        })
        setProducts(productsList)
    }
    // get products list on the initial load
    useEffect(() => {
        getProducts()
    }, [])

    return (
        <div className='container'>
            {products.map(product => {
                return (
                    <Card className="product-card" key={product.sku} data-testid="product_card">
                        <Card.Img variant="top" src={product.images[0].src} />
                        <Card.Body data-testid="card_body">
                            <h6>{product.name}</h6>
                            <div data-testid="card_text">
                                <div>
                                    <div className="color-dot" 
                                    style={{ 'backgroundColor': 
                                    `${product.color.id.includes('Rose') ? 'pink' : product.color.id}` }} />
                                    <div>{product.color.id}</div>
                                </div>
                                <div data-testid='product_price'>
                                    {product.price.symbol}{product.price.amount}
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                )
            })}
        </div>
    );
};

export default Home;