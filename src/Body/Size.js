import { useEffect, useRef, useState } from "react";

function Size ({dataGender, genderKeyword, updateSize}) {
  // Lọc bỏ các phần tử trùng, hàm new Set sẽ cho ra kết quả là Object
  // Chuyển từ dạng Object sang mảng
  // Từ phần tử chỉ chứa size là 35,36,37,..., chuyển sang phần tử dạng Object chứa biến label và isChecked => [{label: 35, isChecked: false},{label: 37, isChecked: false}]
  const [listSize, setListSize] = useState([...new Set(dataGender.flatMap(item => item.size))].map((item) => ({
    label: item,
    isChecked: false
  })))
  let sizeClicked = useRef([])
  // Tạo mảng chứa những giá trị được stick khi click ô checkbox size để đưa qua Products component
  const [arrCheckedSize, setArrCheckedSize] = useState('all')
  // const [size, setSize] = useState([])

  useEffect(() => {
    let defaultSizeArr = dataGender.flatMap(item => item.size)
    let uniqueSizes = [...new Set(defaultSizeArr)]
    setListSize(uniqueSizes.map(item => ({
      label: item,
      isChecked: false
    })))
    setArrCheckedSize('all')
    sizeClicked.current = []
  },[dataGender])

  useEffect(() => {
    if(genderKeyword === 'all') {
      setListSize([...new Set(dataGender.flatMap(item => item.size))].map((item) => ({
        label: item,
        isChecked: false
      })))
    }
    else {
      const filteredData = dataGender.filter(item => genderKeyword.includes(item.gender));
      const sizeArrs = filteredData.flatMap(i => i.size);
      const uniqueSizes = [...new Set(sizeArrs)];
      const sizeList = uniqueSizes.map((item) => ({
        label: item,
        isChecked: false
      }));
      setListSize(sizeList);
    }
  },[genderKeyword])

  console.log(listSize)
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
                  <label for={idx}>
                    {item.label}
                    </label><br/>
                </div>
              )
            })}
        </div>
    )
}

export default Size;