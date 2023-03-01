import {useContext, useEffect, useState } from "react";
import * as _ from "lodash"
import { ProductContext } from "../data/ProductContext";

function Cart ({deleteCart}) {
    const {cart} = useContext(ProductContext)
    const [cartToShow, setCartToShow] = useState([])
    const [sumToShow, setSumToShow] = useState()
    const [total, setTotal] = useState("")
    const [fee, setFee] = useState("")
    // const [selectedValues, setSelectedValues] = useState(
    //     new Array(cart.length).fill(1)
    // );
    console.log(cartToShow)
    useEffect(()=> {
        const getCart = JSON.parse(localStorage.getItem('cartStorage'))
        setCartToShow(getCart)
        // setSumToShow((cart.map(item => item.price)).reduce((total, num) => total + num, 0))
    },[cart])

    
    
    // useEffect(() => {
    //     const storedSelected = JSON.parse(localStorage.getItem('selectedStorage'))
    //     if (storedSelected) {
    //         setSelectedValues(storedSelected)
            
    //     }
    // }, [])

    useEffect(() => {
        const getFromCart = JSON.parse(localStorage.getItem('cartStorage'))
        if(getFromCart) {
            const sumResult = (getFromCart.map(item => item.price * item.qty)).reduce((total, num) => total + num, 0)
        setSumToShow(sumResult)
        if (getFromCart.length === 0)  {
            setFee("")
            setTotal("")
        }
        else if (getFromCart.length === 1 && getFromCart[0].qty === 1) {
            setFee(10)
            setTotal(sumResult - 10)
        }
        else {
            setFee("Free")
            setTotal(sumResult)
        }
        }
        
        
    },[cartToShow])

    const handleSelect = (event, idx) => {
        const currentQty =  Number(event.target.value) 

        const newTest = [..._.cloneDeep(cartToShow)].map(p => {
            if(p.id === idx) {
                p.qty = currentQty;
            }
            return p;
        })
        
        setCartToShow(newTest)
        localStorage.setItem('cartStorage', JSON.stringify(newTest))
        
    }

    const changedDelete = (idx) => {
        // setSelectedValues(prev => prev.filter((item, id) => id !== idx))
        // localStorage.setItem('selectedStorage', JSON.stringify(selectedValues.filter((element, index) => index !== idx)))
        setCartToShow(prev => prev.filter((item, id) => id !== idx))
        localStorage.setItem('cartStorage', JSON.stringify(cartToShow.filter((i, id) => id !== idx)))
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
                                    <select name={`select-${idx}`} value={item.qty} intinial="true" onChange={(event) => handleSelect(event, item.id)}>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                    </select>
                                    <br/>
                                    <button type="button" onClick={() => [deleteCart(idx), changedDelete(idx)]} className="mt-[15px]">
                                        <i class="fal fa-trash-alt text-[20px]"></i>
                                    </button>
                                </div>
                            </div>
                            <p>{`${item.price * item.qty} $`}</p>
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