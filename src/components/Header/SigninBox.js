import { useContext, useEffect, useState } from 'react';
import '../../App.css';
import { Link } from 'react-router-dom';
import { ProductContext } from '../../data/ProductContext';

function SigninBox () {
    const {registered, setCart} = useContext(ProductContext)
    const {setIdAccount} = useContext(ProductContext)
    const {setRefreshCart} = useContext(ProductContext)

    const [emailUser, setEmail] = useState("")
    const [passwordUser, setPassword] = useState("")
    const [account, setAccount] = useState("")
    const [showButtonLogOut, setShowButtonLogOut] = useState(true)
    const [showButtonAdmin, setShowButtonAdmin] = useState(false)
    const [accRegistered, setAccRegistered] = useState([])
    
    useEffect(() => {
        setAccRegistered(registered)
    }, [registered])
    useEffect(() => {
        const registeredAccount = JSON.parse(localStorage.getItem('account'))
        if (registeredAccount){
            setAccRegistered(registeredAccount)
        }
    },[])
    useEffect(() => {
        const storedAccount = JSON.parse(localStorage.getItem('accountStorage'))
        if (storedAccount) {
            setAccount(storedAccount)
        }
    }, [])
    useEffect(() => {
        const isAuthenticated = localStorage.getItem('showButtonStorage') === 'true'
        setShowButtonLogOut(isAuthenticated)
    },[])
    useEffect(() => {
        if(account.email === "admin@gmail.com" && account.password === "886486821"){
            setShowButtonAdmin(true)
        }
        else {
            setShowButtonAdmin(false)
        }
    }, [account])
    function handleChangedEmail(event) {
        setEmail(event.target.value)
    }

    function handleChangedPass(event) {
        setPassword(event.target.value)
    }
    function handleSubmitSignin(event) {
        event.preventDefault();
        const accountSigned = (accRegistered.filter(i => i.email === emailUser && i.password === passwordUser))
        const foundUser = accRegistered.find(user => user.email === emailUser && user.password === passwordUser)
        if (!emailUser || !passwordUser) {
            alert("Không được bỏ trống email hoặc password");
            return
        }
        else if (foundUser){
            setAccount(...accountSigned)
            localStorage.setItem('accountStorage', JSON.stringify(...accountSigned))
            setIdAccount(...accountSigned)
            setShowButtonLogOut(false)
            setRefreshCart(true)
            localStorage.setItem('showButtonStorage', false)
            setEmail("")
            setPassword("")
        }
        else {
            alert("Email hoặc password không đúng")
            setEmail("")
            setPassword("")
            return;
        }
        
    }
    function logout() {
        setShowButtonLogOut(true)
        setAccount("")
        setRefreshCart(false)
        setCart([])
        localStorage.removeItem('accountStorage')
        localStorage.setItem('showButtonStorage', true)
    }
    return (
        <div>
            {showButtonLogOut ?  
            <div class="m-[10px] relative">
                <input type="checkbox" id="checkbox-tonggle-signin" className="hidden"/>
                <label htmlFor="checkbox-tonggle-signin"
                 className="label-signin text-[20px] cursor-pointer">
                    Sign In
                </label>
                <form onSubmit={handleSubmitSignin} className="header-sub-signin hidden flex flex-col absolute z-50
                        text-center right-[-55px] top-[40px] bg-slate-50 p-[10px] rounded-[20px]">
                    <input type="email" value={emailUser} onChange={handleChangedEmail} placeholder="Email" 
                        className="border-solid rounded-[20px] bg-[#f5f5f5] text-[15px] h-[30px] 
                        hover:bg-neutral-300 w-[160px] mt-[5px] pl-[10px] truncate w-[230px]"/>
                    <input type="password" value={passwordUser} onChange={handleChangedPass} placeholder="Password" 
                        className="border-solid rounded-[20px] bg-[#f5f5f5] text-[15px] h-[30px] 
                        hover:bg-neutral-300 w-[160px] mt-[5px] pl-[10px] truncate w-[230px]"/>
                    <div className="flex justify-between">
                        <button type='submit' className="text-[12px] p-[10px] mt-[5px] font-semibold hover:bg-gray-400 hover:text-white rounded-[20px]">
                                SIGN IN
                        </button>
                        {/* <span className="text-[15px] p-[10px] mt-[5px] hover:bg-gray-300 hover:text-white rounded-[20px]">
                                Forgotten ?
                        </span> */}
                        <Link to='/register' className='text-[15px] p-[10px] mt-[5px]'>
                        <span className=" text-[12px] p-[10px] mt-[5px] font-semibold hover:bg-gray-400 hover:text-white rounded-[20px]">CREATE NEW ?</span>
                        </Link>
                    </div>
                    
                </form>
            </div> :
            <div className='mx-[20px]'>
                {/* <span>Hi,{(account.email).slice(0,5)}{(account.email).length > 5 ? '...' : ''}</span> */}
                <Link to="/">
                    <button type='button' onClick={logout} className='text-[12px] p-[10px] mt-[5px] font-semibold hover:bg-gray-400 hover:text-white rounded-[20px]'>Log out</button>
                </Link>
                {showButtonAdmin &&
                    <Link to="/Admin">
                        <button className='ml-[20px] text-[12px] p-[10px] mt-[5px] font-semibold hover:bg-gray-400 hover:text-white rounded-[20px]'>Admin</button>
                    </Link>
                }
                
            </div>}
        </div>
        
    )
}

export default SigninBox;