import { product } from "../ProductDetails/Shoes";
import { useEffect, useState, useContext } from "react";
import { v4 as uuidv4 } from 'uuid';
import Category from "./Category";

function Product(props) {
  return (
    <div className="product ml-[50px]">
      <img src={props.img} alt="" className="w-[375px] h-[375px]"/>
      <div className='description'>
        <h1 className='font-medium'>{props.name}</h1>
        <p className='text-teal-500'>{props.distribute}</p>
        {/* toán tử ba ngôi if else */}
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

function Products (props) {
  const [clickCategory, setClickCategory] = useState(product);
  useEffect (() => {
    props.update(clickCategory)
  },clickCategory)

  // Use catToShow to control the display by filtering main data with the keyword
  // If keyword is "all", keeping the original data. If not, using filter, buit-in array function, to apply
  console.log(props.catToShow)
  const dataToShow = props.catToShow === "all"? product : product.filter(item => item.category === props.catToShow)
  console.log(dataToShow)
  
  
    return (
        <div className="info grid grid-cols-3 gap-[50px]">
          {dataToShow.map((item, index) => {
          return (<Product 
            key={index} 
            id={item.id} 
            img={item.img} 
            name={item.name} 
            distribute={item.distribute} 
            colors={item.colors.length}  
            price={item.price} 
            gender={item.gender}> 
             {item.colors}
            </Product>)
          })}
        </div>
    )
}

export default Products;