import React, { useContext, useRef, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { ProductContext } from "../../data/ProductContext";
import { Link } from "react-router-dom";

function RegisterPage() {
  const {setRegistered} = useContext(ProductContext)
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  let account = useRef([])
  const handleRegister = (e) => {
    e.preventDefault();
    if (!password || !confirmPassword || !email){
        alert('Yêu cầu nhập đầy đủ thông tin')
        return;
    }
    else if (confirmPassword !== password) {
        alert('Yêu cầu confirmPassword và password phải khớp nhau')
        return;
    }
    else {
      const registerAccount = {
        id: uuidv4(),
        email: email,
        password: password,
        confirmPassword: confirmPassword,
        phoneNumber: phoneNumber,
      } 
    
      account.current.push(registerAccount)
      console.log(registerAccount)
      setRegistered([...account.current])
      localStorage.setItem('account', JSON.stringify([...account.current]))
      setPassword('')
      setConfirmPassword('')
      setEmail('')
      setPhoneNumber('')
    }
    
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-6">Đăng ký tài khoản</h1>
      <form onSubmit={handleRegister} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
            Email:
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="password">
            Mật khẩu:
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="confirmPassword">
            Xác nhận mật khẩu:
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="confirmPassword"
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="phoneNumber">
            Số điện thoại:
            </label>
            <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="phoneNumber"
            type="number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            />
         </div>
        <div className="flex items-center justify-between">
          
            <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="submit"
              >
              Đăng ký
              </button>
          
            
        </div>
      </form>
    </div>
    );
}
export default RegisterPage;