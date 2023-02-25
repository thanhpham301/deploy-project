import { useContext, useEffect, useRef, useState } from "react";
import { ProductContext } from "../data/ProductContext";

function Size ({cateKeyword, genderKeyword, updateSize}) {
  const {size} = useContext(ProductContext)
  const [listSize, setListSize] = useState(size.map((item) => ({
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
          <h1>Size</h1>
          <div className='pb-[50px] border-b border-solid grid grid-cols-2'>
            {listSize.map((item, idx) => {
              return (
                <div key={idx} className="grid grid-cols-2" style={{fontWeight: item.isChecked ? "bold" : "normal"}}>
                  <input id={idx} type="checkbox" className="hidden"
                  
                  onChange={() => onChangeSize(item)}
                  onClick={() => onClickSize(item)}
                   checked={item.isChecked} 
                   value={item.label} 
                   />
                  <label htmlFor={idx}>
                    {item.label}
                    </label><br/>
                </div>
              )
            })}
        </div>
      </div>
        
    )
}

export default Size;