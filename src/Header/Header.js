import '../App.css';
import SigninBox from './SigninBox';

function Header(){
    return (
      <div>
        <div className="flex relative w-full justify-center h-fit items-center p-[10px]">
          <span className="absolute left-[70px]"><img 
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Logo_NIKE.svg/1200px-Logo_NIKE.svg.png" 
          className="w-[100px] h-[30px]" alt=""/></span>
          <ul class="list-none flex">
              <li className="m-[10px]"><span href="" className="text-[20px]">Men</span></li>
              <li className="m-[10px]"><span href="" className="text-[20px]">Women</span></li>
              <li className="m-[10px]"><span href="" className="text-[20px]">Kids</span></li>
              <li className="m-[10px]"><span href="" className="text-[20px]">Sale</span></li>
          </ul>
          <div className="flex absolute right-[70px] items-center">
              <div className="m-[10px]">
                  <label for="search" className="absolute flex cursor-pointer w-[40px] h-[40px] rounded-[20px] hover:bg-neutral-300">
                      <i className="far fa-search w-full h-[32px] text-center text-[20px] pt-[10px]"></i></label>
                  <input type="text" placeholder="Search" id="search" 
                  className="rounded-[20px] bg-[#f5f5f5] text-[15px] h-[40px] hover:bg-neutral-300 pl-[40px] w-[160px]"/>
              </div>
              <span className="m-[10px]"><i className="fas fa-bags-shopping text-[20px]"></i></span>
              <SigninBox />
          </div>
        </div>
      </div>
    )
  };

export default Header;