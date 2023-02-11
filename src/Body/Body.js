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

    //test
    const [data, setData] = useState(product)
    // Products and Category components use a mutual variable for displaying products
    // Click on a category => Change products displayed
    // Need an array containing all unique categories and a variable to control the filter keyword.
    let categories = data.map(item => item.category) 
    //get all categories in product array -> get unique value by Set()
    categories = new Set(categories)
    // Transform set to array
    categories = Array.from(categories)
    // Set default value as "all"
    const [filterKeyword, setFilterKeyword] = useState('all')
    // Send this function to Category component in order to when clicking on a category, the change will be recorded to filterKeyword
    function updateCat(newCat) {
        setFilterKeyword(newCat)
    }
    // Use filterKeyword to control display in Products component by sending this to the component as catToShow
    // console.log(filterKeyword)
    //stop test

    // console.log(updateData)
    return (
        <div>
            <Nav />
            <div className='flex'>
                {/* Description */}
                <div className='flex-initial w-[200px] ml-[70px]'>
                    {/**/}
                    <Category categories={categories} updateCat={updateCat}/>
                    <Gender />
                </div >
                <Products update={handleUpdate} catToShow={filterKeyword}/>
            </div>
        </div>
    )
}

export default Body;