import React from 'react'
import { FiMail, FiKey } from 'react-icons/fi'

function SignInInput() {
    return (
        <>
        <label className="flex items-center justify-between text-green-300 border-2 p-2 m-2 border-green-200">
            <div className="border-r-2 border-green-200 mr-2 pr-2"><FiMail/></div>
            <input placeholder="place"/>
        </label>
        <label className="flex items-center justify-between text-green-300 border-2 p-2 m-2 border-green-200">
            <div className="border-r-2 border-green-200 mr-2 pr-2"><FiKey/></div>
            <input placeholder="place"/>
        </label>
        </>
    )
}

export default SignInInput
