import React from 'react'

function Card({Avatar, text, topic}) {
    return (
        <div className="bg-white shadow-lg p-8 rounded m-7">
            <img width="16%" src={Avatar} alt="book"/>
    <h3 className="text-xl py-5 font-bold">{topic}</h3>
    <p>{text}</p>
        </div>
    )
}

export default Card
