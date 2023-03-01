import Category from '../../components/Category';
import Gender from '../../components/Gender';
import Products from '../../components/Product/ProductList';
import { useContext, useState } from 'react';
import Size from '../../components/Size';
import ScrollUp from '../../components/Scrollup';
import { ProductContext } from '../../data/ProductContext';

function Body ({onProductClick, product}) {
    const {numberLengthProduct} = useContext(ProductContext)
    // Set default value as "all"
    const [filterKeyword, setFilterKeyword] = useState('all')

    // Send this function to Category component in order to when clicking on a category, the change will be recorded to filterKeyword
    function updateCat(newCat) {
        setFilterKeyword(newCat)
    }
    // Use filterKeyword to control display in Products component by sending this to the component as catToShow
    //stop test
    
    // Send this function to Gender component in order to when clicking on a gender, the change will be recorded to genderKeyword
    const [genderKeyword, setGenderKeyword] = useState('all')
    function updateGender(newGender) {
        setGenderKeyword(newGender)
    }
    // Use genderKeyword to control display in Products component by sending this to the component as genderToShow

    const [sizeKeyword, setSizeKeyword] = useState('all')
    function updateSize (newSize) {
        setSizeKeyword(newSize)
    }
    function handleProductClick(detailProduct) {
        onProductClick(detailProduct);
      }
    
    return (
        <div>
            <div className='flex mt-[50px]'>
                {/* Description */}
                <div className='flex-initial w-[200px] ml-[70px] mr-[20px] text-center'>
                    <h1 >({numberLengthProduct})</h1>
                    {/**/}
                    <Category updateCat={updateCat}/>
                    <Gender data={filterKeyword} updateGender={updateGender}/>
                    <Size cateKeyword={filterKeyword} genderKeyword={genderKeyword} updateSize={updateSize} />
                </div >
                <Products catToShow={filterKeyword} genderToShow={genderKeyword} sizeToShow={sizeKeyword} detailProduct={handleProductClick}/>
            </div>
            <ScrollUp />
        </div>
    )
}

export default Body;