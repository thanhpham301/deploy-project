import { useContext, useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import { useEffect } from "react";
import { ProductContext } from "../../data/ProductContext";

function Adminpage ({addProduct, deletedData}) {
    const {category} = useContext(ProductContext)
    const {product} = useContext(ProductContext)
    const [productGender, setProductGender] = useState('Men')
    const [productCategory, setProductCategory] = useState(category[0])
    const [productName, setProductName] = useState("")
    const [productPrice, setProductPrice] = useState("")
    const [image, setImage] = useState(null);
    const [sizes, setSizes] = useState([])
    const [productToShow, setProductToShow] = useState([])
    useEffect(() => {
        setProductToShow([...product])
    },[product])

    const handleInputChange = (event) => {
        // tách danh sách kích thước giày thành một mảng các giá trị
        const inputSizes =  event.target.value;
        // loại bỏ các giá trị trống và lưu danh sách kích thước giày vào state
        setSizes(inputSizes);
      };

      console.log(sizes)
    

    const [showButton, setShowButton] = useState(true)
    const handleProductGender = (item) => {
        setProductGender(item.target.value)
        console.log(item.target.value)
    }
    const handleProductCategory = (item) => {
        setProductCategory(item.target.value)
        if(item.target.value === 'other'){
            setShowButton(false)
        }
        else {
            setShowButton(true)
        }
    }

    const handleOtherCategory = (item) => {
        setProductCategory(item.target.value)
    }
    

    const handleProductName = (item) => {
        setProductName(item.target.value)
    }

    const handleProductPrice = (item) => {
        setProductPrice(Number(item.target.value))
    }

    const handleImageChange = (e) => {
        const files = e.target.files;
        const images = [];
      
        for (let i = 0; i < files.length; i++) {
          const file = files[i];
          const reader = new FileReader();
      
          reader.onload = () => {
            images.push(reader.result);
      
            if (images.length === files.length) {
              setImage(images);
            }
          };
      
          reader.readAsDataURL(file);
        }
      };
    function handleSubmitAddProduct(event) {
        event.preventDefault();
        if(product.map(item => item.name).includes(productName)){
            alert("Sản phẩm này đã có trong dữ liệu, nếu muốn thêm sản phẩm này hãy sử dụng 'Edit' để thêm hoặc sửa");
            return;
        }
        const submitProduct = {
            id: uuidv4(),
            img: image[0],
            name: productName,
            distribute: productGender+ "'s Shoes",
            category: productCategory,
            colors: image,
            gender: productGender,
            price: productPrice,
            size: sizes.split(/[\s,]+/).map(i => Number(i))
        }
        console.log(submitProduct)
        addProduct(submitProduct)
        setProductGender('Men')
        setProductCategory(category[0])
        setShowButton(true)
        setProductName("")
        setProductPrice("")
        setImage(null)
        setSizes("")
    }
    
    const deletedProduct = (item) => {
        deletedData(item)
    }
    return (
        <div>
            <form onSubmit={handleSubmitAddProduct} className='w-[500px]  mx-auto mb-[50px]'>
                <span className="inline-block mb-[20px] ">Gender</span>
                <select value={productGender} onChange={(item) => handleProductGender(item)}
                className="w-1/8 p-2 mb-8 border rounded-md ml-[30px]">
                    <option value='Men'>Men</option>
                    <option value='Women'>Women</option>
                </select><br/>
                
                <span className="inline-block mb-[20px]">Category</span>
                {showButton ? 
                    <select value={productCategory} onChange={(item) => handleProductCategory(item)}
                    className="w-1/8 p-2 mb-8 border rounded-md ml-[16px]">
                    {category.map((item, idx) => {
                        return <option key={idx} value={item}>{item}</option>
                    })}
                    <option value='other'>Other</option>
                    </select>
                    : <input type='text' placeholder="Enter Category" onChange={handleOtherCategory} className="w-1/8 p-2 mb-8 border rounded-md ml-[16px]" />
                }
                <br/>

                <label className="inline-block mb-[20px]">
                    Name: 
                    <input type='text' value={productName} className="w-1/8 p-2 mb-8 border rounded-md ml-[16px]" placeholder="Enter the name" onChange={handleProductName}/>
                </label><br/>

                <label className="inline-block mb-[20px]">
                    Price: 
                    <input type='number' value={productPrice} className="w-1/8 p-2 mb-8 border rounded-md ml-[16px]" placeholder="Enter the price" onChange={handleProductPrice}/>
                </label><br/>

                <label htmlFor="imageInput" className="inline-block mb-[20px] flex">
                    {image ? (
                        image.map((item, idx) => {
                            return <img key={idx} src={item} alt="" className="w-24 h-24 mr-2" />
                        })
                    ) : (
                        <span className="text-blue-300 cursor-pointer">Choose an image</span>
                    )}
                    <input
                        type="file"
                        id="imageInput"
                        accept=".jpg,.jpeg,.png"
                        onChange={handleImageChange}
                        multiple
                        className="hidden"
                    />
                </label><br/>

                <label className="inline-block mb-[20px]">
                    Size:
                    <textarea rows="1" value={sizes} cols="30" onChange={handleInputChange} className='p-2 border rounded-md ml-[20px]'></textarea>
                </label><br/>

                <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md">Add Product</button>
            </form>
            <div className="grid grid-cols-3 ml-[50px] gap-x-[160px] gap-y-[20px]">
                {productToShow.map((item, idx) => {
                    return (
                        <div key={idx} className="product">
                            <img src={item.img} alt="" className="w-[375px] h-[375px]"/>
                            <div className='description'>
                                <h1 className='font-medium'>{item.name}</h1>
                                <p className='text-teal-500'>{item.distribute}</p>
                                <p className='text-teal-500'>{item.colors.length > 1 ? item.colors.length + " Colours" : item.colors.length + " Colour"}</p>
                                <p>{item.price}</p>
                            </div>
                            <div className='children hidden'>
                                {item.colors.map((e, id) => {
                                return <img key={id} className='w-[70px] h-[70px] mr-[10px] mt-[10px]' src={e} alt="" />
                                })}
                            </div>
                            <button type="button" onClick={() => deletedProduct(item.id)}>
                                <i class="fal fa-trash-alt text-[20px]"></i>
                            </button>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Adminpage;