import { useContext, useEffect, useRef, useState } from "react";
import { ProductContext } from "../data/ProductContext";

function Size ({cateKeyword, genderKeyword, updateSize}) {
  const {size} = useContext(ProductContext)
  const [listSize, setListSize] = useState(size.sort((a, b) => a - b).map((item) => ({
    label: item,
    isChecked: false
  })))
  let sizeClicked = useRef([])
  // Tạo mảng chứa những giá trị được stick khi click ô checkbox size để đưa qua Products component
  const [arrCheckedSize, setArrCheckedSize] = useState('all')

  
  useEffect(() => {
    setListSize(size.map(item => ({
      label: item,
      isChecked: false
    })))
    setArrCheckedSize('all')
    sizeClicked.current = []
  },[cateKeyword, genderKeyword, size])

  // Tạo sự kiện khi click vào ô size sẽ hiện dấu stick ở ô được click vì ban đầu ô checkbox đang set là False, khi click sẽ set về True để hiện dáu stick
  function onChangeSize(item) {
    setListSize(prev => {
      return prev.map(pr => {
        if(pr.label === item.label) {         
          return {
            label: item.label,
            isChecked: !pr.isChecked
          }
        }
        return pr
      })
    })
  }
  // Sự kiện này để khi click vào checkbox Nam hay Nữ thì sẽ lưu vào mảng arrCheckedGender để đưa vào props updateGender
  function onClickSize(item) {
    if(!item.isChecked === true){
      sizeClicked.current.push(item.label)
      setArrCheckedSize([...sizeClicked.current])
    }
    else{
      sizeClicked.current = sizeClicked.current.filter(i => i !== item.label)
      if((sizeClicked.current).length !== 0 ){
        setArrCheckedSize([...sizeClicked.current])
      }
      else {
        setArrCheckedSize("all")
      }
    }
  }
  updateSize(arrCheckedSize)
    return (
      <div>
          <h1 className="mb-[20px] text-[20px] font-medium">Size</h1>
          <div className='pb-[50px] border-b border-solid grid grid-cols-2'>
            {listSize.map((item, idx) => {
              return (
                <label key={idx} style={{fontWeight: item.isChecked ? "bold" : "normal", backgroundColor: item.isChecked ? "silver" : "white"}} 
                className='inline-block cursor-pointer mb-[10px] w-[90px]
                hover:shadow-md hover:shadow-amber-300
                text-center py-[10px] rounded-[5px] border'>
                  {item.label}
                  <input  type="checkbox" className="hidden"
                    onChange={() => onChangeSize(item)}
                    onClick={() => onClickSize(item)}
                    checked={item.isChecked} 
                    value={item.label} 
                  />
                </label>
              )
            })}
        </div>
      </div>
        
    )
}

export default Size;