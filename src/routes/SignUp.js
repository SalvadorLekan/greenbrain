import React from 'react'
import Auth from '../components/Auth'
import SignUpInput from '../components/SignUpInput'

const inputs = [
    {id: 0,name:"First Name", type:"text"},
    {id: 1,name:"Last Name", type:"text"},
    {id: 2,name:"Username", type:"text"},
    {id: 3,name:"Email", type:"email"},
    {id: 4,name:"Password", type:"password"},
    {id: 5,name:"School", type:"text"},
    {id: 6,name:"Department", type:"text"},
]


function SignUp(props) {
    console.log(props)
    return (
        <Auth>
            {
                inputs.map(({id,name,type})=>(<SignUpInput key={id} type={type}  name={name}/>))
            }
                    <button className="bg-green-300 text-white block p-4 m-2"> Sign up </button>

            <div className="bg-gray-300 mx-2 p-4 text-right">
                <a href="/login">Login</a>
            </div>
        </Auth>
    )
}

export default SignUp
