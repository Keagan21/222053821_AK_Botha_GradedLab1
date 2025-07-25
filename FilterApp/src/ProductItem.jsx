import React from 'react';

export default function ProductItem({product}){
    return(
        
        <li>
            <h3>{product.name}</h3>
            <p>Category: {product.category}</p>
            <p>Price: {product.price}</p>
            <p>Stock : {product.inStock ? 'in Stock' : 'Out of stock '}</p>           
        </li>
      
    );
}