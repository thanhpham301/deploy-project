import Nav from './Nav';
import Category from './Category';
import Gender from './Gender';
import Products from './Products';
import { product } from '../Data/Shoes';
import { useState } from 'react';
import Size from './Size';

function Body () {
    
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
    // Tạo mảng chứa products đã được chọn từ list category để phục vụ cho component Gender
    const [dataGender, setDataGender] = useState(product)
    // Send this function to Category component in order to when clicking on a category, the change will be recorded to filterKeyword
    function updateCat(newCat) {
        setFilterKeyword(newCat)
        // Mảng dataGender sẽ được set lại dựa trên category được click chọn để đưa vào props data phần Gender
        setDataGender(newCat === "all" ? product : product.filter(item => item.category === newCat) )
    }
    // Use filterKeyword to control display in Products component by sending this to the component as catToShow
    // console.log(filterKeyword)
    //stop test
    
    // Send this function to Gender component in order to when clicking on a gender, the change will be recorded to genderKeyword
    const [genderKeyword, setGenderKeyword] = useState('all')
    function updateGender(newGender) {
        setGenderKeyword(newGender)
    }
    // Use genderKeyword to control display in Products component by sending this to the component as genderToShow
    console.log(genderKeyword)
    return (
        <div>
            <Nav />
            <div className='flex'>
                {/* Description */}
                <div className='flex-initial w-[200px] ml-[70px]'>
                    {/**/}
                    <Category categories={categories} updateCat={updateCat}/>
                    <Gender data={dataGender} updateGender={updateGender}/>
                    
                </div >
                <Products catToShow={filterKeyword} genderToShow={genderKeyword}/>
            </div>
        </div>
    )
}

export default Body;