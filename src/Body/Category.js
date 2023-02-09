import Products from "./Products";

function Category() {
    return (
        <ul 
            // key={uuidv4()} 
            className='pb-[50px] border-b border-solid'>
            <li className='cursor-pointer w-fit' 
             // onClick={clickAll}
            >All</li>
            {/* {newCategoryArr.map((item, index) => {
                return <li key={index} className='cursor-pointer w-fit' onClick={() => onClickCategory(item)}><span>{item}</span></li>
            })} */}
        </ul>
    )
}

export default Category;