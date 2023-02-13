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
        </ul>
    )
}

export default Category;