import React from 'react'
import Header from '../../Component/Home/Header/Header'

import "./Product.css"
import ProductsCard from '../../Component/Product/ProductCard/ProductsCard'
import Testimonial from '../../Component/Home/Testimonial/Testimonial'
import Contact from '../../Component/Home/Contact/Contact'

const Product=()=>{
    return(
        <div className='mainHome'>
            <Header/>
            <div className='productScroll'>
                <div className='scrollUnitSelected'>
                    <img src="Assets/Logo/shoe.png" />
                    <div className='scrollText'>
                        <p>Gum Shoes</p>
                    </div>
                </div>
                <div className='scrollUnit'>
                    <img src="Assets/Logo/shoe.png" />
                    <div className='scrollText'>
                        <p>Gum Shoes</p>
                    </div>
                </div>
                <div className='scrollUnit'>
                    <img src="Assets/Logo/shoe.png" />
                    <div className='scrollText'>
                        <p>Gum Shoes</p>
                    </div>
                </div>
            </div>
            <div className='products'>
              <ProductsCard />
              <ProductsCard/>
              <ProductsCard/>
              <ProductsCard/>
              <ProductsCard/>
            </div>
            <Testimonial/>
            <Contact />
        </div>
    )
}

export default Product;