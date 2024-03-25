import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <div style={{ width: '100%', height: '300px', color: 'white' }} className='bg-black d-flex justify-content-center align-items-center flex-column mt-5'>
            <div className="footer d-flex justify-content-evenly align-items-center w-100 ">
                <div className="website" style={{ width: '400px' }}>
                    <h4>
                        <i className="fa-solid fa-beat fa-cart-shopping text-warning me-3"></i>
                        {' '} EasyShop
                    </h4>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates eius reiciendis similique natus! Excepturi dolorum dignissimos unde similique, soluta temporibus voluptatibus fuga possimus? Inventore sapiente iure harum saepe? Accusantium, porro.
                    </p>
                </div>
                <div className="Links d-flex flex-column mb-5">
                    <h4 className=''>Links</h4>
                    <Link to={'/'} style={{ textDecoration: "none", color: 'white' }}>Home Page</Link>
                    <Link to={'/'} style={{ textDecoration: "none", color: 'white' }}>Cart</Link>
                    <Link to={'/'} style={{ textDecoration: "none", color: 'white' }}>Wishlist</Link>
                </div>
                <div className='guides d-flex flex-column mb-5'>
                    <h4 className=''>Guides</h4>
                    <Link to={'https://react.dev/'} style={{ textDecoration: "none", color: 'white' }}>React</Link>
                    <Link to={'https://react-bootstrap.netlify.app/'} style={{ textDecoration: "none", color: 'white' }}>React Bootstrap</Link>
                    <Link to={'https://bootswatch.com/'} style={{ textDecoration: "none", color: 'white' }}>Bootswatch</Link>
                </div>
               
            </div>
            <p>Copyright @2023 EasyShop</p>
        </div>
    )
}

export default Footer