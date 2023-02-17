import { useEffect, useState } from "react";

function Cart ({cart, deleteCart}) {
    const [cartToShow, setCartToShow] = useState([])
    useEffect(()=> {
        setCartToShow(cart)
    },[cart,deleteCart])

    return (
        <div className="flex justify-around flex-wrap">
            <div>
                <h1 className="mb-[30px] text-[40px]">Bag</h1>
                {cartToShow.map((item, idx) => {
                    return (
                        <div key={idx} className="flex mt-[20px] pb-[30px] border-b-[1px]">
                            <img src={item.image} className="w-[150px] h-[150px]" alt=""/>
                            <div className="ml-[20px]">
                                <h1 className="text-[20px]">{item.name}</h1>
                                <p className="text-gray-500">{item.gender}'s Shoes</p>
                                <p className="text-gray-500">Size: {item.size}</p>
                                <button type="button" onClick={() => deleteCart(idx)}>Delete</button>
                            </div>
                            
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