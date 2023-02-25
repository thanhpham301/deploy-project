import { useParams } from 'react-router-dom';
import { useState } from 'react';
import '../../App.css';

function ProductDetails({detailItem, cart}) {
  useParams();
  const [productImg, setProductImg] = useState("")
  const [productSize, setProductSize] = useState("")
  const [changeImg, setChangeImg] = useState("")
  const handleImgChange = (event) => {
    setProductImg(event.target.value)
    setChangeImg(event.target.value)
  } 

  const handleSizeChange = (event) => {
    setProductSize(event.target.value)
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    if (!productImg || !productSize){
      alert('Vui lòng chọn "Mẫu sản phẩm và Size"');
      return;
    }
    const productData = {
      name: detailItem.name,
      gender: detailItem.gender,
      image: productImg,
      size: productSize,
      price: detailItem.price
    }

    cart(productData)
    setProductImg("")
    setProductSize("")
    
  }
  
  return (
    <form onSubmit={handleSubmit}>
      <div className="flex">
        <div className=" grid grid-cols-2 gap-[20px] w-[65%] ml-[70px] pr-[50px]" style={{display: changeImg !== "" ? "block" : "grid"}}>
          {detailItem.colors.map((item, idx) => {
            return <img key={idx} src={item} style={{display: changeImg === "" ? "block" : (item === changeImg ? "block" : "none")}} alt=""/>
          })}
        </div>
        <div className='w-[35%] pr-[100px] pl-[20px]'>
          <h1 className='text-[30px] font-medium'>{detailItem.name}</h1>
          <p>{detailItem.gender}'s Shoes</p>
          <h2 className='mt-[20px] text-[30px] font-medium'>{`${detailItem.price} $`}</h2>
          <div className='flex'>
            {detailItem.colors.map((item, idx) => {
              return (
                <div key={idx}>
                  <input id={`${idx} img`} 
                  type='radio' 
                  value={item} 
                  onChange={handleImgChange}
                  checked={productImg === item} 
                  name="img" className='img-input hidden'
                  />
                  <label htmlFor={`${idx} img`} className="img-label">
                    <img className='img w-[70px] h-[70px] mr-[10px] mt-[10px] rounded-[5px] border hover:border-black ' 
                    src={item} alt=""/>
                  </label>
                </div>
              )
            })}
          </div>
          <h1 className='mt-[35px] mb-[30px] text-[20px]'>Select Size</h1>
          <div className="grid grid-cols-3 mb-[50px] gap-[7px] h-fit w-full">
            {detailItem.size.map((item, idx) => {
              return (
                <div key={idx}>
                  <input id={`${idx} size`} 
                  type='radio' 
                  value={item} 
                  onChange={handleSizeChange} 
                  checked={Number(productSize) === item} 
                  name="size" className='size-input hidden' />
                  <label htmlFor={`${idx} size`} 
                  className='size-label flex inline-block border rounded-[5px] hover:border-black w-full h-[60px] justify-center items-center'>
                    {`EU ${item}`}
                  </label>
                </div>
              )
            })}
          </div>
          <button type='submit' className='rounded-[50px] bg-black text-white w-full pt-[18px] pb-[18px] hover:bg-gray-500'>Add to Bag</button>
        </div>
      </div>
    </form>
  )
};

export default ProductDetails;
