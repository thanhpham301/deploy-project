import '../App.css';

function SigninBox () {
    return (
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
    )
}

export default SigninBox;