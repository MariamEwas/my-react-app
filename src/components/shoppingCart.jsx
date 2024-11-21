import react,{useState,useEffect} from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom';
import '../styles/shoppingCart.css'


export default function ShoppingCart(){
    let [cart,setCart] = useState('');
    let [error,setError] =useState(null);
    let [input,setInput] = useState('');
    const { userId } = useParams(); 

    useEffect(()=>{
            //alert(input);
            async function fetchdata(){
            try{
                const res = await axios.get(`http://localhost:3000/users/cart/${userId}`)
                if (res){
                    setCart(res.data);
                    setError(null);
                }
            }
            catch (err){
                setError(err);
                setCart(null)
            }
        }
        fetchdata();
        

    },[])
    
    function handleChange(event){
        setInput(event.target.value)
    }

    const handleClick = (event) => {
        // Redirect to the shopping cart page for this user
        window.location.href = `/users`;
    };
   

    return (
        <div className="shopping-cart-container">
            <h2 className="title">Cart Details</h2>
            <div className="search-section">
                {/* <input
                    type="text"
                    value={input}
                    onChange={handleChange}
                    placeholder="Enter text"
                    className="search-input"
                />
                <button onClick={handleClick} className="search-button">
                    Search
                </button> */}
            </div>
            <div className="cart-details">
                {cart ? (
                    <ul className="cart-list">
                        {cart.map((pro, index) => (
                            <li key={index} className="cart-item">
                                <p className="product-name">Product Name : {pro.name}</p>
                                <p className="product-price">Price : {pro.price}</p>
                                <p className="product-quantity">Quantity : {pro.quantity}</p>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p className="no-cart">No items in the cart.</p>
                )}

                <button className="search-button" onClick={handleClick}> return to user</button>
                <button className="search-button"> Go to payment --</button>

                {error && <p className="error-message">{error.message}</p>}
            </div>
        </div>
    );
    

}