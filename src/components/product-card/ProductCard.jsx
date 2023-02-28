import React from 'react';
import "./product-card.css";

const ProductCard = (props) => {

    const {title,imgUrl,price} = props.item
  return (
    <div className="signle__product">

    <div className="product_img">
        <img src={imgUrl} alt=""className='w-100'/>
    </div>

    <div className="product__content">
        <div className="rating text-center">
            <span><i class="ri-star-s-line"></i></span>
            <span><i class="ri-star-s-line"></i></span>
            <span><i class="ri-star-s-line"></i></span>
            <span><i class="ri-star-s-line"></i></span>
            <span><i class="ri-star-s-line"></i></span>
        </div>

        <h6 className='text title'>{title}</h6>
        <div className="d-flex align-items-center justify-content-between">
            <span className="text">Price : $<span className='price '>{price}</span></span>
            <span className='cart'><i class="ri-shopping-cart-fill"></i></span>
        </div>
        
    </div>
</div>
  )
}

export default ProductCard
