import React, { useContext } from 'react'
import './CSS/ShopCategory.css'
import { ShopContext } from '../Components/Context/ShopContext'
import dropdown_icon from '../assets/dropdown_icon.png'
import Item from '../Components/Items/Items'


const ShopCategory = (props) => {
  const {all_product} = useContext(ShopContext);
  return (
    <div className='shop-category'>
      <img className='shopcategory-banner' src={props.banner} alt="" />
      <div className="shopcategory-indexSort">
        <p>
          <span>Mostrando 1-12</span> de 36 productos
        </p>
        <div className="shopcategory-sort">
          Clasificar por <img src={dropdown_icon} alt="" />
        </div>
      </div>
      <div className="shopcategory-products">
        {all_product.map((item,i)=>{
          if (props.category===item.category) {
            return <Item key={i} id={item.id} name={item.name} brand= {item.brand} image={item.image} new_price={item.new_price} old_price={item.old_price} />
          }
          else{
            return null;
          }
        })}
      </div>
      <div className="shopcategory-loadmore">
        Mostrar más
      </div>
    </div>
  )
}

export default ShopCategory