import { useEffect, useRef, useState } from "react";
import { gender } from "../Data/Cat-Gen-Size";

function Gender ({data, updateGender}) {
  // Tạo mảng chỉ chứa phần tử là gender
  let genderArr = useRef([])
  // Tạo mảng chứa những giá trị được stick khi click ô checkbox gender để đưa qua Products component
  const [arrCheckedGender, setArrCheckedGender] = useState('all')
  // Lọc bỏ các phần tử trùng, hàm new Set sẽ cho ra kết quả là Object
  // Chuyển từ dạng Object sang mảng
  // Từ phần tử chỉ chứa gender là nam hoặc nữ, chuyển sang phần tử dạng Object chứa biến label và isChecked => [{label: Nam, isChecked: false},{label: Nữ, isChecked: false}]
  const [listGender, setListGender] = useState(gender.map((item) => ({
    label: item,
    isChecked: false
  })))
  // Sử dụng useEffect có dependence có giá trị là {data} nghĩa là khi nào props data có thay đổi thì useEffect mới thực thi
  // props data ở đây là giá trị khi click chọn caterogy, ví dụ là đang ở mục sản phẩm LifeStyle, khi mình click qua mục Jordan thì useEffect mới thực thi
  // Khi thực thi thì ô chechbox gender sẽ render thành mặc định, trả value về false, bỏ hết dấu đã đc stick
  useEffect(() => {
    setListGender(gender.map((item) => ({
      label: item,
      isChecked: false
    })))
    setArrCheckedGender('all')
    genderArr.current = []
  },[data])

  // Tạo sự kiện khi click vào ô gender sẽ hiện dấu stick ở ô được click vì ban đầu ô checkbox đang set là False, khi click sẽ set về True để hiện dáu stick
  function onChangeGender(item) {
    
    setListGender(prev => {
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
  function onClickGender(item) {
    if(!item.isChecked === true){
      genderArr.current.push(item.label)
      setArrCheckedGender([...genderArr.current])
      
    }
    else{
      genderArr.current = genderArr.current.filter(i => i !== item.label)
      if((genderArr.current).length !== 0 ){
        setArrCheckedGender([...genderArr.current])
      }
      else {
        setArrCheckedGender("all")
      }
    }
  }
  // props updateGender sẽ được cập nhật mỗi khi mảng arrCheckedGender thay đổi, arrCheckedGender thay đổi khi được click sự kiện trên
  updateGender(arrCheckedGender)
  
    return (
        <div className='pb-[50px] border-b border-solid'>
            <h1>Gender</h1>
            {listGender.map((item, idx) => {
              return (
                <div key={idx}>
                  <input id={`${idx}`+"gender"} type="checkbox" 
                  onChange={() => onChangeGender(item)}
                  onClick={() => onClickGender(item)}
                   checked={item.isChecked} 
                   value={item.label} 
                   />
                  <label htmlFor={`${idx}`+"gender"}>
                    {item.label}
                    </label><br/>
                </div>
              )
            })}
        </div>
    )
}
export default Gender;