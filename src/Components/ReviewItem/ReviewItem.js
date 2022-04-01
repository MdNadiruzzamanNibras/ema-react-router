import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './ReviewItem.css'
const ReviewItem = ({product, handleRemoveItem}) => {
    console.log(product)
    const {name, img, price, shipping, quantity} = product
    return (
        <div className='review-item'>
         <div>
             <img src={img} alt="" />
         </div>
            <div className="review-item-details-container">
                <div className="review-item-details">
                <div className="review-item-name" title={name}>
                    {name.length>20 ? name.slice(0, 20) +'...' : name}
                    </div>
                <p>Price:{price}</p>
                <p><small>Shipping charge:{shipping}</small></p>
                <p><small>Quantity:{quantity}</small></p>
                </div>
                <div className='delete-btn-container'>
                    <button onClick={()=>handleRemoveItem(product)} className='delete-btn'>
                        <FontAwesomeIcon className='delete-font' icon={faTrashAlt}></FontAwesomeIcon>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ReviewItem;