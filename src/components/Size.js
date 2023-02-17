import { useEffect, useRef, useState } from "react";
import { size } from "../data/Cat-Gen-Size";

function Size ({cateKeyword, genderKeyword, updateSize}) {
  
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
  },[cateKeyword, genderKeyword])

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
        <div className='pb-[50px] border-b border-solid'>
            <h1>Size</h1>
            {listSize.map((item, idx) => {
              return (
                <div key={idx}>
                  <input id={idx} type="checkbox" 
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
    )
}

export default Size;