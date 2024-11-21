
import {useEffect, useState} from 'react'
import axios from 'axios'
import '../styles/ProductPage.css'


export function ProductList(){
    let [products,setProducts] = useState([])
    let [inputtext,setInputtext] = useState(''); 
    let displaylist = products.map(product =>
        <li key = {product.id}>
            Name : {product.name} <br />
            Price : {product.price} <br/>
            quantity: {product.quantity}
         </li>
    )

    useEffect(()=>{
        const fetchproducts = async ()=>{
            try{
            const response = await axios.get('http://localhost:3000/products') 
            setProducts(response.data);
            }
            catch (err){
                console.log(err);
            }
        }
        fetchproducts();
    } , [])
    return (<>
        <ul>
            {displaylist}
        </ul>
    
    </>);
}




export default function ProductPage() {
    return (
        <div className="product-page">
            <h1>Products Available</h1>
            <p>you can see all products here :</p>
            <ProductList />
        </div>
    );
}





//product page : just dispaly all products
//user page : just diuspaly all users -> each user will have a button to dispaly its shooping cart
//dashboard : includes forms to add user/product
//search for a specific user
//search for a specific product
//