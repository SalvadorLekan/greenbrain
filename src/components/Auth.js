import React from 'react'

function Auth({formlist, formData, children}) {
    return (
        <div  className="bg-green-200 p-16 flex justify-center items-center h-screen" >
            <form onSubmit={e=>e.preventDefault()} className="bg-white p-12 rounded shadow">
                {children}
            </form>
        </div>
    )
}

export default Auth
