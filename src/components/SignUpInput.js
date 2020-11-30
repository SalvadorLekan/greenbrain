import React from 'react'

function SignUpInput({type="text", name}) {
    return (
        <label className="block border-2 p-2 m-2 border-green-200">
            <p>{name} <span className="text-red-800">*</span></p>
            <input placeholder={name} {...type} required/>
        </label>
    )
}

export default SignUpInput
