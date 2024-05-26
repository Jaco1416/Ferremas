import React, { useContext } from 'react'
import './CartItems.css'
import { ShopContext } from '../Context/ShopContext'
import removeIcon from '../../assets/cart_cross_icon.png'
import SadFace from '../../assets/Ferremas_logo.png'
import { Link } from 'react-router-dom';

const CartItems = () => {
    const {getTotalCartAmount, all_product, cartItems, removeFromCart} = useContext(ShopContext); 

    const isEmpty = Object.values(cartItems).every(amount => amount === 0);

    if (isEmpty) {
        return (
            <div className='cartitems-empty'>
                <h1>El carrito está vacío</h1>
                <p>Tu carrito se siente vacío, llénalo para que esté feliz</p>
                <img src={SadFace} alt="" />
                <Link to='/Shop'>
                    <button className='boton-inferior'>
                        <span class="circle1"></span>
                        <span class="circle2"></span>
                        <span class="circle3"></span>
                        <span class="circle4"></span>
                        <span class="circle5"></span>
                        <span class="text">Ir a tienda</span>
                    </button>
                </Link>
            </div>
        );
    }

    return (
        <div className='cartitems'>
            <div className="cartitems-format-main">
                <p>Productos</p>
                <p>Título</p>
                <p>Precio</p>
                <p>Cantidad</p>
                <p>Total</p>
                <p>Quitar</p>
            </div>
            <hr />
            {all_product.map((e) => { 
                if (cartItems[e.id] > 0) 
                {
                    return (
                        <div key={e.id}>
                            <div className="cartitems-format cartitems-format-main">
                                <img src={e.image} alt="" className='carticon-product-icon' />
                                <p>{e.name}</p>
                                <p>${e.new_price}</p>
                                <button className='cartitems-quantity'>{cartItems[e.id]}</button>
                                <p>${e.new_price*cartItems[e.id]}</p>
                                <img className='cartitems-remove-icon' src={removeIcon} onClick={() => {removeFromCart(e.id)}} alt="" />
                            </div>
                            <hr /> 
                        </div>
                    );
                }
                return null;
            })}
            <div className="caritems-down">
                <div className="cartitems-total">
                    <h1>Total del carrito</h1>
                    <div>
                        <div className="cartitems-total-item">
                            <p>Subtotal</p>
                            <p>${getTotalCartAmount()}</p>
                        </div>
                        <hr />
                        <div className="cartitems-total-item">
                            <p>Gastos de envío</p>
                            <p>Free</p>
                        </div>
                        <hr />
                        <div className="cartitems-total-item">
                            <h3>Total</h3>
                            <h3>${getTotalCartAmount()}</h3>
                        </div>
                    </div>
                    <Link to='/confirmar'>
                        <button>PROCEDER AL PAGO</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default CartItems
