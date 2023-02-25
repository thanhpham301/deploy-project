import '../../App.css';
import SigninBox from './SigninBox';
import { Link } from 'react-router-dom';
import Search from './Search';

function Header(props){
  const {cart} = props;
  
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
            </h1>
          </Link>
          <div className="flex absolute right-[70px] items-center">
              <div className="m-[10px]">
                <Search />
              </div>
              <Link to="/cart">
                <span className="relative block m-[10px] "><i className="fas fa-bags-shopping text-[20px]"></i>
                  <p className='absolute mt-[-35px] ml-[20px] text-center p-[5px]'>
                    {cart.length}</p>
                </span>
              </Link>
              <SigninBox />
          </div>
        </div>
      </div>
    )
  };

export default Header;