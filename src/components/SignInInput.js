import React from 'react'
import { FiMail, FiKey } from 'react-icons/fi'

function SignInInput() {
    return (
        <>
        <label className="flex items-center text-green-500 border-2 p-2 m-2 border-green-200">
            <div className="border-r-2 border-green-200 mr-2 pr-2"><FiMail/></div>
            <input placeholder="email" type="email" required/>
        </label>
        <label className="flex items-center text-green-500 border-2 p-2 m-2 border-green-200">
            <div className="border-r-2 border-green-200 mr-2 pr-2"><FiKey/></div>
            <input placeholder="password" type="password" required/>
        </label>
        <button className="bg-green-300 text-white block p-2 m-2"> Login </button>
        <div className="bg-gray-300 mx-2 p-4 text-right">
                <a href="/signup">Sign up</a>
            </div>
        </>
    )
}

export default SignInInput
