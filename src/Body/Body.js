import Nav from './Nav';
import Category from './Category';
import Gender from './Gender';
import Products from './Products';
import { product } from '../ProductDetails/Shoes';
import { useState } from 'react';

function Body () {
    const [updateData, setUpdateData] = useState();
    const handleUpdate = (newData) => {
        setUpdateData(newData)
    }
    console.log(updateData)
    return (
        <div>
            <Nav />
            <div className='flex'>
                {/* Description */}
                <div className='flex-initial w-[200px] ml-[70px]'>
                    <Category  />
                    <Gender />
                </div >
                <Products update={handleUpdate} />
            </div>
        </div>
    )
}

export default Body;