import '../../App.css';
import SigninBox from './SigninBox';
import { product } from '../../Data/Shoes';
import { useEffect, useState } from 'react';
import SubMenu from './SubMenu';
import { Link } from 'react-router-dom';

function Header(){
  
  
  // const [activeIndex, setActiveIndex] = useState(null);

  // const handleMouseEnter = (idx) => {
  //   setActiveIndex(idx);
  // };

  // const handleMouseLeave = () => {
  //   setActiveIndex(null);
  // };
    return (
      <div className='mt-[20px]'>
        <div className="flex relative w-full justify-center h-fit items-center p-[10px] mb-[30px]">
          <Link to="/">
            <span className="absolute left-[70px]"><img 
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Logo_NIKE.svg/1200px-Logo_NIKE.svg.png" 
            className="w-[100px] h-[30px]" alt=""/></span>
          </Link>
          <Link to='/products' >
            <h1 class="list-none flex text-2xl font-bold">
              Buy Here !!!
              {/* {[...new Set(product.flatMap(item => item.gender))].map((gender, idx) => {
                return <li key={idx} className="w-[80px] hover:text-neutral-600"
                onMouseEnter={() => handleMouseEnter(idx)}
                onMouseLeave={handleMouseLeave}
                ><a href="#" className="text-[20px] relative">{gender}</a>
                {activeIndex === idx && <SubMenu submenu={product.filter(item => item.gender === gender)}/>}
              </li>
              })} */}
            </h1>
          </Link>
          
          <div className="flex absolute right-[70px] items-center">
              <div className="m-[10px]">
                  <label htmlFor="search" className="absolute flex cursor-pointer w-[40px] h-[40px] rounded-[20px] hover:bg-neutral-300">
                      <i className="far fa-search w-full h-[32px] text-center text-[20px] pt-[10px]"></i></label>
                  <input type="text" placeholder="Search" id="search" 
                  className="rounded-[20px] bg-[#f5f5f5] text-[15px] h-[40px] hover:bg-neutral-300 pl-[40px] w-[160px]"/>
              </div>
              <Link to="/cart">
                <span className="relative block m-[10px] "><i className="fas fa-bags-shopping text-[20px]"></i>
                  {/* <p className='absolute mt-[-35px] ml-[20px] text-center p-[5px]'>
                    {lengthCart}</p> */}
                </span>
              </Link>
              <SigninBox />
          </div>
        </div>
      </div>
    )
  };

export default Header;