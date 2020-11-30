import React from 'react'

function Auth({formlist, formData, children}) {
    return (
        <div className="bg-green-200 p-16 w-screen fixed overflow-scroll h-screen">
            <form onSubmit={e=>e.preventDefault()} className="max-w-xl flex mx-auto overflow-visible flex-col bg-white p-12 m-4 rounded shadow">
                {children}
            </form>
        </div>
    )
}

export default Auth
