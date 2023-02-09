import Nav from './Nav';
import Category from './Category';
import Gender from './Gender';
import Products from './Products';
import { product } from '../ProductDetails/Shoes';
import { useState, createContext } from 'react';

function Body () {
    const [updateData, setUpdateData] = useState("");
    const Context = createContext();
    return (
        <div>
            <Nav />
            <div className='flex'>
                {/* Description */}
                <div className='flex-initial w-[200px] ml-[70px]'>
                    <Category  />
                    <Gender />
                </div >
                <Products  />
            </div>
        </div>
    )
}

export default Body;