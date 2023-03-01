import { useContext, useState } from 'react';
import { ProductContext } from '../data/ProductContext';
function Category({updateCat}) {
    const {category} = useContext(ProductContext)
    const [activeItem, setActiveItem] = useState('all');
    function handleItemClick(item) {
        setActiveItem(item);
    }

    return (
        <ul 
            className='pb-[50px] border-b border-solid '>
                <li className='cursor-pointer mx-[auto] mb-[10px] w-[90px] text-center py-[10px] border 
                rounded-[5px] bg-gray-100 hover:shadow-md hover:shadow-amber-300' 
                    onClick={() => [updateCat("all"), handleItemClick('all')]}
                    style={{fontWeight: 'all' === activeItem ? 'bold' : 'normal',}}
                >
                    All
                </li>
                {category.map((cat, idx) => 
                    <li className=" cursor-pointer mx-[auto] mb-[10px] w-[90px] text-center py-[10px] border 
                    rounded-[5px] bg-gray-100 hover:shadow-md hover:shadow-amber-300" 
                    key={idx} 
                    onClick={() => [updateCat(`${cat}`), handleItemClick(`${cat}`)]}
                    style={{fontWeight:     `${cat}` === activeItem ? 'bold' : 'normal',}}
                    >
                      {cat}
                    </li>
                )}
        </ul>
    )
}

export default Category;