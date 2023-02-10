import Products from "./Products";

function Category({categories, updateCat}) {

    return (
        <ul 
            // key={uuidv4()} 
            className='pb-[50px] border-b border-solid'>
                <li className='cursor-pointer w-fit' 
                    onClick={() => updateCat("all")}
                >
                    All
                </li>
                {categories.map((cat, idx) => 
                    <li className="cursor-pointer w-fit" key={idx} onClick={() => updateCat(`${cat}`)}>
                        {cat}
                    </li>
                )}
            
            {/* {newCategoryArr.map((item, index) => {
                return <li key={index} className='cursor-pointer w-fit' onClick={() => onClickCategory(item)}><span>{item}</span></li>
            })} */}
        </ul>
    )
}

export default Category;