import { auth, fs } from '../server/firebase'
import React, { useState, useEffect } from 'react';
const Cart = () => {
    const [cartProducts, setCartProducts] = useState([]);
    useEffect(() => {
        auth.onAuthStateChanged(user => {
            if (user) {
                fs.collection('Cart ' + user.uid).onSnapshot(snapshot => {
                    const newCartProduct = snapshot.docs.map((doc) => ({
                        ID: doc.id,
                        ...doc.data(),
                    }));
                    setCartProducts(newCartProduct);
                })
            }
            else {
                console.log('user is not signed in to retrieve cart');
            }
        })
    }, [])

    // console.log(cartProducts);
    return (
        <div>Card</div>
    )
}

export default Cart