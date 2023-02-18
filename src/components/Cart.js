import { useEffect, useState } from "react";

function Cart ({cart, deleteCart}) {
    const [cartToShow, setCartToShow] = useState([])
    useEffect(()=> {
        setCartToShow(cart)
    },[cart])

    const [selectedValues, setSelectedValues] = useState(new Array(cartToShow.length).fill(""));

    const handleSelect = (event, idx) => {
        const newSelectedValues = [...selectedValues]
        newSelectedValues[idx] = Number(event.target.value) 
        setSelectedValues(newSelectedValues)
    }
    console.log(selectedValues)
    return (
        <div className="flex justify-around flex-wrap">
            <div>
                <h1 className="mb-[30px] text-[40px]">Your Choice</h1>
                {cartToShow.map((item, idx) => {
                    return (
                        <div key={idx} className="flex mt-[20px] pb-[30px] border-b-[1px] w-[600px]">
                            <img src={item.image} className="w-[150px] h-[150px]" alt=""/>
                            <div className="ml-[30px]">
                                <h1 className="text-[25px]">{item.name}</h1>
                                <p className="text-gray-500">{`${item.gender}'s Shoes`}</p>
                                <p className="text-gray-500">{`Size: ${item.size}`}</p>
                                <span className="text-gray-500">Quanlity</span>
                                <select name={`select-${idx}`} value={selectedValues[idx]} intinial onChange={(event) => handleSelect(event, idx)}>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                </select>
                                 <br/>
                                <button type="button" onClick={() => deleteCart(idx)} className="mt-[15px]">
                                    <i class="fal fa-trash-alt text-[20px]"></i>
                                </button>
                            </div>
                            <p>{`${item.price}*${selectedValues[idx]}`}</p>
                        </div>
                    )
                })}
            </div>
            <div>
                Summary
            </div>
        </div>
    )
}

export default Cart;