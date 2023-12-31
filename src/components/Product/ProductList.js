import { useEffect, useState, useRef, useContext } from "react";
import { v4 as uuidv4 } from "uuid";
import { Link } from "react-router-dom";
import { ProductContext } from "../../data/ProductContext";

function Products(props) {
  const { product, searchProduct, setNumberLengthProduct } = useContext(ProductContext);
  // Tạo 1 mảng để chứa đựng các giá trị được filter, ví dụ khi click vào LifeStyle thì mảng những sản phẩm LifeStyle sẽ được lưu vào
  // Lý do dùng useRef thì lên GPT hỏi nó useRef là gì nó nói cho rõ
  // Nếu ở đây mà đặt cái biến arrGenderProducts = [], thì chọn LifeStyle lúc click vào checkbox Gender "Nam" thì component Products này sẽ render lại từ đầu
  // thì arrGenderProducts thì set lại từ đầu là mảng rỗng [], đáng lý ra phải là cái mảng có chứa sản phẩm LifeStyle, do cho render lại mảng rỗng nên bị lỗi
  // Nên phải set cho nó là useRef có giá trị là mảng []; useRef nó sẽ lưu giá trị trước đó mặc dù component này có render lại hay k
  const arrGenderProducts = useRef([]);
  const arrSizeProducts = useRef([]);
  // Tạo 1 State chứa giá trị sẽ show ra màn hình
  const [dataToShow, setDatatoShow] = useState(product);

  // useEffect này đảm nhiệm phần category, mỗi click vào category nào thì setDatatoShow sẽ render theo category đó
  // useEffect này thực thi khi props.catToShow có sự thay đổi
  useEffect(() => {
    // Tạo 1 biến là mảng chứa sản phẩm category khi click vào, click vào LifeStyle sẽ tạo ra mảng chứa sản phẩm LifeStyle
    const category =
      props.catToShow === "all"
        ? product
        : product.filter((item) => item.category === props.catToShow);
    // Rồi đưa cái mảng đó vào setDatatoShow, nghĩa là dataToShow được set là mảng đó để render ra màn hình
    setDatatoShow(category);
    // Mảng arrGenderProducts được dùng useRef ban đầu sẽ được set = với mảng category được click
    // .current là tính năng bắt buộc của useRef, sau khi set let arrGenderProducts = useRef([]) thì phía sau mỗi khi dùng biến arrGenderProducts
    // thì phải thêm .current
    // Mục đích set arrGenderProducts.current = category để lưu mảng LifeStyle đã được click vào biến đó,
    // từ biến đó mình sẽ filter để lọc ra những sản phẩm chứa Gender khi click chọn
    arrGenderProducts.current = category;
  }, [props.catToShow, props.sizeToShow, product]);

  // useEffect này đảm nhiệm phần gender, mỗi click vào gender nào thì setDatatoShow sẽ render theo category đó
  // useEffect này thực thi khi props.genderToShow có sự thay đổi
  useEffect(() => {
    if (props.genderToShow === "all") {
      setDatatoShow(arrGenderProducts.current);
      arrSizeProducts.current = arrGenderProducts.current;
    } else {
      // Tương tự useEffect ở trên, tạo 1 biến chứa sản phẩm đã được lọc theo gender khi mình click vào gender nào
      const filteredGender = arrGenderProducts.current.filter((i) =>
        props.genderToShow.includes(i.gender)
      );
      // Xong mình gán cái biến đó vào setDatatoShow để dataToShow render theo mảng của filtered đã được lọc ở trên
      setDatatoShow(filteredGender);

      arrSizeProducts.current = filteredGender;
    }
  }, [props.genderToShow, props.sizeToShow]);

  useEffect(() => {
    if (props.sizeToShow === 'all') {
      setDatatoShow(arrSizeProducts.current)
    }else {
      const filteredSize = arrSizeProducts.current.filter((i) =>
        props.sizeToShow.every((element) => i.size.includes(element))
      );
      setDatatoShow(filteredSize);
  }}, [props.sizeToShow]);
  useEffect(() => {
    const resultSearch = product.filter(item => searchProduct.every(element => item.name.toLowerCase().includes(element.toLowerCase())))
    setDatatoShow(resultSearch)
  },[searchProduct, product])

  function handleOnClick(item) {
    props.detailProduct(item);
  }
  setNumberLengthProduct(dataToShow.length)
  return (
    <div className="info grid grid-cols-3 gap-[50px] mt-[22px]">
      {dataToShow.map((item, index) => {
        return (
          <Link
            to={`/products/${index}`}
            onClick={() => handleOnClick(item)}
            key={index}
          >
            <div className="product">
              <img src={item.img} alt="" className="w-[375px] h-[375px]" />
              <div className="description">
                <h1 className="font-medium">{item.name}</h1>
                <p className="text-teal-500">{item.distribute}</p>
                {/* toán tử ba ngôi if else */}
                <p className="text-teal-500">
                  {item.colors.length > 1
                    ? item.colors.length + " Colours"
                    : item.colors.length + " Colour"}
                </p>
                <p>{item.price}</p>
              </div>
              <div className="children hidden">
                {item.colors.map((e) => {
                  return (
                    <img
                      key={uuidv4()}
                      className="w-[70px] h-[70px] mr-[10px] mt-[10px]"
                      src={e}
                      alt=""
                    />
                  );
                })}
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
}

export default Products;
