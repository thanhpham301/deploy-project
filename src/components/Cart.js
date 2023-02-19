import { useEffect, useState } from "react";

function Cart ({cart, deleteCart}) {
    const [cartToShow, setCartToShow] = useState([])
    
    const [sumToShow, setSumToShow] = useState("")
    const [total, setTotal] = useState("")
    useEffect(()=> {
        setCartToShow(cart)
        setSumToShow((cart.map(item => item.price)).reduce((total, num) => total + num, 0))
        setTotal(cart.length > 1 ? (cart.map(item => item.price)).reduce((total, num) => total + num, 0)
        : (cart.map(item => item.price)).reduce((total, num) => total + num, 0) - 10)
    },[cart])
    
    
    const [selectedValues, setSelectedValues] = useState(
      new Array(cartToShow.length).fill("")
      );
    
    const [priceProduct, setPriceProduct] = useState(cart.map(item => item.price))
    const [fee, setFee] = useState("")
    
    useEffect(() => {
        if(cart.length > 1 || selectedValues[0] > 1){
            setFee("Free")
            setTotal(sumToShow)
        }
        else{
            setFee(10)
            setTotal(sumToShow - 10)
        }
    },[selectedValues, deleteCart])
console.log("cart")

    

    const handleSelect = (event, idx) => {
        const newSelectedValues = [...selectedValues]
        newSelectedValues[idx] = Number(event.target.value) 
        setSelectedValues(newSelectedValues)

        const newPriceProduct = [...priceProduct]
        newPriceProduct[idx] = cartToShow[idx].price * Number(event.target.value) 
        setPriceProduct(newPriceProduct)

        setSumToShow(newPriceProduct.reduce((total, num) => total + num, 0))

        
    }
    return (
        <div className="flex justify-center flex-wrap">
            <div className="mr-[70px]">
                <h1 className="mb-[30px] text-[40px]">{`Bag (${cartToShow.length})`} </h1>
                {cartToShow.length === 0 ? "There are no items in your bag."
                : cartToShow.map((item, idx) => {
                    return (
                        <div key={idx} className="flex justify-between mt-[20px] pb-[30px] border-b-[1px] w-[700px]">
                            <div className="flex">
                                <img src={item.image} className="w-[150px] h-[150px]" alt=""/>
                                <div className="ml-[30px]">
                                    <h1 className="text-[25px]">{item.name}</h1>
                                    <p className="text-gray-500">{`${item.gender}'s Shoes`}</p>
                                    <p className="text-gray-500">{`Size: ${item.size}`}</p>
                                    <span className="text-gray-500">Quanlity</span>
                                    <select name={`select-${idx}`} value={selectedValues[idx]} intinial="true" onChange={(event) => handleSelect(event, idx)}>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                    </select>
                                    <br/>
                                    <button type="button" onClick={() => deleteCart(idx)} className="mt-[15px]">
                                        <i class="fal fa-trash-alt text-[20px]"></i>
                                    </button>
                                </div>
                            </div>
                            <p>{`${priceProduct[idx]} $`}</p>
                        </div>
                    )
                })
                }
            </div>
            <div className="w-[350px]">
                <h1 className="mb-[30px] text-[40px]">Summary</h1>
                <div className="flex justify-between">
                    <p>Subtotal</p>
                    <p>{sumToShow}</p>
                </div>
                <div className="flex justify-between border-b-[1px] pb-[20px]">
                    <p className="mt-[15px]">Estimated Delivery & Handling</p>
                    <p className="mt-[15px]">{fee}</p>
                </div>
                <div className="flex justify-between border-b-[1px] pb-[20px]">
                    <p className="mt-[15px]">Total</p>
                    <p className="mt-[15px]">{total}</p>
                </div>
            </div>
        </div>
    )
}

export default Cart;