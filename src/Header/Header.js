import '../App.css';

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
              <div class="m-[10px] relative">
                  <input type="checkbox" id="checkbox-tonggle-signin" className="hidden"/>
                  <label for="checkbox-tonggle-signin" className="label-signin text-[20px] cursor-pointer">Sign In</label>
                  <form action="" className="header-sub-signin hidden flex flex-col absolute 
                      text-center right-[-55px] top-[40px] bg-slate-50 p-[10px] rounded-[20px]">
                      <input type="email" placeholder="Email" 
                      className="border-solid rounded-[20px] bg-[#f5f5f5] text-[15px] h-[30px] 
                      hover:bg-neutral-300 w-[160px] mt-[5px] pl-[10px] truncate w-[230px]"/>
                      <input type="password" placeholder="Password" 
                      className="border-solid rounded-[20px] bg-[#f5f5f5] text-[15px] h-[30px] 
                      hover:bg-neutral-300 w-[160px] mt-[5px] pl-[10px] truncate w-[230px]"/>
                      <div className="flex justify-between">
                          <button className="text-[15px] p-[10px] mt-[5px] hover:bg-gray-300 hover:text-white rounded-[20px]">
                            SIGN IN
                            </button>
                          <span className="text-[15px] p-[10px] mt-[5px] hover:bg-gray-300 hover:text-white rounded-[20px]">
                            Forgotten ?
                            </span>
                      </div>
                      <span className="p-[10px] mt-[5px] hover:bg-gray-300 hover:text-white rounded-[20px]">SIGN UP</span>
                  </form>
              </div>
          </div>
        </div>
      </div>
    )
  };

export default Header;