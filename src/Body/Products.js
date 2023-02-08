import { product } from "../ProductDetails/Shoes";
import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import Category from "./Category";

function Product(props) {
  return (
    <div className="product ml-[50px]">
      <img src={props.img} alt="" className="w-[375px] h-[375px]"/>
      <div className='description'>
        <h1 className='font-medium'>{props.name}</h1>
        <p className='text-teal-500'>{props.distribute}</p>
        <p className='text-teal-500'>{props.colors > 1 ? props.colors + " Colours" : props.colors + " Colour"}</p>
        <p>{props.price}</p>
      </div>
      <div className='children hidden'>
        {props.children.map((e) => {
          return <img key={uuidv4()} className='w-[70px] h-[70px] mr-[10px] mt-[10px]' src={e} alt="" />
        })}
      </div>
    </div>
  )
};
function Products () {
  const [clickCategory, setClickCategory] = useState(product);


    return (
        <div className="info grid grid-cols-3 gap-[50px]">
          {clickCategory.map((item, index) => {
          return <Product key={index} id={item.id} img={item.img} name={item.name} distribute={item.distribute} colors={item.colors.length}  price={item.price} gender={item.gender} >
            {item.colors}
          </Product>
          })}
        </div>
    )
}

export default Products;