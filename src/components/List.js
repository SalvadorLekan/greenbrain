import React from 'react'

function List({word}) {
    return (
        <li className="flex py-3">
            <span className="text-red-500 px-2"> ✔ </span>
    <span className="text-xl font-thin text-black-200"> {word} </span>
        </li>
    )
}

export default List
