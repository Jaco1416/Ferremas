import React, { useContext } from 'react'
import { ShopContext } from '../Components/Context/ShopContext'
import { useParams } from 'react-router-dom';
import Breadcrum from '../Components/Breadcrums/Breadcrum';
import Productdisplay from '../Components/ProductDisplay/Productdisplay';
import Footer from '../Components/Footer/Footer';
import DescriptionBox from '../Components/DescriptionBox/DescriptionBox';
import Relatedproducts from '../Components/RelatedProducts/Relatedproducts';

const Product = () => {
  const {all_product} = useContext(ShopContext);
  const {productid} = useParams();
  const product = all_product.find((e)=> e.id === Number(productid))
  return (
    <div className='product'>
      <Breadcrum product={product}/>
      <Productdisplay product={product}/>
      <DescriptionBox/>
      <Relatedproducts/>
      <Footer/>
    </div>
  )
}

export default Product
