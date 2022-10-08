
import { fs } from '../server/firebase';
import { IndividualProduct } from './IndividualProduct'
import React, { useState, useEffect } from 'react';
const Products = ({ }) => {
    const [products, setProducts] = useState([]);

    const getProducts = async () => {
        const products = await fs.collection('Products').get();
        const productsArray = [];
        for (var snap of products.docs) {
            var data = snap.data();
            data.ID = snap.id;
            productsArray.push({
                ...data
            })
            if (productsArray.length === products.docs.length) {
                setProducts(productsArray);
            }
        }
    }

    useEffect(() => {
        getProducts();
    }, [])


    return products.map((individualProduct) => (
        <IndividualProduct key={individualProduct.id} individualProduct={individualProduct} />
    ))
}








export default Products