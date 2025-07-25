import React from 'react';
import ProductItem from './ProductItem';

export default function ProductList({products}){
    if(products.length === 0){
        return <p>No produts found</p>;
    }

    return(
        <ul>
            {products.map(product => (
                <ProductItem key={product.id} product={product}/>
            ))}
        </ul>
    )
}